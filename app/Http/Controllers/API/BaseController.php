<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Services\CommonService;
use App\Models\UserModel;
use App\Models\GalaryModel;
use Illuminate\Support\Facades\DB;

class BaseController extends Controller
{
    private $serviceCommon = null;
    public function __construct(CommonService $_serviceCommon) {
        $this->serviceCommon = $_serviceCommon;
    }

    /**
     * parames
     * file: file; required
     * type_galary: constant;
     * type_upload_file: constant;
     * user_id: int; required
     */
    public function uploadFile(REQUEST $request){

        $res = [
            'code'   => 400,
            'status' => 'false',
            'data'   => [],
            'errors' => [],
        ];
        try {
            $data = $request->all();
            $file = $data['file'];
            $parames['type'] = config('constant.GALARY_TYPE.FILE_MIXED');
            $typeUploadFile = config('constant.UPLOAD_FILE.MIXED');

            //validate maxsize
            //validate type file

            if(isset($data['type_galary'])){
                $parames['type'] = $data['type_galary'];
            }
            if(isset($data['type_upload_file'])){
                $typeUploadFile = $data['type_upload_file'];
            }
            $fileName = $this->serviceCommon->uploadFile($file, $typeUploadFile);

            $parames = [
                'user_id' => $data['user_id'],
                'name'    => $fileName['name'],
                'path'    => $fileName['path'],
            ];

            DB::beginTransaction();
            try{
                // update users
                if(!empty($fileName)){
                    $folderName = 'mixed';
                    if($typeUploadFile == config('constant.UPLOAD_FILE.AVATAR')){
                        $folderName = 'avatars';
                        $updateAvatar = (new UserModel())->where('user_id', $data['user_id'])->update(['avatar' => $fileName]);
                    }
                    //update galary
                    $insertGalary = (new GalaryModel())->insert($parames);
                    if(!$insertGalary){
                        DB::rollback();
                    }
                    DB::commit();
                    $res['code'] = 200;
                    $res['status'] = true;
                    $res['data'] = [
                        'url' => '/storage/uploads/'.$folderName.'/'.$fileName['name'],
                        'file_name' => $fileName['name'],
                        'extension' => ''
                    ];
                }
            }catch(\Exception $e) {
                DB::rollback();
                return response()->json($res);
            }
        } catch (\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }
        
        return response()->json($res);
    }

    public function removeFile(REQUEST $request)
    {
        $res = [
            'code' => 400,
            'status' => false,
        ];
        try {
            $data           = $request->all();
            $typeUploadFile = $data['type'];
            $fileName       = $data['fileName'];
            $memo           = $data['memo'] ?? '';
            $status         = $this->serviceCommon->removeFile($typeUploadFile, $fileName, $memo);
            if($status){
                $res['code']   = 200;
                $res['status'] = true;
            }
        } catch (\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }
        return response()->json($res);
    }
}
