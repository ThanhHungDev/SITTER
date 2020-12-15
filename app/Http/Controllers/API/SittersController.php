<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\CommonService;
use App\Services\SitterService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Repository\SittersRepository;
use Illuminate\Support\Facades\Auth;
use App\FactoryModel\FactoryModelInterface;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Models\UserModel;
use App\Rules\CheckBirthDayRule;
use App\Mail\SitterRegister;
use App\Repository\UsersRepository;

class SittersController extends Controller
{

    private $model = null;
    public function __construct(FactoryModelInterface $_model, CommonService $commonService, SitterService $sitterService) {
        $this->model = $_model;
        $this->JP_LOCATION = config('constant.JP_LOCATION');
        $this->commonService = $commonService;
        $this->sitterService = $sitterService;
        $this->middleware('guest', ['except' => ['logout', 'getLogout']]);
    }

    public function getSitterList() {

        $res = [
            'code'      => 400,
            'status'    => false,
            'data'      => [],
            'errors'    => [],
            'message'   => '',
        ];

        try {
            $res['code']    = 200;
            $res['status']  = true;
            $sitters        = new SittersRepository();
            //get data from repository
            $res['data']    = $sitters->loadDataItemsTopPage()->get()->toArray();
            $res['message'] = 'OK';
        } catch (\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }

        return response()->json($res);

    }

    public function getExps() {

        $res = [
            'code'      => 400,
            'status'    => false,
            'data'      => [],
            'errors'    => [],
            'message'   => '',
        ];

        try {
            $res['code']    = 200;
            $res['status']  = true;
            $sitters        = new SittersRepository();
            //get data from repository
            $res['data']    = $sitters->loadExperiences()->get()->toArray();
            $res['message'] = 'OK';
        } catch (\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }

        return response()->json($res);

    }

    
    public function getSkills() {

        $res = [
            'code'      => 400,
            'status'    => false,
            'data'      => [],
            'errors'    => [],
            'message'   => '',
        ];

        try {
            $res['code']   = 200;
            $res['status'] = true;
            $sitters = new SittersRepository();
            //get data from repository
            $res['data'] = $sitters->loadSkills()->get()->toArray();
            $res['message'] = 'OK';
        } catch (\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }

        return response()->json($res);

    }

    public function searchSitters(Request $request){

        $res = [
            'code'      => 400,
            'status'    => false,
            'data'      => [],
            'errors'    => [],
            'message'   => '',
        ];

        try{

             // Begin::Validate
             $messages = [
                'wplace.array' =>  '地域を配列として入力してください',
                'age_range.array' =>  '保育可能年齢を配列として入力してください',
                'num_child.array' =>  '受け入れ人数を配列として入力してください',
                'cash.array' =>  '時給を配列として入力してください',
                'exps.array' =>  '保有資格を配列として入力してください',
                'skills.array' =>  '特徴を配列として入力してください',
            ];
    
            $validator = Validator::make($request->all(), [
                'wplace' =>'array',
                'age_range' =>'array',
                'num_child' =>'array',
                'cash' =>'array',
                'exps' =>'array',
                'skills' =>'array'
            ], $messages);
    
            if( $validator->fails() ){
                $res['message'] =  $validator->errors()->first();
                return response()->json($res);
            }
            // End::Validate

            //get request
            $_wdate = $request['wdate'];
            $_cage = $request['cage'];
            $_wplace = $request['wplace'];
            $_wcond = $request['wcond'];
            $_wplacedetail = $request['wplacedetail'];
            $_wdatedetail = $request['wdatedetail'];
            $_time_in = $request['time_in'];
            $_time_out = $request['time_out'];
            $_age_range = $request['age_range'];
            $_num_child = $request['num_child'];
            $_cash = $request['cash'];
            $_exps = $request['exps'];
            $_skills = $request['skills'];

            if(!empty($_wdate))
            {
                $date_to_arr = explode(',', $_wdate);
                $func_convert_date = function ($date) {
                    $date_raw = Carbon::parse($date);
                    $date_final = $date_raw->format('yy-m-d');
                    return $date_final;
                };
                $date_arr = array_map($func_convert_date, $date_to_arr);
                $_wdate  = $date_arr;
            }
            //assign request to array
            $data_params['wdate'] = $_wdate;
            $data_params['cage'] = $_cage;
            $data_params['wplace'] = $_wplace;
            $data_params['wcond'] = $_wcond;
            $data_params['wplacedetail'] = $_wplacedetail;
            $data_params['wdatedetail'] = $_wdatedetail;
            $data_params['time_in'] = (!empty($_time_in)?(new Carbon($_time_in))->format('H:i:s'): null);
            $data_params['time_out'] = (!empty($_time_out)?(new Carbon($_time_out))->format('H:i:s'): null);
            $data_params['age_range'] = $_age_range;
            $data_params['num_child'] = $_num_child;
            $data_params['cash'] = $_cash;
            $data_params['exps'] = $_exps;
            $data_params['skills'] = $_skills;
            
            if($data_params['time_in'] != null && $data_params['time_out'] != null) {
                $carbon_time_in = Carbon::parse($data_params['time_in']);
                $carbon_time_out = Carbon::parse($data_params['time_out']);
                if($carbon_time_in->gt($carbon_time_out)) {
                    $res['message'] = 'Time in must be less than time out.';
                    return response()->json($res);
                };
            }

            //get data from repository
            $sitters = new SittersRepository();
            $_list_items = $sitters->searchItems( $data_params);

            /** nguyen_the_thoai cmt START */
            // $data['list_items']  = $_list_items;
            // $data['jp_locations']  = $this->JP_LOCATION;
            // $data['data_params'] = $data_params;
            // $data['is_login'] = false;
            // if (Auth::check() && Auth::user()->role_id == config('constant.ROLE.EMPLOYER')) {
            //     $data['is_login'] = true;
            // }
            /** nguyen_the_thoai cmt END */
            

            if($_list_items->isEmpty()) {
                $res['message'] = '見つかりません';
            }

            $res['code']    = 200;
            $res['status']  = true;
            $res['data']    = $_list_items;

        }catch(\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }
        return response()->json($res);
    }

