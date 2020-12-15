<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BankAccountModel extends Model
{
    protected $table    = 'bank_accounts';
    protected $fillable = ['user_id', 'stripe_bank_id', 'account_number', 'account_holder_name', 'bank_name', 'branch_name', 'bank_code', 'branch_code', 'created_at', 'updated_at'];
}
