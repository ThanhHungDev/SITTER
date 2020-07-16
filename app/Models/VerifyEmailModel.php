<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VerifyEmailModel extends Model
{
    protected $table = 'verify_emails';
    protected $fillable = ['user_id', 'token_verify', 'email_verified_at', 'email_expire_at'];

    public function user()
    {
        return $this->belongsTo(UserModel::class, 'user_id', 'id');
    }

    public static function insert($params)
    {
        $params['created_at'] = date("Y-m-d H:i:s");
        $params['updated_at'] = date("Y-m-d H:i:s");
        
        return UserModel::insertGetId($params);
    }

    public function getDataByToken($toke_verify)
    {
        return $this->select('*')->where('token_verify', $toke_verify)->first()->toarray();
    }

    public function updateAfterRegister($user_id)
    {
        return $this->where('user_id', $user_id)->update(['email_verified_at' => date("Y-m-d H:i:s")]);
    }
}