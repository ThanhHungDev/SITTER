<?php

namespace App\Http\Controllers\Admin;

use App\Models\UserModel;
use App\Models\FamilyModel;
use App\Models\GalaryModel;
use App\Models\RefundModel;
use App\Models\BookingModel;
use App\Models\PaymentModel;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Mail\AdminSendLinkRate;
use App\Services\SitterService;
use App\Mail\AdminAcceptSendMail;
use App\Models\SitterReviewModel;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Mail\AdminSendCancelBooking;
use App\Models\EmployerProfileModel;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\AdminSendLinkCreateStripe;
use App\FactoryModel\FactoryModelInterface;

class AdminController extends Controller
{
    private $sitterService     = null;
    private $model             = null;
    public function __construct(FactoryModelInterface $_model, SitterService $_sitterService) {
        $this->model       = $_model;
        $this->sitterService = $_sitterService;
        $this->JP_LOCATION = config('constant.JP_LOCATION');
    }
    //Phong:18062020: return index page
    public function index(Request $request){
        $request->flash();
        $data['jp_locations']  = $this->JP_LOCATION;
        $request['type_galaries'] = [
            config('constant.GALARY_TYPE.SITTER_FILE_FRONT'),
            config('constant.GALARY_TYPE.SITTER_FILE_BACK'),
            config('constant.GALARY_TYPE.INPUT_FILE_QUALIFI'),
        ];
        $request['role_type'] = config('constant.ROLE.SITTER');
        $request['name'] = str_replace(' ', '%', trim($request['name']));
        $data['sitter'] = (new UserModel())->findSitters($request);
        return view('admin.sitters', $data);
    }

    public function employers(REQUEST $request){

        $request->flash();
        $data   ['jp_locations']  = $this->JP_LOCATION;
        $request['type_galaries'] = [
            config('constant.GALARY_TYPE.EMPLOYER_FILE_FRONT'),
            config('constant.GALARY_TYPE.EMPLOYER_FILE_BACK'),
        ];
        $request['role_type'] = config('constant.ROLE.EMPLOYER');
        $data   ['count'] = (new UserModel())->countEmployers($request);
        $data   ['employers'] = (new UserModel())->findEmployers($request);
        return view('admin.employers', $data);
    }

    public function ajaxGetFamily(REQUEST $request)
    {
        $inputData = $request->all();
        $res = [
            'code' => 200,
            'message' => '',
            'data' => []
        ];
        if(isset($inputData['id_profile'])){
            $res['data']  = (new FamilyModel())->getByField($inputData['id_profile']);
        }
        if(isset($inputData['id_user'])){
            $modelUser = $this->model->createUserModel();
            $user = $modelUser->where('id', $inputData['id_user'])->first();
            $token = $user->verifyEmails()->first()->token_verify;
            // 
            $res['dataToken']['admin_unaccept'] = ($user->admin_confirm == config('constant.ADMIN_CONFIRM.UNACCEPT'));
            $res['dataToken']['url_update']     = $user->admin_confirm == config('constant.ADMIN_CONFIRM.UNACCEPT') ? Route('EMPLOYER_REGISTER_PARENT') . '?token_verify=' . $token : '';
        }
        return response()->json($res);
    }
    
    public function postEmployer(){
        return view('admin.employer');
    }
    public function chat(Request $request){
        return view('admin.chat');
    }

