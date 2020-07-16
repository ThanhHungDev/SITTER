<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class SalaryModel extends Model
{
    protected $table = 'salaries';
    protected $fillable = ['user_id', 'salary', 'type', 'created_at', 'updated_at'];

    public function user()
    {
        return $this->belongsTo(UserModel::class, 'user_id', 'id');
    }

    public function insert($params)
    {
        return DB::table($this->table)->insert($params);
    }
}
