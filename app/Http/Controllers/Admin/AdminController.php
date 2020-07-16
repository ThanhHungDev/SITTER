<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\UserModel;
use App\Models\FamilyModel;
use App\Http\Controllers\Controller;
use Illuminate\Pagination\Paginator;
use App\FactoryModel\FactoryModelInterface;

class AdminController extends Controller
{
    private $model             = null;
    public function __construct(FactoryModelInterface $_model) {

        $this->model       = $_model;
        $this->JP_LOCATION = config('constant.JP_LOCATION');
    }
    //Phong:18062020: return index page
    public function index(Request $request){
        $request->flash();
        $data['jp_locations']  = $this->JP_LOCATION;
        $request['type_galaries'] = [
            config('constant.GALARY_TYPE.SITTER_FILE_FRONT'),
            config('constant.GALARY_TYPE.SITTER_FILE_BACK')
        ];
        $request['role_type'] = config('constant.ROLE.SITTER');
        $request['name'] = str_replace(' ', '%', trim($request['name']));
        $data['sitter'] = (new UserModel())->findSitters($request);
        return view('admin.sitters', $data);
    }

    public function employers(REQUEST $request){

        $request->flash();
        $data   ['jp_locations']  = $this->JP_LOCATION;
        $request['type_galaries'] = [
            config('constant.GALARY_TYPE.EMPLOYER_FILE_FRONT'),
            config('constant.GALARY_TYPE.EMPLOYER_FILE_BACK'),
        ];
        $request['role_type'] = config('constant.ROLE.EMPLOYER');
        $data   ['count'] = (new UserModel())->countEmployers($request);
        $data   ['employers'] = (new UserModel())->findEmployers($request);
        return view('admin.employers', $data);
    }

    public function ajaxGetFamily(REQUEST $request)
    {
        $inputData = $request->all();
        $res = [
            'code' => 200,
            'message' => '',
            'data' => []
        ];
        if(isset($inputData['id_profile'])){
            $res['data']  = (new FamilyModel())->getByField($inputData['id_profile']);
        }
        return response()->json($res);
    }
    
    public function postEmployer(){
        return view('admin.employer');
    }
    public function chat(Request $request){
        return view('admin.chat');
    }

    public function ajaxDetailSitter($id) 
    {
        $modelUser = $this->model->createUserModel();
        $user = $modelUser->where('id', $id)->first();
        $skills = $user->skills()->select('name')->pluck('name');
        $experiences = $user->experiences()->select('name')->pluck('name');
        $galaries = $user->galaries()->select(['name','path'])->where('type', config('constant.GALARY_TYPE.INPUT_FILE_QUALIFI'))->get();
        $contact = $user->sitterProfile()->select([
            'contact_name', 
            'contact_address', 
            'contact_phone', 
            'contact_relationship'
        ])->first();
        if ($contact && $skills && $experiences && $galaries) {
            $data['contact'] = $contact->toArray();
            $data['skills'] = $skills->toArray();
            $data['experiences'] = $experiences->toArray();
            $data['galaries'] = array_map(function($item)
            {
                return $item['path'] . '/' . $item['name'];
            }, $galaries->toArray());
        }else {
            $rs = [
                'messages' => 'User has not updated information!',
                'code'   => 500
            ];
            return response()->json($rs);
        }

        $rs = [
            'messages' => 'succesfuly!',
            'code'   => 200,
            'data' => $data
        ];
        return response()->json($rs);
    }
    public function ajaxUpdatePublishSitter(Request $request)
    {
        $param = $request->except('_token');
        $sitterProfileModel = $this->model->createSitterProfileModel();
        $sitterProfile = $sitterProfileModel->where('user_id', $param['id'])->update(['publish'=> $param['publish']]);
        if ($sitterProfile) {
            $rs = [
                'messages' => 'Updated complete!',
                'code'   => 200,
            ];
            return response()->json($rs);
        }
        $rs = [
            'messages' => 'Update fail!',
            'code'   => 500,
        ];
        return response()->json($rs);
    }
    public function ajaxUserDelete(Request $request)
    {
        $param = $request->except('_token');
        $userModel = $this->model->createUserModel();
        $user = $userModel->where('id', $param['id'])->update(['deleted'=> true]);
        if ($user) {
            $rs = [
                'messages' => 'Deleted complete!',
                'code'   => 200,
                'id' => $param['id']
            ];
            return response()->json($rs);
        }
        $rs = [
            'messages' => 'Delete fail!',
            'code'   => 500,
        ];
        return response()->json($rs);
    }
    public function ajaxUserAccept(Request $request)
    {
        $param = $request->except('_token');
        $userModel = $this->model->createUserModel();
        $user = $userModel->where('id', $param['id'])->update(['admin_confirm'=> $param['admin_confirm']]);
        if ($user) {
            $rs = [
                'messages' => 'Accept complete!',
                'code'   => 200,
                'id' => $param['id']
            ];
            return response()->json($rs);
        }
        $rs = [
            'messages' => 'Accept fail!',
            'code'   => 500,
        ];
        return response()->json($rs);
    }

    public function support(Request $request){
        return view('admin.support');
    }

    public function messageReader( Request $request, $id, $channel = null){
        return view('admin.read-message', compact(['channel', 'id']));
    }
}
