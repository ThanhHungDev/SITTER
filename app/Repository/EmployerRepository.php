<?php
namespace App\Repository;

use Illuminate\Support\Facades\DB;

class EmployerRepository
{
    public function loadEmployerById($id){
        $builder = DB::table('users')->where('id', $id);
        return $builder;
    }
}