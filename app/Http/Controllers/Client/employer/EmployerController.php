<?php

namespace App\Http\Controllers\Client\Employer;

use Carbon\Carbon;
use App\Models\UserModel;
use App\Models\GalaryModel;
use App\Models\FamilyModel;
use App\Models\VerifyEmailModel;
use Illuminate\Http\Request;
use App\Services\SitterService;
use App\Services\CommonService;
use App\Services\EmployerService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\MessageBag;
use App\Http\Controllers\Controller;
use App\Models\EmployerProfileModel;
use Illuminate\Support\Facades\Auth;
use App\FactoryModel\FactoryModelInterface;
use App\Http\Requests\CLIENT\VALIDATE_EMPLOYER_EDIT;
use App\Http\Requests\CLIENT\VALIDATE_EMPLOYER_REG_PARENT;
use App\Models\ScheduleModel;
use Illuminate\Support\Facades\Config;
use Illuminate\Pagination\LengthAwarePaginator;

class EmployerController extends Controller
{
    private $sitterService     = null;
    private $factoryModel      = null;
    private $employerService   = null;
    private $serviceCommon     = null;

    public function __construct(FactoryModelInterface $_factoryModel, CommonService $_serviceCommon, SitterService $sitterService, EmployerService $employerService) {

        $this->sitterService   = $sitterService;
        $this->factoryModel    = $_factoryModel;
        $this->employerService = $employerService;
        $this->serviceCommon   = $_serviceCommon;
    }

    public function myPage()
    {
        $userId = Auth::user()->id;
        $typeGalaries = [config('constant.GALARY_TYPE.EMPLOYER_FILE_FRONT'), config('constant.GALARY_TYPE.EMPLOYER_FILE_BACK')];
        
        $data['profile']    = (new EmployerProfileModel())->getByField($userId);
        $data['galaries']   = (new GalaryModel())->getByField('user_id', $userId, $typeGalaries);

        if($data['profile']['id']){
            $data['family'] = (new FamilyModel())->getByField($data['profile']['id']);
        }
        return view('client.employer.mypage', $data);
    }
    
    public function editProfile ()
    {
        $userId = Auth::user()->id;
        $typeGalaries = [config('constant.GALARY_TYPE.EMPLOYER_FILE_FRONT'), config('constant.GALARY_TYPE.EMPLOYER_FILE_BACK')];
        
        $data['profile']    = (new EmployerProfileModel())->getByField($userId);
        $data['galaries']   = (new GalaryModel())->getByField('user_id', $userId, $typeGalaries);

        if($data['profile']['id']){
            
            $dataFamily = (new FamilyModel())->getByField($data['profile']['id']);
            $data['parent']   = [];
            $data['child']    = [];
            foreach ($dataFamily as $row) {
                if($row['type'] == config('constant.TYPE_MEMBER_PARENT.FATHER') || $row['type'] == config('constant.TYPE_MEMBER_PARENT.MOM')){
                    $data['parent'][] = $row;
                }
                if($row['type'] == config('constant.TYPE_MEMBER_PARENT.CHILD')){
                    $data['child'][] = $row;
                }
            }
        }
        return view('client.employer.edit', $data);
    }

