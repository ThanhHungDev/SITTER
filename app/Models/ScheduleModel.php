<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ScheduleModel extends Model
{
    protected $table = 'schedules';
    protected $fillable = ['user_id', 'work_date', 'start', 'finish', 'start', 'overnight', 'type', 'status', 'created_at', 'updated_at'];

    public function inforSitterBookingByCondition($condition = array()){
        $sitterID = 0;
        $date = Carbon::now();
        if($condition['sitterID']){
            $sitterID = $condition['sitterID'];
        }

        if($condition['year'] && $condition['month'] && $condition['date']){
            $date = Carbon::create($condition['year'], $condition['month'], $condition['date'])->format('Y-m-d');
        }
        return $this->join('sitter_profiles', 'sitter_profiles.user_id', '=', 'schedules.user_id')
        ->where('schedules.user_id', $sitterID)
        ->where('schedules.work_date', $date);
    }
}
