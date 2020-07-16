<?php

namespace App\Http\Controllers\Client;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Services\SitterService;
use App\Http\Controllers\Controller;
use App\FactoryModel\FactoryModelInterface;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

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
        $total = count($items) <= 12 ? count($items): 12; 
        $page = $request->page ?? 1; 
        $perPage = 4;
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

    public function viewSitter(Request $request, $id)
    {
        $auth         = Auth::user();
        $typeGalaries = config('constant.GALARY_TYPE.SITTER_AVATAR');

        $modelUser  = $this->model->createUserModel();
        $modelSkill = $this->model->createSkillModel();
        $user   = $modelUser->findOrFail($id);
        $sitter = $user->sitter;

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
            
            $sitter['employerId'] = $auth->id;
            $sitter['refresh']    = $request->cookie(config('constant.TOKEN_COOKIE_NAME'));
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
        return view('client.employer.view_sitter', $sitter);
    }
}