    public function register(Request $request){

        $res = [
            'code'      => 400,
            'status'    => false,
            'data'      => [],
            'errors'    => [],
            'message'   => '',
        ];

        try{
            // Begin::Validate
            $messages = [
                'first_name.required' =>  '苗字を入力して下さい。',
                'first_name.min' =>  '苗字は1桁以上、255桁以下でなければなりません。',
                'first_name.max' =>  '苗字は1桁以上、255桁以下でなければなりません。',
                'last_name.required' =>  '名前を入力して下さい。',
                'last_name.min' =>  '名前は1桁以上、255桁以下でなければなりません。',
                'last_name.max' =>  '名前は1桁以上、255桁以下でなければなりません。',
                'first_name_furigana.required' =>  '苗字（フリガナ）を入力して下さい。',
                'first_name_furigana.min' =>  '苗字（フリガナ）は1桁以上、255桁以下でなければなりません。',
                'first_name_furigana.max' =>  '苗字（フリガナ）は1桁以上、255桁以下でなければなりません。',
                'last_name_furigana.required' =>  '名前（フリガナ）を入力して下さい。',
                'last_name_furigana.min' =>  '名前（フリガナ）は1桁以上、255桁以下でなければなりません。',
                'last_name_furigana.max' =>  '名前（フリガナ）は1桁以上、255桁以下でなければなりません。',
                'gender.required' =>  '性別を選択して下さい。',
                'birth_year.required' =>  '年を入力して下さい',
                'birth_month.required' =>  '月を入力して下さい',
                'birth_day.required' =>  '日を入力して下さい',
                'post_code.required' =>  '郵便番号を入力して下さい。',
                'post_code.min' =>  '郵便番号は1桁以上、255桁以下でなければなりません。',
                'post_code.max' =>  '郵便番号は1桁以上、255桁以下でなければなりません。',
                'pref.required' =>  '都道府県を選択して下さい。',
                'town.required' =>  '市区町村と番地を入力して下さい。',
                'phone.required'  =>  '電話番号を入力して下さい。',
                // 'phone.checkHyphen'  =>  'ハイフンは不要です',
                'phone.numeric'    =>  '電話番号は数字を入力してください。',
                'phone.digits_between' =>  '電話番号話番号は10桁以上、11桁以下でなければなりません。',
                'email.required' =>  'メールアドレスは必須です。',
                'email.email' =>  'メールアドレスを入力して下さい。',
                'email.unique' =>  'メールアドレスは既に存在しています。',
                'password.required' =>  'パスワードを入力して下さい。',
                'password.min' =>  'パスワードは半角英数文字6文字以上にする必要があります。',
                'password.max' =>  'パスワードは半角英数文字6文字以上にする必要があります。' ,
                'confirm_password.required' =>  'パスワード確認入力して下さい。',
                'confirm_password.min' =>  'パスワードは半角英数文字6文字以上にする必要があります。',
                'confirm_password.max' =>  'パスワードは半角英数文字6文字以上にする必要があります。',
                'confirm_password.same' => 'パスワード確認はパスワードと一致しません。'
            ];
    
            $validator = Validator::make($request->all(), [
                'first_name' =>  'required|min:1|max:255',
                'last_name' =>  'required|min:1|max:255',
                'first_name_furigana' =>  'required|min:1|max:255',
                'last_name_furigana' =>  'required|min:1|max:255',
                'gender' => 'required',
                'birth_year' => 'required',
                'birth_month' => 'required',
                'birth_day' => ['required', new CheckBirthDayRule($request->all())],
                'post_code' =>  'required|min:1|max:8',
                'pref' => 'required|min:1|max:100',
                'town' => 'required|min:1|max:100',
                'phone' => 'required|numeric|digits_between:10,11',//checkHyphen
                'email' => 'required|email|unique:users',//emailValidate
                'password' => 'required|min:6|max:32',
                'confirm_password' => 'required|min:6|max:32|same:password'//equalTo
            ], $messages);
    
            if( $validator->fails() ){
                $res['message'] =  $validator->errors()->first();
                return response()->json($res);
            }
            // End::Validate

            $request['password'] = Hash::make($request['password']);
            $request['birth_date'] = $request['birth_year'].'-'.$request['birth_month'].'-'.$request['birth_day'];
            $request['role_id'] = config('constant.ROLE.SITTER');
            $request['token_verify'] = substr(md5(time().$request['email']), 0, config('constant.TOKEN_SIZE'));
            $gender = (int)$request['gender'];
            $request['avatar'] = getAvatarDefault($gender);

            $data = [
                'avatar'                        => $request->avatar,
                'email'                         => $request->email,
                'password'                      => $request->password,
                'first_name'                    => $request->first_name,
                'last_name'                     => $request->last_name,
                'first_name_furigana'           => $request->first_name_furigana,
                'last_name_furigana'            => $request->last_name_furigana,
                'birth_date'                    => $request->birth_date,
                'gender'                        => $gender,
                'post_code'                     => $request->post_code,
                'pref'                          => $request->pref,
                'town'                          => $request->town,
                'address'                       => $request->address,
                'phone'                         => $request->phone,
                'role_id'                       => $request->role_id,
                // 'online'                        => $request->online,
                // 'socket_id'                     => $request->socket_id,
                'token_verify'                  => $request->token_verify,
                // 'active'                        => $request->active,
                // 'deleted'                       => $request->deleted,
                // 'remember_token'                => $request->remember_token,
                // 'created_at'                    => $request->created_at,
                // 'updated_at'                    => $request->updated_at,
                // 'admin_confirm'                 => $request->admin_confirm,
                // 'stripe_account_id'             => $request->stripe_account_id,
                // 'stripe_active'                 => $request->stripe_active,
            ];

            $userModel = new UserModel();
            $user = $userModel->create($data);
            
            if($user->id){
                $dataVerifyEmail['token_verify'] = substr(md5(time().$request['email']), 0, 30);
                $dataVerifyEmail['email_expire_at'] = Carbon::now()->addDay(1, 'day');

                $verifyEmail = $user->verifyEmails()->create($dataVerifyEmail);

                if($verifyEmail->id){
                    $dataSendMail['token_verify'] = $dataVerifyEmail['token_verify'];
                    $dataSendMail['name'] = $request['first_name'].'　'.$request['last_name'];
                    $dataSendMail['user_id'] = $user->id;
                    try{
                        // send mail
                        Mail::to($user->email)->send(new SitterRegister($dataSendMail));
                        $res['code']    = 200;
                        $res['status']  = true;
                        $res['message'] = '登録完了メールをご確認ください。';
                    }
                    catch(\Exception $e){
                        $res['message'] = 'メールを送信できませんでした';
                    }
                }
            }

        } catch(\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }

        return response()->json($res);
    }


