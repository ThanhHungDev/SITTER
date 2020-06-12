<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SitterController extends Controller
{
    //
    public function login(){
        if (Auth::check()){

            return redirect()->route('EMPLOYER_MYPAGE');
        }
        return view('employer.login');
    }

    public function chat(){
        // if (!Auth::check()){

        //     return redirect()->route('SITTER_LOGIN');
        // }
        return view('client.chat');
    }
}
