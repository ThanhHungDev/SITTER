<?php

namespace App\Http\Controllers\Client\Employer;

use Carbon\Carbon;
use App\Models\UserModel;
use App\Models\GalaryModel;
use App\Models\FamilyModel;
use Illuminate\Http\Request;
use App\Services\SitterService;
use App\Services\CommonService;
use App\Services\EmployerService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\MessageBag;
use App\Http\Controllers\Controller;
use App\Models\EmployerProfileModel;
use Illuminate\Support\Facades\Auth;
use App\FactoryModel\FactoryModelInterface;
use App\Http\Requests\CLIENT\VALIDATE_EMPLOYER_EDIT;
use App\Http\Requests\CLIENT\VALIDATE_EMPLOYER_REG_PARENT;
use Illuminate\Support\Facades\Config;

class EmployerController extends Controller
{
    private $sitterService     = null;
    private $factoryModel      = null;
    private $employerService   = null;
    private $serviceCommon     = null;

    public function __construct(FactoryModelInterface $_factoryModel, CommonService $_serviceCommon, SitterService $sitterService, EmployerService $employerService) {

        $this->sitterService   = $sitterService;
        $this->factoryModel    = $_factoryModel;
        $this->employerService = $employerService;
        $this->serviceCommon   = $_serviceCommon;
    }

    public function myPage()
    {
        $userId = Auth::user()->id;
        $typeGalaries = [config('constant.GALARY_TYPE.EMPLOYER_FILE_FRONT'), config('constant.GALARY_TYPE.EMPLOYER_FILE_BACK')];
        
        $data['profile']    = (new EmployerProfileModel())->getByField($userId);
        $data['galaries']   = (new GalaryModel())->getByField('user_id', $userId, $typeGalaries);

        if($data['profile']['id']){
            $data['family'] = (new FamilyModel())->getByField($data['profile']['id']);
        }
        return view('client.employer.mypage', $data);
    }
    
    public function editProfile ()
    {
        $userId = Auth::user()->id;
        $typeGalaries = [config('constant.GALARY_TYPE.EMPLOYER_FILE_FRONT'), config('constant.GALARY_TYPE.EMPLOYER_FILE_BACK')];
        
        $data['profile']    = (new EmployerProfileModel())->getByField($userId);
        $data['galaries']   = (new GalaryModel())->getByField('user_id', $userId, $typeGalaries);

        if($data['profile']['id']){
            
            $dataFamily = (new FamilyModel())->getByField($data['profile']['id']);
            $data['parent']   = [];
            $data['child']    = [];
            foreach ($dataFamily as $row) {
                if($row['type'] == config('constant.TYPE_MEMBER_PARENT.FATHER') || $row['type'] == config('constant.TYPE_MEMBER_PARENT.MOM')){
                    $data['parent'][] = $row;
                }
                if($row['type'] == config('constant.TYPE_MEMBER_PARENT.CHILD')){
                    $data['child'][] = $row;
                }
            }
        }
        return view('client.employer.edit', $data);
    }

