<?php

namespace App\Http\Controllers\Client\Sitter;

use App\Http\Controllers\Controller;
use App\FactoryModel\FactoryModelInterface;
use App\Mail\SitterRegister;
use App\Http\Requests\CLIENT\VALIDATE_SITTER_REGISTER;
use App\Http\Requests\CLIENT\VALIDATE_SITTER_REGISTER_PARENT;
use App\Mail\SitterRegisterParentAdmin;
use App\Mail\SitterRegisterParentClient;
use App\Services\CommonService;

use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\MessageBag;


class RegisterController extends Controller
{
    private $model = null;
    private $commonService = null;

    public function __construct(FactoryModelInterface $model, CommonService $commonService)
    {
        $this->model = $model;
        $this->commonService = $commonService;
    }

    function register()
    {
        return view('client.sitter.register');
    }

    function postRegister(VALIDATE_SITTER_REGISTER $request){
        $params = $request->except('_token');

        $stripeMessages = [
            'individual[first_name_kanji]' => 'お名前（山田）が不正です。',
            'individual[last_name_kanji]' => 'お名前（太郎）が不正です。',
            'individual[first_name_kana]' => 'フリガナ（ヤマダ）が不正です。',
            'individual[last_name_kana]' => 'フリガナ（タロウ）が不正です。',
            'individual[phone]' => '電話番号が不正です。',
            'individual[dob][year]' => '年齢は13歳以上である必要があります',
            'individual[address_kana][postal_code]' => '郵便番号が不正です。',
            'invalid_request_error' => '日本の住所が無効です。 提供された町に一致する複数のオプションが見つかりました。 町の所有物に丁目を追加すると役立つ場合があります（例：2丁目）。',
        ];
    
        if(!empty($params)){
            $params['password'] = Hash::make($params['password']);
            $params['birth_date'] = $params['birth_year'].'-'.$params['birth_month'].'-'.$params['birth_day'];
            $params['role_id'] = config('constant.ROLE.SITTER');
            $params['token_verify'] = substr(md5(time().$params['email']), 0, config('constant.TOKEN_SIZE'));
            DB::beginTransaction();
            try {
                $userModel = $this->model->createUserModel();
                $gender = $params['gender'] === config('constant.GENDER.MALE') ? 'male' : 'female';
                $params['avatar'] = getAvatarDefault($gender);
                $user = $userModel->create($params);

                // save to stripe
                $account = \Stripe\Account::create([
                    'country' => 'JP',
                    'type' => 'custom',
                    'email' => $params['email'],
                    'business_type' => 'individual',
                    
                    'individual' => [
                        'first_name_kanji' => $params['first_name'],
                        'first_name_kana' => $params['first_name_furigana'],

                        'last_name_kana' => $params['last_name_furigana'],
                        'last_name_kanji' => $params['last_name'],

                        'gender' => $gender,

                        'email' => $params['email'],

                        'phone' => '+81'.substr($params['phone'], 1),

                        'dob' => [
                            'day'=> $params['birth_day'],
                            'month'=> $params['birth_month'],
                            'year'=> $params['birth_year'],
                        ],

                        'address_kana' => [
                            "city" => $params['city_kana'],
                            "country" => "JP",
                            "line1"   => $params['line1'],
                            // "line2"   => $params['line2_kana'],
                            "postal_code" => $params['post_code'],
                            "state" => $params['pref_kana'],
                            "town" => $params['town_kana']
                        ],

                        'address_kanji' => [
                            "city" => $params['town'],
                            "country" => "JP",
                            "line1"   => $params['line1'],
                            "line2"   => $params['line2'],
                            "postal_code" => $params['post_code'],
                            "state" => $params['pref'],
                            "town" => $params['address']
                        ],
                    ],

                    'capabilities' => [
                        'card_payments' => ['requested' => true],
                        'transfers' => ['requested' => true],
                    ],

                    'settings' => [
                        'payouts' => [
                            'schedule' => [
                                "delay_days"     => 4,
                                "interval"       => "monthly",
                                "monthly_anchor" => 31
                            ]
                        ]
                    ],

                    'tos_acceptance' => [
                        'date' => time(),
                        'ip' => $_SERVER['REMOTE_ADDR'],
                    ]
                ]);

                $user->address = $params['address'].$params['line1'].$params['line2'];
                $user->stripe_account_id = $account->id;
                $user->save();

                $dataVerifyEmail['token_verify'] = $params['token_verify'];
                $dataVerifyEmail['email_expire_at'] = Carbon::now()->addDay(config('constant.DAY_EXPIRE'), 'day');
                $verifyEmail = $user->verifyEmails()->create($dataVerifyEmail);
                if($verifyEmail){
                    // data send mail
                    $dataSendMail['token_verify'] = $params['token_verify'];
                    $dataSendMail['name'] = $params['first_name'].' '.$params['last_name'];
                    $dataSendMail['user_id'] = $user->id;

                    // send mail
                    Mail::to($user->email)->send(new SitterRegister($dataSendMail));
                    DB::commit();
                    return redirect()->route('SITTER_REGISTER_CONFIRM');
                }
            } catch (\Stripe\Exception\InvalidRequestException $e) {
                DB::rollBack();
                $param = $e->getError()->param;
                if($param){
                    $message = $stripeMessages[$param] ?? 'フォーム入力エラー';
                    $errors = new MessageBag(['errors' => $message]);
                } else {
                    $errors = new MessageBag(['errors' => $stripeMessages['invalid_request_error']]);
                }

                return redirect()->back()->withInput()->withErrors($errors);
            } catch (\Exception $e) {
                DB::rollBack();
                $errors = new MessageBag(['errors' => 'フォーム入力エラー']);
                return redirect()->back()->withInput()->withErrors($errors);
            }
        }
    }