    public function ajaxDetailSitter($id) 
    {
        $modelUser = $this->model->createUserModel();
        $user = $modelUser->where('id', $id)->first();
        $skills = $user->skills()->select('name')->pluck('name');
        $experiences = $user->experiences()->select('name')->pluck('name');
        $galaries = $user->galaries()->select(['name','path'])->where('type', config('constant.GALARY_TYPE.INPUT_FILE_QUALIFI'))->get();
        $contact = $user->sitterProfile()->select([
            'contact_name', 
            'contact_address', 
            'contact_phone', 
            'contact_relationship'
        ])->first();
        $token_verify =$user->verifyEmails()->first()->token_verify;
        if ($contact && $skills && $experiences && $galaries) {
            $data['admin_unaccept'] = ($user->admin_confirm == config('constant.ADMIN_CONFIRM.UNACCEPT'));
            $data['url_update'] = $user->admin_confirm == config('constant.ADMIN_CONFIRM.UNACCEPT') ? Route('SITTER_REGISTER_NEXT_STEP') . '?token_verify=' . $token_verify : '';
            $data['contact'] = $contact->toArray();
            $data['skills'] = $skills->toArray();
            $data['experiences'] = $experiences->toArray();
            $data['galaries'] = array_map(function($item)
            {
                return $item['path'] . '/' . $item['name'];
            }, $galaries->toArray());
        }else {
            $rs = [
                'messages' => 'ユーザーは情報を更新していません',
                'code'   => 500
            ];
            return response()->json($rs);
        }

        $rs = [
            'messages' => 'succesfuly!',
            'code'   => 200,
            'data' => $data
        ];
        return response()->json($rs);
    }
    public function ajaxUpdatePublishSitter(Request $request)
    {
        $param = $request->except('_token');
        $sitterProfileModel = $this->model->createSitterProfileModel();
        $sitterProfile = $sitterProfileModel->where('user_id', $param['id'])->update(['publish'=> $param['publish']]);
        if ($sitterProfile) {
            $rs = [
                'messages' => '更新に完成しました',
                'code'   => 200,
            ];
            return response()->json($rs);
        }
        $rs = [
            'messages' => '更新に失敗しました',
            'code'   => 500,
        ];
        return response()->json($rs);
    }
    public function ajaxUserDelete(Request $request)
    {
        $param = $request->except('_token');
        $userModel = $this->model->createUserModel();
        $user = $userModel->where('id', $param['id'])->update(['deleted'=> true]);
        if ($user) {
            $rs = [
                'messages' => '削除に完成しました',
                'code'   => 200,
                'id' => $param['id']
            ];
            return response()->json($rs);
        }
        $rs = [
            'messages' => '削除に失敗しました',
            'code'   => 500,
        ];
        return response()->json($rs);
    }
    public function ajaxUserAccept(Request $request)
    {
        $params = $request->except('_token');
        $userModel = $this->model->createUserModel();
        $user = $userModel->where('id', $params['id']);
        $userResult = $user->update(['admin_confirm'=> $params['admin_confirm']]);
        if ($userResult) {
            $verifyEmailModel = $this->model->createVerifyEmailModel();
            if ($params['admin_confirm'] == config('constant.ADMIN_CONFIRM.UNACCEPT')) {
                $expire_at = Carbon::now()->addDay(config('constant.DAY_EXPIRE'), 'day');
                $verifyEmailModel->where('user_id', $params['id'])->update(['email_verified_at' => null, 'email_expire_at' => $expire_at]);
            }
            $verifyResult = $verifyEmailModel->select('token_verify')->where('user_id', $params['id'])->first();
            if ($params['admin_confirm'] == config('constant.ADMIN_CONFIRM.ACCEPT')) {
                $dataUser = $user->first();
                $dataSendMail['name'] = $dataUser->first_name.' '.$dataUser->last_name;
                $dataSendMail['register_bank_url'] = route('SITTER_REGISTER_BANK').'?token_verify='. $verifyResult->token_verify;
                // send mail client
                Mail::to($dataUser->email)->send(new AdminAcceptSendMail($dataSendMail));
            }
            $rs = [
                'messages' => '承認に完成しました',
                'admin_accept'   => true,
                'url' =>  Route('EMPLOYER_REGISTER_PARENT') . '?token_verify=' . $verifyResult->token_verify,
                'id' => $params['id']
            ];
            return response()->json($rs);
        }
        $rs = [
            'messages' => '承認に失敗しました',
            'code'   => 500,
        ];
        return response()->json($rs);
    }

