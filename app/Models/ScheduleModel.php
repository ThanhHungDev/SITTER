<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ScheduleModel extends Model
{
    protected $table = 'schedules';
    protected $fillable = ['user_id', 'work_date', 'start', 'finish', 'start', 'overnight', 'type', 'status', 'created_at', 'updated_at'];
}
