<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class SitterModel extends Model
{
    protected $table = 'sitters';
    protected $fillable = ['user_id', 'age', 'pref', 'city', 'kid_age_start', 'kid_age_end', 'kid_qty', 'exp_kid_qty', 'exp_parenting', 'exp_sitter', 'time_support', 'self_introduce', 'service_introduce', 'title', 'updated_at', 'created_at'];

    public function user()
    {
        return $this->belongsTo(UserModel::class, 'user_id', 'id');
    }

    public function insert($params)
    {
        return DB::table($this->table)->insert($params);
    }
}
