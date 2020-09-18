<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PaymentModel extends Model
{
    protected $table = 'payments';
    protected $fillable = ['user_id', 'order_id', 'stripe_payment', 'is_payout','created_at', 'updated_at'];

    public function getDataByOrderId($orderId)
    {
        return $this->select('payments.order_id',
                    'payments.stripe_payment',
                    'dbk.work_date',
                    'dbk.start',
                    'dbk.finish',
                    'ord.salary',
                    'ord.price',
                    'ord.vat',
                    'ord.fee_stripe',
                    'ord.profit')
                    ->join('orders as odr' ,'odr.id', '=', 'payments.order_id')
                    ->leftjoin('date_bookings as dbk', 'dbk.booking_id', '=', 'ord.booking_id')
                    ->where('payments.order_id', $orderId)
                    ->firstOrFail()->toArray();
    }

    public function getListForPayout()
    {
        return $this->select(
                    'payments.id as payment_id',
                    'payments.is_payout', 
                    'payments.stripe_payment', 
                    'payments.order_id',
                    'b.status as status_booking',
                    'b.sitter_accept',
                    'b.employer_accept',
                    'b.date_cancel',
                    'odr.price',
                    'odr.fee_stripe',
                    'u.stripe_account_id',
                    'dbk.work_date'
                    )
                    ->join('orders as odr' , 'odr.id', '=', 'payments.order_id')
                    ->join('bookings as b', 'b.id', '=', 'odr.booking_id')
                    ->join('date_bookings as dbk', 'dbk.booking_id', '=', 'odr.booking_id')
                    ->join('users as u', 'u.id','=', 'b.sitter_id')
                    ->where('payments.is_payout', false)
                    ->where('dbk.work_date', '<=', now())
                    ->get();
    }
}
