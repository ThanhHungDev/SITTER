<?php

namespace App\Http\Controllers\Client;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Services\SitterService;
use App\Http\Controllers\Controller;
use App\Models\SitterReviewModel;
use App\FactoryModel\FactoryModelInterface;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\MessageBag;
use App\Mail\InfoInquiry;
use Illuminate\Support\Facades\Mail;

class TopPageController extends Controller
{
    private $sitterService     = null;
    private $model             = null;
    public function __construct(FactoryModelInterface $_model, SitterService $_sitterService) {

        $this->sitterService = $_sitterService;
        $this->model         = $_model;
        $this->JP_LOCATION   = config('constant.JP_LOCATION');
    }

    //Phong:18062020: return index page
    public function index(){

        $data['jp_locations']  = $this->JP_LOCATION;
        return view('client.top_page', $data);
    }

    //Phong:18062020: ajax show items on home page
    public function ajaxLoadItems(Request $request){
        if ($request->ajax()) {
            //get data from model
            $data_users = $this->model->createUserModel()->loadDataItemsTopPage()->get()->toArray();
            //using data received to custom pagination
            $_list_items = $this->getPaginator($request, $data_users);

            //return data
            $data['list_items']  = $_list_items;
            return view('client.search.loadItemsHomePage', $data)->render();
        }
    }

    //Phong:18062020: custome pagination function
    private function getPaginator(Request $request, $items)
    {
        $total = count($items) <= 30 ? count($items): 30;
        $page = $request->page ?? 1;
        $perPage = 10;
        $offset = ($page - 1) * $perPage;
        $items = array_slice($items, $offset, $perPage);
        return new LengthAwarePaginator($items, $total, $perPage, $page, [
            'path' => $request->url(),
            'query' => $request->query()
        ]);
    }

    public function calendar(){
        return view('client.calendar');
    }
    public function calendarViewer(){
        return view('client.calendar-view');
    }

    public function viewSitter(Request $request, $id = 0)
    {
        $auth         = Auth::user();
        $typeGalaries = config('constant.GALARY_TYPE.SITTER_AVATAR');

        $modelUser  = $this->model->createUserModel();
        $modelSkill = $this->model->createSkillModel();
        $user   = $modelUser->where('id', $id)->where('admin_confirm', config('constant.ADMIN_CONFIRM.ACCEPT'))->firstOrFail();
        $isPublish = $user->sitterProfile()->where('publish',true)->first();
        if( !$isPublish ){
            return abort(404);
        }
        $sitter = $user->sitter;
        $sitter['fullname']        = $user->first_name . " " . $user->last_name;
        $sitter['ID_VIEW_SITTER']  = $id;
        $sitter['skills']          = $modelSkill->all(['id', 'name'])->toArray();
        $sitter['skills_activity'] = $user->skills->pluck('id')->toArray();
        $sitter['jp_locations']    = $this->JP_LOCATION;
        $sitter['gender']          = $user->gender;
        $sitter['galary']          = $user->galaries->where('type', $typeGalaries)->toArray();
        $sitter['time_support']    = (new Carbon($sitter['time_support']))->format('h:i');
        $sitter['information']     = $user;
        $sitter['sitter_skills']   = $user->skills->pluck('name')->toArray();

        if( $auth && $auth->role_id == config('constant.ROLE.EMPLOYER') ){

            $sitter['employerId']   = $auth->id;
            $sitter['refresh']      = $request->cookie(config('constant.TOKEN_COOKIE_NAME'));
            $sitter['activeStripe'] = $auth->checkStripeActiveEmployer();
        }

        $salary = array_reduce($user->salaries->toArray(),
        function ($value, $item)
        {
            switch ($item['type']) {
                case config('constant.SALARY_TYPE.SALARY_SITTER'):
                    $value['salary_sitter'] = $item['salary'];
                    break;
                case config('constant.SALARY_TYPE.SALARY_HOUSE'):
                    $value['salary_house'] = $item['salary'];
                    break;
            }
            return $value;
        });
        $sitter['salary']    = $salary;

        $schedules           = $user->schedules;
        $sitter['schedules'] = $this->sitterService->convertScheduleDataToJson($schedules);
        $sitter['rating']    = (new SitterReviewModel())->getRatingTotal($id);
        return view('client.employer.view_sitter', $sitter);
    }