    public function login(Request $request) {

        $res = [
            'code'      => 400,
            'status'    => false,
            'data'      => [],
            'errors'    => [],
            'message'   => '',
        ];

        try {
            // Begin::Validate
            $messages = [
                'email.required' =>  'メールアドレスを入力して下さい。',
                'email.email' =>  'メールアドレスが異なります。',
                'password.required' =>  'パスワードを入力して下さい。',
                'password.min' =>  'パスワードが異なります。',
                'password.max' =>  'パスワードが異なります。',
                'detect.required' =>  'デバイスが検出されませんでした。'
            ];
    
            $validator = Validator::make($request->all(), [
                'email' =>'required|email',
                'password' => 'required|min:6|max:32',
                'detect' => 'required'
            ], $messages);
    
            if( $validator->fails() ){
                $res['message'] =  $validator->errors()->first();
                return response()->json($res);
            }
            // End::Validate

            $data     = $request->only('email', 'password');
            $detect   = $request->input('detect');

            $data['role_id'] = config('constant.ROLE.SITTER');

            
            $sitters = new SittersRepository();
            $user_temp = $sitters->checkSitterIsactiveByParams($data['email'], 'email')->first();

            // check user is active?
            if(!$user_temp){
                $res['message'] =  'アカウントが存在しないか、非アクティブです!';
                return response()->json($res);
            }
    
            // check stripe is active?
            if(!$user_temp->stripe_active){
                $res['message'] =  'お支払いゲートをアクティブにしてください!';
                return response()->json($res);
            }
    
            if(!Auth::attempt($data, false)) {
                $res['message'] =  'メールアドレスまたはパスワードが間違っています!';
                return response()->json($res);
            }

            $sitter_user = $request->user();

            $tokenResult = $sitter_user->createToken('Personal Access Token');
            $token = $tokenResult->token;
            $token->save();


            $sitter_info = $sitters->loadSitterById($sitter_user->id)->first();

            if(!empty($sitter_info)) {

                $sitter_data['id']                  = $sitter_info->id;
                $sitter_data['avatar']              = $sitter_info->avatar;
                $sitter_data['email']               = $sitter_info->email;
                $sitter_data['first_name']          = $sitter_info->first_name;
                $sitter_data['last_name']           = $sitter_info->last_name;
                $sitter_data['first_name_furigana'] = $sitter_info->first_name_furigana;
                $sitter_data['last_name_furigana']  = $sitter_info->last_name_furigana;
                $sitter_data['birth_date']          = $sitter_info->birth_date;
                $sitter_data['gender']              = $sitter_info->gender;
                $sitter_data['post_code']           = $sitter_info->post_code;
                $sitter_data['pref']                = $sitter_info->pref;
                $sitter_data['town']                = $sitter_info->town;
                $sitter_data['address']             = $sitter_info->address;
                $sitter_data['phone']               = $sitter_info->phone;
                $sitter_data['role_id']             = $sitter_info->role_id;
                $sitter_data['stripe_account_id']   = $sitter_info->stripe_account_id;

                $sitter_data['access_token']        = $tokenResult->accessToken;
                $sitter_data['token_type']          = 'Bearer';
                $sitter_data['expires_at']          = Carbon::now('Asia/Tokyo')->addDays(7)->toDateTimeString();

                //Begin:: save token to table: token_refreshes

                $dataTokenRefresh['token']      = md5($sitter_data['access_token']);
                $dataTokenRefresh['detect']     = $detect;
                $dataTokenRefresh['user_id']    = $sitter_data['id'];

                $tokenRefeshModel   = $this->model->createTokenRefeshModel();
                $tokenRefesh        = $tokenRefeshModel->create($dataTokenRefresh);
                //End: save token to table: token_refreshes

                $res['data']        = $sitter_data;
                $res['code']        = 200;
                $res['status']      = true;
                $res['message']     = 'OK';
            }

        } catch (\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }

        return response()->json($res);

    }

