<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class EmployerProfileModel extends Model
{
    protected $table = 'employer_profiles';
    protected $fillable = ['user_id','type_upload','nick_name','note','remark','publish','deleted','created_at','updated_at'];

    public function getByField($userId)
    {
        $select = $this->getFieldProfile();
        return  $this->select(DB::raw($select))
                        ->leftjoin('users', 'users.id', '=', 'employer_profiles.user_id')
                        ->where('employer_profiles.user_id', '=', $userId)
                        ->first()->toArray();
    }

    public function getFieldProfile()
    {
        return "employer_profiles.nick_name, 
                employer_profiles.note, 
                employer_profiles.id, 
                users.id as user_id, 
                users.gender, 
                users.post_code, 
                users.pref, 
                users.town, 
                users.address, 
                CONCAT(users.pref, users.town, users.address) as full_address,
                users.avatar ";
    }

    public function updateProfile($field, $data)
    {
        return DB::table($this->table)
            ->where($field, $data[$field])
            ->update($data);
    }
}
