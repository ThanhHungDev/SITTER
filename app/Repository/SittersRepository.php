<?php
namespace App\Repository;

use Illuminate\Support\Facades\DB;

class SittersRepository
{
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
        //join get info sitter profiles
        ->leftJoin('sitter_profiles as prof', 'prof.user_id', '=', 'user.id')
        //join get info salary
        ->leftJoin('salaries as sal', function($join)
        {
            $join->on('sal.user_id', '=', 'user.id');
            $join->on('sal.type', '=', DB::raw("'1'"));
        })
        ->select('user.id', 'user.gender', 'sits.self_introduce', 'sal.salary', 'user.avatar as avatar', 'user.first_name', 'user.last_name', 'user.first_name_furigana', 'user.last_name_furigana')
        ->where('user.role_id', config('constant.ROLE.SITTER'))
        ->where('user.admin_confirm', config('constant.ADMIN_CONFIRM.ACCEPT'))
        ->where('user.active', true)
        ->where('prof.publish', true)
        ->where('user.deleted', false)
        ->orderBy('user.id','DESC');
        return $builder;
    }

    public function loadExperiences(){
        return DB::table('experiences')->select('id', 'name')->where('deleted', false);
    }

    public function loadSkills(){
        return DB::table('skills')->select('id', 'name');
        //->where('deleted', false);
    }

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
        //join get info sitter profiles
        ->leftJoin('sitter_profiles as prof', 'prof.user_id', '=', 'user.id')
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
        ->where('user.role_id', config('constant.ROLE.SITTER'))
        ->where('user.admin_confirm', config('constant.ADMIN_CONFIRM.ACCEPT'))
        ->where('user.active', true)
        ->where('prof.publish', true)
        ->where('user.deleted', false);

        //filter by city/prefecture
        if(!empty($data['wdate'])){
            $_time_in = $data['time_in'];
            $_time_out = $data['time_out'];
            $_working_date = $data['wdate'];
            if(count($_working_date) > 1){
                $builder->where(function ($query) use ($_working_date, $_time_in, $_time_out) {
                    $cnt = 0;
                    foreach ($_working_date as $key => $value) {
                        $cnt++;
                        if ($cnt == 0) {
                            $query->where(1,1);
                        }else{
                            $query->orWhere(function ($sub_query) use ($value, $_time_in, $_time_out) {
                                $sub_query->Where('schl.work_date', $value);
                                //filter by time in - time out
                                if (!empty($_time_in) && !empty($_time_out)) {
                                    $sub_query->where(function ($child_query) use ($_time_in, $_time_out){

                                        $child_query->whereBetween('schl.start', [$_time_in, $_time_out]);
                                        $child_query->orWhereBetween('schl.finish', [$_time_in, $_time_out]);
                                        $child_query->orWhere(function ($sub) use ($_time_in, $_time_out){
                                            $sub->where('schl.start', '<=', $_time_in);
                                            $sub->where('schl.finish', '>=', $_time_out);
                                        });
                                    });
                                }
                            });
                        }
                    }
                });
            }else{
                $builder->whereIn('schl.work_date', $_working_date);
                //filter by time in - time out
                if (!empty($_time_in) && !empty($_time_out)) {
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

        }
        //filter by city/prefecture
        if(!empty($data['wplace'])){
            $builder->whereIn('user.pref', $data['wplace']);
        }
        if(!empty($data['wplacedetail'])){
            $builder->whereIn('user.pref', $data['wplacedetail']);
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
                $builder->where(function ($query){
                    $query->where('sits.kid_age_start', '<=', 23);
                    $query->where('sits.kid_age_end', '>=', 12);
                });
            }else if($data['cage'] == '2year'){
                $builder->where(function ($query){
                    $query->where('sits.kid_age_start', '<=', 35);
                    $query->where('sits.kid_age_end', '>=', 24);
                });
            }else if($data['cage'] == '3to6year'){
                $builder->where(function ($query){
                    $query->where('sits.kid_age_start', '<=', 83);
                    $query->where('sits.kid_age_end', '>=', 36);
                });
            }else if($data['cage'] == 'gt7year'){
                $builder->where(function ($query){
                    $query->where('sits.kid_age_start', '<=', 120);
                    $query->where('sits.kid_age_end', '>=', 84);
                });
            }
        }
        //filter by salary
        if (!empty($data['wcond'])) {
            if($data['wcond'] == '1'){
                $builder->whereBetween('sal.salary', [1000, 1500]);
            }else if($data['wcond'] == '2'){
                $builder->whereBetween('sal.salary', [1500, 2000]);
            }else if($data['wcond'] == '3'){
                $builder->whereBetween('sal.salary', [2000, 2300]);
            }else if($data['wcond'] == '4'){
                $builder->whereBetween('sal.salary', [2300, 2600]);
            }else if($data['wcond'] == '5'){
                $builder->whereBetween('sal.salary', [2600, 3000]);
            }else if($data['wcond'] == '6'){
                $builder->where('sal.salary', '>=', 3000);
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
                            $query->orWhereBetween('sal.salary', [1000, 1500]);
                        }else if($value == '2'){
                            $query->orWhereBetween('sal.salary', [1500, 2000]);
                        }else if($value == '3'){
                            $query->orWhereBetween('sal.salary', [2000, 2300]);
                        }else if($value == '4'){
                            $query->orWhereBetween('sal.salary', [2300, 2600]);
                        }else if($value == '5'){
                            $query->orWhereBetween('sal.salary', [2600, 3000]);
                        }else if($value == '6'){
                            $query->orWhere('sal.salary', '>=', 3000);
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
                            $query->where(function ($sub_query){
                                $sub_query->where('sits.kid_age_start', '<=', 23);
                                $sub_query->where('sits.kid_age_end', '>=', 12);
                            });
                        }else if($value == '2year'){
                            $query->where(function ($sub_query){
                                $sub_query->where('sits.kid_age_start', '<=', 35);
                                $sub_query->where('sits.kid_age_end', '>=', 24);
                            });
                        }else if($value == '3to6year'){
                            $query->where(function ($sub_query){
                                $sub_query->where('sits.kid_age_start', '<=', 83);
                                $sub_query->where('sits.kid_age_end', '>=', 36);
                            });
                        }else if($value == 'gt7year'){
                            $query->where(function ($sub_query){
                                $sub_query->where('sits.kid_age_start', '<=', 120);
                                $sub_query->where('sits.kid_age_end', '>=', 84);
                            });
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
                        $query->orWhere('sits.kid_qty', ">=", $value);
                    }
                }
            });
        }

        $builder->orderBy('user.id','DESC');
        //pagination
        $_list_user = $builder->get();
        return $_list_user;
    }

    public function checkSitterIsactiveByParams($value, $field)
    {
        $adminConfirm = config('constant.ADMIN_CONFIRM.ACCEPT');
        $sitterRole = config('constant.ROLE.SITTER');
        $builder = DB::table('users')->select('id', 'first_name', 'last_name', 'stripe_account_id', 'stripe_active')
                    ->where([$field => $value, 'active' => true, 'role_id' => $sitterRole, 'admin_confirm' => $adminConfirm]);
        return $builder;
    }

    public function loadSitterById($id){
        return DB::table('users')->where('id', $id);
    }

    public function loadSitterUserById($id){
        return DB::table('users')->where('id', $id)->where('admin_confirm', config('constant.ADMIN_CONFIRM.ACCEPT'));
    }

    public function loadSitterProfileById($id){
        return DB::table('sitter_profiles')->where('user_id', $id)->where('publish', true);
    }

    public function loadSitterSkillsById($id) {
        return DB::table('activity_skills')->select('skill_id')->where('user_id', $id)->where('deleted', false);
    }

    public function loadSitterGalariesById($id) {
        // $typeGalaries = config('constant.GALARY_TYPE.SITTER_AVATAR');
        return DB::table('galaries')
                                        // ->select('id','url', 'type')
                                        ->where('user_id', $id)
                                        // ->where('type', $typeGalaries)
                                        ->where('deleted', false);
    }

    public function getRatingTotal($sitter_id){
        return DB::table('sitter_reviews')->select(DB::raw('SUM(rate) as rate_total, COUNT(id) as total'))
                    ->where('sitter_reviews.sitter_id', '=', $sitter_id);
    }

    public function getListReviewBySitterId($id)
    {
        return DB::table('sitter_reviews', 'sr')->select(DB::raw(' sr.id, u.avatar, u.gender, sr.rate, sr.comment, sr.created_at '))
                ->join('users as u', 'sr.employer_id', '=', 'u.id')
                ->where('sr.sitter_id', $id)
                ->orderBy('sr.id', 'desc');
    }

    public function getSchedulesBySitterId($id){
        return DB::table('schedules')->select('id','work_date','start','finish','overnight','status')->where('user_id', $id)->where('work_date', '>', now());
    }

    public function getSitterBookedByEmployerId($id_employer){
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
        //join get info sitter profiles
        ->leftJoin('sitter_profiles as prof', 'prof.user_id', '=', 'user.id')
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
        ->where('user.role_id', config('constant.ROLE.SITTER'))
        ->where('user.admin_confirm', config('constant.ADMIN_CONFIRM.ACCEPT'))
        ->where('user.active', true)
        ->where('prof.publish', true)
        ->where('user.deleted', false)
        ->whereIn('user.id', function($query) use ($id_employer){
            $query->select('sitter_id')
            ->from('bookings')
            ->where(['employer_id' => $id_employer, 'employer_accept' => 1])->groupBy('sitter_id');
        });

        return $builder;

    }
}