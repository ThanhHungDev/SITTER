<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class BookingModel extends Model
{
    protected $table    = 'bookings';
    protected $fillable = ['employer_id', 'sitter_id', 'status', 'sitter_accept', 'employer_accept', 'created_at', 'updated_at'];

    public function dateBookings($condition = array())
    {
        if (empty($condition)) {
            return $this->hasMany(DateBookingModel::class, 'booking_id', 'id');
        }
        return $this->hasMany(DateBookingModel::class, 'booking_id', 'id')
                    ->where($condition);
    }

    public function getListEmployerBookings($condition = array())
    {
        return $this->with('dateBookings')
                    ->leftJoin('users', function($join){
                        $join->on('users.id', '=', 'bookings.employer_id');
                    })
                    ->select(
                        'bookings.*',
                        DB::raw("CONCAT(users.first_name, ' ', users.last_name) as employer_name")
                    )
                    ->where($condition)
                    ->latest();
    }

    public function getBookingByEmployer($employer_id, $condition)
    {
        return  DB::table($this->table)
        ->join('date_bookings', 'bookings.id', '=', 'date_bookings.booking_id')
        ->join('users', 'bookings.sitter_id', '=', 'users.id')
        ->select([
            'bookings.id',
            'employer_id', 
            'sitter_id',  
            'users.first_name', 
            'users.last_name', 
            'status', 
            'sitter_accept', 
            'employer_accept',
            'date_bookings.work_date', 
            'date_bookings.start',
            'date_bookings.finish',
            'date_bookings.type',
            'date_bookings.salary'
        ])
        ->where('employer_id', $employer_id)
        ->where('status', '!=', $condition['status'])
        ->where('sitter_accept', $condition['sitter_accept'])
        ->where('employer_accept', $condition['employer_accept'])
        ->orderBy('bookings.id', 'desc')
        ->paginate(10);
    }

    public function getBookingByAdmin($condition)
    {
        $fieldSelect = $this->getFiledBooking();
        return  DB::table($this->table)
        ->join('date_bookings', 'bookings.id', '=', 'date_bookings.booking_id')
        ->join('users as s', 'bookings.sitter_id', '=', 's.id')
        ->join('users as e', 'bookings.employer_id', '=', 'e.id')
        ->join('orders as o', 'bookings.id', '=', 'o.booking_id')
        ->select(DB::raw($fieldSelect))
        // ->where('status', '!=', $condition['status'])
        // ->where('sitter_accept', $condition['sitter_accept'])
        // ->where('employer_accept', $condition['employer_accept'])
        ->orderBy('bookings.id', 'desc')
        ->paginate(20);
    }
    public function getFiledBooking()
    {
        return "
            bookings.id,
            bookings.employer_id, 
            bookings.sitter_id,  
            o.id as order_id,
            CONCAT(s.first_name, '', s.last_name) as sitter_fullname, 
            CONCAT(e.first_name, '', e.last_name) as employer_fullname, 
            bookings.status, 
            bookings.sitter_accept, 
            bookings.employer_accept,
            date_bookings.work_date, 
            date_bookings.start,
            date_bookings.finish,
            date_bookings.type,
            date_bookings.salary
        ";
    }
}
