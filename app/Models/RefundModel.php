<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RefundModel extends Model
{
    protected $table = 'refunds';
    protected $fillable = ['type', 'amount', 'reason', 'refund_nf', 'note','created_at', 'updated_at'];
    
}