    function registerSuccess(){
        return view('client.sitter.register_parent_success');
    }

    function registerConfirm(){
        return view('client.sitter.confirm');
    }

    function registerParent(Request $request)
    {
        $status = $this->commonService->checkVerifyEmail($request->all());
        $experienceModel = $this->model->createExperienceModel();
        $skillModel = $this->model->createSkillModel();

        switch ($status) {
            case config('constant.TOKEN_VERIFY.WRONG'):
                return view('errors.404');
                break;
            case config('constant.TOKEN_VERIFY.ACTIVED'):
                return redirect()->route('SITTER_LOGIN');
                break;
            case config('constant.TOKEN_VERIFY.NOT_ACTIVE'):
            case config('constant.TOKEN_VERIFY.EXPIRED')://yêu cầu mới không check hết hạn No 143
                $experiences = $experienceModel::get();
                $skills = $skillModel::get();

                return view('client.sitter.register_parent', compact('experiences', 'skills'));
                break;

            default:
                return view('errors.404');
                break;
        }
    }

    function postRegisterParent(VALIDATE_SITTER_REGISTER_PARENT $request){
        $params           = $request->except('_token');
        $params['type_upload']    = (int) $params['type_upload'];
        $token_verify     = $params['token_verify'] ?? '';
        $galaryModel      = $this->model->createGalaryModel();
        $userModel        = $this->model->createUserModel();
        $verifyEmailModel = $this->model->createVerifyEmailModel();

        $verifyEmail = $verifyEmailModel->where('token_verify', $token_verify)->first();
        if(empty($verifyEmail)){
            $errors = new MessageBag(['message'=>'トークンエラー!']);
            return redirect()->back()->withInput()->withErrors($errors);
        }

        $user = $userModel::findOrFail($verifyEmail->user_id);

        DB::beginTransaction();
        try {
            $typeFileFront   = config('constant.GALARY_TYPE.SITTER_FILE_FRONT');
            $typeFileBack    = config('constant.GALARY_TYPE.SITTER_FILE_BACK');
            $typeFileQualifi = config('constant.GALARY_TYPE.INPUT_FILE_QUALIFI');

            $galaryDatas = [];

            if(isset($params['certifies']) && $params['certifies']){
                foreach($params['certifies'] as $certify){
                    $file_certify = $this->commonService->uploadFileToJPG($certify[0], config('constant.UPLOAD_FILE.SITTER'));
                    $arr = [
                        'name' => $file_certify['name'],
                        'type' => $typeFileQualifi,
                        'path' => $file_certify['path'],
                    ];
                    array_push($galaryDatas, $arr);
                }
            }

            $file_front     = $this->commonService->uploadFileToJPG($params['input_file_front'], config('constant.UPLOAD_FILE.SITTER'));
            $file_back      = $this->commonService->uploadFileToJPG($params['input_file_back'], config('constant.UPLOAD_FILE.SITTER'));
            
            array_push($galaryDatas,
                [
                    'name' => $file_front['name'],
                    'type' => $typeFileFront,
                    'path' => $file_front['path'],
                ],
                [
                    'name' => $file_back['name'],
                    'type' => $typeFileBack,
                    'path' => $file_back['path'],
                ],
            );

            if($user->galaries()->get()){
                $user->galaries()->whereIn('type', [$typeFileFront, $typeFileBack, $typeFileQualifi])->delete();
            }

            $params['contact_address'] = '〒'.$params['post_code'].$params['contact_address'];

            $user->sitterProfile()->updateOrCreate(['user_id' => $user->id], $params);

            $a = $user->galaries()->createMany($galaryDatas);
            $user->active = 1;
            $user->admin_confirm = config('constant.ADMIN_CONFIRM.DEFAULT');
            $user->save();
            $user->skills()->detach();
            $user->experiences()->detach();
            $user->skills()->attach($params['skills']);
            if(isset($params['experiences']) && $params['experiences']){
                $user->experiences()->attach($params['experiences']);
            }

            // required No 143
            // $verifyEmail = $verifyEmailModel->where('user_id', $user->id)->first();
            // $verifyEmail->email_verified_at = Carbon::now();
            // $verifyEmail->save();

            $dataSendMail['name'] = $user->first_name.' '.$user->last_name;
            // $dataSendMail['register_bank_url'] = route('SITTER_REG_STRIPE_ACC').'?token='.$token_verify;
            // send mail client
            Mail::to($user->email)->send(new SitterRegisterParentClient($dataSendMail));

            // send mail admin
            Mail::to(config('constant.MAIL_GLOBAL'))->send(new SitterRegisterParentAdmin());

            DB::commit();
            return redirect()->route('SITTER_REGISTER_SUCCESS');
        } catch (\Exception $e) {
            DB::rollBack();

            $errors = new MessageBag(['errors' => 'エラーを作成する']);
            return redirect()->back()->withInput()->withErrors($errors);
        }
    }

