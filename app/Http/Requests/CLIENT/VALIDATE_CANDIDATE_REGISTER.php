<?php

namespace App\Http\Requests\CLIENT;

use Illuminate\Foundation\Http\FormRequest;

class VALIDATE_CANDIDATE_REGISTER extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' =>'required|email',
            'password' => 'required|min:6'
        ];
    }
    public function messages(){
        return [
            'email.required' => 'email phải được nhập',
            'email.email' => 'email không phải là định dạng email',
            'password.required'  => 'password phải được nhập',
            'password.min'  => 'password phải chứa ít nhất 6 kí tự',
        ];
    }
}