    public function ajaxCensorAccount(Request $request)
    {
        $params = $request->except('_token');
        //cập nhật trạng thái của amdin
        $userModel    = $this->model->createUserModel();
        $updateStatus = $userModel->where('id', $params['id'])->update(['admin_confirm'=> $params['admin_confirm']]);
        
        if($updateStatus){
            $rs = [
                'messages' => '承認に完成しました',
                'code'     => 200,
                'id'       => $params['id']
            ];
            $verifyEmailModel = $this->model->createVerifyEmailModel();
            if ($params['admin_confirm'] == config('constant.ADMIN_CONFIRM.UNACCEPT')) {
                
                $expire_at = Carbon::now()->addDay(config('constant.DAY_EXPIRE'), 'day');
                $verifyEmailModel->where('user_id', $params['id'])->update(['email_verified_at' => null, 'email_expire_at' => $expire_at]);
                return response()->json($rs);
            }
    
            if ($params['admin_confirm'] == config('constant.ADMIN_CONFIRM.ACCEPT')) {
                //active user
                // $userModel->where('id', $params['id'])->update(['active'=> true]);
                
                $user         = $userModel->where('id', $params['id'])->first();
                $token        = $user->verifyEmails()->first()->token_verify;
                $dataSendMail = [
                    'full_name' => $user->first_name.' '.$user->last_name,
                    'token'     => $token,
                    'typeUser'  => $user->role_id
                ];
                Mail::to($user->email)->send( new AdminSendLinkCreateStripe($dataSendMail) );
                $rs = [
                    'messages' => '送信に完成しました',
                    'code'     => 200,
                    'id'       => $params['id']
                ];
                return response()->json($rs);
            }
        }
        $rs = [
            'messages' => '承認に失敗しました',
            'code'     => 500,
        ];
        return response()->json($rs);
    }

    public function support(Request $request){
        return view('admin.support');
    }

    public function messageReader( Request $request, $id, $channel = null){
        return view('admin.read-message', compact(['channel', 'id']));
    }

    public function ajaxListSitterSendLink( Request $request )
    {
        $params = $request->except('_token');
        $verifyRateModel = $this->model->createVerifyRateModel();
        
        if ($params['user_id'] && $params['sitter_id']) {
            $status = $verifyRateModel::where('user_id', $params['user_id'])->where('sitter_id', $params['sitter_id'])->first();
            if ($status && !Carbon::now()->gt($status->expire_at)) {
                if ( $status->verified_at == null) {
                    $rs = [
                        'messages' => '送信に完成しました',
                        'code'   => 500,
                    ];
                    return response()->json($rs);
                }
            }
            
            $dataVerifyRate['user_id'] = $params['user_id'];
            $dataVerifyRate['sitter_id'] = $params['sitter_id'];
            $dataVerifyRate['token'] = substr(md5(time().$params['email']), 0, 30);
            $dataVerifyRate['expire_at'] = Carbon::now()->addDay(1, 'day');
            $dataCheck['user_id'] = $params['user_id'];
            $dataCheck['sitter_id'] = $params['sitter_id'];

            $verifyRate = $verifyRateModel->updateOrCreate($dataCheck, $dataVerifyRate);

            if($verifyRate->id){
                $dataSendMail['token'] = $dataVerifyRate['token'];
                $dataSendMail['full_name'] = $params['full_name'];
                $dataSendMail['sitter_id'] = $params['sitter_id'];
                $dataSendMail['expire_at'] = $dataVerifyRate['expire_at'];
                Mail::to($params['email'])->send(new AdminSendLinkRate($dataSendMail));
                $rs = [
                    'messages' => '送信に完成しました',
                    'code'   => 200,
                ];
                return response()->json($rs);
            }
        }
        $rs = [
            'messages' => '送信に失敗しました',
            'code'   => 500,
        ];
        return response()->json($rs);
    }

