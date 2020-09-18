<?php

namespace App\Http\Controllers\Client\Sitter;

use App\Http\Controllers\Controller;
use App\FactoryModel\FactoryModelInterface;
use App\Mail\SitterRegister;
use App\Http\Requests\CLIENT\VALIDATE_SITTER_REGISTER;
use App\Http\Requests\CLIENT\VALIDATE_SITTER_REGISTER_PARENT;
use App\Mail\SitterRegisterParentAdmin;
use App\Mail\SitterRegisterParentClient;
use App\Services\CommonService;

use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\MessageBag;


class RegisterController extends Controller
{
    private $model = null;
    private $commonService = null;

    public function __construct(FactoryModelInterface $model, CommonService $commonService) 
    {
        $this->model = $model;
        $this->commonService = $commonService;
    }

    function register()
    {
        return view('client.sitter.register');
    }

    function postRegister(VALIDATE_SITTER_REGISTER $request){
        $params = $request->except('_token');

        if(!empty($params)){
            $params['password'] = Hash::make($params['password']);
            $params['birth_date'] = $params['birth_year'].'-'.$params['birth_month'].'-'.$params['birth_day'];
            $params['role_id'] = config('constant.ROLE.SITTER');
            $params['token_verify'] = substr(md5(time().$params['email']), 0, config('constant.TOKEN_SIZE'));

            DB::beginTransaction();
            try {
                $userModel = $this->model->createUserModel();
                $gender = (int)$params['gender'];
                $params['avatar'] = getAvatarDefault($gender);
                $user = $userModel->create($params);

                $dataVerifyEmail['token_verify'] = $params['token_verify'];
                $dataVerifyEmail['email_expire_at'] = Carbon::now()->addDay(config('constant.DAY_EXPIRE'), 'day');
                $verifyEmail = $user->verifyEmails()->create($dataVerifyEmail);
                if($verifyEmail){
                    $dataSendMail['token_verify'] = $params['token_verify'];
                    $dataSendMail['name'] = $params['first_name'].' '.$params['last_name'];
                    $dataSendMail['user_id'] = $user->id;

                    // send mail
                    Mail::to($user->email)->send(new SitterRegister($dataSendMail));
                    DB::commit();
                    return redirect()->route('SITTER_REGISTER_CONFIRM');
                }
            } catch (\Exception $e) {
                DB::rollBack();

                $errors = new MessageBag(['errors' => 'somethings went wrong!']);
                return redirect()->back()->withInput()->withErrors($errors);
            }
        }
    }

    function registerSuccess(){
        return view('client.sitter.register_parent_success');
    }

    function registerConfirm(){
        return view('client.sitter.confirm');
    }

    function registerParent(Request $request)
    {
        $status = $this->commonService->checkVerifyEmail($request->all());
        $experienceModel = $this->model->createExperienceModel();
        $skillModel = $this->model->createSkillModel();

        switch ($status) {
            case config('constant.TOKEN_VERIFY.WRONG'):
            case config('constant.TOKEN_VERIFY.EXPIRED'):
                return view('errors.404');
                break;
            case config('constant.TOKEN_VERIFY.ACTIVED'):
                return redirect()->route('SITTER_LOGIN');
                break;
            case config('constant.TOKEN_VERIFY.NOT_ACTIVE'):
                $experiences = $experienceModel::get();
                $skills = $skillModel::get();

                return view('client.sitter.register_parent', compact('experiences', 'skills'));
                break;

            default:
                return view('errors.404');
                break;
        }
    }