    public function logout(Request $request) {

        $res = [
            'code'      => 400,
            'status'    => false,
            'data'      => [],
            'errors'    => [],
            'message'   => '',
        ];

        try {

            // // Begin::Validate
            // $messages = [
            //     'detect.required' =>  'デバイスが検出されませんでした。'
            // ];

            // $validator = Validator::make($request->all(), [
            //     'detect' => 'required'
            // ], $messages);

            // if( $validator->fails() ){
            //     $res['message'] =  $validator->errors()->first();
            //     return response()->json($res);
            // }
            // // End::Validate

            $user = $request->user();
            if(empty($user)) {
                $res['message'] = '無効なリクエスト';
                return response()->json($res);
            }

            // $detect = $request->input('detect');


            //Begin::delete token to table: token_refeshes
            $dataTokenRefresh['token']   =  md5($request->bearerToken());
            $dataTokenRefresh['user_id'] =  $user->id;
            // $dataTokenRefresh['detect'] =  $detect;
            $tokenRefeshModel = new UsersRepository();
            $tokenRefreshRemove = $tokenRefeshModel->removeTokenRefeshModel($dataTokenRefresh)->delete();
            //End::delete token to table: token_refeshes

            $request->user()->token()->revoke();

            $res['code']        = 200;
            $res['status']      = true;
            $res['message']     = '正常にログアウトします';


        } catch (\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }

        return response()->json($res);
    }

