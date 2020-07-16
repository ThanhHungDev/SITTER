<?php

namespace App\Http\Controllers\Client\Sitter;

use App\Http\Controllers\Controller;
use App\Http\Requests\CLIENT\VALIDATE_LOGIN;
use App\Services\TokenRefreshSevice;
use App\FactoryModel\FactoryModelInterface;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\MessageBag;


class LoginController extends Controller
{
    private $tokenRefreshSevice = null;
    private $model = null;
    public function __construct(FactoryModelInterface $_model, TokenRefreshSevice $_tokenRefreshSevice) {
        $this->model = $_model;
        $this->tokenRefreshSevice = $_tokenRefreshSevice;
    }
    function login()
    {
        if (Auth::check()){
            if(Auth::user()->role_id == config('constant.ROLE.SITTER')) {
                return redirect()->route('SITTER_MYPAGE');
            }
        }
        return view('client.sitter.login');
    }

    function postLogin(VALIDATE_LOGIN $request){
        $data = $request->only('email', 'password');
        $remember = $request->input('save-password') ? true : false;
        $detect = $request->input('detect');
        $data['active'] = 1;
        $data['role_id'] = config('constant.ROLE.SITTER');
        if (Auth::attempt($data, $remember)){
            $user = Auth::user();
            $tokenRefresh = $this->tokenRefreshSevice->getTokenRefresh($detect, $user['id']);
            if (!$tokenRefresh) {
                $tokenRefeshModel =$this->model->createTokenRefeshModel();
                $dataTokenRefresh['token'] = substr(md5($data['email'].$data['password'].$data['role_id']), 0, config('constant.TOKEN_SIZE'));
                $dataTokenRefresh['detect'] = $detect;
                $dataTokenRefresh['user_id'] = $user['id'];
                $token = $tokenRefeshModel->create($dataTokenRefresh);
                if ($token) {
                    $user->setTokenRefesh($dataTokenRefresh['token']);
                }
            }else{
                $user->setTokenRefesh($tokenRefresh['token']);
            }
            return redirect()->route('SITTER_MYPAGE');
        }
        $errors = new MessageBag(['errorlogin' => 'メールアドレスまたはパスワードが間違っています!']);
        return redirect()->back()->withInput()->withErrors($errors);
    }

    public function logout()
    {
        Auth::logout();
        return  redirect()->route('SITTER_LOGIN');
    }
}
