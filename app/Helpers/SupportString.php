<?php 
namespace App\Helpers;

class SupportString{

    public static function limitText($content = false, $limit = 10, $ellipsis = '...') {

        if(mb_strlen($content,'UTF-8') > $limit){
            return str_replace('\n', '', mb_substr(strip_tags($content), 0, $limit,'UTF-8')) . $ellipsis;
        }
        return str_replace('\n', '', strip_tags($content));
    }

    public static function createSlug( $str, $replace = '-' ){

        $str = static::convertLang($str);
        $str = preg_replace('/[^a-z0-9-\s]/', '', $str);
        $str = preg_replace('/([\s]+)/', $replace, $str);

        return trim($str, $replace );
    }

    public static function createLinkSlug( $str, $replace = '-' ){

        $str = static::convertLang($str);
        $str = preg_replace('/[\s]/', ' ', $str);
        $str = preg_replace('/([\s]+)/', $replace, $str);

        return trim($str, $replace );
    }

    public static function convertLang( $str ){

        //Đổi ký tự có dấu thành không dấu
        $str = trim(mb_strtolower($str));
        $str = preg_replace('/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/', 'a', $str);
        $str = preg_replace('/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/', 'e', $str);
        $str = preg_replace('/(ì|í|ị|ỉ|ĩ)/', 'i', $str);
        $str = preg_replace('/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/', 'o', $str);
        $str = preg_replace('/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/', 'u', $str);
        $str = preg_replace('/(ỳ|ý|ỵ|ỷ|ỹ)/', 'y', $str);
        $str = preg_replace('/(đ)/', 'd', $str);

        return $str;
    }

    public static function minimizeCSSsimple($css){
        
        try {
            $css = preg_replace('/\/\*((?!\*\/).)*\*\//', '', $css); // negative look ahead
            $css = preg_replace('/\s{2,}/', ' ', $css);
            $css = preg_replace('/\s*([:;{}])\s*/', '$1', $css);
            $css = preg_replace('/;}/', '}', $css);
            return $css;
        } catch (\Throwable $th) {
            return $css;
        }
    }

    public static function minimizeJavascriptSimple($javascript){
        try {
            return preg_replace(array("/\s+\n/", "/\n\s+/", "/ +/"), array("\n", "\n ", " "),
            $javascript);
        } catch (\Throwable $th) {
            return $javascript;
        }
        
    }
}