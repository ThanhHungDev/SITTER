<?php

namespace App\Http\Requests\CLIENT;

use Illuminate\Foundation\Http\FormRequest;

class VALIDATE_EMPLOYER_EDIT extends FormRequest
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
            //account
            'post_code' => 'required',
            'pref'      => 'required',
            'town'      => 'required',
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
            //account
            'post_code' => 'The field is required',
            'pref'      => 'The field is required',
            'town'      => 'The field is required',
            // father
            'first_name_fa.required'          => 'The field is required',
            'first_name_fa.max'               => 'The field max length 255 charaters',
            'last_name_fa.required'           => 'The field is required',
            'last_name_fa.max'                => 'The field max length 255 charaters',
            'first_name_furigana_fa.required' => 'The field is required',
            'first_name_furigana_fa.max'      => 'The field max length 255 charaters',
            'last_name_furigana_fa.required'  => 'The field is required',
            'last_name_furigana_fa.max'       => 'The field max length 255 charaters',
            'y_birth_fa.required'                      => 'The field is required',
            'm_birth_fa.required'                      => 'The field is required',
            'd_birth_fa.required'                      => 'The field is required',
            // mom
            'first_name_mom.required'          => 'The field is required',
            'first_name_mom.max'               => 'The field max length 255 charaters',
            'last_name_mom.required'           => 'The field is required',
            'last_name_mom.max'                => 'The field max length 255 charaters',
            'first_name_furigana_mom.required' => 'The field is required',
            'first_name_furigana_mom.max'      => 'The field max length 255 charaters',
            'last_name_furigana_mom.required'  => 'The field is required',
            'last_name_furigana_mom.max'       => 'The field max length 255 charaters',
            'y_birth_mom.required'                      => 'The field is required',
            'm_birth_mom.required'                      => 'The field is required',
            'd_birth_mom.required'                      => 'The field is required',
            // childs
            // 'gender_child.*.required'  => 'The field is required',
            // 'allergic.*.required'      => 'The field is required',
            // 'chronic.*.required'       => 'The field is required',
        ];
    }
}
