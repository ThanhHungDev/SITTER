<?php

namespace App\Http\Controllers\Client\employer;

use App\Models\UserModel;
use Illuminate\Http\Request;
use App\Mail\EmployerRegister;
use App\Mail\EmployerForgotPass;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\CLIENT\VALIDATE_LOGIN;
use App\Http\Requests\CLIENT\VALIDATE_EMPLOYER_REGISTER;
use App\Http\Requests\CLIENT\VALIDATE_EMPLOYER_REG_PARENT;
use App\Models\VerifyEmailModel;
use App\Models\EmployerProfileModel;
use App\Models\FamilyModel;
use App\Models\GalaryModel;
use App\Models\PasswordResetModel;
use App\Services\CommonService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\MessageBag;
use App\Services\EmployerService;

class RegisterController extends Controller
{
    private $model = null;
    private $serviceCommon = null;
    private $employerService = null;
    public function __construct(CommonService $_serviceCommon, EmployerService $employerService) {
        $this->serviceCommon = $_serviceCommon;
        $this->employerService = $employerService;
    }

    public function register(){
        if (Auth::check()) {
            return redirect()->route('EMPLOYER_MYPAGE');
        }
        return view('client.employer.register');
    }

    public function registerParent(Request $request)
    {
        
        if (Auth::check()) {
            return redirect()->route('EMPLOYER_MYPAGE');
        }
        $status = $this->serviceCommon->checkVerifyEmail($request->all());

        switch ($status) {
            case config('constant.TOKEN_VERIFY.WRONG'):
            case config('constant.TOKEN_VERIFY.EXPIRED'):
                return view('errors.404');
                break;
            case config('constant.TOKEN_VERIFY.ACTIVED'):
                return redirect()->route('EMPLOYER_LOGIN');
                break;
            case config('constant.TOKEN_VERIFY.NOT_ACTIVE'):
                $data['TYPE_UPLOAD'] = config('constant.TYPE_UPLOAD_EMPLOYER');
                $data['token_verify'] = $request['token_verify'];
                return view('client.employer.register_parent',$data);
                break;
            
            default:
                return view('errors.404');
                break;
        }
    }

    public function store(VALIDATE_EMPLOYER_REGISTER $request) {
        $params = $request->except('_token');
        if (!empty($params)) {
            $params['password'] = Hash::make($params['password']);
            $params['birth_date'] = $params['birth_year'].'-'.$params['birth_month'].'-'.$params['birth_day'];
            $params['role_id'] = config('constant.ROLE.EMPLOYER');
            $params['token_verify'] = substr(md5(time().$params['email']), 0, config('constant.TOKEN_SIZE'));

            $userModel = new UserModel();
            $user = $userModel->create($params);
            
            if($user->id){
                $dataVerifyEmail['token_verify'] = substr(md5(time().$params['email']), 0, 30);
                $dataVerifyEmail['email_expire_at'] = Carbon::now()->addDay(1, 'day');

                $verifyEmail = $user->verifyEmails()->create($dataVerifyEmail);

                if($verifyEmail->id){
                    $dataSendMail['token_verify'] = $dataVerifyEmail['token_verify'];
                    $dataSendMail['name'] = $params['first_name'].' '.$params['last_name'];
                    // send mail
                    Mail::to($user->email)->send(new EmployerRegister($dataSendMail));
                    return redirect()->route('EMPLOYER_REGISTER_COMFIRM');
                }
            }
        }
        return view('client.employer.register');
    }

    public function registerComfirm()
    {
        if (Auth::check()) {
            return redirect()->route('EMPLOYER_MYPAGE');
        }
        $data = [
            'title' => 'Step 1 Register',
            'messager' => 'please check email to confirm thank you!',
        ];
        return view('client.employer.comfirm', $data);
    }

