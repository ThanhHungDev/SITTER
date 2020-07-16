<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SitterProfileModel extends Model
{
    protected $table = 'sitter_profiles';
    protected $fillable = ['user_id', 'type_upload', 'contact_name', 'contact_address', 'contact_phone', 'contact_relationship', 'experience', 'type_work', 'publish', 'type_work','deleted', 'reamrk', 'updated_at'];
    
    public function user()
    {
        return $this->belongsTo(UserModel::class, 'user_id', 'id');
    }
}
