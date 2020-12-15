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
use App\Mail\Contact;
use Illuminate\Support\Facades\Mail;

use function PHPSTORM_META\type;

class BaseController extends Controller
{
    private $serviceCommon = null;
    public function __construct(CommonService $_serviceCommon) {
        $this->serviceCommon = $_serviceCommon;
        $this->JP_LOCATION   = config('constant.JP_LOCATION');
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

    public function getWPlaceList(REQUEST $request) {
        $res = [
            'code'      => 400,
            'status'    => false,
            'data'      => [],
            'errors'    => [],
            'message'   => ''
        ];
        try {
            $res['data']    = config('constant.API_JP_LOCATION');
            $res['code']    = 200;
            $res['status']  = true;
            $res['message'] = 'OK';
        } catch (\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }
        return response()->json($res, 200);
    }

    public function jpPostal(REQUEST $request) {
        $res = [
            'code'      => 400,
            'status'    => false,
            'data'      => [],
            'errors'    => [],
            'message'   => ''
        ];
        try {
            // Begin::Validate
            $messages = [
                'post_number.required'  =>  '郵便番号は必須です',
                'post_number.size'  =>  '郵便番号は8文字の文字列である必要があります',
            ];
    
            $validator = Validator::make($request->all(), [
                'post_number' => 'required|size:8',
            ], $messages);
    
            if( $validator->fails() ){
                $res['message'] =  $validator->errors()->first();
                return response()->json($res);
            }

            $post_number = preg_replace('/\D/', '', $request->post_number);

            $a = strlen($post_number);

            // postal 7 digits are required
            if(strlen($post_number) != 7) {
                $res['message'] =  '郵便番号には7桁が含まれている必要があります';
                return response()->json($res);
            }

            // End::Validate
            $sub_post   = substr($post_number,0,3);
            if($sub_post){
                $client = new \GuzzleHttp\Client();

                try{
                    $res_postal = $client->request("GET", "https://yubinbango.github.io/yubinbango-data/data/$sub_post.js");
                } catch (\Exception $ex) {
                    $res['code']    = 200;
                    $res['status']  = true;
                    $res['data']    = [];
                    $res['message'] = 'データなし';
                    return response()->json($res);
                }

                if( $res_postal->getStatusCode() == 200 ){
                    $data = $res_postal->getBody()->getContents();
                    $data = substr($data,7);
                    $data = substr($data,0,-3);
                    $data = json_decode($data,true);
                    if(empty($data)){return response()->json(['success' => 0,'data' => []], 200);}
                    $entry = isset( $data[$post_number] ) ? $data[$post_number] : array_pop($data) ;

                    // get city by id
                    $city_jp = config('constant.JP_CITY');

                    $city_name = array_search($entry[0], $city_jp);

                    $data_postal['city_name']      = $city_name;
                    $data_postal['district_name']  = $entry[1];
                    $data_postal['address']        = $entry[2];

                    $res['code']    = 200;
                    $res['status']  = true;
                    $res['data']    = $data_postal;
                    $res['message'] = 'OK';

                }

            }
        } catch (\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }
        return response()->json($res);
    }

    public function jpPrefectures(REQUEST $request) {
        $res = [
            'code'      => 400,
            'status'    => false,
            'data'      => [],
            'errors'    => [],
            'message'   => ''
        ];
        try {
            $res['code']    = 200;
            $res['status']  = true;
            $res['data']    = config('location.japan.pref');
            $res['message'] = 'OK';
        } catch (\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }
        return response()->json($res);
    }

    public function contact(REQUEST $request) {
        $res = [
            'code'      => 400,
            'status'    => false,
            'data'      => [],
            'errors'    => [],
            'message'   => ''
        ];
        try {
             // Begin::Validate
             $messages = [
                'first_name_furigana.required' =>  'フリガナ（姓）は必須です。',
                'first_name_furigana.min' =>  'フリガナ（姓）は1桁以上、255桁以下でなければなりません。',
                'first_name_furigana.max' =>  'フリガナ（姓）は1桁以上、255桁以下でなければなりません。',
                'last_name_furigana.required' =>  'フリガナ（名）は必須です。',
                'last_name_furigana.min' =>  'フリガナ（名）は1桁以上、255桁以下でなければなりません。',
                'last_name_furigana.max' =>  'フリガナ（名）は1桁以上、255桁以下でなければなりません。',
                'email.required' =>  'メールアドレスは必須です。',
                'email.email' =>  'メールアドレスが無効です。',
                'subject.required' =>  '件名が無効です。',
                'content.required' =>  'メッセージが無効です。',
            ];
    
            $validator = Validator::make($request->all(), [
                'first_name_furigana' =>  'required|min:1|max:255',
                'last_name_furigana' =>  'required|min:1|max:255',
                'email' => 'required|email',//emailValidate
                'subject' => 'required',
                'content' => 'required',
            ], $messages);
    
            if( $validator->fails() ){
                $res['message'] =  $validator->errors()->first();
                return response()->json($res);
            }
            // End::Validate

            try{
                // send mail
                $dataSendMail['name'] = $request['first_name_furigana'].'　'.$request['last_name_furigana'];
                $dataSendMail['subject'] = $request['subject'];
                $dataSendMail['content'] = $request['content'];
                $dataSendMail['email'] = $request['email'];
                Mail::to( config('constant.MAIL_SUPPORT'))->send(new Contact($dataSendMail));
                $res['code']    = 200;
                $res['status']  = true;
                $res['message'] = 'ご連絡ありがとうございます。';
            }
            catch(\Exception $e){
                $res['message'] = 'メールを送信できませんでした。';
            }

        } catch (\Exception $ex) {
            $res['code'] = 500;
            return response()->json($res, 500);
        }
        return response()->json($res);
    }

}
