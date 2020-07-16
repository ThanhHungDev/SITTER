<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;

class UserModel extends Model
{
    protected $table = 'users';

    protected $fillable = ['avatar','email','password','first_name','last_name','last_name_furigana','birth_date','gender','post_code','pref','town','address','phone','role_id','token_verify','active','deleted','order','created_at','updated_at'];
    public function sitterProfile(){

        return $this->hasOne( SitterProfileModel::class, 'user_id', 'id' );
    }

    public function userProfile(){

        return $this->hasOne( UserProfileModel::class, 'user_id', 'id' );
    }

    public function sitter(){

        return $this->hasOne( SitterModel::class, 'user_id', 'id' );
    }

    /**
     * $condition same : 'galaries.type', '=', '1'
     */
    public function galaries( $condition = array()){

        if( empty($condition ) ){
            return $this->hasMany( GalaryModel::class, 'user_id', 'id' );
        }
        return $this->hasMany( GalaryModel::class, 'user_id', 'id' )
        ->where( $condition );

    }

    public function salaries( $condition = array()){

        if( empty($condition ) ){
            return $this->hasMany( SalaryModel::class, 'user_id', 'id' );
        }
        return $this->hasMany( SalaryModel::class, 'user_id', 'id' )
        ->where( $condition );

    }

    /**
     * $condition same : 'schedules.start', '=', '1'
     */
    public function schedules( $condition = array()){

        if( empty($condition ) ){
            return $this->hasMany( ScheduleModel::class, 'user_id', 'id' );
        }
        return $this->hasMany( ScheduleModel::class, 'user_id', 'id' )
        ->where( $condition );

    }

    public function verifyEmails( $condition = array()){

        if( empty($condition ) ){
            return $this->hasMany( VerifyEmailModel::class, 'user_id', 'id' );
        }
        return $this->hasMany( VerifyEmailModel::class, 'user_id', 'id' )
        ->where( $condition );

    }

    /**
     * là mối quan hệ dạng nhiều nhiều:
     * user -> activity -> skill thì thứ tự sẽ là như dưới
     */
    public function skills(){
        return $this->belongsToMany(SkillModel::class, ActivitySkillModel::class, 'user_id', 'skill_id')->withTimestamps();;
    }
    /**
     * là mối quan hệ dạng nhiều nhiều:
     * user -> activity -> experience thì thứ tự sẽ là như dưới
     */
    public function experiences(){
        return $this->belongsToMany(ExperienceModel::class, ActivityExperienceModel::class, 'user_id', 'experience_id')->withTimestamps();;
    }

    /**
     * $condition same : 'token_refeshs.detect', '=', '1'
     */
    public function tokenRefeshs( $condition = array()){

        if( empty($condition ) ){
            return $this->hasMany( TokenRefeshModel::class, 'user_id', 'id' );
        }
        return $this->hasMany( TokenRefeshModel::class, 'user_id', 'id' )
        ->where( $condition );

    }

    /**
     * $condition same : 'token_refeshs.detect', '=', '1'
     * pls design continues...
     */
    public function families(){

        return null;
    }


    public function getUserByName($name){

        return $this->where('first_name', $name)->orWhere('last_name', $name);
    }

    public static function insert($params)
    {
        $params['created_at'] = date("Y-m-d H:i:s");
        $params['updated_at'] = date("Y-m-d H:i:s");

        return UserModel::insertGetId($params);
    }

