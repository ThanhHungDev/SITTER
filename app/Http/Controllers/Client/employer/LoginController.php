<?php

namespace App\Http\Controllers\Client\employer;

use Illuminate\Http\Request;
use App\Services\CommonService;
use Illuminate\Support\MessageBag;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\FactoryModel\FactoryModelInterface;
use App\Http\Requests\CLIENT\VALIDATE_LOGIN;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    private $tokenRefreshSevice = null;
    private $model              = null;

    public function __construct(FactoryModelInterface $_model, CommonService $_tokenRefreshSevice) {

        $this->model              = $_model;
        $this->tokenRefreshSevice = $_tokenRefreshSevice;
    }
    public function login($route = null, $param = null ){

        if($route && $param){
            
            Session::put(config("constant.BACK_ROUTE_SESSION"),$route);
            Session::put(config("constant.BACK_ID_SESSION"),$param);
        }else{
            Session::forget(config("constant.BACK_ROUTE_SESSION"));
            Session::forget(config("constant.BACK_ID_SESSION"));
        }

        if (Auth::check()){
            return redirect()->route('EMPLOYER_MYPAGE');
        }
        return view('client.employer.login');
    }

    //
    public function postLogin(VALIDATE_LOGIN $request){

        $data     = $request->only('email', 'password');
        $remember = $request->input('save-password') ? true : false;
        $detect   = $request->input('detect');

        $data['active']  = 1;
        $data['role_id'] = config('constant.ROLE.EMPLOYER');
        
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

            $ROUTER_SUSSESS = Session::get(config("constant.BACK_ROUTE_SESSION"), null);
            $PARAM_ID_ROUTE = Session::get(config("constant.BACK_ID_SESSION"), 0);

            if( $ROUTER_SUSSESS && $PARAM_ID_ROUTE ){

                Session::forget(config("constant.BACK_ROUTE_SESSION"));
                Session::forget(config("constant.BACK_ID_SESSION"));

                return redirect()->route($ROUTER_SUSSESS, [ 'id' => $PARAM_ID_ROUTE ])
                ->withCookie(cookie()->forever(config('constant.TOKEN_COOKIE_NAME'), $token));
            }
            
            return redirect()->route('EMPLOYER_MYPAGE')
            ->withCookie(cookie()->forever(config('constant.TOKEN_COOKIE_NAME'), $token));
        }
        $errors = new MessageBag(['errorlogin' => 'パスワードまたはメールアドレスが間違っています！']);
        return redirect()->back()->withInput()->withErrors($errors);
    }

    public function logout()
    {
        Auth::logout();
        return  redirect()->route('EMPLOYER_LOGIN');
    }
}