    public function postRegisterParent(VALIDATE_EMPLOYER_REG_PARENT $requestData)
    {
        //validate spectial
        $errors = $this->employerService->validateSpecialRegisterField($requestData);
        $result = [
            "status" => false,
            "message" => "Errors"
        ];

        //get data posted
        $params = $requestData->all();
        
        //get id user
        $token  = $params['token_verify'];
        $verifyEmailModel = new VerifyEmailModel();
        $data = $verifyEmailModel->getDataByToken($token);

        if(empty($data)){
            $errors = new MessageBag($result);
            return redirect()->back()->withInput()->withErrors($errors);
        }
        
        //insert record
        DB::beginTransaction();
        try{
            //insert table employer profile
            $paramProfile = [
                'user_id'     => $data['user_id'],
                'type_upload' => $params['type_upload'],
                'nick_name'   => $params['nick_name'],
                'note'        => $params['note'],
            ];

            $profileModel = new EmployerProfileModel();
            $insertProfile = $profileModel->create($paramProfile);
            if(!($insertProfile->id)){
                DB::rollback();
            }

            //insert table galaries
            $upFileFront = $this->serviceCommon->RegisterUploadFile($params['input_file_front'], config('constant.UPLOAD_FILE.EMPLOYER'));
            $upFileBack = $this->serviceCommon->RegisterUploadFile($params['input_file_back'], config('constant.UPLOAD_FILE.EMPLOYER'));
            $paramGalaries = [
                [
                    'user_id' => $data['user_id'],
                    'name'    => $upFileFront['name'],
                    'path'    => $upFileFront['path'],
                    'type'    => config('constant.GALARY_TYPE.EMPLOYER_FILE_FRONT')
                ],
                [
                    'user_id' => $data['user_id'],
                    'name'    => $upFileBack['name'],
                    'path'    => $upFileBack['path'],
                    'type'    => config('constant.GALARY_TYPE.EMPLOYER_FILE_BACK')
                ]
                
            ];
            $insertGalaries = (new GalaryModel())->insert($paramGalaries);

            //issert families
            $paramFather = [
                'id_profile'          => $insertProfile->id,
                'first_name'          => $params['first_name_fa'],
                'last_name'           => $params['last_name_fa'],
                'first_name_furigana' => $params['first_name_furigana_fa'],
                'last_name_furigana'  => $params['last_name_furigana_fa'],
                'birth_date'          => $params['y_birth_fa'].'-'.$params['m_birth_fa'].'-'.$params['d_birth_fa'],
                'gender'              => config('constant.GENDER.MALE'),
                'type'                => config('constant.TYPE_MEMBER_PARENT.FATHER')
            ];
            $insertFather = (new FamilyModel())->insert($paramFather);
            if(!$insertFather){
                DB::rollback();
            }

            $paramMother = [
                'id_profile'          => $insertProfile->id,
                'first_name'          => $params['first_name_mom'],
                'last_name'           => $params['last_name_mom'],
                'first_name_furigana' => $params['first_name_furigana_mom'],
                'last_name_furigana'  => $params['last_name_furigana_mom'],
                'birth_date'          => $params['y_birth_mom'].'-'.$params['m_birth_mom'].'-'.$params['d_birth_mom'],
                'gender'              => config('constant.GENDER.FEMALE'),
                'type'                => config('constant.TYPE_MEMBER_PARENT.MOM')
            ];
            $insertMother = (new FamilyModel())->insert($paramMother);
            if(!$insertMother){
                DB::rollback();
            }

            //number child
            $numberChild = $params['child_number'];
            for ($i=0; $i < $numberChild; $i++) { 
                $paramChilds = [];
                $paramChilds = [
                    'id_profile'          => $insertProfile->id,
                    'first_name'          => $params['first_name_child_'.$i],
                    'last_name'           => $params['last_name_child_'.$i],
                    'first_name_furigana' => $params['first_name_furigana_child_'.$i],
                    'last_name_furigana'  => $params['last_name_furigana_child_'.$i],
                    'birth_date'          => $params['y_birth_child_'.$i].'-'.$params['m_birth_child_'.$i].'-'.$params['d_birth_child_'.$i],
                    'gender'              => $params['gender_child_'.$i],
                    'allergic'            => (isset($params['allergic_'.$i]) && ($params['allergic_'.$i] == '1')) ? true : false,
                    'chronic'             => (isset($params['chronic_'.$i]) && ($params['chronic_'.$i] == '1')) ? true : false,
                    'type'                => config('constant.TYPE_MEMBER_PARENT.CHILD')
                ];
                $insertChild = (new FamilyModel())->insert($paramChilds);
                if(!$insertChild){
                    DB::rollback();
                }
            }

            //update verify_at
            $updateVerify = (new VerifyEmailModel())->updateAfterRegister($data['user_id']);
            if(!$updateVerify){
                DB::rollback();
            }

            //active account
            $activeUser = (new UserModel())->activeUserById($data['user_id']);
            DB::commit();
            return redirect()->route('EMPLOYER_REGISTER_SUCCESS');
            
        }catch(\Exception $e) {
            DB::rollback();
            $errors = new MessageBag($result);
            return redirect()->back()->withInput()->withErrors($errors);
        }
        
    }