    // Phong:18062020 _ for Show items Top Page
    public function loadDataItemsTopPage($page = 1){
        $builder =  DB::table('users as user')
        //join get avatar image
        ->leftJoin('galaries as gal', function($join)
        {
            $join->on('gal.user_id', '=', 'user.id');
            $join->on('gal.type', '=', DB::raw("'1'"));
        })
        //join get info profile
        ->join('sitters as sits', 'sits.user_id', '=', 'user.id')
        //join get info salary
        ->leftJoin('salaries as sal', function($join)
        {
            $join->on('sal.user_id', '=', 'user.id');
            $join->on('sal.type', '=', DB::raw("'1'"));
        })
        ->select('user.id', 'user.gender', 'sits.self_introduce', 'sal.salary', 'user.avatar as avatar', 'user.first_name', 'user.last_name', 'user.first_name_furigana', 'user.last_name_furigana')
        ->where('user.role_id', 2)
        ->orderBy('user.id','DESC');
        return $builder;
    }
    // Phong:18062020 _ for search items
    public function searchItems($data = []){
        //dd($data['cage']);
        //process query data
        $builder =  DB::table('users as user')
        //join get avatar image
        ->leftJoin('galaries as gal', function($join)
        {
            $join->on('gal.user_id', '=', 'user.id');
            $join->on('gal.type', '=', DB::raw("'1'"));
        })
        //join get skills by user
        ->leftJoin('activity_skills as actskill', 'actskill.user_id', '=', 'user.id')
        //join get experiences by user
        ->leftJoin('activity_experiences as actexps', 'actexps.user_id', '=', 'user.id')
        //join get info profile
        ->join('sitters as sits', 'sits.user_id', '=', 'user.id')
        //join get info salary
        ->leftJoin('salaries as sal', function($join)
        {
            $join->on('sal.user_id', '=', 'user.id');
            $join->on('sal.type', '=', DB::raw("'1'"));
        })
        //join get working date
        ->leftJoin('schedules as schl', 'schl.user_id', '=', 'user.id')
        //select column data
        ->select('user.id', 'user.gender', 'sits.self_introduce', 'sal.salary', 'user.avatar as avatar', 'user.first_name', 'user.last_name', 'user.first_name_furigana', 'user.last_name_furigana')
        //group data
        ->groupBy('user.id', 'user.gender', 'sits.self_introduce', 'sal.salary', 'user.avatar', 'user.first_name', 'user.last_name', 'user.first_name_furigana', 'user.last_name_furigana')
        //sitter user type
        ->where('user.role_id', 2);

        //filter by city/prefecture
        if(!empty($data['wdate'])){
            $builder->whereIn('schl.work_date', $data['wdate']);
            //filter by time in - time out
            if (!empty($data['time_in']) && !empty($data['time_out'])) {
                $_time_in = $data['time_in'];
                $_time_out = $data['time_out'];
                $builder->where(function ($query) use ($_time_in, $_time_out){
                    $query->whereBetween('schl.start', [$_time_in, $_time_out]);
                    $query->orWhereBetween('schl.finish', [$_time_in, $_time_out]);
                    $query->orWhere(function ($sub) use ($_time_in, $_time_out){
                        $sub->where('schl.start', '<=', $_time_in);
                        $sub->where('schl.finish', '>=', $_time_out);
                    });
                });
            }
        }
        //filter by city/prefecture
        if(!empty($data['wplace'])){
            $builder->where('user.pref', $data['wplace']);
        }
        if(!empty($data['wplacedetail'])){
            $builder->where('user.pref', $data['wplacedetail']);
        }
        //filter by skill
        if (!empty($data['skills'])) {
            $builder->whereIn('actskill.skill_id', $data['skills']);
        }
        //filter by experience
        if (!empty($data['exps'])) {
            $builder->whereIn('actexps.experience_id', $data['exps']);
        }
        //filter by child age need care
        if (!empty($data['cage'])) {
            if($data['cage'] == '0mth'){
                $builder->where('sits.kid_age_start', 0);
            }else if($data['cage'] == '1to2mth'){
                $builder->where(function ($query){
                    $query->where('sits.kid_age_start', '<=', 2);
                    $query->where('sits.kid_age_end', '>=', 1);
                });
            }else if($data['cage'] == '3to5mth'){
                $builder->where(function ($query){
                    $query->where('sits.kid_age_start', '<=', 5);
                    $query->where('sits.kid_age_end', '>=', 3);
                });
            }else if($data['cage'] == '6to11mth'){
                $builder->where(function ($query){
                    $query->where('sits.kid_age_start', '<=', 11);
                    $query->where('sits.kid_age_end', '>=', 6);
                });
            }else if($data['cage'] == '1year'){
                $builder->where('sits.kid_age_start', 12);
            }else if($data['cage'] == '2year'){
                $builder->where('sits.kid_age_start', 12);
            }else if($data['cage'] == '3to6year'){
                $builder->where('sits.kid_age_start', 12);
            }else if($data['cage'] == 'gt7year'){
                $builder->where('sits.kid_age_start', 12);
            }
        }
        //filter by salary
        if (!empty($data['wcond'])) {
            if($data['wcond'] == '1'){
                $builder->whereBetween('sal.salary', [1000, 1490]);
            }else if($data['wcond'] == '2'){
                $builder->whereBetween('sal.salary', [1500, 1990]);
            }else if($data['wcond'] == '3'){
                $builder->where('sal.salary', '>=', 2000);
            }
        }
        //filter detail by multi salary
        if (!empty($data['cash'])) {
            $_cash = $data['cash'];
            $builder->where(function ($query) use ($_cash) {
                $cnt = 0;
                foreach ($_cash as $key => $value) {
                    $cnt++;
                    if ($cnt == 0) {
                        $query->where(1,1);
                    }else{
                        if($value == '1'){
                            $query->orWhereBetween('sal.salary', [1000, 1490]);
                        }else if($value == '2'){
                            $query->orWhereBetween('sal.salary', [1500, 1990]);
                        }else if($value == '3'){
                            $query->orWhere('sal.salary', '>=', 2000);
                        }
                    }
                }
            });
        }
        //filter detail by multi age child range
        if (!empty($data['age_range'])) {
            $_age_range = $data['age_range'];
            $builder->where(function ($query) use ($_age_range) {
                $cnt = 0;
                foreach ($_age_range as $key => $value) {
                    $cnt++;
                    if ($cnt == 0) {
                        $query->where(1,1);
                    }else{
                        if($value == '0mth'){
                            $query->orWhere('sits.kid_age_start', 0);
                        }else if($value == '1to2mth'){
                            $query->orWhere(function ($sub_query){
                                $sub_query->where('sits.kid_age_start', '<=', 2);
                                $sub_query->where('sits.kid_age_end', '>=', 1);
                            });
                        }else if($value == '3to5mth'){
                            $query->orWhere(function ($sub_query){
                                $sub_query->where('sits.kid_age_start', '<=', 5);
                                $sub_query->where('sits.kid_age_end', '>=', 3);
                            });
                        }else if($value == '6to11mth'){
                            $query->orWhere(function ($sub_query){
                                $sub_query->where('sits.kid_age_start', '<=', 11);
                                $sub_query->where('sits.kid_age_end', '>=', 6);
                            });
                        }else if($value == '1year'){
                            $query->orWhere('sits.kid_age_start', 12);
                        }else if($value == '2year'){
                            $query->orWhere('sits.kid_age_start', 12);
                        }else if($value == '3to6year'){
                            $query->orWhere('sits.kid_age_start', 12);
                        }else if($value == 'gt7year'){
                            $query->orWhere('sits.kid_age_start', 12);
                        }
                    }
                }
            });
        }
        //filter detail by multi number children
        if (!empty($data['num_child'])) {
            $_num_child = $data['num_child'];
            $builder->where(function ($query) use ($_num_child) {
                $cnt = 0;
                foreach ($_num_child as $key => $value) {
                    $cnt++;
                    if ($cnt == 0) {
                        $query->where(1,1);
                    }else{
                        $query->orWhere('sits.kid_qty', $value);
                    }
                }
            });
        }

        $builder->orderBy('user.id','DESC');
        //pagination
        $_list_user = $builder->paginate(20);
        return $_list_user;
    }