    public function profile(Request $request){
        $res = [
            'code'      => 400,
            'status'    => false,
            'data'      => [],
            'errors'    => [],
            'message'   => '',
        ];

        try {

        // Begin::Validate
        $messages = [
            'id.required'  =>  'IDを入力して下さい。',
            'id.numeric'    =>  'IDは数字を入力してください。',
        ];

        $validator = Validator::make($request->all(), [
            'id' =>'required|numeric',
        ], $messages);

        if( $validator->fails() ){
            $res['message'] =  $validator->errors()->first();
            return response()->json($res);
        }
        // End::Validate

        $auth         = Auth::user();

        $id = $request->input('id');


        $typeGalaries = config('constant.GALARY_TYPE.SITTER_AVATAR');

        $modelUser  = $this->model->createUserModel();
        $modelSkill = $this->model->createSkillModel();

        $sittersRepository  = new SittersRepository();

        $user =   $modelUser->where('id', $id)->where('admin_confirm', config('constant.ADMIN_CONFIRM.ACCEPT'))->first();
    
        $isPublish = $sittersRepository->loadSitterProfileById($id)->first();
    
        if( !$isPublish ){
            $res['message'] =  'プロファイルシッターが見つかりません';
            return response()->json($res);
        }
    
        // Begin:: skill sitter
        $skills                    = $modelSkill->all(['id', 'name'])->toArray();
        $user_skills_activity      = $sittersRepository->loadSitterSkillsById($id)->get()->pluck('skill_id')->toArray();

        for($i=0; $i < count($skills) ; $i++) {
            if(in_array( $skills[$i]['id'] ,$user_skills_activity )){
                $skills[$i]['active'] = 1;
            } else {
                $skills[$i]['active'] = 0;
            }
        }
        // End:: skill sitter

        $sitter_info = $user->sitter;

        $sitter['id']                  = $user->id;
        $sitter['avatar']              = $user->avatar;
        $sitter['email']               = $user->email;
        $sitter['first_name']          = $user->first_name;
        $sitter['last_name']           = $user->last_name;
        $sitter['first_name_furigana'] = $user->first_name_furigana;
        $sitter['last_name_furigana']  = $user->last_name_furigana;
        $sitter['birth_date']          = $user->birth_date;
        // $sitter['gender']              = $user->gender == 2 ? '女性' : '男性';
        $sitter['gender']              = $user->gender;
        $sitter['age']                 = $sitter_info['age'];

        // Begin::kid age
        $kid_age_start                 =  isset($sitter_info['kid_age_start']) ? config('constant.KID_AGE')[$sitter_info['kid_age_start']].'～' : '';
        $kid_age_end                   =  isset($sitter_info['kid_age_end']) ? config('constant.KID_AGE')[$sitter_info['kid_age_end']].'～' : '';
        $sitter['kid_age']             = $kid_age_start.$kid_age_end;
        // End::kid age

        // Begin::exp_kid
        $exp_parenting                 = $sitter_info['exp_parenting'] ? 'あり' : '無';
        $exp_kid_qty                   = $sitter_info['exp_kid_qty'] ?  $sitter_info['exp_kid_qty'].'人' : '';
        $sitter['exp_kid']             = $exp_parenting.'/'.$exp_kid_qty;
        // End::exp_kid

        $sitter['exp_sitter']         = $sitter_info['exp_sitter'] ? 'あり' : '無';

        $sitter['kid_qty']             = $sitter_info['kid_qty'] ? $sitter_info['kid_qty'].'人' : '';

        $sitter['post_code']           = $user->post_code;
        $sitter['pref']                = $user->pref;
        $sitter['town']                = $user->town;
        $sitter['address']             = $user->address;
        $sitter['phone']               = $user->phone;
        // $sitter['role_id']             = $user->role_id;
        // $sitter['stripe_account_id']   = $user->stripe_account_id;
        

        $sitter['title']                = $sitter_info['title'];
        $time_support                   = (new Carbon($sitter_info['time_support']))->format('h:i');
        $sitter['time_support']         = config('constant.TIME_SUPORT')[$time_support];
        $sitter['self_introduce']       = $sitter_info['self_introduce'];
        $sitter['service_introduce']    = $sitter_info['service_introduce'];

        // if( $auth && $auth->role_id == config('constant.ROLE.EMPLOYER') ){
        //     $sitter['employerId']   = $auth->id;
        //     $sitter['refresh']      = $request->cookie(config('constant.TOKEN_COOKIE_NAME'));
        //     $sitter['activeStripe'] = $auth->checkStripeActiveEmployer();
        // }

        // Begin:: rating
        $rating    = $sittersRepository->getRatingTotal($id)->get()->toArray();
        $sitter['rating'] = $this->calculatorRatingAvergate($rating[0]->rate_total, $rating[0]->total);

        $sitter['review'] = $sittersRepository->getListReviewBySitterId($id)->get();

        // End:: rating

        // Begin:: salary
        $salary = array_reduce($user->salaries->toArray(),
        function ($value, $item)
        {
            switch ($item['type']) {
                case config('constant.SALARY_TYPE.SALARY_SITTER'):
                    $value['salary_sitter'] = $item['salary'];
                    break;
                case config('constant.SALARY_TYPE.SALARY_HOUSE'):
                    $value['salary_house'] = $item['salary'];
                    break;
            }
            return $value;
        });
        $sitter['salary_sitter']    =  isset($salary['salary_sitter']) ?  $salary['salary_sitter'] . '/1時間' : '';
        $sitter['salary_house']     =  isset($salary['salary_house']) ?  $salary['salary_house'] . '/1時間' : '';
        // End:: salary

        // Begin:: schedules
        $schedules_type_1              = $sittersRepository->getSchedulesBySitterId($id)->where('type', 1)->get();
        $schedules_type_2              = $sittersRepository->getSchedulesBySitterId($id)->where('type', 2)->get();

        // $sitter['schedules'] = $this->sitterService->convertScheduleDataToJson($schedules);
        $sitter['schedules']    = [
            ['type' => 1, 'schedules_item' => $schedules_type_1],
            ['type' => 2, 'schedules_item' => $schedules_type_2],
        ];
        // End:: schedules

        $sitter['skills']       = $skills;
        // get all type galary
        $sitter['galary']       = $sittersRepository->loadSitterGalariesById($id)->get()->toArray();


        $res['code']    = 200;
        $res['status']  = true;
        $res['data']    = $sitter;
        $res['message'] = 'OK';

        } catch (\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }

        return response()->json($res);
    }

