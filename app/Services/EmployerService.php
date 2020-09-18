<?php
namespace App\Services;

class EmployerService
{
    public static function validateSpecialRegisterField($inputData)
    {
        $validatedData = [];
        if(isset($inputData)){
            $child_total = $inputData['child_number'];
            $listLabel = [];
            $customMessages = [];
            for ($i=0; $i < $child_total; $i++) { 
                $listLabel['first_name_child_'.$i]             = 'required|max:255';
                $customMessages['first_name_child_'.$i.'.required'] = '姓 is required';
                $customMessages['first_name_child_'.$i.'.max']      = '姓 is max lenght 255';
            }
            for ($i=0; $i < $child_total; $i++) { 
                $listLabel['last_name_child_'.$i] = 'required|max:255';
                $customMessages['last_name_child_'.$i.'.required'] = '名 is required';
                $customMessages['last_name_child_'.$i.'.max']      = '姓 is max lenght 255';
            }
            for ($i=0; $i < $child_total; $i++) { 
                $listLabel['first_name_furigana_child_'.$i] = 'required';
                $customMessages['first_name_furigana_child_'.$i.'.required'] = 'セイ is required';
            }
            for ($i=0; $i < $child_total; $i++) { 
                $listLabel['last_name_furigana_child_'.$i] = 'required';
                $customMessages['last_name_furigana_child_'.$i.'.required'] = 'メイ is required';
            }
            for ($i=0; $i < $child_total; $i++) { 
                $listLabel['y_birth_child_'.$i] = 'required';
                $customMessages['y_birth_child_'.$i.'.required'] = '生年 is required';
            }
            for ($i=0; $i < $child_total; $i++) { 
                $listLabel['m_birth_child_'.$i] = 'required';
                $customMessages['m_birth_child_'.$i.'.required'] = '生月 is required';
            }
            for ($i=0; $i < $child_total; $i++) { 
                $listLabel['d_birth_child_'.$i] = 'required';
                $customMessages['d_birth_child_'.$i.'.required'] = '生日 is required';
            }
            for ($i=0; $i < $child_total; $i++) { 
                $listLabel['gender_child_'.$i] = 'required';
                $customMessages['gender_child_'.$i.'.required'] = 'お子様の性別 is required';
            }
            $validatedData = $inputData->validate($listLabel,$customMessages);
        }
        return $validatedData;
    }
}