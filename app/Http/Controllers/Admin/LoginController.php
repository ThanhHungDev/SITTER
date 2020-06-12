<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use App\User;
use App\Http\Requests\ADMIN\VALIDATE_LOGIN;

class LoginController extends Controller
{
    //
    //
    public function login(){
        if (Auth::check()){

            return redirect()->route('ADMIN_DASHBOARD');
        }
        return view('admin.login');
    }

    public function postLogin(VALIDATE_LOGIN $request){
        
    }
}
