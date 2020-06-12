<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    protected $table = 'users';

    
    public function sitterProfile(){

        return $this->hasOne( SitterProfileModel::class, 'user_id', 'id' );
    }

    public function userProfile(){

        return $this->hasOne( UserProfileModel::class, 'user_id', 'id' );
    }

    /**
     * $condition same : 'galaries.type', '=', '1'
     */
    public function galaries( $condition = array()){

        if( empty($condition ) ){
            return $this->hasMany( GalaryModel::class, 'user_id', 'id' );
        }
        return $this->hasMany( GalaryModel::class, 'user_id', 'id' )
        ->where( $condition );
        
    }

    /**
     * $condition same : 'schedules.start', '=', '1'
     */
    public function schedules( $condition = array()){

        if( empty($condition ) ){
            return $this->hasMany( ScheduleModel::class, 'user_id', 'id' );
        }
        return $this->hasMany( ScheduleModel::class, 'user_id', 'id' )
        ->where( $condition );
        
    }
    
    /**
     * là mối quan hệ dạng nhiều nhiều: 
     * user -> activity -> skill thì thứ tự sẽ là như dưới
     */
    public function skills(){
        return $this->belongsToMany(SkillModel::class, ActivitySkillModel::class, 'user_id', 'skill_id');
    }
    /**
     * là mối quan hệ dạng nhiều nhiều: 
     * user -> activity -> experience thì thứ tự sẽ là như dưới
     */
    public function experiences(){
        return $this->belongsToMany(ExperienceModel::class, ActivityExperienceModel::class, 'user_id', 'experience_id');
    }

    /**
     * $condition same : 'token_refeshs.detect', '=', '1'
     */
    public function tokenRefeshs( $condition = array()){

        if( empty($condition ) ){
            return $this->hasMany( TokenRefeshModel::class, 'user_id', 'id' );
        }
        return $this->hasMany( TokenRefeshModel::class, 'user_id', 'id' )
        ->where( $condition );
        
    }

    /**
     * $condition same : 'token_refeshs.detect', '=', '1'
     * pls design continues...
     */
    public function families(){

        return null;
    }


    public function getUserByName($name){

        return $this->where('first_name', $name)->orWhere('last_name', $name);
    }
}
