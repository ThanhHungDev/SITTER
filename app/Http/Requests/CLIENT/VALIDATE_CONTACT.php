<?php

namespace App\Http\Requests\CLIENT;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\CheckBirthDayRule;

class VALIDATE_CONTACT extends FormRequest
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
            'first_name_furigana' =>  'required|min:1|max:255',
            'last_name_furigana' =>  'required|min:1|max:255',
            'email' => 'required|email',//emailValidate
        ];
    }
    public function messages()
    {
        return [
            'first_name_furigana.required' =>  'フリガナ（姓）は必須です。',
            'first_name_furigana.min' =>  'フリガナ（姓）は1桁以上、255桁以下でなければなりません。',
            'first_name_furigana.max' =>  'フリガナ（姓）は1桁以上、255桁以下でなければなりません。',
            'last_name_furigana.required' =>  'フリガナ（名）は必須です。',
            'last_name_furigana.min' =>  'フリガナ（名）は1桁以上、255桁以下でなければなりません。',
            'last_name_furigana.max' =>  'フリガナ（名）は1桁以上、255桁以下でなければなりません。',
            'email.required' =>  'メールアドレスは必須です。',
            'email.email' =>  'メールアドレスが無効です。',
            'subject.required' =>  '件名が無効です。',
            'content.required' =>  'メッセージが無効です。',
        ];
    }
}
