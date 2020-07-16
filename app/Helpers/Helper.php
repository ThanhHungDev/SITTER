<?php
    use Illuminate\Support\Facades\Storage;
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

    if(!function_exists('ageToString')){
        function ageToString($value) {
            $now = new DateTime();
            $current = new DateTime($value);
            $rs = $now->diff($current, true);
            return $rs->y; 
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
    
