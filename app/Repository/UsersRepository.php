<?php
namespace App\Repository;

use Illuminate\Support\Facades\DB;

class UsersRepository
{
    public function removeTokenRefeshModel($data) {
        $builder = DB::table('token_refeshes')
                    ->where([ 'user_id' => $data['user_id'] , 'token' => $data['token']]);
        return $builder;
    }

    public function checkTokenRefesh($token){
        $builder = DB::table('token_refeshes')
        ->where('token', $token);
        return $builder;
    }
}