    public function registerSuccess()
    {
        return view('client.employer.register_success');
    }

    public function forgot()
    {
        if (Auth::check()) {
            return redirect()->route('EMPLOYER_MYPAGE');
        }
        return view('client.employer.forgot');
    }

    public function postForgot(VALIDATE_LOGIN $request)
    {
        if (Auth::check()) {
            return redirect()->route('EMPLOYER_MYPAGE');
        }
        
        $requestData = $request->all();
        $checkActive = (new UserModel())->checkUserIsactiveByParams($requestData['email'], 'email');
        
        if(empty($checkActive)){
            $result = [
                "status"  => false,
                "message" => "Account is not existed or inactive!"
            ];
            $errors = new MessageBag($result);
            return redirect()->back()->withInput()->withErrors($errors);
        }
        
        $code     = substr(md5(time().$requestData['email']), 0, 30);
        $dateSend = Carbon::now()->toDateTimeString();
        $dateExp  = Carbon::now()->addSeconds(config('constant.EXP_TOKEN'))->toDateTimeString();

        $dataSendCode['verify_code'] = $code;
        $dataSendCode['date_send']   = $dateSend;
        $dataSendCode['user_id']     = $checkActive['id'];
        $storeData = (new PasswordResetModel())->updateOrCreate(
            ['user_id' => $checkActive['id']], $dataSendCode
        );

        $dataSendCode['name']     = $checkActive['first_name'].' '.$checkActive['last_name'];
        $dataSendCode['exp_date'] = $dateExp;
        Mail::to($requestData['email'])->send(new EmployerForgotPass($dataSendCode));
        return redirect()->route('EMPLOYER_REGISTER_COMFIRM');
    }

    public function renewPassword(Request $request)
    {
        if (Auth::check()) {
            return redirect()->route('EMPLOYER_MYPAGE');
        }
        //check expired token
        $status = $this->serviceCommon->checkExpiryTokenPassword($request);

        switch ($status) {
            case config('constant.TOKEN_VERIFY.NOT_ACTIVE'):
                $data['code'] = $request['code'];
                return view('client.employer.renew_password', $data);
                break;
            default:
                return view('errors.404');
                break;
        }
    }

    public function postRenewPassword(VALIDATE_LOGIN $request)
    {
        $requestData = $request->all();
        $status      = $this->serviceCommon->checkExpiryTokenPassword($requestData);
        if($status != config('constant.TOKEN_VERIFY.NOT_ACTIVE')){
            return view('errors.404');
        }

        $dbToken = (new PasswordResetModel())->getDataByToken($requestData['code']);
        $data    = [
            'password' => Hash::make($requestData['password']),
            'id'       => $dbToken['user_id']
        ];

        $checkActive = (new UserModel())->changePasswordByField( 'id', $data);
        if(!$checkActive){
            $result = [
                "status"  => false,
                "message" => "Errors!"
            ];
            $errors = new MessageBag($result);
            return redirect()->back()->withInput()->withErrors($errors);
        }
        
        return redirect()->route('EMPLOYER_LOGIN');
    }
}
