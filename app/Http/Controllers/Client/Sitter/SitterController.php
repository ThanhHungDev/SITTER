<?php

namespace App\Http\Controllers\Client\Sitter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\FactoryModel\FactoryModelInterface;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\MessageBag;

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

        return view('client.sitter.edit_mypage', compact('data'));
    }

    private function getDataCommon(){
        $user_id = Auth::user()->id;
        $userModel = $this->model->createUserModel();
        $user = $userModel::findOrFail($user_id);
        
        $data = [];

        $skillModel = $this->model->createSkillModel();
        $data['skills'] = $skillModel::get();

        $schedules = $user->schedules;
        $sitter = $user->sitter;
        if($sitter){
            $sitter['time_support'] = (new Carbon($sitter['time_support']))->format('H:i');
        }
        $data['sitter'] = $sitter;
        $data['avatars'] = $user->galaries;

        $salarySitter = $user->salaries()->where('type', config('constant.SALARY_TYPE.SALARY_SITTER'))->first();
        $salaryHouse  = $user->salaries()->where('type', config('constant.SALARY_TYPE.SALARY_HOUSE'))->first();

        if(!empty($salarySitter)){
            $data['salarySitter'] = $salarySitter->salary;
        }

        if(!empty($salaryHouse)){
            $data['salaryHouse'] = $salaryHouse->salary;
        }

        $typeGalaries = config('constant.GALARY_TYPE.SITTER_AVATAR');
        $data['galaries'] = $user->galaries()->where('type', $typeGalaries)->get();
        $data['jsonSchedules'] = $this->sitterService->convertScheduleDataToJson($schedules);
        $data['skill_actives'] = $user->skills()->get()->pluck('id')->toArray();

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
            if(!isset($params['kid_qty'])){
                $params['kid_qty'] = null;
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
}
