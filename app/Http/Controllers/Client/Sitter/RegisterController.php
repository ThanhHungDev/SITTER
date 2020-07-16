<?php

namespace App\Http\Controllers\Client\Sitter;

use App\Http\Controllers\Controller;
use App\FactoryModel\FactoryModelInterface;
use App\Mail\SitterRegister;
use App\Http\Requests\CLIENT\VALIDATE_SITTER_REGISTER;
use App\Http\Requests\CLIENT\VALIDATE_SITTER_REGISTER_PARENT;
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
                    return redirect()->route('SITTER_REGISTER_SUCCESS');
                }
            } catch (\Exception $e) {
                DB::rollBack();

                $errors = new MessageBag(['errors' => 'somethings went wrong!']);
                return redirect()->back()->withInput()->withErrors($errors);
            }
        }
    }

    function registerSuccess(){
        return view('client.sitter.register_success');
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
        $params = $request->except('_token');
        $params['type_upload'] = (int) $params['type_upload'];
        $token_verify = $params['token_verify'] ?? '';
        $galaryModel = $this->model->createGalaryModel();
        $userModel = $this->model->createUserModel();
        $verifyEmailModel = $this->model->createVerifyEmailModel();

        $verifyEmail = $verifyEmailModel->where('token_verify', $token_verify)->first();
        if(empty($verifyEmail)){
            $errors = new MessageBag(['message'=>'トークンエラー!']);
            return redirect()->back()->withInput()->withErrors($errors);
        }

        $user = $userModel::findOrFail($verifyEmail->user_id);

        $file_front = $this->commonService->RegisterUploadFile($params['input_file_front'], config('constant.UPLOAD_FILE.SITTER'));
        $file_back = $this->commonService->RegisterUploadFile($params['input_file_back'], config('constant.UPLOAD_FILE.SITTER'));
        $file_qualifi = $this->commonService->RegisterUploadFile($params['input_file_qualifi'], config('constant.UPLOAD_FILE.SITTER'));

        $baseDatas = [
            'user_id' => $verifyEmail->user_id,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
        $galaryDatas = [
            array_merge([
                'name' => $file_front['name'],
                'type' => config('constant.GALARY_TYPE.SITTER_FILE_FRONT'),
                'path' => $file_front['path'],
            ],$baseDatas),
            array_merge([
                'name' => $file_back['name'],
                'type' => config('constant.GALARY_TYPE.SITTER_FILE_BACK'),
                'path' => $file_back['path'],
            ],$baseDatas),
            array_merge([
                'name' => $file_qualifi['name'],
                'type' => config('constant.GALARY_TYPE.INPUT_FILE_QUALIFI'),
                'path' => $file_qualifi['path'],
            ], $baseDatas),
        ];

        DB::beginTransaction();
        try {
            $user->sitterProfile()->create($params);
            $galaryModel->insert($galaryDatas);

            $user->active = 1;
            $user->save();

            $user->skills()->attach($params['skills']);
            $user->experiences()->attach($params['experiences']);

            $verifyEmail = $verifyEmailModel->where('user_id', $user->id)->first();
            $verifyEmail->email_verified_at = Carbon::now();
            $verifyEmail->save();

            DB::commit();
            return redirect()->route('SITTER_LOGIN');
        } catch (\Exception $e) {
            DB::rollBack();

            $errors = new MessageBag(['errors' => 'somethings went wrong!']);
            return redirect()->back()->withInput()->withErrors($errors);
        }
    }
}
