<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Rules\CheckBirthDayRule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Models\UserModel;
use Carbon\Carbon;
use App\Mail\EmployerRegister;
use App\Repository\EmployerRepository;
use App\FactoryModel\FactoryModelInterface;
use App\Services\CommonService;
use App\Repository\UsersRepository;
use App\Repository\SittersRepository;

class EmployerController extends Controller
{

    private $model = null;
    public function __construct(FactoryModelInterface $_model, CommonService $commonService) {
        $this->model = $_model;
        $this->JP_LOCATION = config('constant.JP_LOCATION');
        $this->commonService = $commonService;
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
                'first_name.required' =>  'お名前（姓）は必須です',
                'first_name.min' =>  'お名前（姓）は1桁以上、255桁以下でなければなりません。',
                'first_name.max' =>  'お名前（姓）は1桁以上、255桁以下でなければなりません。',
                'last_name.required' =>  'お名前（名）は必須です',
                'last_name.min' =>  'お名前（名）は1桁以上、255桁以下でなければなりません。',
                'last_name.max' =>  'お名前（名）は1桁以上、255桁以下でなければなりません。',
                'first_name_furigana.required' =>  'フリガナ（姓）は必須です',
                'first_name_furigana.min' =>  'フリガナ（姓）は1桁以上、255桁以下でなければなりません。',
                'first_name_furigana.max' =>  'フリガナ（姓）は1桁以上、255桁以下でなければなりません。',
                'last_name_furigana.required' =>  'フリガナ（名）は必須です',
                'last_name_furigana.min' =>  'フリガナ（名）は1桁以上、255桁以下でなければなりません。',
                'last_name_furigana.max' =>  'フリガナ（名）は1桁以上、255桁以下でなければなりません。',
                'gender.required' =>  '性別は必須です',
                'birth_year.required' =>  '年は必須です',
                'birth_month.required' =>  '月は必須です',
                'birth_day.required' =>  '日は必須です',
                'post_code.required' =>  '郵便番号は必須です',
                'post_code.min' =>  '郵便番号は1桁以上、255桁以下でなければなりません。',
                'post_code.max' =>  '郵便番号は1桁以上、255桁以下でなければなりません。',
                'pref.required' =>  '都道府県は必須です',
                'town.required' =>  '市区町村は必須です',
                'phone.required'  =>  '電話番号は必須です',
                // 'phone.checkHyphen'  =>  'ハイフンは不要です',
                'phone.numeric'    =>  '電話番号は数字を入力してください。',
                'phone.digits_between' =>  '電話番号話番号は10桁以上、11桁以下でなければなりません。',
                'email.required' =>  'メールアドレスは必須です。',
                'email.email' =>  'メールアドレスが無効です。',
                'email.unique' =>  'メールアドレスは既に存在しています。',
                'password.required' =>  'パスワードは必須です。',
                'password.min' =>  'パスワードは6文字以上、32文字以下でなければなりません。',
                'password.max' =>  'パスワードは6文字以上、32文字以下でなければなりません。' ,
                'confirm_password.required' =>  'パスワード確認は必須です。',
                'confirm_password.min' =>  'パスワードは6文字以上、32文字以下でなければなりません。',
                'confirm_password.max' =>  'パスワードは6文字以上、32文字以下でなければなりません。',
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
            $request['role_id'] = config('constant.ROLE.EMPLOYER');
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
                    try{
                        // send mail
                        Mail::to($user->email)->send(new EmployerRegister($dataSendMail));
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

            $data            = $request->only('email', 'password');
            $data['active']  = 1;
            $detect          = $request->input('detect');

            $data['role_id'] = config('constant.ROLE.EMPLOYER');
    
            if(!Auth::attempt($data, false)) {
                $res['message'] =  'メールアドレスまたはパスワードが間違っています!';
                return response()->json($res);
            }

            $employer = new EmployerRepository();

            $employer_user = $request->user();

            $tokenResult = $employer_user->createToken('Personal Access Token');
            $token = $tokenResult->token;
            $token->save();


            $employer_info = $employer->loadEmployerById($employer_user->id)->first();

            if(!empty($employer_info)) {

                $employer_data['id']                  = $employer_info->id;
                $employer_data['avatar']              = $employer_info->avatar;
                $employer_data['email']               = $employer_info->email;
                $employer_data['first_name']          = $employer_info->first_name;
                $employer_data['last_name']           = $employer_info->last_name;
                $employer_data['first_name_furigana'] = $employer_info->first_name_furigana;
                $employer_data['last_name_furigana']  = $employer_info->last_name_furigana;
                $employer_data['birth_date']          = $employer_info->birth_date;
                $employer_data['gender']              = $employer_info->gender;
                $employer_data['post_code']           = $employer_info->post_code;
                $employer_data['pref']                = $employer_info->pref;
                $employer_data['town']                = $employer_info->town;
                $employer_data['address']             = $employer_info->address;
                $employer_data['phone']               = $employer_info->phone;
                $employer_data['role_id']             = $employer_info->role_id;
                $employer_data['stripe_account_id']   = $employer_info->stripe_account_id;

                $employer_data['access_token']        = $tokenResult->accessToken;
                $employer_data['token_type']          = 'Bearer';
                $employer_data['expires_at']          = Carbon::now('Asia/Tokyo')->addDays(7)->toDateTimeString();

                //Begin:: save token to table: token_refreshes
                $dataTokenRefresh['token']      = md5($employer_data['access_token']);
                $dataTokenRefresh['detect']     = $detect;
                $dataTokenRefresh['user_id']    = $employer_data['id'];

                $tokenRefeshModel   = $this->model->createTokenRefeshModel();
                $tokenRefesh        = $tokenRefeshModel->create($dataTokenRefresh);
                //End: save token to table: token_refreshes

                $res['data']        = $employer_data;
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

    public function sittersBooked() {
        $res = [
            'code'      => 400,
            'status'    => false,
            'data'      => [],
            'errors'    => [],
            'message'   => '',
        ];

        try {

        //Begin::history booking
        $user = auth('api')->user();

        if(empty($user)) {
            $res['message'] = '無効なリクエスト';
            return response()->json($res);
        }

        $sitters = new SittersRepository();

        $sitters_booked = [];
        $sitters_booked = $sitters->getSitterBookedByEmployerId($user->id)->get();
        //End: history booking

        if($sitters_booked->isEmpty()) {
            $res['message'] = '見つかりません';
        }

        $res['code']    = 200;
        $res['status']  = true;
        $res['data']    = $sitters_booked;

        } catch (\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }

        return response()->json($res);
    }

}
