<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;
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
    
    /**
     * findBookingsHidden select all booking id condition: 
     * case 1: payment success and work_date <= yesterday
     * case 2: not access remove before date working 1 day
     * 
     * sql : 
     * select DISTINCT ON( bookings.sitter_id, bookings.employer_id ) sitter_id, 
     * "bookings"."id" 
     * from "bookings" inner join "date_bookings" on "bookings"."id" = "date_bookings"."booking_id" 
     * where 
     * ("status" = ? and "date_bookings"."work_date" <= ? and "cron_filter" = ?) 
     * or 
     * ("status" = ? and "date_bookings"."work_date" <= ? and "cron_filter" = ?) 
     * order by 
     * "bookings"."sitter_id" asc, 
     * "bookings"."employer_id" asc, 
     * "date_bookings"."work_date" desc
     *
     * @return Illuminate\Database\Eloquent\Model
     */
    public function findBookingsHidden(){
        
        return $this->join('date_bookings', 'bookings.id', '=', 'date_bookings.booking_id')
        ->where("cron_filter", "=", Config::get('constant.BOOKING_HIDDEN_CHANNEL.DEFAULT'))
        ->orderBy('bookings.sitter_id')
        ->orderBy('bookings.employer_id')
        ->orderBy('date_bookings.work_date', 'DESC')
        ->orderBy('bookings.status')
        ->select(
            DB::raw("DISTINCT ON( bookings.sitter_id, bookings.employer_id ) sitter_id"),
            'bookings.id',
            'date_bookings.work_date',
            'bookings.sitter_id',
            'bookings.employer_id',
            DB::raw("
            (
                CASE
                    WHEN status = 1 AND date_bookings.work_date <= '" . Carbon::yesterday()->format('Y-m-d') . "'
                            THEN 1
                    WHEN status = 0 and date_bookings.work_date <= '" . Carbon::tomorrow()->format('Y-m-d') . "'
                            THEN 2
                    ELSE 0
                END 
            ) AS filter
            ")
        );
    }



    /**
     * updateBookingsHidden 
     * 
     * update all booking id condition: 
     * case 1: payment success and work_date <= yesterday
     * case 2: not access remove before date working 1 day
     * 
     * @param  mixed $condition['less-than-booking'] type : array( 
     *      [ 'work_date' => 'value', 'sitter_id' => number, 'employer_id' => number ],
     *      ....
     * )
     *
     * @return int
     */
    public function hiddenBookingByCondition($condition){

        $filter = $this->join('date_bookings', 'bookings.id', '=', 'date_bookings.booking_id');

        
        if( isset($condition['less-than-booking']) ){

            foreach($condition['less-than-booking'] as $key => $booking ){

                $filter = $filter->orWhere(function ($query) use ($booking) {
                    $query->where("date_bookings.work_date", "<=", $booking['work_date'])
                          ->where('sitter_id', "=", $booking['sitter_id'])
                          ->where('employer_id', "=", $booking['employer_id']);
                });
            }
        }
        $filter->update([ 'cron_filter' => Config::get('constant.BOOKING_HIDDEN_CHANNEL.FILTERED') ]);
    }


    public function getBookingPaid( $condition ){

        $filter = $this ->join('date_bookings', 'bookings.id', '=', 'date_bookings.booking_id')
                        ->where("$this->table.status", '=', 1)
                        ->where("$this->table.sitter_accept", '=', 1)
                        ->where("$this->table.employer_accept", '=', 1);
        
        if( isset($condition['sitter']) ){

            $filter = $filter->where("$this->table.sitter_id", '=', $condition['sitter']);
        }
        return $filter;
    }

}
