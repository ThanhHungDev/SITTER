<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class SitterReviewModel extends Model
{
    protected $table = 'sitter_reviews';

    protected $fillable = ['sitter_id', 'employer_id', 'rate', 'comment', 'created_at', 'updated_at'];

    public function getRatingTotal($sitter_id)
    {
        return  $this->select(DB::raw('SUM(rate) as rate_total, COUNT(id) as total'))
                    ->where('sitter_reviews.sitter_id', '=', $sitter_id)
                    ->get();
    }

    public function getListReviewBySitterId($condition)
    {
        return DB::table($this->table, 'sr')->select(DB::raw(' sr.id, u.avatar, u.gender, sr.rate, sr.comment, sr.created_at '))
                ->join('users as u', 'sr.employer_id', '=', 'u.id')
                ->where('sr.sitter_id', $condition['id'])
                ->orderBy('sr.id', 'desc')
                ->paginate($condition['limit']);
    }
}