    public function listBooking(Request $request)
    {
        // dd((new PaymentModel())->getListForPayout());
        $condition = [
            'status' => 0,
            'sitter_accept' => 1,
            'employer_accept' => 1,
        ];
        $bookingModel = $this->model->createBookingModel();
        $data['list_booking'] = $bookingModel->getBookingByAdmin($condition);
        return view('admin.list-booking', $data);
    }
    public function ajaxInfoEmployer($id)
    {
        $typeGalaries = [config('constant.GALARY_TYPE.EMPLOYER_FILE_FRONT'), config('constant.GALARY_TYPE.EMPLOYER_FILE_BACK')];
        
        $data['profile']    = (new EmployerProfileModel())->getByField($id);
        $data['galaries']   = (new GalaryModel())->getByField('user_id', $id, $typeGalaries);

        if($data['profile']['id']){
            $data['family'] = (new FamilyModel())->getByField($data['profile']['id']);
        }
        return view('admin.load-info-employer', $data);
    }
    public function ajaxInfoSitter($id)
    {
        $typeGalaries = config('constant.GALARY_TYPE.SITTER_AVATAR');

        $modelUser  = $this->model->createUserModel();
        $modelSkill = $this->model->createSkillModel();
        $user   = $modelUser->where('id', $id)->where('admin_confirm', config('constant.ADMIN_CONFIRM.ACCEPT'))->first();
        $isPublish = $user->sitterProfile()->where('publish',true)->first();
        if( !$isPublish ){
            return abort(404);
        }
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
        return view('admin.load-info-sitter', $sitter);
    }
    public function ajaxBookingCancelByAdmin(Request $request)
    {
        $params = $request->all();
        $bookingModel = new BookingModel();
        $rs = [
            'messages' => 'Cancel not complete!',
            'code'     => 200,
        ];

        $resRefund = $this->refundPayment($params);
        DB::beginTransaction();
        if(!isset($resRefund['type'])){// no error
            try{
                $data = [($params['person_cancel'] == config('constant.PERSON_CANCEL.SITTER')) ? 'sitter_accept' : 'employer_accept' => false,
                    'date_cancel' => Carbon::now()->format('yy-m-d H:i:s')
                ];
                $result = $bookingModel::where('id', $params['id'])->update($data);

                if(!$result){
                    DB::rollback();
                }

                DB::commit();
                //// backup channel chat and message 
                $action = env("REALTIME_URL") . "/api/hidden-channel";
        
                $client = new \GuzzleHttp\Client();
                $res    = $client->put($action, 
                    array(
                        'form_params' => array(
                            'key' => env("KEY_SITTER_PHP"),
                            'data' => json_encode([ (int)$params['id'] ])
                        )
                    ));
                $status = $res->getStatusCode();
                if( $status == 200 ){
                    $date = $params['date']; /// format client sending: 2020/10/27 01:00～07:00
                    $date = explode(" ", $date);
                    $date  = (new Carbon($date[0]))->format('Y-m-d'); /// change format to 2020-10-27

                    $condition = array(
                        'less-than-booking' => array([
                            'work_date'   => $date,
                            'sitter_id'   => (int)$params['sitter_id'],
                            'employer_id' => (int)$params['employer_id'],
                        ])
                    );
                    /// update code booking
                    $bookingModel->hiddenBookingByCondition($condition);
                }
                //// end backup channel chat and message 

                $this->sendMailByAdmin($params);
                $rs = [
                    'messages' => 'キャンセルに完成しました',
                    'code'     => 200,
                ];
                return response()->json($rs);
            }catch(\Exception $e) {
                DB::rollback();
            }
        }
        
        return response()->json($rs);
    }

    public function refundPayment($params)
    {
        \Stripe\Stripe::setApiKey(config('app.STRIPE_API_KEY'));
        $res = [
            'status' => '',
            'refund_id' => ''
        ];

        $data = $this->getDataRefund($params);
        $dataInsertRefund = [];

        try {

            switch ($data['typeRefund']) {
                case config('constant.TYPE_REFUND.NON_REFUND'):
                    $dataInsertRefund['type']      = $data['typeRefund'];
                    $dataInsertRefund['amount']    = 0;
                    $dataInsertRefund['reason']    = $data['reason'];
                    $dataInsertRefund['refund_nf'] = '';
                    break;
                case config('constant.TYPE_REFUND.REFUND_ALL'):
                case config('constant.TYPE_REFUND.REFUND_HALF'):
                    $dataInsertRefund['type']   = $data['typeRefund'];
                    $dataInsertRefund['amount'] = $data['amount'];
                    $dataInsertRefund['reason'] = $data['reason'];
                    
                    $dataRefund = [
                        'payment_intent' => $data['paymentId']
                    ];
                    if($data['typeRefund'] == config('constant.TYPE_REFUND.REFUND_HALF') ){
                        $dataRefund['amount'] = $data['amount'];
                    }
                    $req = \Stripe\Refund::create($dataRefund);
                    $dataInsertRefund['refund_nf'] = $req->id;
                    break;
            }
            //create record to refund table
            $refundModel = new RefundModel();
            $reqStore = $refundModel->create($dataInsertRefund);

            $res = [
                'status'    => 200,
                'message'   => 'Succeeded!',
                'refund_id' => $dataInsertRefund['refund_nf']
            ];
            return $res;
        } catch(\Stripe\Exception\CardException $e) {
            return handleExceptionStripe($e);
        } catch (\Stripe\Exception\RateLimitException $e) {
            return handleExceptionStripe($e);
        } catch (\Stripe\Exception\InvalidRequestException $e) {
            return handleExceptionStripe($e);
        } catch (\Stripe\Exception\AuthenticationException $e) {
            return handleExceptionStripe($e);
        } catch (\Stripe\Exception\ApiConnectionException $e) {
            return handleExceptionStripe($e);
        } catch (\Stripe\Exception\ApiErrorException $e) {
            return handleExceptionStripe($e);
        } 
    }

