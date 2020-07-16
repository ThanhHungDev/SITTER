<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class GalaryModel extends Model
{
    protected $table = 'galaries';
    protected $fillable = ['user_id', 'name', 'path', 'type', 'created_at', 'updated_at'];

    public function user()
    {
        return $this->belongsTo(UserModel::class, 'user_id', 'id');
    }

    public function insert($params)
    {
        return DB::table($this->table)->insert($params);
    }

    public function getByField($field_name, $value, $type = array())
    {   
        return DB::table($this->table)->where($field_name, $value)->whereIn('type', $type)->get();
    }

    public function updateByField($field, $data)
    {
        return DB::table($this->table)->where($field, $data[$field])->update($data);
    }

    public function deleteByField($field, $data)
    {
        return DB::table($this->table)->where($field, $data[$field])->delete();
    }

    public function getUrlImageNewest($userId, $type)
    {
        $name = DB::table($this->table)
                ->select('name')
                ->where('user_id', $userId)
                ->where('type', $type)
                ->orderByDesc('created_at')
                ->first();
        if($name){
            return $name->name;
        }
        return '';                  
    }
}