    function postRegisterParent(VALIDATE_SITTER_REGISTER_PARENT $request){  
        $params           = $request->except('_token');
        $params['type_upload']    = (int) $params['type_upload'];
        $token_verify     = $params['token_verify'] ?? '';
        $galaryModel      = $this->model->createGalaryModel();
        $userModel        = $this->model->createUserModel();
        $verifyEmailModel = $this->model->createVerifyEmailModel();

        $verifyEmail = $verifyEmailModel->where('token_verify', $token_verify)->first();
        if(empty($verifyEmail)){
            $errors = new MessageBag(['message'=>'トークンエラー!']);
            return redirect()->back()->withInput()->withErrors($errors);
        }

        $user = $userModel::findOrFail($verifyEmail->user_id);

        DB::beginTransaction();
        try {
            $file_front   = $this->commonService->RegisterUploadFile($params['input_file_front'], config('constant.UPLOAD_FILE.SITTER'));
            $file_back    = $this->commonService->RegisterUploadFile($params['input_file_back'], config('constant.UPLOAD_FILE.SITTER'));
            $file_qualifi = $this->commonService->RegisterUploadFile($params['input_file_qualifi'], config('constant.UPLOAD_FILE.SITTER'));

            $typeFileFront   = config('constant.GALARY_TYPE.SITTER_FILE_FRONT');
            $typeFileBack    = config('constant.GALARY_TYPE.SITTER_FILE_BACK');
            $typeFileQualifi = config('constant.GALARY_TYPE.INPUT_FILE_QUALIFI');
            $baseDatas = [
                'user_id' => $verifyEmail->user_id,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];
            $galaryDatas = [
                array_merge([
                    'name' => $file_front['name'],
                    'type' => $typeFileFront,
                    'path' => $file_front['path'],
                ],$baseDatas),
                array_merge([
                    'name' => $file_back['name'],
                    'type' => $typeFileBack,
                    'path' => $file_back['path'],
                ],$baseDatas),
                array_merge([
                    'name' => $file_qualifi['name'],
                    'type' => $typeFileQualifi,
                    'path' => $file_qualifi['path'],
                ], $baseDatas),
            ];
            if($user->galaries()->get()){
                $user->galaries()->whereIn('type', [$typeFileFront, $typeFileBack, $typeFileQualifi])->delete();
            }

            $user->sitterProfile()->updateOrCreate(['user_id' => $user->id], $params);
            $galaryModel->insert($galaryDatas);

            $user->active = 1;
            $user->admin_confirm = config('constant.ADMIN_CONFIRM.DEFAULT');
            $user->save();
            $user->skills()->detach();
            $user->experiences()->detach();
            $user->skills()->attach($params['skills']);
            $user->experiences()->attach($params['experiences']);

            $verifyEmail = $verifyEmailModel->where('user_id', $user->id)->first();
            $verifyEmail->email_verified_at = Carbon::now();
            $verifyEmail->save();
            
            $dataSendMail['name'] = $user->first_name.' '.$user->last_name;
            $dataSendMail['register_bank_url'] = route('SITTER_REG_STRIPE_ACC').'?token='.$token_verify;
            // send mail client
            Mail::to($user->email)->send(new SitterRegisterParentClient($dataSendMail));

            // send mail admin
            Mail::to(config('constant.MAIL_GLOBAL'))->send(new SitterRegisterParentAdmin());

            DB::commit();
            return redirect()->route('SITTER_REGISTER_SUCCESS');
        } catch (\Exception $e) {
            DB::rollBack();

            $errors = new MessageBag(['errors' => 'エラーを作成する']);
            return redirect()->back()->withInput()->withErrors($errors);
        }
    }

    public function getStripeAccount(Request $request){
        $token            = $request->input('token') ?? '';
        $verifyEmailModel = $this->model->createVerifyEmailModel();
        $verifyEmail      = $verifyEmailModel->where('token_verify', $token)->first();

        if(!$verifyEmail) {
            return view('errors.404');
        }

        $user_id   = $verifyEmail->user_id;
        $userModel = $this->model->createUserModel();
        $user      = $userModel::findOrFail($user_id);

        $stripe_account_id = $user->stripe_account_id;
        try {
            $resData = \Stripe\Account::createLoginLink($stripe_account_id);
            $url = $resData->url;

            return redirect($url);
        } catch (\Throwable $th) {
            $errors = new MessageBag(['errors' => '続行するには銀行口座を更新してください']);
        }
    }

    public function regStripeAccount(Request $request){
        $token            = $request->input('token') ?? '';
        $verifyEmailModel = $this->model->createVerifyEmailModel();
        $verifyEmail      = $verifyEmailModel->where('token_verify', $token)->first();

        if(!$verifyEmail) {
            return view('errors.404');
        }

        $user_id   = $verifyEmail->user_id;
        $userModel = $this->model->createUserModel();
        $user      = $userModel::findOrFail($user_id);

        if(!$user->stripe_account_id) {
            $account = \Stripe\Account::create([
                'country' => 'JP',
                'type' => 'express',
                'email' => $user->email,
                'business_type' => 'individual',
    
                'capabilities' => [
                    'card_payments' => ['requested' => true],
                    'transfers' => ['requested' => true],
                ],
            ]);
    
            $user->stripe_account_id = $account->id;
            $user->save();
        }

        $stripe_account_id = $user->stripe_account_id;

        session(['account_id' => $stripe_account_id]);
        $account_link_url = $this->generateAccountLink($stripe_account_id);
        return redirect($account_link_url);
    }

    function generateAccountLink(string $account_id) {
        $account_link = \Stripe\AccountLink::create([
            'type' => 'account_onboarding',
            'account' => $account_id,
            'refresh_url' => route('SITTER_REAUTH'),
            'return_url' => route('SITTER_REGISTER_STRIPE_SUCCESS', ['stripe_acc_id' => $account_id]),
        ]);
        return $account_link->url;
    }

    public function reauth(){
        if(!session('account_id')){
            return redirect(route('TOP_PAGE'));
        }

        $account_id = session('account_id');
        $account_link_url = $this->generateAccountLink($account_id);
        return redirect($account_link_url);
    }

    public function payoutTest(){
        $transfer = \Stripe\Transfer::create([
            "amount" => 10000,
            "currency" => "jpy",
            "destination" => "acct_1HKE1iE7sCS3U8VG",
        ]);
    }

    public function registerStripeSuccess($stripe_acc_id){
        $userModel = $this->model->createUserModel();
        $user      = $userModel::where('stripe_account_id', $stripe_acc_id)->first();

        if(!$user){
            return abort('404');
        }

        $user->stripe_active = true;
        $user->save();

        return view('client.sitter.register_stripe_success');
    }
}