    public function activeUserById($id)
    {
        return $this->where('id', $id)->update(['active' => true]);
    }

    public function checkUserIsactiveByParams($value, $field)
    {
        return $this->select('id', 'first_name', 'last_name')->where([$field => $value, 'active' => true])->first()->toarray();
    }

    public function changePasswordByField($field_name, $data)
    {
        return $this->where($field_name, $data[$field_name])->update(['password' => $data['password']]);
    }

    public function updateByField($field, $data)
    {
        return DB::table($this->table)->where($field, $data[$field])->update($data);
    }

    public function countEmployers($condition = array())
    {
        $fieldSelect = $this->getFiledEmployers();
        $builder =  DB::table($this->table, 'u')->select(DB::raw($fieldSelect));
        $handelBuilder = $this->handleFindEmployers($builder, $condition);
        return $handelBuilder->get()->count();
    }

    public function findEmployers($condition)
    {
        $fieldSelect = $this->getFiledEmployers();
        $builder =  DB::table($this->table, 'u')->select(DB::raw($fieldSelect));
        $handelBuilder = $this->handleFindEmployers($builder, $condition);
        $data = $handelBuilder->orderBy('u.id', 'desc')
                            ->simplePaginate(10)
                            ->appends($condition->except('page', 'role_type', 'type_galaries'));
        return $data;
    }

