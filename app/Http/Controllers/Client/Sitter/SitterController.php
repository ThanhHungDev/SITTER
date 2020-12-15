<?php

namespace App\Http\Controllers\Client\Sitter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\FactoryModel\FactoryModelInterface;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\MessageBag;
use Illuminate\Support\Facades\Http;

use App\Services\CommonService;
use App\Services\SitterService;
use Carbon\Carbon;

class SitterController extends Controller
{
    private $model             = null;
    private $commonService     = null;
    private $sitterService     = null;
    
    public function __construct(FactoryModelInterface $model, CommonService $commonService, SitterService $sitterService) 
    {
        $this->model = $model;
        $this->commonService = $commonService;
        $this->sitterService = $sitterService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->getDataCommon();
        $userModel = $this->model->createUserModel();

        if(!$data['sitter']){
            return view('client.sitter.mypage', compact('data'), )
                    ->with('warning', '本サービスの利用前にプロフィールを登録してください');
        }
        return view('client.sitter.mypage', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function editMypage()
    {
        $data = $this->getDataCommon();

        /// get date booking had payment 
        $bookingModel = $this->model->createBookingModel();
        $condition = [
            'sitter' => Auth::user()->id
        ];
        $booking = $bookingModel->getBookingPaid($condition)->get();

        return view('client.sitter.edit_mypage', compact('data', 'booking'));
    }

    private function getDataCommon(){
        $user_id   = Auth::user()->id;
        $userModel = $this->model->createUserModel();
        $user      = $userModel::findOrFail($user_id);
        
        $data = [];
        $data['gender'] = $user->gender;
        $arrBalance = \Stripe\Balance::retrieve(
            ['stripe_account' => $user->stripe_account_id]
        )->available[0]->amount;
        $data['balance'] = $arrBalance;

        $skillModel = $this->model->createSkillModel();
        $experienceModel = $this->model->createExperienceModel();

        $data['experiences'] = $experienceModel::get();
        $data['skills'] = $skillModel::get();

        $schedules = $user->schedules;
        $sitter    = $user->sitter;
        if($sitter){
            $sitter['time_support'] = (new Carbon($sitter['time_support']))->format('H:i');
        }
        $data['sitter']  = $sitter;
        $salarySitter = $user->salaries()->where('type', config('constant.SALARY_TYPE.SALARY_SITTER'))->first();
        $salaryHouse  = $user->salaries()->where('type', config('constant.SALARY_TYPE.SALARY_HOUSE'))->first();

        if(!empty($salarySitter)){
            $data['salarySitter'] = $salarySitter->salary;
        }
        if(!empty($salaryHouse)){
            $data['salaryHouse'] = $salaryHouse->salary;
        }

        $typeGalaries = config('constant.GALARY_TYPE.SITTER_AVATAR');
        $typeCertify = config('constant.GALARY_TYPE.INPUT_FILE_QUALIFI');
        $data['certifies'] = $user->galaries()->where('type', $typeCertify)->latest()->get();
        $data['galaries'] = $user->galaries()->where('type', $typeGalaries)->latest()->get();

        $data['jsonSchedules'] = $this->sitterService->convertScheduleDataToJson($schedules);
        $data['skill_actives'] = $user->skills()->get()->pluck('id')->toArray();
        $data['experience_actives'] = $user->experiences()->get()->pluck('id')->toArray();

        return $data;
    }

    public function postEditMypage(Request $request)
    {
        $params = $request->except('_token');
        $schedules = $this->sitterService->convertScheduleDataToArray(json_decode($params['schedule'], true));
        $skillModel = $this->model->createSkillModel();
        $salaryModel = $this->model->createSalaryModel();
        $sitterModel = $this->model->createSitterModel();
        $userModel = $this->model->createUserModel();
        $scheduleModel = $this->model->createScheduleModel();

        $user_id = Auth::user()->id;
        $user = $userModel::findOrFail($user_id);
    
        DB::beginTransaction();
        try {
            if(!isset($params['exp_kid_qty'])){
                $params['exp_kid_qty'] = null;
            }

            $user->experiences()->detach();
            if(isset($params['experiences']) && $params['experiences']){
                $user->experiences()->attach($params['experiences']);
            }

            $sitterModel->updateOrCreate(['user_id' => $user_id], $params);
            $salaryModel->updateOrCreate(['user_id' => $user_id, 'type' => config('constant.SALARY_TYPE.SALARY_SITTER')], ['salary' => $params['salary_sitter']]);
            $salaryModel->updateOrCreate(['user_id' => $user_id, 'type' => config('constant.SALARY_TYPE.SALARY_HOUSE')], ['salary' => $params['salary_house']]);

            if(!empty($schedules)){
                $scheduleModel->where('user_id', $user_id)->delete();
                $user->schedules()->createMany($schedules);
            }

            if(!empty($params['skills'])) {
                $arSkills = explode(',' , $params['skills']);
                $user->skills()->detach();
                $user->skills()->attach($arSkills);
            }
            DB::commit();
            return redirect()->route('SITTER_MYPAGE')->with('success', 'プロフィールを更新しました');
        } catch (\Exception $e) {
            DB::rollBack();

            $errors = new MessageBag(['errors' => 'エラー']);
            return redirect()->back()->withInput()->withErrors($errors);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return view('client.sitter.edit_mypage');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function chat(Request $request, $id = null ){
        // if (!Auth::check()){

        //     return redirect()->route('SITTER_LOGIN');
        // }
        $ID_VIEW_USER_CHAT = $id;
        $refresh = $request->cookie(config('constant.TOKEN_COOKIE_NAME'));
        return view('client.chat', compact(['refresh', 'ID_VIEW_USER_CHAT']));
    }

    public function getStripeAccount(Request $request){
        $user_id   = Auth::user()->id;
        $userModel = $this->model->createUserModel();
        $user      = $userModel::findOrFail($user_id);

        if(!$user) {
            return view('errors.404');
        }

        $stripe_account_id = $user->stripe_account_id;
        try {
            $resData = \Stripe\Account::createLoginLink($stripe_account_id);
            $url = $resData->url;

            return redirect($url);
        } catch (\Throwable $th) {
            $errors = new MessageBag(['errors' => '続行するには銀行口座を更新してください']);
        }
    }

    public function ajaxDeleteStripeAccount(Request $request){
        $data = [
            'messages' => 'delete fail!',
            'code'   => 500
        ];

        $user_id   = Auth::user()->id;
        $userModel = $this->model->createUserModel();
        $user      = $userModel::findOrFail($user_id);

        if(!$user) {
            return response()->json($data);
        }

        $stripe_account_id = $user->stripe_account_id;
        $response = Http::withToken(config('app.STRIPE_API_KEY'))->delete(config('app.STRIPE_API_URL').'/v1/accounts/'.$stripe_account_id);
        $data = $response->json();

        if(!$data['deleted']){
            return response()->json($data);
        }

        $user->stripe_account_id = null;
        $user->stripe_active = false;

        $user->save();

        Auth::logout();

        $data = [
            'messages' => 'delete success',
            'code'   => 200
        ];
        return response()->json($data);
    }

    public function ajaxUploadCertify(Request $request){
        $data = [
            'messages' => 'upload fail!',
            'code'   => 500
        ];

        $userModel = $this->model->createUserModel();
        $params = $request->except('_token');
        $user_id = Auth::user()->id;
        $user = $userModel->findOrFail($user_id);
        if($user){
            $arrUpload = $this->commonService->RegisterUploadFile($params['file'], config('constant.UPLOAD_FILE.SITTER'));
            $params['type'] = config('constant.GALARY_TYPE.INPUT_FILE_QUALIFI');
            $params['name'] = $arrUpload['name'];
            $params['path'] = $arrUpload['path'];
            $galary = $user->galaries()->create($params);

            if($galary->id){
                $data = [
                    'messages' => 'upload succesfuly!',
                    'code'   => 200,
                    'id'     => $galary->id,
                    'name'    => $galary->name,
                ];
            }
        }

        return response()->json($data);
    }

    public function ajaxRemoveCertify(Request $request){

        $data = [
            'messages' => 'remove errors!',
            'code'   => 500,
        ];
        $galaryModel = $this->model->createGalaryModel();
        $imgId = $request->input('imageId');
        $img = $galaryModel->findOrFail($imgId);
        if($img){
            $img->delete();

            $data = [
                'messages' => 'remove succesfuly!',
                'code'   => 200,
            ];
        }

        return response()->json($data);
    }

    public function ajaxUploadAvatar(Request $request){

        $data = [
            'messages' => 'upload fail!',
            'code'   => 500
        ];

        $userModel = $this->model->createUserModel();
        $galaryModel = $this->model->createGalaryModel();
        $params = $request->except('_token');
        $user_id = Auth::user()->id;
        $user = $userModel->findOrFail($user_id);
        if($user){
            $arrUpload = $this->commonService->RegisterUploadFile($params['file'], config('constant.UPLOAD_FILE.AVATAR'));
            $params['type'] = config('constant.GALARY_TYPE.SITTER_AVATAR');
            $params['name'] = $arrUpload['name'];
            $params['path'] = $arrUpload['path'];
            $galary = $user->galaries()->create($params);

            $url = $galaryModel->getUrlImageNewest($user_id, $params['type']);
            
            // set avatars
            $new_avatar = '/storage/uploads/avatars/thumbnail/'.$url;
            $user->avatar = $new_avatar;
            $user->save();

            if($galary->id){
                $data = [
                    'messages' => 'upload succesfuly!',
                    'code'   => 200,
                    'id'     => $galary->id,
                    'name'    => $galary->name,
                ];
            }
        }

        return response()->json($data);
    }

    public function ajaxRemoveAvatar(Request $request){

        $data = [
            'messages' => 'remove errors!',
            'code'   => 500,
        ];
        $userModel = $this->model->createUserModel();
        $galaryModel = $this->model->createGalaryModel();
        $imgId = $request->input('imageId');
        $img = $galaryModel->findOrFail($imgId);
        if($img){
            $imageName = $img->url;
            $img->delete();

            removeAvatar($imageName);

            $user_id = Auth::user()->id;
            $url = $galaryModel->getUrlImageNewest($user_id, config('constant.GALARY_TYPE.SITTER_AVATAR'));
            $user = $userModel->findOrFail($user_id);
            // set avatars
            if($url){
                $new_avatar = '/storage/uploads/avatars/thumbnail/'.$url;
            }else{
                $gender = (int)$user->gender;
                $new_avatar = getAvatarDefault($gender);
            }

            $user->avatar = $new_avatar;
            $user->save();

            $data = [
                'messages' => 'remove succesfuly!',
                'code'   => 200,
            ];
        }

        return response()->json($data);
    }

    public function ajaxLoadAvatars(Request $request){

        $userModel = $this->model->createUserModel();

        $data = [
            'messages' => 'load fail!',
            'code'   => 500
        ];

        $user_id = Auth::user()->id;
        $user = $userModel::findOrFail($user_id);
        $typeGalaries = config('constant.GALARY_TYPE.SITTER_AVATAR');
        $galaries = $user->galaries()->select('name')->where('type', $typeGalaries)->get();
        if($galaries){
            $data = [
                'messages' => 'upload succesfuly!',
                'code'   => 200,
                'data'     => $galaries,
            ];
        }

        return response()->json($data);
    }

    public function ajaxPublishProfile(Request $request){

        $data = [
            'messages' => 'errors!',
            'code'   => 500,
        ];

        $user_id = Auth::user()->id;
        $sitterProfileModel = $this->model->createSitterProfileModel();
        $sitterProfile = $sitterProfileModel->where('user_id', $user_id)->first();

        $sitterProfile->publish = true;
        $sitterProfile->save();

        if($sitterProfile){
            $data = [
                'messages' => 'succesfuly!',
                'code'   => 200,
            ];
        }

        return response()->json($data);
    }

    public function ajaxLoadListBookings(Request $request){
        $sitter_id = Auth::user()->id;
        $bookingModel = $this->model->createBookingModel();
        $data = $bookingModel->getListEmployerBookings(['sitter_id'=>$sitter_id])->paginate(10);
        if ($request->ajax()) {
            return view('client.sitter.list_booking', compact('data'));
        }
    }

    public function testAccount1(Request $request){
        $account = \Stripe\Account::create([
            'country' => 'jp',
            'type' => 'custom',
            'email' => 't_kanazawa@management-partners.co.jp',
            'business_type' => 'individual',
            'capabilities' => [
                'card_payments' => [
                'requested' => true,
                ],
                'transfers' => [
                'requested' => true,
                ],
            ],
        ]);

        session(['account_id' => $account->id]);
        $account_link_url = $this->generateAccountLink($account->id);
        return redirect($account_link_url);
    }

    public function viewBank(Request $request){
        $user_id = Auth::user()->id;
        $userModel = $this->model->createUserModel();
        $user = $userModel->findOrFail($user_id);
        $stripe_account_id = $user->stripe_account_id;
        $data['bankAccount'] = $user->bankAccount;
        $balance = \Stripe\Balance::retrieve(
            ['stripe_account' => $stripe_account_id]
        );

        $account = \Stripe\Account::retrieve(
            $stripe_account_id,
        );

        $py_sche_interval = $account->settings->payouts->schedule->interval;
        switch ($py_sche_interval) {
            case 'weekly':
                $py_sche = convertJapanDayInWeek($account->settings->payouts->schedule->weekly_anchor);
                break;
            case 'monthly':
                $py_sche_monthly = $account->settings->payouts->schedule->monthly_anchor;
                $py_sche = Carbon::create(now()->year, now()->month, $py_sche_monthly)->format('Y/m/d');
                break;
            
            default:
                $py_sche = $account->settings->payouts->schedule->weekly_anchor;
                break;
        }
        $data['py_sche'] = $py_sche;
        $data['stripe_acc_stt'] =  $account->details_submitted;
        $data['balance'] = $balance->available[0]->amount;

        return view('client.sitter.view_bank', $data);
    }

    public function editBank(Request $request){
        return view('client.sitter.edit_bank');
    }

    public function postEditBank(Request $request){
        DB::beginTransaction();
        try {
            $params           = $request->except('_token');
            $user_id   = Auth::user()->id;
            $userModel = $this->model->createUserModel();
            $user      = $userModel::findOrFail($user_id);

            $stripe_acc_id = $user->stripe_account_id;
            $stripe_bank_id = $user->bankAccount->stripe_bank_id;

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
                'default_for_currency' => true
                ]
            );

            $params['stripe_bank_id'] = $bank->id;

            // save to databases
            $bank_db = $user->bankAccount()->updateOrCreate(['user_id' => $user_id], $params);

            if($bank && $bank_db){
                $user->stripe_active = true;
                $user->save();
            }

            DB::commit();
            return redirect(route('SITTER_MYPAGE'));
        } catch (\Exception $e) {
            DB::rollBack();
            $errors = new MessageBag(['errors' => ['エラーを作成する', 'ストライプテストで実際の銀行口座を登録できません']]);
            return redirect()->back()->withInput()->withErrors($errors);
        }
    }
}