    private function getDataRefund($param)
    {
        $typeRefund = '';
        $res = [
            'paymentId'  => '',
            'amount'     => '',
            'typeRefund' => '',
            'reason'     => ''
        ];

        //từ order id lấy date, số tiền thanh toán trong bảng payment và thông tin payment id 
        $dataPayment = (new PaymentModel())->getDataByOrderId($param['order_id']);
        $res['paymentId'] = $dataPayment['stripe_payment'];
        if($param['person_cancel'] == config('constant.PERSON_CANCEL.EMPLOYER')){
            
            $dateNow          = Carbon::now();
            $dateStartWorkStr = $dataPayment['work_date'].' '.$dataPayment['start'];
            $dateStartWork    = Carbon::parse($dateStartWorkStr);
            $diffHour         = $dateNow->diffInHours($dateStartWork);

            if($diffHour > 48){
                $typeRefund = config('constant.TYPE_REFUND.REFUND_ALL'); 
                $res['reason'] = 'EMPLOYER CANCEL BOOKING BEFORE 48H';
            }

            if(($diffHour >= 24) && ($diffHour <= 48)){
                $typeRefund = config('constant.TYPE_REFUND.REFUND_HALF'); 
                $res['reason'] = 'EMPLOYER CANCEL BOOKING BEFORE 24H AND AFTER 48H';
            }

            if($diffHour < 24){
                $typeRefund = config('constant.TYPE_REFUND.NON_REFUND'); 
                $res['reason'] = 'EMPLOYER CANCEL BOOKING AFTER 24H';
            }
        }

        if($param['person_cancel'] == config('constant.PERSON_CANCEL.SITTER')){
            $typeRefund = config('constant.TYPE_REFUND.REFUND_ALL'); 
            $res['reason'] = 'SITTERS CANCEL BOOKING';
        }

        $res['typeRefund'] = $typeRefund;
        $res['amount']     = $this->calculatorAmountRefund($dataPayment, $typeRefund);

        return $res;
    }

    private function calculatorAmountRefund($data, $typeRefund)
    {
        //employer = price + vat +  ussage
        //sitter = price - fee trip
        $amountPaid = (int)$data['price'] + (int)$data['vat'] + (int)$data['profit_employer'];

        if($typeRefund == config('constant.TYPE_REFUND.REFUND_HALF')){//refund 50%
            $amountRefund = (int)($amountPaid*config('constant.PERCEN_REFUND.'.config('constant.TYPE_REFUND.REFUND_HALF'))/100);
            return $amountRefund;
        }
        return $amountPaid;
    }