    private function handleFindEmployers($builder, $condition = array())
    {
        $builder->join('employer_profiles as e', 'e.user_id', '=', 'u.id')
                ->leftjoin('galaries as g', 'g.user_id', '=', 'u.id');

        if(isset($condition['type_galaries']) && !empty($condition['type_galaries'])){
            $builder->whereIn('g.type', $condition['type_galaries']);
        }
        if(isset($condition['pref']) && !empty($condition['pref'])){
            $builder->where('u.pref', $condition['pref']);
        }
        if(isset($condition['name']) && !empty($condition['name'])){
            $builder->whereRaw(" (u.first_name || u.last_name) LIKE  ?", ['%'.$condition['name'].'%']);
        }
        if(isset($condition['date-reg']) && !empty($condition['date-reg'])){
            $builder->whereDate('u.created_at', $condition['date-reg']);
        }

        $builder->where('u.role_id', $condition['role_type'])
                ->where('u.active', true)
                ->where('u.deleted', false)
                ->groupByRaw(' u.id, e.id ');

        return $builder;
    }

    public function getFiledEmployers()
    {
        return "u.id as user_id,
                e.id as id_profile,
                u.avatar,
                u.post_code,
                u.town,
                u.pref,
                u.address,
                CONCAT(u.post_code,'　', u.pref, u.town, u.address) as full_address,
                u.birth_date,
                date_part('year', AGE(u.birth_date)) as age_year,
                u.email,
                u.first_name,
                u.last_name,
                CONCAT(u.first_name,'　',u.last_name) as full_name,
                u.first_name_furigana,
                u.last_name_furigana,
                CONCAT(u.first_name_furigana,'　',u.last_name_furigana) as full_name_furigana,
                u.gender,
                u.phone,
                u.created_at,
                string_agg(DISTINCT concat(g.name::text,'|',g.type),',') as url";
    }

    public function findSitters($condition)
    {
        $fieldSelect = $this->getFiledSitters();
        $builder =  DB::table($this->table, 'u')->select(DB::raw($fieldSelect));
        $handelBuilder = $this->handleFindSitters($builder, $condition);
        $data = $handelBuilder->orderBy('u.id', 'desc')
                            ->simplePaginate(10)
                            ->appends($condition->except('page'));
        return $data;
    }

    private function handleFindSitters($builder, $condition = array())
    {
        $builder->join('sitter_profiles as s', 's.user_id', '=', 'u.id')
                ->leftjoin('galaries as g', 'g.user_id', '=', 'u.id');

        if(isset($condition['type_galaries']) && !empty($condition['type_galaries'])){
            $builder->whereIn('g.type', $condition['type_galaries']);
        }
        if(isset($condition['pref']) && !empty($condition['pref'])){
            $builder->where('u.pref', $condition['pref']);
        }
        if(isset($condition['name']) && !empty($condition['name'])){
            $builder->whereRaw(" u.first_name || u.last_name LIKE  ?", ['%'.$condition['name'].'%']);
        }
        if(isset($condition['created_at']) && !empty($condition['created_at'])){
            $builder->whereDate('u.created_at', $condition['created_at']);
        }

        $builder->where('u.role_id', $condition['role_type'])
                ->where('u.active', true)
                ->where('u.deleted', false)
                ->groupByRaw('u.id, s.user_id');

        return $builder;
    }

    public function getFiledSitters()
    {
        return "u.id as user_id,
                u.avatar,
                u.post_code,
                u.town,
                u.pref,
                u.address,
                CONCAT(u.post_code,'　', u.pref, u.town, u.address) as full_address,
                u.birth_date,
                date_part('year', AGE(u.birth_date)) as age_year,
                u.email,
                u.first_name,
                u.last_name,
                CONCAT(u.first_name,'　',u.last_name) as full_name,
                u.first_name_furigana,
                u.last_name_furigana,
                CONCAT(u.first_name_furigana,'　',u.last_name_furigana) as full_name_furigana,
                u.gender,
                u.phone,
                u.created_at,
                bool_and(s.publish) as publish,
                admin_confirm,
                string_agg(DISTINCT concat(g.path,'/',g.name::text,'|',g.type),',') as url";
    }
}
