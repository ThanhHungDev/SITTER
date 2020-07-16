<?php
namespace App\Services;

use App\Models\PasswordResetModel as passwordResetModel;
use Illuminate\Support\Carbon;

class VerifyExpiryTokenPasswordService {

    public static function checkExpiryTokenPassword($params){
        $verifyToken =  isset($params['code']) ? $params['code'] : '';
        if(empty($verifyToken)){
            return config('constant.TOKEN_VERIFY.WRONG');
        }

        $dataCheck = passwordResetModel::where('verify_code', $verifyToken)->first()->toarray();
        if(empty($dataCheck)) {
            return config('constant.TOKEN_VERIFY.WRONG');
        } 

        $dateExpt = Carbon::createFromDate($dataCheck['date_send'])->addSeconds(config('constant.EXP_TOKEN'));
        if(Carbon::now()->gt($dateExpt)){
            return config('constant.TOKEN_VERIFY.EXPIRED');
        } else {
            return config('constant.TOKEN_VERIFY.NOT_ACTIVE');
        }
    }
}