    private function sendMailByAdmin($params)
    {
        $userModel = $this->model->createUserModel();
        $employer = $userModel::where('id', $params['employer_id'])->firstOrFail();
        $sitter = $userModel::where('id', $params['sitter_id'])->firstOrFail();
        if ($params['person_cancel'] == config('constant.PERSON_CANCEL.SITTER')) {//sitters canceled
            //send for sitters
            $dataSendMailSitter['full_name'] = $sitter->first_name . $sitter->last_name;
            $dataSendMailSitter['message'] = "On " . $params['date'] . ", You canceled the booking!";
            
            //send for employer
            $dataSendMailEmp['full_name'] = $employer->first_name . $employer->last_name;
            $dataSendMailEmp['message'] = "On " . $params['date'] . ", " . $sitter->first_name . $sitter->last_name . "様 canceled the booking!";
        } else { //Employer canceled
            //send for sitter
            $dataSendMailSitter['full_name'] = $sitter->first_name . $sitter->last_name;
            $dataSendMailSitter['message'] = "On " . $params['date'] . ", " . $employer->first_name . $employer->last_name . "様 canceled the booking!";

            //send for employer
            $dataSendMailEmp['full_name'] = $employer->first_name . $employer->last_name;
            $dataSendMailEmp['message'] = "On " . $params['date'] . ", You canceled the booking!";
            
        }
        Mail::to($sitter['email'])->send(new AdminSendCancelBooking($dataSendMailSitter));
        Mail::to($employer['email'])->send(new AdminSendCancelBooking($dataSendMailEmp));
    }
    public function infoSitter($id = 0)
    {
        $typeGalaries = config('constant.GALARY_TYPE.SITTER_AVATAR');

        $modelUser  = $this->model->createUserModel();
        $modelSkill = $this->model->createSkillModel();
        $user   = $modelUser->where('id', $id)->first();
        $sitter = $user->sitter;
        if(!$sitter){
            $sitter = [
                'isFails' => true,
                'message' => 'まだ、プロフィール登録が完了していません。'
            ];
            return view('admin.info-sitter', $sitter);
        }
        
        $sitter['ID_VIEW_SITTER']  = $id;
        $sitter['skills']          = $modelSkill->all(['id', 'name'])->toArray();
        $sitter['skills_activity'] = $user->skills->pluck('id')->toArray();
        $sitter['jp_locations']    = $this->JP_LOCATION;
        $sitter['gender']          = $user->gender;
        $sitter['galary']          = $user->galaries->where('type', $typeGalaries)->toArray();
        $sitter['time_support']    = (new Carbon($sitter['time_support']))->format('h:i');
        $sitter['information']     = $user;
        $sitter['sitter_skills']   = $user->skills->pluck('name')->toArray();

        $sitter['employerId'] = $id;
        $sitter['refresh']    = null;

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
        return view('admin.info-sitter', $sitter);
    }
    public function infoEmployer($id)
    {
        $userId = $id;
        $typeGalaries = [config('constant.GALARY_TYPE.EMPLOYER_FILE_FRONT'), config('constant.GALARY_TYPE.EMPLOYER_FILE_BACK')];
        
        $data['profile']    = (new EmployerProfileModel())->getByField($userId);
        $data['galaries']   = (new GalaryModel())->getByField('user_id', $userId, $typeGalaries);

        if($data['profile']['id']){
            $data['family'] = (new FamilyModel())->getByField($data['profile']['id']);
        }
        return view('admin.info-employer', $data);
    }
    
    /**
     * testCrontab is action test cron run remove channel
     *
     * @return string
     */
    public function testCrontab(){
        $description = ' Command Run hidden chat channel';
        $model = new BookingModel();
    
        $bookingsMaxWorkDate = $model->findBookingsHidden()->get()->toArray();
    
        $bookingHidden       = array_values(array_filter($bookingsMaxWorkDate, function($booking){ return $booking['filter']; } ));
        $bookingIdsHidden    = array_map(function($booking){ return $booking['id']; }, $bookingHidden);
    
        if(!count($bookingIdsHidden)){
            $description = " Command Run hidden chat channel none booking close";
            die($description);
        }
    
        try {
            $action = env("REALTIME_URL") . "/api/hidden-channel";
    
            $client = new \GuzzleHttp\Client();
            $res    = $client->put($action, 
                array(
                    'form_params' => array(
                        'key' => env("KEY_SITTER_PHP"),
                        'data' => json_encode($bookingIdsHidden)
                    )
                ));
            $status = $res->getStatusCode();
            if( $status == 200 ){
                $condition = array(
                    'less-than-booking' => $bookingHidden
                );
                /// update code booking
                $model->hiddenBookingByCondition($condition);
                $description .= ' successfully!';
            }else{
                /// ghi log 
                throw new \Error("error call api cron job have error: " . $res->getBody());
            }
        } catch (\Throwable $th) {
            
            $description = $th->getMessage();
        }
        return $description;
    }

    public function listReviews(Request $request)
    {
        $condition = $request->all();
        $condition['limit'] = 10;
        $data['reviews'] = (new SitterReviewModel())->getListReview($condition);
        return view('admin.list-reviews', $data);
    }

    public function ajaxDeleteReview(Request $request)
    {
        $rs = [
            'messages' => 'キャンセルに失敗しました',
            'code'     => 200,
        ];
        $data = $request->all();

        DB::beginTransaction();
        
        try {
            if($data['id']){
                $stt = (new SitterReviewModel())::where('id', $data['id'])->delete();
                if(!$stt){
                    DB::rollback();
                }
                $rs = [
                    'messages' => 'キャンセルに完成しました',
                    'code'     => 200,
                ];
                DB::commit();
            }                   
            return response()->json($rs);
        }catch(\Exception $e) {
            DB::rollback();
            return response()->json($rs);
        }
    }
}