    public function getStripeAccount(Request $request){
        $token            = $request->input('token') ?? '';
        $verifyEmailModel = $this->model->createVerifyEmailModel();
        $verifyEmail      = $verifyEmailModel->where('token_verify', $token)->first();

        if(!$verifyEmail) {
            return view('errors.404');
        }

        $user_id   = $verifyEmail->user_id;
        $userModel = $this->model->createUserModel();
        $user      = $userModel::findOrFail($user_id);

        $stripe_account_id = $user->stripe_account_id;
        try {
            $resData = \Stripe\Account::createLoginLink($stripe_account_id);
            $url = $resData->url;

            return redirect($url);
        } catch (\Throwable $th) {
            $errors = new MessageBag(['errors' => '続行するには銀行口座を更新してください']);
        }
    }

    public function registerBankAccount(Request $request){
        $params           = $request->except('_token');
        $verifyEmailModel = $this->model->createVerifyEmailModel();
        $verifyEmail      = $verifyEmailModel->where('token_verify', $params['token_verify'])->first();

        if(!$verifyEmail) {
            return view('errors.404');
        }

        $user_id   = $verifyEmail->user_id;
        $userModel = $this->model->createUserModel();
        $user      = $userModel::findOrFail($user_id);

        if($user->stripe_active) {
            return redirect(route('SITTER_LOGIN'));
        }
        return view('client.sitter.register_bank');
    }

    public function postRegBankAccount(Request $request){
        DB::beginTransaction();
        try {
            $params           = $request->except('_token');
            $verifyEmailModel = $this->model->createVerifyEmailModel();
            $verifyEmail      = $verifyEmailModel->where('token_verify', $params['token_verify'])->first();

            if(!$verifyEmail) {
                return view('errors.404');
            }

            $user_id   = $verifyEmail->user_id;
            $userModel = $this->model->createUserModel();
            $user      = $userModel::findOrFail($user_id);

            if($user->stripe_active) {
                return redirect(route('SITTER_LOGIN'));
            }

            $stripe_acc_id = $user->stripe_account_id;

            if(!$stripe_acc_id) {
                return view('errors.404');
            }

            $tokenObj = \Stripe\Token::create([
                'bank_account' => [
                    'country' => 'JP',
                    'currency' => 'jpy',
                    'account_holder_name' => $params['account_holder_name'],
                    'account_holder_type' => 'individual',
                    'routing_number' => $params['routing_number'],
                    'account_number' => $params['account_number'],
                ],
            ]);

            // save to stripe
            $bank = \Stripe\Account::createExternalAccount(
                $stripe_acc_id,
                [
                'external_account' => $tokenObj->id,
                ]
            );

            $params['stripe_bank_id'] = $bank->id;

            // save to databases
            $bank_db = $user->bankAccount()->create($params);

            if($bank && $bank_db){
                $user->stripe_active = true;
                $user->save();
            }

            //required No 143
            $verifyEmail->email_verified_at = Carbon::now();
            $verifyEmail->save();

            DB::commit();
            return redirect(route('SITTER_LOGIN'));
        } catch (\Exception $e) {
            DB::rollBack();
            $errors = new MessageBag(['errors' => ['エラーを作成する', 'ストライプテストで実際の銀行口座を登録できません']]);
            return redirect()->back()->withInput()->withErrors($errors);
        }
    }
}
