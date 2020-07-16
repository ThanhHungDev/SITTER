<?php

namespace App\Http\Controllers\Client\Sitter;

use App\Http\Controllers\Controller;
use App\Http\Requests\CLIENT\VALIDATE_LOGIN;
use App\Services\CommonService;
use App\FactoryModel\FactoryModelInterface;
use App\Mail\SitterForgotPass;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\MessageBag;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    private $commonService     = null;
    private $model             = null;

    public function __construct(FactoryModelInterface $_model, CommonService $commonService) {
        $this->model         = $_model;
        $this->commonService = $commonService;
    }

    function login(){

        if (Auth::check()){
            if(Auth::user()->role_id == config('constant.ROLE.SITTER')) {
                return redirect()->route('SITTER_MYPAGE');
            }
        }
        return view('client.sitter.login');
    }

    function postLogin(VALIDATE_LOGIN $request){

        $data     = $request->only('email', 'password');
        $remember = $request->input('save-password') ? true : false;
        $detect   = $request->input('detect');

        $data['active']  = 1;
        $data['role_id'] = config('constant.ROLE.SITTER');

        if (Auth::attempt($data, $remember)){

            $user         = Auth::user();
            $tokenRefresh = $this->commonService->getTokenRefresh($detect, $user['id']);

            if (!$tokenRefresh) {

                $tokenRefeshModel = $this->model->createTokenRefeshModel();

                $dataTokenRefresh['token']   = substr(md5($data['email'].$data['password'].$data['role_id']), 0, config('constant.TOKEN_SIZE'));
                $dataTokenRefresh['detect']  = $detect;
                $dataTokenRefresh['user_id'] = $user['id'];

                $tokenRefresh = $tokenRefeshModel->create($dataTokenRefresh);
            }
            $token = $tokenRefresh['token'];
            return redirect()->route('SITTER_MYPAGE')
            ->withCookie(cookie()->forever(config('constant.TOKEN_COOKIE_NAME'), $token));
        }
        $errors = new MessageBag(['errorlogin' => 'メールアドレスまたはパスワードが間違っています!']);
        return redirect()->back()->withInput()->withErrors($errors);
    }

    public function logout()
    {
        Auth::logout();
        return  redirect()->route('SITTER_LOGIN');
    }

    public function forgot()
    {
        if (Auth::check()) {
            return redirect()->route('SITTER_MYPAGE');
        }
        return view('client.sitter.forgot');
    }

    public function postForgot(VALIDATE_LOGIN $request)
    {
        if (Auth::check()) {
            return redirect()->route('SITTER_MYPAGE');
        }
        
        $requestData = $request->all();
        $checkActive = $this->model->createUserModel()->checkUserIsactiveByParams($requestData['email'], 'email');
        
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
        $storeData = $this->model->createPasswordResetModel()->updateOrCreate(
            ['user_id' => $checkActive['id']], $dataSendCode
        );

        $dataSendCode['name']     = $checkActive['first_name'].' '.$checkActive['last_name'];
        $dataSendCode['exp_date'] = $dateExp;
        Mail::to($requestData['email'])->send(new SitterForgotPass($dataSendCode));
        return redirect()->route('SITTER_REGISTER_COMFIRM');
    }

    public function registerComfirm()
    {
        if (Auth::check()) {
            return redirect()->route('SITTER_MYPAGE');
        }
        $data = [
            'title' => 'Step 1 Register',
            'messager' => 'please check email to confirm thank you!',
        ];
        return view('client.sitter.comfirm', $data);
    }

    public function renewPassword(Request $request)
    {
        if (Auth::check()) {
            return redirect()->route('SITTER_MYPAGE');
        }
        //check expired token
        $status = $this->commonService->checkExpiryTokenPassword($request);
        switch ($status) {
            case config('constant.TOKEN_VERIFY.NOT_ACTIVE'):
                $data['code'] = $request['code'];
                return view('client.sitter.renew_password', $data);
                break;
            default:
                return view('errors.404');
                break;
        }
    }

    public function postRenewPassword(VALIDATE_LOGIN $request)
    {
        $requestData = $request->all();
        $status      = $this->commonService->checkExpiryTokenPassword($requestData);
        if($status != config('constant.TOKEN_VERIFY.NOT_ACTIVE')){
            return view('errors.404');
        }

        $dbToken = $this->model->createPasswordResetModel()->getDataByToken($requestData['code']);
        $data    = [
            'password' => Hash::make($requestData['password']),
            'id'       => $dbToken['user_id']
        ];

        $checkActive = $this->model->createUserModel()->changePasswordByField( 'id', $data);
        if(!$checkActive){
            $result = [
                "status"  => false,
                "message" => "Errors!"
            ];
            $errors = new MessageBag($result);
            return redirect()->back()->withInput()->withErrors($errors);
        }
        
        return redirect()->route('SITTER_LOGIN');
    }
}
