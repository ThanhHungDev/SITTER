<?php

namespace App\Http\Requests\CLIENT;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\CheckBirthDayRule;

class VALIDATE_EMPLOYER_REGISTER extends FormRequest
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
            'first_name.required' =>  'お名前（姓）は必須です',
            'first_name.min' =>  'お名前（姓）は1桁以上、255桁以下でなければなりません。',
            'first_name.max' =>  'お名前（姓）は1桁以上、255桁以下でなければなりません。',
            'last_name.required' =>  'お名前（名）は必須です',
            'last_name.min' =>  'お名前（名）は1桁以上、255桁以下でなければなりません。',
            'last_name.max' =>  'お名前（名）は1桁以上、255桁以下でなければなりません。',
            'first_name_furigana.required' =>  'フリガナ（姓）は必須です',
            'first_name_furigana.min' =>  'フリガナ（姓）は1桁以上、255桁以下でなければなりません。',
            'first_name_furigana.max' =>  'フリガナ（姓）は1桁以上、255桁以下でなければなりません。',
            'last_name_furigana.required' =>  'フリガナ（名）は必須です',
            'last_name_furigana.min' =>  'フリガナ（名）は1桁以上、255桁以下でなければなりません。',
            'last_name_furigana.max' =>  'フリガナ（名）は1桁以上、255桁以下でなければなりません。',
            'gender.required' =>  '性別は必須です',
            'birth_year.required' =>  '年は必須です',
            'birth_month.required' =>  '月は必須です',
            'birth_day.required' =>  '日は必須です',
            'post_code.required' =>  '郵便番号は必須です',
            'post_code.min' =>  '郵便番号は1桁以上、255桁以下でなければなりません。',
            'post_code.max' =>  '郵便番号は1桁以上、255桁以下でなければなりません。',
            'pref.required' =>  '都道府県は必須です',
            'town.required' =>  '市区町村は必須です',
            'phone.required'  =>  '電話番号は必須です',
            // 'phone.checkHyphen'  =>  'ハイフンは不要です',
            'phone.numeric'    =>  '電話番号は数字を入力してください。',
            'phone.digits_between' =>  '電話番号話番号は10桁以上、11桁以下でなければなりません。',
            'email.required' =>  'メールアドレスは必須です。',
            'email.email' =>  'メールアドレスが無効です。',
            'email.unique' =>  'メールアドレスは既に存在しています。',
            'password.required' =>  'パスワードは必須です。',
            'password.min' =>  'パスワードは6文字以上、32文字以下でなければなりません。',
            'password.max' =>  'パスワードは6文字以上、32文字以下でなければなりません。' ,
            'confirm_password.required' =>  'パスワード確認は必須です。',
            'confirm_password.min' =>  'パスワードは6文字以上、32文字以下でなければなりません。',
            'confirm_password.max' =>  'パスワードは6文字以上、32文字以下でなければなりません。',
            'confirm_password.same' => 'パスワード確認はパスワードと一致しません。'
        ];
    }
}
