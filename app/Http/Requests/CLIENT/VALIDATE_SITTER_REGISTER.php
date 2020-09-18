<?php

namespace App\Http\Requests\CLIENT;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\CheckBirthDayRule;

class VALIDATE_SITTER_REGISTER extends FormRequest
{
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
        return [
            'first_name' =>  'required|min:1|max:255',
            'last_name' =>  'required|min:1|max:255',
            'first_name_furigana' =>  'required|min:1|max:255',
            'last_name_furigana' =>  'required|min:1|max:255',
            'gender' => 'required',
            'birth_year' => 'required',
            'birth_month' => 'required',
            'birth_day' => ['required', new CheckBirthDayRule($this->all())],
            'post_code' =>  'required|min:1|max:8',
            'pref' => 'required|min:1|max:100',
            'town' => 'required|min:1|max:100',
            'phone' => 'required|numeric|digits_between:10,11',//checkHyphen
            'email' => 'required|email|unique:users',//emailValidate
            'password' => 'required|min:6|max:32',
            'confirm_password' => 'required|min:6|max:32|same:password'//equalTo
        ];
    }

    public function messages()
    {
        return [
            'first_name.required' =>  '苗字を入力して下さい。',
            'first_name.min' =>  '苗字は1桁以上、255桁以下でなければなりません。',
            'first_name.max' =>  '苗字は1桁以上、255桁以下でなければなりません。',
            'last_name.required' =>  '名前を入力して下さい。',
            'last_name.min' =>  '名前は1桁以上、255桁以下でなければなりません。',
            'last_name.max' =>  '名前は1桁以上、255桁以下でなければなりません。',
            'first_name_furigana.required' =>  '苗字（フリガナ）を入力して下さい。',
            'first_name_furigana.min' =>  '苗字（フリガナ）は1桁以上、255桁以下でなければなりません。',
            'first_name_furigana.max' =>  '苗字（フリガナ）は1桁以上、255桁以下でなければなりません。',
            'last_name_furigana.required' =>  '名前（フリガナ）を入力して下さい。',
            'last_name_furigana.min' =>  '名前（フリガナ）は1桁以上、255桁以下でなければなりません。',
            'last_name_furigana.max' =>  '名前（フリガナ）は1桁以上、255桁以下でなければなりません。',
            'gender.required' =>  '性別を選択して下さい。',
            'birth_year.required' =>  '年を入力して下さい',
            'birth_month.required' =>  '月を入力して下さい',
            'birth_day.required' =>  '日を入力して下さい',
            'post_code.required' =>  '郵便番号を入力して下さい。',
            'post_code.min' =>  '郵便番号は1桁以上、255桁以下でなければなりません。',
            'post_code.max' =>  '郵便番号は1桁以上、255桁以下でなければなりません。',
            'pref.required' =>  '都道府県を選択して下さい。',
            'town.required' =>  '市区町村と番地を入力して下さい。',
            'phone.required'  =>  '電話番号を入力して下さい。',
            // 'phone.checkHyphen'  =>  'ハイフンは不要です',
            'phone.numeric'    =>  '電話番号は数字を入力してください。',
            'phone.digits_between' =>  '電話番号話番号は10桁以上、11桁以下でなければなりません。',
            'email.required' =>  'メールアドレスは必須です。',
            'email.email' =>  'メールアドレスを入力して下さい。',
            'email.unique' =>  'メールアドレスは既に存在しています。',
            'password.required' =>  'パスワードを入力して下さい。',
            'password.min' =>  'パスワードは半角英数文字6文字以上にする必要があります。',
            'password.max' =>  'パスワードは半角英数文字6文字以上にする必要があります。' ,
            'confirm_password.required' =>  'パスワード確認入力して下さい。',
            'confirm_password.min' =>  'パスワードは半角英数文字6文字以上にする必要があります。',
            'confirm_password.max' =>  'パスワードは半角英数文字6文字以上にする必要があります。',
            'confirm_password.same' => 'パスワード確認はパスワードと一致しません。'
        ];
    }
}
