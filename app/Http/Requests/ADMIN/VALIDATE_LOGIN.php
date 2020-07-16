<?php

namespace App\Http\Requests\ADMIN;

use Illuminate\Foundation\Http\FormRequest;

class VALIDATE_LOGIN extends FormRequest
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
            'email' =>'sometimes|required|email',
            'password' => 'sometimes|required|min:6|max:32',
            'confirm_password' => 'sometimes|required|min:6|max:32|same:password',
            'detect' => 'sometimes|required'
        ];
    }
    public function messages(){
        return [
            'email.required' =>  'メールアドレスは必須です。',
            'email.email' =>  'メールアドレスが無効です。',
            'password.required' =>  'パスワードは必須です。',
            'password.min' =>  'パスワードは6文字以上、32文字以下でなければなりません。',
            'password.max' =>  'パスワードは6文字以上、32文字以下でなければなりません。',
            'confirm_password.required' =>  'パスワード確認は必須です。',
            'confirm_password.min' =>  'パスワードは6文字以上、32文字以下でなければなりません。',
            'confirm_password.max' =>  'パスワードは6文字以上、32文字以下でなければなりません。',
            'confirm_password.same' => 'パスワード確認はパスワードと一致しません。',
            'detect.required' =>  'メールアドレスまたはパスワードが間違っています!'
        ];
    }
}

