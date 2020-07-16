<?php
namespace App\Services;

use Illuminate\Support\Carbon;
use Intervention\Image\Facades\Image;

class UploadImageService {
    public static function registerUploadFile($fileName, $type = null){
        switch ($type) {
            case config('constant.UPLOAD_FILE.AVATAR'):
                $originalPath = storage_path('app/public/uploads/avatars/');
                $thumbnailPath = storage_path('app/public/uploads/avatars/thumbnail/');
                break;
            case config('constant.UPLOAD_FILE.SITTER'):
                $originalPath = storage_path('app/public/uploads/sitters/');
                $thumbnailPath = storage_path('app/public/uploads/sitters/thumbnail/');
                break;
            case config('constant.UPLOAD_FILE.EMPLOYER'):
                $originalPath = storage_path('app/public/uploads/employers/');
                $thumbnailPath = storage_path('app/public/uploads/employers/thumbnail/');
                break;
            default:
                $originalPath = storage_path('app/public/uploads/');
                $thumbnailPath = storage_path('app/public/uploads/thumbnail/');
                break;
        }

        $ImageUpload = Image::make($fileName);
        if (!file_exists($originalPath)) {
            mkdir($originalPath, 666, true);
        }
        $ImageUpload->save($originalPath.time().$fileName->getClientOriginalName());

        // for save thumnail image
        $ImageUpload->resize(250,125);
        if (!file_exists($thumbnailPath)) {
            mkdir($thumbnailPath, 666, true);
        }
        $ImageUpload = $ImageUpload->save($thumbnailPath.time().$fileName->getClientOriginalName());
        return time().$fileName->getClientOriginalName();
    }
}