    function calculatorRatingAvergate($rate, $total)
    {
        $avg = 0;
        if($total > 0 && $rate > 0){
            $avg = round($rate/$total,1);
        }
        return $avg;
    }

    public function getItemSearch() {
        $res = [
            'code'      => 400,
            'status'    => false,
            'data'      => [],
            'errors'    => [],
            'message'   => '',
        ];

        try {

        $res['code']        = 200;
        $res['status']      = true;
        $res['data']        =  config('constant.API_ITEM_SEARCH');
        $res['message']     = 'OK';

        } catch (\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }

        return response()->json($res);
    }

    public function bankCode(Request $request){
        // if ($request->ajax()) {
            $bankName = $request->input('name');
            $url = config('app.BANK_CODE_API_URL').'?name='.(isset($bankName) ? trim($bankName) : '');
            $data = $this->useCurl($url);
            $res = $data['data'];
            $array_data = [];
            if(!empty($res)) {
                foreach($res as $r){
                    $d = ["id" => $r['code'], "text" => $r['name'] ];
                    $obj_d = (object) $d;
                    array_push($array_data, $obj_d);
                }
            }
            return $array_data;
        // }
    }

    public function branchCode(Request $request){
        $branchName = $request->input('name');
        $bankCode = $request->input('bank_code');
        if(!trim($bankCode)) {
            return [];
        }
        $url = config('app.BANK_CODE_API_URL').'/'.$bankCode.'?name='.(isset($branchName) ? trim($branchName) : '');
        $data = $this->useCurl($url);
        $res = $data['data'];
        $array_data = [];
        if(!empty($res)) {
            foreach($res as $r){
                $d = ["id" => $r['code'], "text" => $r['name'] ];
                $obj_d = (object) $d;
                array_push($array_data, $obj_d);
            }
        }
        return $array_data;
    }

    public function useCurl($url){
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
        curl_setopt($ch, CURLOPT_USERAGENT,"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        $content = curl_exec($ch);
        curl_close($ch);

        return json_decode($content, true);
    }
}
