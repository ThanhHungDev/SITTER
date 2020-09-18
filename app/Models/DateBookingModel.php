<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DateBookingModel extends Model
{
    protected $table = 'date_bookings';
    protected $fillable = ['booking_id','work_date','start','finish','type','salary','created_at','updated_at'];
}
