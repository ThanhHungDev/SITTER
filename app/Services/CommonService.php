<?php
namespace App\Services;

use Illuminate\Support\Carbon;
use Intervention\Image\Facades\Image;
use App\Models\TokenRefeshModel;
use App\Models\UserModel;
use App\Models\GalaryModel;
use App\Models\VerifyEmailModel as verifyEmailModel;
use App\Models\PasswordResetModel as passwordResetModel;

class CommonService
{
    public function getTokenRefresh($detect = '', $userId)
    {
        return TokenRefeshModel::where('user_id', $userId)->where('detect', $detect)->first();
    }

    public static function registerUploadFile($fileName, $type = null){
        $res = [
            'name' => '',
            'path' => ''
        ];
        switch ($type) {
            case config('constant.UPLOAD_FILE.AVATAR'):
                $originalPath = storage_path('app/public/uploads/avatars/');
                $thumbnailPath = storage_path('app/public/uploads/avatars/thumbnail/');
                $res['path'] = '/storage/uploads/avatars/';
                break;
            case config('constant.UPLOAD_FILE.SITTER'):
                $originalPath = storage_path('app/public/uploads/sitters/');
                $thumbnailPath = storage_path('app/public/uploads/sitters/thumbnail/');
                $res['path'] = '/storage/uploads/sitters/';
                break;
            case config('constant.UPLOAD_FILE.EMPLOYER'):
                $originalPath = storage_path('app/public/uploads/employers/');
                $thumbnailPath = storage_path('app/public/uploads/employers/thumbnail/');
                $res['path'] = '/storage/uploads/employers/';
                break;
            default:
                $originalPath = storage_path('app/public/uploads/');
                $thumbnailPath = storage_path('app/public/uploads/thumbnail/');
                $res['path'] = '/storage/uploads/mixed/';
                break;
        }

        $ImageUpload = Image::make($fileName);
        if (!file_exists($originalPath)) {
            mkdir($originalPath, 0755, true);
        }
        $name = time().$fileName->getClientOriginalName();
        $res['name'] = $name;
        $ImageUpload->save($originalPath.$name);

        // for save thumnail image
        $ImageUpload->fit(800,800);
        if (!file_exists($thumbnailPath)) {
            mkdir($thumbnailPath, 0755, true);
        }
        $ImageUpload = $ImageUpload->save($thumbnailPath.$name);
        return $res;
    }

    public static function checkVerifyEmail($params){

        $token_verify =  isset($params['token_verify']) ? $params['token_verify'] : '';

        if(empty($token_verify)){
            return config('constant.TOKEN_VERIFY.WRONG');
        }

        $verifyEmail = verifyEmailModel::where('token_verify', $token_verify)->first();
        $emailVerifiedAt = isset($verifyEmail['email_verified_at']) ? $verifyEmail['email_verified_at'] : '';
        $emailExpireAt = isset($verifyEmail['email_expire_at']) ? $verifyEmail['email_expire_at'] : '';

        if(!empty($emailVerifiedAt)) {
            return config('constant.TOKEN_VERIFY.ACTIVED');
        }
        if(!empty($emailExpireAt)){
            if(Carbon::now()->gt($emailExpireAt)){
                return config('constant.TOKEN_VERIFY.EXPIRED');
            }else {
                return config('constant.TOKEN_VERIFY.NOT_ACTIVE');
            }
        }
    }
    /*
    check token forgot password
    */
    public static function checkExpiryTokenPassword($params){

        $verifyToken =  isset($params['code']) ? $params['code'] : '';
        if(empty($verifyToken)){
            return config('constant.TOKEN_VERIFY.WRONG');
        }

        $dataCheck = passwordResetModel::where('verify_code', $verifyToken)->first()->toarray();
        if(empty($dataCheck)) {
            return config('constant.TOKEN_VERIFY.WRONG');
        } 

        $dateExpt = Carbon::createFromDate($dataCheck['date_send'])->addSeconds(config('constant.EXP_TOKEN'));
        if(Carbon::now()->gt($dateExpt)){
            return config('constant.TOKEN_VERIFY.EXPIRED');
        } else {
            return config('constant.TOKEN_VERIFY.NOT_ACTIVE');
        }

    }

    public function removeFile($type_upload_file, $file_name)
    {
        switch ($type_upload_file) {
            case config('constant.UPLOAD_FILE.AVATAR'):
                $path = 'storage/uploads/avatars/thumbnail/'.$file_name;
                $update = (new UserModel())->where('avatar', $path)->update(['avatar' => '']);
                removeAvatar($file_name);
                break;
            default:
                return false;
                break;
        }
        $update = (new GalaryModel())->deleteByField('name', ['name' => $file_name]);
        return $update;
    }

    public function uploadFile($file, $type = null)
    {
        $res = [
            'name' => '',
            'path' => ''
        ];
        switch ($type) {
            case config('constant.UPLOAD_FILE.AVATAR'):
                $originalPath = storage_path('app/public/uploads/avatars/');
                $thumbnailPath = storage_path('app/public/uploads/avatars/thumbnail/');
                $res['path'] = '/storage/uploads/avatars/';
                break;
            case config('constant.UPLOAD_FILE.SITTER'):
                $originalPath = storage_path('app/public/uploads/sitters/');
                $res['path'] = '/storage/uploads/sitters/';
                break;
            case config('constant.UPLOAD_FILE.EMPLOYER'):
                $originalPath = storage_path('app/public/uploads/employers/');
                $res['path'] = '/storage/uploads/employers/';
                break;
            default:
                $originalPath = storage_path('app/public/uploads/mixed/');
                $res['path'] = '/storage/uploads/mixed/';
                break;
        }
        $fileName = time().$file->getClientOriginalName();
        $res['name'] = $fileName;
        
        if (!file_exists($originalPath)) {
            mkdir($originalPath, 0755, true);
        }
        $file->move($originalPath, $fileName);

        if(isset($thumbnailPath)){
            $ImageUpload = Image::make($file);
            $ImageUpload->fit(800,800);
            if (!file_exists($thumbnailPath)) {
                mkdir($thumbnailPath, 0755, true);
            }
            $ImageUpload->save($thumbnailPath.$fileName);
        }
        return $res;
    }
}