    public function sitePolicy(Request $request)
    {
        return view('client.policy.site');
    }

    public function privacyPolicy(Request $request)
    {
        return view('client.policy.privacy');
    }

    public function tokuteisho(Request $request)
    {
        return view('client.policy.tokuteisho');
    }

    public function ajaxLoadreviews(Request $request)
    {
        if ($request->ajax()) {
            $condition = $request->all();
            $data['reviews'] = (new SitterReviewModel())->getListReviewBySitterId($condition);
            return view('client.employer.review_list', $data)->render();
        }
    }

    public function postReviewSitter(Request $request)
    {
        if (!Auth::check()){
            return abort(403);
        }
        DB::beginTransaction();
        try{
            $params = $request->except('_token');
            $employerId = Auth::user()->id;
            $params['employer_id'] = $employerId;
            $sitterReviewModel = $this->model->createSitterReviewModel();
            $sitterReviewModel::create($params);

            DB::commit();
            return redirect()->back();
        } catch(\Exception $e) {
            DB::rollback();
            $errors = new MessageBag(['入力エラー']);
            return redirect()->back()->withInput()->withErrors($errors);
        }
    }

    public function infoInquiry(){
        $experienceModel = $this->model->createExperienceModel();
        $skillModel = $this->model->createSkillModel();
        $experiences = $experienceModel::get();
        $skills = $skillModel::get();
        return view('client.infoInquiry.inquiry', compact('experiences', 'skills'));
    }
    public function sendEmailInfoInquiry(Request $request){
        $params = $request->all();
        $dataSendMail['date_working'] = isset($params['date_working']) ? $params['date_working'] : [];
        $dataSendMail['numofweek'] = $params['numofweek'];
        $dataSendMail['numofday'] =  $params['numofday'];
        $dataSendMail['skills'] = isset($params['skills']) ? $params['skills'] : [];
        $dataSendMail['other_require'] = $params['other_require'];

        $dataSendMail['info_name'] = $params['info_name'];
        $dataSendMail['info_addr1'] = $params['info_addr1'];
        $dataSendMail['info_addr2'] = $params['info_addr2'];

        $dataSendMail['info_child_number'] = $params['info_child_number'];
        for($cnt_child = 0; $cnt_child < $dataSendMail['info_child_number']; $cnt_child++) {
            $dataSendMail['child_info_opt1_'.$cnt_child] = is_null($params['child_info_opt1_'.$cnt_child])? '': $params['child_info_opt1_'.$cnt_child];
            $dataSendMail['child_info_opt2_'.$cnt_child] = is_null($params['child_info_opt2_'.$cnt_child])? '': $params['child_info_opt2_'.$cnt_child];
        }

        $dataSendMail['info_tel'] = $params['info_tel'];
        $dataSendMail['info_mail'] = $params['info_mail'];

        $dataSendMail['info_expect_time'] = $params['info_expect_time'];
        if($dataSendMail['info_expect_time'] == 'その他'){
            $dataSendMail['info_expect_time_note'] = $params['info_expect_time_note'];
        }else{
            $dataSendMail['info_expect_time_note'] = '';
        }


        Mail::to( config('constant.MAIL_SUPPORT'))->send(new InfoInquiry($dataSendMail));
        return redirect()->route('INFO_INQUIRY_SUCCESS',['情報のお問い合わせ' ,'ご連絡ありがとうございます。']);
    }
    public function infoInquirySuccess($title = null, $message = null){
        $data = [
            'title' => $title,
            'message' => $message,
        ];
        return view('client.infoInquiry.inquiry_success', $data);
    }
}
