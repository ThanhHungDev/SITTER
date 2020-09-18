<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PayoutModel extends Model
{
    protected $table = 'payouts';
    protected $fillable = ['payment_id', 'stripe_tranfer', 'status', 'note', 'created_at', 'updated_at'];

    
}
