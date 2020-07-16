<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PasswordResetModel extends Model
{
    protected $table = 'password_reset';
    protected $fillable = ['user_id', 'verify_code', 'date_send'];

    public function getDataByToken($toke_verify)
    {
        return $this->select('*')->where('verify_code', $toke_verify)->first()->toarray();
    }
}
