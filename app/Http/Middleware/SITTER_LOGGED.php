<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class SITTER_LOGGED
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(Auth::check()){
            if (Auth::user()->role_id == config('constant.ROLE.SITTER')) {
                return $next($request);
            }else{
                return redirect()->route('SITTER_LOGOUT');
            }
        }

        return redirect()->route('SITTER_LOGIN');
    }
}
