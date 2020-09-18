<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VerifyRateModel extends Model
{
    protected $table = 'verify_rates';
    protected $fillable = ['user_id', 'sitter_id', 'token', 'verified_at', 'expire_at'];

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

    public function getDataByToken($toke)
    {
        return $this->select('*')->where('verify_rates.token_verify', $toke)
        ->leftjoin('users as u', 'verify_rates.user_id', '=', 'u.id')
        ->firstOrFail()->toarray();
    }

    public function updateAfterWithToken($toke, $data)//$data= ['verified_at' => date("Y-m-d H:i:s")];
    {
        return $this->where('toke', $toke)->update($data);
    }

    public function updateAfterWithId($user_id, $sitter_id, $data) //$data= ['verified_at' => date("Y-m-d H:i:s")];
    {
        return $this->where('user_id', $user_id)->where('sitter_id', $sitter_id)->update($data);
    }
}
