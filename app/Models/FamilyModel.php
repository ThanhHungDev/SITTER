<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class FamilyModel extends Model
{
    protected $table = 'families';
    protected $fillable = ['id_profile','first_name','last_name','first_name_furigana','last_name_furigana','birth_date','gender','allergic','chronic', 'type', 'remark', 'deleted','created_at','updated_at'];

    public function getByField($idProfile)
    {
        $select = $this->getFieldFamily();
        return  $this->select(DB::raw($select))
                        ->where('families.id_profile', '=', $idProfile)
                        ->orderBy('type', 'asc')
                        ->get()
                        ->toArray();
    }

    public function getFieldFamily()
    {
        return "families.id, 
                families.first_name, 
                families.last_name, 
                CONCAT (families.first_name,' ',families.last_name) as name, 
                families.first_name_furigana, 
                families.last_name_furigana, 
                CONCAT (families.first_name_furigana,' ',families.last_name_furigana) as name_furigana, 
                families.birth_date, 
                date_part('year', AGE(families.birth_date)) as age_year, 
                date_part('month', AGE(families.birth_date)) as age_month, 
                families.gender, 
                families.type, 
                families.allergic, 
                families.chronic ";
    }

    public function updateFamily($field, $data)
    {
        return DB::table($this->table)
            ->where($field, $data[$field])
            ->update($data);
    }
}
