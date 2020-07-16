<?php
namespace App\Services;

use App\Models\VerifyEmailModel as verifyEmailModel;
use Illuminate\Support\Carbon;

class VerifyEmailService {
    public static function checkVerifyEmail($params){
        $token_verify =  isset($params['token_verify']) ? $params['token_verify'] : '';

        if(empty($token_verify)){
            return config('constant.TOKEN_VERIFY.WRONG');
        }
        $verifyEmail = verifyEmailModel::where('token_verify', $token_verify)->first();
        $emailVerifiedAt = isset($verifyEmail['email_verified_at']) ? $verifyEmail['email_verified_at'] : '';
        $emailExpireAt = isset($verifyEmail['email_expire_at']) ? $verifyEmail['email_expire_at'] : '';
        if(!empty($emailVerifiedAt)) {
            return config('constant.TOKEN_VERIFY.ACTIVED');
        }else {
            if(!empty($emailExpireAt)){
                if(Carbon::now()->gt($emailExpireAt)){
                    return config('constant.TOKEN_VERIFY.EXPIRED');
                }else {
                    return config('constant.TOKEN_VERIFY.NOT_ACTIVE');
                }
            }
        }
    }
}