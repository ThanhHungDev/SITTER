<?php

namespace App\Http\Controllers\Admin;

use App\User;
use Illuminate\Http\Request;
use App\Services\CommonService;
use Illuminate\Support\MessageBag;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;
use App\FactoryModel\FactoryModelInterface;
use App\Http\Requests\ADMIN\VALIDATE_LOGIN;
use Illuminate\Support\Facades\Config;

class LoginController extends Controller
{

    private $tokenRefreshSevice = null;
    private $model              = null;

    public function __construct(FactoryModelInterface $_model, CommonService $_tokenRefreshSevice) {

        $this->model              = $_model;
        $this->tokenRefreshSevice = $_tokenRefreshSevice;
    }
    public function login(){
        
        if (Auth::check() && Auth::user()->role_id == config('constant.ROLE.ADMIN')){
            return redirect()->route('ADMIN_SITTER');
        }
        return view('admin.login');
    }

    public function postLogin(VALIDATE_LOGIN $request){
        $data = $request->only('email', 'password');
        $remember = $request->input('save-password') ? true : false;
        $detect   = $request->input('detect');
        
        $data['active']  = 1;
        $data['role_id'] = config('constant.ROLE.ADMIN');

        if (Auth::attempt($data, $remember)){
            $user         = Auth::user();
            $tokenRefresh = $this->tokenRefreshSevice->getTokenRefresh($detect, $user['id']);
            $token = $tokenRefresh['token'];
            if (!$tokenRefresh) {

                $tokenRefeshModel = $this->model->createTokenRefeshModel();

                $dataTokenRefresh['token']   = substr(md5($data['email'].$data['password'].$data['role_id']), 0, 30);
                $dataTokenRefresh['detect']  = $detect;
                $dataTokenRefresh['user_id'] = $user['id'];

                $tokenRefresh = $tokenRefeshModel->create($dataTokenRefresh);
                $token = $dataTokenRefresh['token'];
            }
            
            return redirect()->route('ADMIN_SITTER')
            ->withCookie(cookie()->forever(config("constant.TOKEN_COOKIE_NAME"), $token));
        }
        $errors = new MessageBag(['errorlogin' => 'パスワードまたはメールアドレスが間違っています！']);
        return redirect()->back()->withInput()->withErrors($errors);
    }

    public function logout()
    {
        Auth::logout();
        return  redirect()->route('ADMIN_LOGIN');
    }
}