    public function postEditProfile(VALIDATE_EMPLOYER_EDIT $request)
    {  
        $errors   = $this->employerService->validateSpecialRegisterField($request);
        $userId   = Auth::user()->id;
        $dataPost = $request->all();
        $result = [
            "status"  => false,
            "message" => "Errors"
        ];
        DB::beginTransaction();
        try{
            $dataUser = [
                'id'        => $userId,
                'post_code' => $dataPost['post_code'],
                'pref'      => $dataPost['pref'],
                'town'      => $dataPost['town'],
                'address'   => $dataPost['address'],
            ];
            $userUpdate = (new UserModel())->updateByField('id', $dataUser);
            if(!$userUpdate){
                DB::rollback();
            }
            
            $dataProfile = [
                'user_id'   => $userId,
                'nick_name' => $dataPost['nick_name'],
                'note'      => $dataPost['note']
            ];
            $profileUpdate = (new EmployerProfileModel())->updateProfile('user_id', $dataProfile);
            if(!$profileUpdate){
                DB::rollback();
            }
            //update profile

            $dataFamilyFa = [
                'id'                  => $dataPost['id_fa'],
                'first_name'          => $dataPost['first_name_fa'],
                'last_name'           => $dataPost['last_name_fa'],
                'first_name_furigana' => $dataPost['first_name_furigana_fa'],
                'last_name_furigana'  => $dataPost['last_name_furigana_fa'],
                'birth_date'          => $dataPost['y_birth_fa'].'-'.$dataPost['m_birth_fa'].'-'.$dataPost['d_birth_fa'],
            ];
            $fatherUpdate = (new FamilyModel())->updateFamily('id', $dataFamilyFa);
            if(!$fatherUpdate){
                DB::rollback();
            }

            $dataFamilyMom = [
                'id'                  => $dataPost['id_mom'],
                'first_name'          => $dataPost['first_name_mom'],
                'last_name'           => $dataPost['last_name_mom'],
                'first_name_furigana' => $dataPost['first_name_furigana_mom'],
                'last_name_furigana'  => $dataPost['last_name_furigana_mom'],
                'birth_date'          => $dataPost['y_birth_mom'].'-'.$dataPost['m_birth_mom'].'-'.$dataPost['d_birth_mom'],
            ];
            $momUpdate = (new FamilyModel())->updateFamily('id', $dataFamilyMom);
            if(!$momUpdate){
                DB::rollback();
            }
            
            $total_child = $dataPost['child_number'];
            for ($i=0; $i < $total_child; $i++) { 
                $dataChild = [];
                $child_id  = isset($dataPost['child_id_'.$i]) ? $dataPost['child_id_'.$i] : '';
                $dataChild = [
                    'first_name'          => $dataPost['first_name_child_'.$i],
                    'last_name'           => $dataPost['last_name_child_'.$i],
                    'first_name_furigana' => $dataPost['first_name_furigana_child_'.$i],
                    'last_name_furigana'  => $dataPost['last_name_furigana_child_'.$i],
                    'birth_date'          => $dataPost['y_birth_child_'.$i].'-'.$dataPost['m_birth_child_'.$i].'-'.$dataPost['d_birth_child_'.$i],
                    'gender'              => $dataPost['gender_child_'.$i],
                    'allergic'            => (isset($dataPost['allergic_'.$i]) && ($dataPost['allergic_'.$i] == '1')) ? true : false,
                    'chronic'             => (isset($dataPost['chronic_'.$i]) && ($dataPost['chronic_'.$i] == '1')) ? true : false,
                    'allergic_note'            => (isset($dataPost['allergic_note_'.$i])) ? $dataPost['allergic_note_'.$i] : null,
                    'chronic_note'             => (isset($dataPost['chronic_note_'.$i])) ? $dataPost['chronic_note_'.$i] : null
                ];
                if(!empty($child_id)){
                    $dataChild['id'] = $child_id;
                    $childUpdate = (new FamilyModel())->updateFamily('id', $dataChild);
                    if(!$childUpdate){
                        DB::rollback();
                    }
                }else{
                    $dataChild['id_profile'] = $dataPost['profile_id'];
                    $dataChild['type']       = config('constant.TYPE_MEMBER_PARENT.CHILD');
                    $insertChild = (new FamilyModel())->insert($dataChild);
                    if(!$insertChild){
                        DB::rollback();
                    }
                }
            }
            DB::commit();
            return redirect()->route('EMPLOYER_MYPAGE');
            //create or update child_info
        }catch(\Exception $e) {
            DB::rollback();
            $errors = new MessageBag($result);
            return redirect()->back()->withInput()->withErrors($errors);
        }
    }

    public function ajaxDeleteMember(REQUEST $request)
    {
        $res = [
            'status' => false,
            'message' => 'Delete Fail!'
        ];
        $dataRequest = $request->all();
        $idMember = $dataRequest['id'];
        $status = (new FamilyModel())->where('id', '=', $idMember)->delete();
        if($status){
            $res = [
                'status' => true,
                'message' => 'Delete success!'
            ];
        }
        return response()->json($res);
    }

    public function chat(Request $request, $id = null ){
        
        $ID_VIEW_USER_CHAT = $id;
        $refresh = $request->cookie(config('constant.TOKEN_COOKIE_NAME'));
        return view('client.chat', compact(['refresh', 'ID_VIEW_USER_CHAT']));
    }

    public function ajaxUploadAvatar(REQUEST $request)
    {
        $res = [
            'status'     => false,
            'message'    => 'Upload faild!',
            'image_name' => ''
        ];
        $data = $request->all();
        $userId = Auth::user()->id;
        $uploadData = $this->serviceCommon->RegisterUploadFile($data['file'], config('constant.UPLOAD_FILE.AVATAR'));
        $paramsUser = [
            'avatar'     => $uploadData['path'].'thumbnail/'.$uploadData['name']
        ];
        $updateUser = (new UserModel())->updateOrCreate(
            ['id' => $userId], $paramsUser
        );

        $params = [
            'type'    => config('constant.GALARY_TYPE.EMPLOYER_AVATAR'),
            'user_id' => $userId,
            'name'    => $uploadData['name'],
            'path'    => $uploadData['path'],
        ];
        $updateGalaries = (new GalaryModel())->updateOrCreate(
            ['user_id' => $userId, 'type' => $params['type']], $params
        );
        if($updateUser){
            $res = [
                'status'  => true,
                'message' => 'Upload success!',
                'path'    => $uploadData['path'].'thumbnail/'.$uploadData['name'],
                'name'    => $uploadData['name']
            ];
        }
        return response()->json($res);
    }

