<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployerController extends Controller
{
    //
    public function login(){
        if (Auth::check()){

            return redirect()->route('EMPLOYER_MYPAGE');
        }
        return view('employer.login');
    }

    //
    public function postLogin(){
        if (Auth::check()){

            return redirect()->route('EMPLOYER_MYPAGE');
        }
        return view('employer.login');
    }

    public function register(){
        if (Auth::check()){

            return redirect()->route('EMPLOYER_MYPAGE');
        }
        return view('employer.register');
    }

    public function postRegister(){
        if (Auth::check()){

            return redirect()->route('EMPLOYER_MYPAGE');
        }
        return view('employer.register');
    }

    public function registerParent()
    {
        if (Auth::check()){

            return redirect()->route('EMPLOYER_MYPAGE');
        }
        return view('client.employer.register_parent');
    }

    public function postRegisterParent()
    {
        if (Auth::check()){

            return redirect()->route('EMPLOYER_MYPAGE');
        }
        return view('client.employer.register_parent');
    }
}
