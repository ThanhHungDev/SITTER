<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class ADMIN_LOGGED
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
        if(Auth::check() && Auth::user()->role_id == config('constant.ROLE.ADMIN')){
            view()->share('refresh', $request->cookie(config('constant.TOKEN_COOKIE_NAME')));
            return $next($request);
        }

        return redirect()->route('ADMIN_LOGIN');
    }
}