    public function detail(REQUEST $request, $id = null)
    {
        $typeGalaries = [config('constant.GALARY_TYPE.EMPLOYER_FILE_FRONT'), config('constant.GALARY_TYPE.EMPLOYER_FILE_BACK')];
        
        $data['profile']    = (new EmployerProfileModel())->getByField($id);
        $data['galaries']   = (new GalaryModel())->getByField('user_id', $id, $typeGalaries);

        if($data['profile']['id']){
            $data['family'] = (new FamilyModel())->getByField($data['profile']['id']);
        }
        return view('client.employer.detail', $data);
    }

    public function reviewSitter(Request $request){
        $param = $request->all();
        $user_id = $param['sitter'];
        $data = [];

        $userModel = $this->factoryModel->createUserModel();
        $user = $userModel::findOrFail($user_id);
        $data['gender'] = $user->gender;

        $status = $this->serviceCommon->checkVerifyRate($param);

        switch ($status) {
            case config('constant.TOKEN_VERIFY.WRONG'):
            case config('constant.TOKEN_VERIFY.EXPIRED'):
                return view('errors.404');
                break;
            case config('constant.TOKEN_VERIFY.ACTIVED'):
                return view('client.employer.review_sitter_success');
                break;
            case config('constant.TOKEN_VERIFY.NOT_ACTIVE'):
                if($user){
                    $sitter = $user->sitter;
                    $data['sitter'] = $sitter;
                    $data['token'] = $param['token'];
                    return view('client.employer.review_sitter', compact('data'));
                }
                return view('errors.404');
                break;
            
            default:
                return view('errors.404');
                break;
        }
    }

    public function postReviewSitter(Request $request){
        DB::beginTransaction();
        try{
            $params = $request->except('_token');
            $employerId = Auth::user()->id;
            $params['employer_id'] = $employerId;
            $sitterReviewModel = $this->factoryModel->createSitterReviewModel();
            $sitterReviewModel::create($params);

            DB::commit();
            $verifyEmailModel = $this->factoryModel->createVerifyRateModel();
            $verifyEmailModel->where('token', $params['token'])->update(['verified_at' => Carbon::now()]);
            return view('client.employer.review_sitter_success');
        } catch(\Exception $e) {
            DB::rollback();
            $errors = new MessageBag(['入力エラー']);
            return redirect()->back()->withInput()->withErrors($errors);
        }
    }

    public function booking(Request $request ){

        if (!Auth::check()){

            return abort(403);
        }
        $datesBookingJson = $request->input('booking');
        $bookings = json_decode($datesBookingJson, true);
        /// now, get 1 booking
        $bookingInput = count($bookings) ? $bookings[0] : null;
        $booking = (new ScheduleModel())->inforSitterBookingByCondition($bookingInput)->first();
        return view('client.employer.time-booking', compact('booking'));
    }
    public function ajaxBookingSitter(Request $request)
    {
        $condition = [
            'status' => 0,
            'sitter_accept' => 1,
            'employer_accept' => 1,
        ];
        $employer_id = Auth::user()->id;
        $bookingModel = $this->factoryModel->createBookingModel();
        $list_item = $bookingModel->getBookingByEmployer($employer_id, $condition);
        $data['list_items']  = $list_item;
        return view('client.employer.loadItemBooking', $data)->render();
    }

    public function editPaymentMethod(Request $request)
    {
        // $stripeAccountId = Auth::user()->stripe_account_id;
        return view('client.employer.edit-card');
    }

    public function postEditPaymentMethod(Request $request)
    {
        $stripeCustomerId = Auth::user()->stripe_account_id;
        $input     = $request->all();
        $stripe = new \Stripe\StripeClient(config('constant.STRIPE_SECRET_KEY'));
        if($stripeCustomerId){
            // update
            $status = $stripe->customers->update(
                $stripeCustomerId,
                ['source' => $input['stripeToken']]
            );
            
        } else {
            // create
            $dataStripe = $stripe->customers->create([
                "description" => 'Update payment menthod card',
                "source"      => $input['stripeToken'],                                  // obtained with Stripe.js
                "name"        => Auth::user()->first_name. ' ' .Auth::user()->last_name,
                "email"       => Auth::user()->email
            ]);
            
            $userModel = $this->factoryModel->createUserModel();
            $user      = $userModel::findOrFail(Auth::user()->id);
            if(!$user->stripe_account_id){
                //insert data user
                $user->stripe_account_id = $dataStripe->id;
                $user->active = true;
                $user->save();
            } 
            
        }
        return redirect()->route('EMPLOYER_MYPAGE');
    }

    public function registerPaymentSuccess()
    {
        return view('client.employer.register_payment_success');
    }
}
