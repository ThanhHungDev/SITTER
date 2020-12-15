<?php
    use Illuminate\Support\Facades\Storage;
    use Illuminate\Support\Carbon;

    if(!function_exists('moneyFormat')){
        function moneyFormat($data){
            $newData = 0; 
            $newData = number_format($data, 0, '.', ',');
            return $newData; 
        }
    }

    if(!function_exists('nl2br2')){
        function nl2br2($string) { 
            $string = nl2br(stripcslashes($string)); 
            return $string; 
        }
    }

    if(!function_exists('removeAvatar')){
        function removeAvatar($imageName) {
            if (Storage::exists('uploads/avatars/'.$imageName)) {
                Storage::delete('uploads/avatars/'.$imageName);
            }
            if (Storage::exists('uploads/avatars/thumbnail/'.$imageName)) {
                Storage::delete('uploads/avatars/thumbnail/'.$imageName);
            }
        }
    }
    if(!function_exists('removeFileLocal')){
        function removeFileLocal($name, $type)
        {
            $path = '';
            $pathThumbnail = '';
            switch ($type) {
                case config('constant.UPLOAD_FILE.AVATAR'):
                    $path = 'uploads/avatars/';
                    $pathThumbnail = 'uploads/avatars/thumbnail/';
                    break;
                case config('constant.UPLOAD_FILE.EMPLOYER'):
                    $path = 'uploads/employers/';
                    $pathThumbnail = 'uploads/employers/thumbnail/';
                    break;
                case config('constant.UPLOAD_FILE.SITTER'):
                    $path = 'uploads/sitters/';
                    $pathThumbnail = 'uploads/sitters/thumbnail/';
                    break;
                default:
                    $path = 'uploads/mixed/';
                    $pathThumbnail = 'uploads/mixed/thumbnail/';
                    break;
            }
            if (Storage::exists($path.$name)) {
                Storage::delete($path.$name);
            }
            if (Storage::exists($pathThumbnail.$name)) {
                Storage::delete($pathThumbnail.$name);
            }
        }
    }
    if(!function_exists('ageToString')){
        function ageToString($value) {
            $now = new DateTime();
            $current = new DateTime($value);
            $rs = $now->diff($current, true);
            return $rs->y; 
        }
    }
    if(!function_exists('handelImageCertifies')){
        function handelImageCertifies($str_image)
        {
            $res = [];
            if($str_image != ''){
                $arrItem = explode(',', $str_image);
                foreach ($arrItem as $key => $value) {
                    $item = explode('|', $value);
                    if ($item[1] == config('constant.GALARY_TYPE.INPUT_FILE_QUALIFI')) {
                        $res[] = $item[0];
                    }
                }
            }
            return $res;
        }
    }

    if(!function_exists('handelImageEmployer')){
        function handelImageEmployer($str_image)
        {
            $res = [];
            if($str_image != ''){
                $arrItem = explode(',', $str_image);
                foreach ($arrItem as $key => $value) {
                    $item = explode('|', $value);
                    $res[$item[1]] = $item[0];
                }
            }
            return $res;
        }
    }

    if(!function_exists('converStringDate')){
        function convertStringDate($str_date)
        {   
            $str_date = date('Y-m-d', strtotime($str_date));
            $str = '';
            $data = explode('-',$str_date);
            if(isset($data[0])){
                $str .= $data[0].'年';
            }
            if(isset($data[1])){
                $str .= $data[1].'月';
            }
            if(isset($data[2])){
                $str .= $data[2].'日';
            }
            return $str;
        }
    }

    // gender is an integer
    if(!function_exists('getAvatarDefault')){
        function getAvatarDefault($gender)
        {   
            switch ($gender) {
                case config('constant.GENDER.MALE'):
                    $avatar_url = '/image/df_male.jpg';
                    break;
                case config('constant.GENDER.FEMALE'):
                    $avatar_url = '/image/df_female.jpg';
                    break;
                
                default:
                    $avatar_url = '/image/df_male.jpg';
                    break;
            }
            return $avatar_url;
        }
    }
    if(!function_exists('handelGetAvatarName')){
        function handelGetAvatarName($path)
        {
            $name = '';
            if($path != ''){
                $arrItem = explode('thumbnail/', $path);
                if(isset($arrItem[1])){
                    $name = $arrItem[1];
                }
            }
            return $name;
        }
    }

    if(!function_exists('getTextGender')){
        function getTextGender($gender_id)
        {
            $text = '';
            switch ($gender_id) {
                case config('constant.GENDER.MALE'):
                    $text = '男性';
                    break;
                case config('constant.GENDER.FEMALE'):
                    $text = '女性';
                    break;
                default:
                    $text = '女性';
                    break;
            }
            return $text;
        }
    }
    
    if(!function_exists('calculatorRatingAvergate')){
        function calculatorRatingAvergate($rate, $total)
        {
            $avg = 0;
            if($total > 0 && $rate > 0){
                $avg = round($rate/$total,1);
            }
            return $avg;
        }
    }

    if(!function_exists('getLimitParagraph')){
        function getLimitParagraph($string, $length)
        {
            $string = strip_tags($string);
            if (strlen($string) > $length) {
                // truncate string
                $stringCut = substr($string, 0, $length);
                $endPoint = strrpos($stringCut, ' ');
                $string = $endPoint? substr($stringCut, 0, $endPoint) : substr($stringCut, 0);
                $string .= '...';
            }
            return $string;
        }
    }

    if(!function_exists('formatDate')){
        function formatDate($param)
        {
            $date = (new Carbon($param))->format('Y/m/d');
            return $date;
        }
    }

    if(!function_exists('formatTime')){
        function formatTime($param)
        {
            $time = (new Carbon($param))->format('H:i');
            return $time;
        }
    }

    if(!function_exists('handleExceptionStripe')){
        function handleExceptionStripe($e)
        {
            return  [
                'status'      => $e->getHttpStatus(),
                'type'        => $e->getError()->type,
                'code'        => $e->getError()->code,
                'message'     => $e->getError()->message
            ];
        }
    }

    if(!function_exists('convertJapanDayInWeek')){
        function convertJapanDayInWeek($value)
        {
            $text = '';
            switch ($value) {
                case 'monday':
                    $text = '月曜日';
                    break;
                case 'tuesday':
                    $text = '火曜日';
                    break;
                case 'wednesday':
                    $text = '水曜日';
                    break;
                case 'thursday':
                    $text = '木曜日';
                    break;
                case 'friday':
                    $text = '金曜日';
                    break;
                case 'saturday':
                    $text = '土曜日';
                    break;
                case 'sunday':
                    $text = '日曜日';
                    break;
                default:
                    $text = '月曜日';
                    break;
            }
            return $text;
        }
    }
