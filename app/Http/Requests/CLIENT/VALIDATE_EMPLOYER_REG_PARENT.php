<?php

namespace App\Http\Requests\CLIENT;

use Illuminate\Foundation\Http\FormRequest;

class VALIDATE_EMPLOYER_REG_PARENT extends FormRequest
{
    public function __construct() {
        $data = [];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $validates = [
            'type_upload'      => 'required',
            'input_file_front' => 'required|mimes:jpg,jpeg,png,bmp|max:50000',
            'input_file_back'  => 'required|mimes:jpg,jpeg,png,bmp|max:50000',
            //father
            'first_name_fa'          => 'required|max:255',
            'last_name_fa'           => 'required|max:255',
            'first_name_furigana_fa' => 'required|max:255',
            'last_name_furigana_fa'  => 'required|max:255',
            'y_birth_fa'             => 'required',
            'm_birth_fa'             => 'required',
            'd_birth_fa'             => 'required',
            //mom
            'first_name_mom'          => 'required|max:255',
            'last_name_mom'           => 'required|max:255',
            'first_name_furigana_mom' => 'required|max:255',
            'last_name_furigana_mom'  => 'required|max:255',
            'y_birth_mom'             => 'required',
            'm_birth_mom'             => 'required',
            'd_birth_mom'             => 'required',
            //child
        ];
        return $validates;
    }
    public function messages(){
        return [
            'type_upload.required'      => '本人確認書類を選択して下さい。',
            'input_file_front.required' => '画像を選択して下さい。',
            'input_file_back.required'  => '画像を選択して下さい。',
            'input_file_front.mimes'    => 'ファイル形式が異なります。',
            'input_file_back.mimes'     => 'ファイル形式が異なります。',
            'input_file_front.max'      => '画像の最大サイズ5MB',
            'input_file_back.max'       => '画像の最大サイズ5MB',
            // father
            'first_name_fa.required'          => '夫の苗字を入力して下さい。',
            'first_name_fa.max'               => 'お名前（姓）は1桁以上、255桁以下でなければなりません。',
            'last_name_fa.required'           => '夫の名前を入力して下さい。',
            'last_name_fa.max'                => 'The field max length 255 charaters',
            'first_name_furigana_fa.required' => '夫の苗字（フリガナ）を入力して下さい。',
            'first_name_furigana_fa.max'      => 'The field max length 255 charaters',
            'last_name_furigana_fa.required'  => '夫の名前（フリガナ）を入力して下さい。',
            'last_name_furigana_fa.max'       => 'The field max length 255 charaters',
            'y_birth_fa.required'                      => '誕生年を入力してください',
            'm_birth_fa.required'                      => '誕生年を入力してください',
            'd_birth_fa.required'                      => '誕生年を入力してください',
            // mom
            'first_name_mom.required'          => '妻の苗字を入力して下さい。',
            'first_name_mom.max'               => 'The field max length 255 charaters',
            'last_name_mom.required'           => '妻の名前を入力して下さい。',
            'last_name_mom.max'                => 'The field max length 255 charaters',
            'first_name_furigana_mom.required' => '妻の苗字（フリガナ）を入力して下さい。',
            'first_name_furigana_mom.max'      => 'The field max length 255 charaters',
            'last_name_furigana_mom.required'  => '妻の名前（フリガナ）を入力して下さい。',
            'last_name_furigana_mom.max'       => 'The field max length 255 charaters',
            'y_birth_mom.required'                      => '妻の生年を入力して下さい。',
            'm_birth_mom.required'                      => '妻の生月を入力して下さい。',
            'd_birth_mom.required'                      => '妻の生日を入力して下さい。',
            // childs

            //term and privacy
            'check_accept.required'                      => '登録には利用規約とプライバシーポリシーに同意していただく必要があります',

            // 'gender_child.*.required'  => 'The field is required',
            // 'allergic.*.required'      => 'The field is required',
            // 'chronic.*.required'       => 'The field is required',
        ];
    }
}
