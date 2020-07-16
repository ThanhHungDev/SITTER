<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TokenRefeshModel extends Model
{
    protected $table = 'token_refeshes';
    protected $fillable = ['user_id', 'token', 'detect'];

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
}
