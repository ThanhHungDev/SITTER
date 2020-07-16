<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class EMPLOYER_LOGGED
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
        if (Auth::check()) {
            if (Auth::user()->role_id == config('constant.ROLE.EMPLOYER')) {
                return $next($request);
            }else{
                return redirect()->route('EMPLOYER_LOGOUT');
            }
        }
        return redirect()->route('EMPLOYER_LOGIN');
    }
}
