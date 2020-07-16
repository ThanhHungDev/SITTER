<?php

namespace App\Http\Requests\CLIENT;

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
            'email.required' =>  'メールアドレスを入力して下さい。',
            'email.email' =>  'メールアドレスが異なります。',
            'password.required' =>  'パスワードを入力して下さい。',
            'password.min' =>  'パスワードが異なります。',
            'password.max' =>  'パスワードが異なります。',
            'confirm_password.required' =>  'パスワード確認は必須です。',
            'confirm_password.min' =>  'パスワードは6文字以上、32文字以下でなければなりません。',
            'confirm_password.max' =>  'パスワードは6文字以上、32文字以下でなければなりません。',
            'confirm_password.same' => 'パスワード確認はパスワードと一致しません。',
            'detect.required' =>  'メールアドレスまたはパスワードが間違っています!'
        ];
    }
}
