<?php

namespace App\Http\Requests\CLIENT;

use Illuminate\Foundation\Http\FormRequest;

class VALIDATE_SITTER_REGISTER_PARENT extends FormRequest
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
        $validates = [
            'type_upload'           => 'required',
            'input_file_front'      => 'required|mimes:jpg,jpeg,png,bmp|max:50000',
            'input_file_back'       => 'required|mimes:jpg,jpeg,png,bmp|max:50000',
            'contact_name'          => 'required|max:255',
            'contact_address'       => 'required|max:255',
            'contact_phone'         => 'required|min:10|max:11',
            'contact_relationship'  => 'required|max:255',
            'skills'                => 'required',
            // 'experiences'           => 'required',
            'check_accept'          => 'required',
        ];
        return $validates;
    }

    public function messages(){
        return [
            'required' => 'The :attribute field is required.',
            'type_upload.required'      => '本人確認書類を選択して下さい。',
            'input_file_front.required' => '画像を選択して下さい。',
            'input_file_back.required'  => '画像を選択して下さい。',
            'input_file_front.mimes'    => 'ファイル形式が異なります。',
            'input_file_back.mimes'     => 'ファイル形式が異なります。',
            'input_file_front.max'      => '画像の最大サイズ5MB',
            'input_file_back.max'       => '画像の最大サイズ5MB',
            'contact_name.required'          => '緊急連絡先お名前を入力して下さい。',
            'contact_address.required'       => '緊急連絡先住所を入力して下さい。',
            'contact_phone.required'         => '緊急連絡先電話番号を入力して下さい。',
            'contact_relationship.required'  => '緊急連絡先とのご関係を入力して下さい。',
            'contact_name.max'          => '緊急連絡先お名前は1桁以上、255桁以下でなければなりません。',
            'contact_address.max'       => '緊急連絡先住所は1桁以上、255桁以下でなければなりません。',
            'contact_phone.max'         => '電話番号は10桁以上、11桁以下でなければなりません。',
            'contact_phone.min'         => '電話番号は10桁以上、11桁以下でなければなりません。',
            'contact_relationship.max'  => '緊急連絡先とのご関係は1桁以上、255桁以下でなければなりません。',
            'skills.required'                => 'サポートの項目を選択して下さい。',
            // 'experiences.required'           => 'お持ちの資格を選択して下さい。',
            'check_accept.required'          => '登録には利用規約とプライバシーポリシーに同意していただく必要があります。',
        ];
    }
}