    public function postEditProfile(VALIDATE_EMPLOYER_EDIT $request)
    {  
        $errors   = $this->employerService->validateSpecialRegisterField($request);
        $userId   = Auth::user()->id;
        $dataPost = $request->all();
        $result = [
            "status"  => false,
            "message" => "Errors"
        ];
        DB::beginTransaction();
        try{
            $dataUser = [
                'id'        => $userId,
                'post_code' => $dataPost['post_code'],
                'pref'      => $dataPost['pref'],
                'town'      => $dataPost['town'],
                'address'   => $dataPost['address'],
            ];
            $userUpdate = (new UserModel())->updateByField('id', $dataUser);
            if(!$userUpdate){
                DB::rollback();
            }
            
            $dataProfile = [
                'user_id'   => $userId,
                'nick_name' => $dataPost['nick_name'],
                'note'      => $dataPost['note']
            ];
            $profileUpdate = (new EmployerProfileModel())->updateProfile('user_id', $dataProfile);
            if(!$profileUpdate){
                DB::rollback();
            }
            //update profile

            $dataFamilyFa = [
                'id'                  => $dataPost['id_fa'],
                'first_name'          => $dataPost['first_name_fa'],
                'last_name'           => $dataPost['last_name_fa'],
                'first_name_furigana' => $dataPost['first_name_furigana_fa'],
                'last_name_furigana'  => $dataPost['last_name_furigana_fa'],
                'birth_date'          => $dataPost['y_birth_fa'].'-'.$dataPost['m_birth_fa'].'-'.$dataPost['d_birth_fa'],
            ];
            $fatherUpdate = (new FamilyModel())->updateFamily('id', $dataFamilyFa);
            if(!$fatherUpdate){
                DB::rollback();
            }

            $dataFamilyMom = [
                'id'                  => $dataPost['id_mom'],
                'first_name'          => $dataPost['first_name_mom'],
                'last_name'           => $dataPost['last_name_mom'],
                'first_name_furigana' => $dataPost['first_name_furigana_mom'],
                'last_name_furigana'  => $dataPost['last_name_furigana_mom'],
                'birth_date'          => $dataPost['y_birth_mom'].'-'.$dataPost['m_birth_mom'].'-'.$dataPost['d_birth_mom'],
            ];
            $momUpdate = (new FamilyModel())->updateFamily('id', $dataFamilyMom);
            if(!$momUpdate){
                DB::rollback();
            }
            
            $total_child = $dataPost['child_number'];
            for ($i=0; $i < $total_child; $i++) { 
                $dataChild = [];
                $child_id  = isset($dataPost['child_id_'.$i]) ? $dataPost['child_id_'.$i] : '';
                $dataChild = [
                    'first_name'          => $dataPost['first_name_child_'.$i],
                    'last_name'           => $dataPost['last_name_child_'.$i],
                    'first_name_furigana' => $dataPost['first_name_furigana_child_'.$i],
                    'last_name_furigana'  => $dataPost['last_name_furigana_child_'.$i],
                    'birth_date'          => $dataPost['y_birth_child_'.$i].'-'.$dataPost['m_birth_child_'.$i].'-'.$dataPost['d_birth_child_'.$i],
                    'gender'              => $dataPost['gender_child_'.$i],
                    'allergic'            => (isset($dataPost['allergic_'.$i]) && ($dataPost['allergic_'.$i] == '1')) ? true : false,
                    'chronic'             => (isset($dataPost['chronic_'.$i]) && ($dataPost['chronic_'.$i] == '1')) ? true : false,
                ];
                if(!empty($child_id)){
                    $dataChild['id'] = $child_id;
                    $childUpdate = (new FamilyModel())->updateFamily('id', $dataChild);
                    if(!$childUpdate){
                        DB::rollback();
                    }
                }else{
                    $dataChild['id_profile'] = $dataPost['profile_id'];
                    $dataChild['type']       = config('constant.TYPE_MEMBER_PARENT.CHILD');
                    $insertChild = (new FamilyModel())->insert($dataChild);
                    if(!$insertChild){
                        DB::rollback();
                    }
                }
            }
            DB::commit();
            return redirect()->route('EMPLOYER_MYPAGE');
            //create or update child_info
        }catch(\Exception $e) {
            DB::rollback();
            $errors = new MessageBag($result);
            return redirect()->back()->withInput()->withErrors($errors);
        }
    }

    public function ajaxDeleteMember(REQUEST $request)
    {
        $res = [
            'status' => false,
            'message' => 'Delete Fail!'
        ];
        $dataRequest = $request->all();
        $idMember = $dataRequest['id'];
        $status = (new FamilyModel())->where('id', '=', $idMember)->delete();
        if($status){
            $res = [
                'status' => true,
                'message' => 'Delete success!'
            ];
        }
        return response()->json($res);
    }

    public function chat(Request $request, $id = null ){
        
        $ID_VIEW_USER_CHAT = $id;
        $refresh = $request->cookie(config('constant.TOKEN_COOKIE_NAME'));
        return view('client.chat', compact(['refresh', 'ID_VIEW_USER_CHAT']));
    }

    public function ajaxUploadAvatar(REQUEST $request)
    {
        $res = [
            'status'     => false,
            'message'    => 'Upload faild!',
            'image_name' => ''
        ];
        $data = $request->all();
        $userId = Auth::user()->id;
        $uploadData = $this->serviceCommon->RegisterUploadFile($data['file'], config('constant.UPLOAD_FILE.AVATAR'));
        $paramsUser = [
            'avatar'     => $uploadData['path'].'thumbnail/'.$uploadData['name']
        ];
        $updateUser = (new UserModel())->updateOrCreate(
            ['id' => $userId], $paramsUser
        );

        $params = [
            'type'    => config('constant.GALARY_TYPE.EMPLOYER_AVATAR'),
            'user_id' => $userId,
            'name'    => $uploadData['name'],
            'path'    => $uploadData['path'],
        ];
        $updateGalaries = (new GalaryModel())->updateOrCreate(
            ['user_id' => $userId, 'type' => $params['type']], $params
        );
        if($updateUser){
            $res = [
                'status'  => true,
                'message' => 'Upload success!',
                'path'    => $uploadData['path'].'thumbnail/'.$uploadData['name'],
                'name'    => $uploadData['name']
            ];
        }
        return response()->json($res);
    }
}
