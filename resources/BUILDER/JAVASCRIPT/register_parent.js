$(function () {
    // ========== add child item =========
    $('select[name="child_number"]').change(function () {
        let html = '';
        let numberChildSelected = $(this).val(); 
        $('.number_child').text(numberChildSelected);
        
        if(numberChildSelected != ''){
            $('.list-childs').html('');
            let numBox = parseInt(numberChildSelected);
            for (let index = 0; index < numBox; index++) {
                $('.childs-hidden').find('.number_child').text(index + 1);
                $('.childs-hidden').find('input[name="first_name_child_0"]').attr('name', 'first_name_child_' + index);
                $('.childs-hidden').find('input[name="last_name_child_0"]').attr('name', 'last_name_child_' + index);
                $('.childs-hidden').find('input[name="first_name_furigana_child_0"]').attr('name', 'first_name_furigana_child_' + index);
                $('.childs-hidden').find('input[name="last_name_furigana_child_0"]').attr('name', 'last_name_furigana_child_' + index);
                $('.childs-hidden').find('input[name="gender_child_0"]').attr('name', 'gender_child_' + index);
                $('.childs-hidden').find('select[name="y_birth_child_0"]').attr('name', 'y_birth_child_' + index);
                $('.childs-hidden').find('select[name="m_birth_child_0"]').attr('name', 'm_birth_child_' + index);
                $('.childs-hidden').find('select[name="d_birth_child_0"]').attr('name', 'd_birth_child_' + index);
                $('.childs-hidden').find('input[name="allergic_0"]').attr('name', 'allergic_' + index);
                $('.childs-hidden').find('input[name="chronic_0"]').attr('name', 'chronic_' + index);
                let itemHtmlChild = '';
                itemHtmlChild = $('.childs-hidden').html();
                $('.list-childs').append(itemHtmlChild );
                //reset to default div
                $('.childs-hidden').find('input[name="first_name_child_'+ index +'"]').attr('name','first_name_child_0');
                $('.childs-hidden').find('input[name="last_name_child_'+ index +'"]').attr('name','last_name_child_0');
                $('.childs-hidden').find('input[name="first_name_furigana_child_'+ index +'"]').attr('name','first_name_furigana_child_0');
                $('.childs-hidden').find('input[name="last_name_furigana_child_'+ index +'"]').attr('name','last_name_furigana_child_0');
                $('.childs-hidden').find('input[name="gender_child_'+ index +'"]').attr('name','gender_child_0');
                $('.childs-hidden').find('select[name="y_birth_child_'+ index +'"]').attr('name','y_birth_child_0');
                $('.childs-hidden').find('select[name="m_birth_child_'+ index +'"]').attr('name','m_birth_child_0');
                $('.childs-hidden').find('select[name="d_birth_child_'+ index +'"]').attr('name','d_birth_child_0');
                $('.childs-hidden').find('input[name="allergic_'+ index +'"]').attr('name', 'allergic_0');
                $('.childs-hidden').find('input[name="chronic_'+ index +'"]').attr('name', 'chronic_0');
            }
        }
        
    })
    // ========== end add child item =========

    // ========== upload file certificate =========
    $('.upload-file').click(function () {
        let inputName = $(this).attr('data-name');
        let element = 'input[name="'+inputName+'"]';
        $(element).trigger('click');
    })

    $('input[data-type="upload"]').change(function(e) {
        var input = e.target;  
        var reader = new FileReader();
        var elementInput = $(this);
        $('.validate-image').text('');
        if (input.files && input.files[0]) {
            var file = input.files[0];
            var type = file.type;
            //validate type file
            var match = ["image/gif", "image/png", "image/jpg", "image/jpeg"];
            if (type != match[0] && type != match[1] && type != match[2] && type != match[3]) {
                $('.validate-image').text('サポートされていないファイル');
                $(elementInput).val('');
                return;
            }    
            
            reader.readAsDataURL(input.files[0]); // convert to base64 string
            //show image
            reader.onload = function(e) {
                var inputName = $(elementInput).attr('name');
                var elementImage = "div[data-name='" + inputName + "'";
                $(elementImage).css('background','unset');
                var htmlElement = '<img src="'+e.target.result+'" alt="">';
                if(htmlElement){
                    // htmlElement += '<span class="btn-remove" title="trash"><i class="fas fa-trash-alt"></i></span>'
                    $(elementImage).html(htmlElement);
                }
                
            }
        }
    });
    // ========== end upload file certificate =========

    //========== validate form register =========

    $(document).ready(function () {

        var DF_FORM_VALIDATE = $(".register_parent_form");
        if(DF_FORM_VALIDATE.length){
            validateForm(DF_FORM_VALIDATE);
        }
        
    })

    $('.register_parent_form .btn-register').click(function () {
        let number_child = $('.select_person').val();
        validateChilds(number_child);   
    })

    //========== end validate form register =========
})

function validateChilds(number_child) {
    var status = true;
    $('.form-error').html('');

    for (let index = 0; index < number_child; index++) {
        // first_name_child
        let val_first_name = $('input[name="first_name_child_' + index + '"]').val().trim();
        if(!val_first_name){
            console.log(val_first_name);
            showErrors('input[name="first_name_child_' + index + '"]', 1, 'お子様の苗字を入力して下さい。');
            status = false;
        }
        // last_name_child
        let val_last_name = $('input[name="last_name_child_' + index + '"]').val().trim();
        if(!val_last_name){
            showErrors('input[name="last_name_child_' + index + '"]', 1, 'お子様の名前を入力して下さい。');
            status = false;
        }
        // first_name_furigana_child
        let val_fn_furigana = $('input[name="first_name_furigana_child_' + index + '"]').val().trim();
        if(!val_fn_furigana){
            showErrors('input[name="first_name_furigana_child_' + index + '"]', 1, 'お子様の苗字（フリガナ）を入力して下さい。');
            status = false;
        }
        // last_name_furigana_child
        let val_ln_furigana = $('input[name="last_name_furigana_child_' + index + '"]').val().trim();
        if(!val_ln_furigana){
            showErrors('input[name="last_name_furigana_child_' + index + '"]', 1, 'お子様の名前（フリガナ）を入力して下さい。');
            status = false;
        }
        // gender_child_0
        if(!$('input[name="gender_child_' + index + '"]:checked').length > 0){
            showErrors('input[name="gender_child_' + index + '"]', 2, 'お子様の性別を選択してください。');
            status = false;
        }
        // y_birth_child
        let val_y_birth_child = $('select[name="y_birth_child_' + index + '"]').val();
        if(val_y_birth_child == ''){
            showErrors('select[name="y_birth_child_' + index + '"]', 2, 'お子様の生年を入力して下さい。');
            status = false;
        }
        // m_birth_child
        let val_m_birth_child = $('select[name="m_birth_child_' + index + '"]').val();
        if(val_m_birth_child == ''){
            showErrors('select[name="m_birth_child_' + index + '"]', 2, 'お子様の生月を入力して下さい。');
            status = false;
        }
        // d_birth_child
        let val_d_birth_child = $('select[name="d_birth_child_' + index + '"]').val();
        if(val_d_birth_child == ''){
            showErrors('select[name="d_birth_child_' + index + '"]', 2, 'お子様の生日を入力して下さい。');
            status = false;
        }
        
    }
    return status;
}

function showErrors(params, type, msg) {
    var element = '';
    if(type == 1){
        element = $(params).parent();
    } else {
        element = $(params).parent().parent();
    }
    $(element).find('.form-error').html(msg);
}

function validateForm(formJquery){
    formJquery.validate({
        submitHandler: function(form) {
            let number_child = $('.select_person').val();
            let status = validateChilds(number_child);
            return status;
        },
        rules: {
            type_upload: {
                required : true,
            },
            input_file_front: {
                required : true,
            },
            input_file_back: {
                required : true,
            },
            first_name_fa: {
                required : true,
                maxlength: 255
            },
            last_name_fa: {
                required : true,
                maxlength: 255
            },
            first_name_furigana_fa: {
                required : true,
                maxlength: 255
            },
            last_name_furigana_fa: {
                required : true,
                maxlength: 255
            },
            y_birth_fa: {
                required : true,
            },
            m_birth_fa: {
                required : true,
            },
            d_birth_fa: {
                required : true,
            },
            first_name_mom: {
                required : true,
                maxlength: 255
            },
            last_name_mom: {
                required : true,
                maxlength: 255
            },
            first_name_furigana_mom: {
                required : true,
                maxlength: 255
            },
            last_name_furigana_mom: {
                required : true,
                maxlength: 255
            },
            y_birth_mom: {
                required : true,
            },
            m_birth_mom: {
                required : true,
            },
            d_birth_mom: {
                required : true,
            },
            check_accept:{
                required : true,
            }
        },
        messages: {
            type_upload: {
                required : '本人確認書類を選択してください。',
            },
            input_file_front: {
                required : '画像を選択してください。',
            },
            input_file_back: {
                required : '画像を選択してください。',
            },
            first_name_fa: {
                required : '夫の苗字を入力して下さい。',
                maxlength: '姓 maxlength is 255 characters'
            },
            last_name_fa: {
                required : '夫の名前を入力して下さい。',
                maxlength: '名 maxlength is 255 characters'
            },
            first_name_furigana_fa: {
                required : '夫の苗字（フリガナ）を入力して下さい。',
                maxlength: 'セイ maxlength is 255 characters'
            },
            last_name_furigana_fa: {
                required : '夫の名前（フリガナ）を入力して下さい。',
                maxlength: 'メイ maxlength is 255 characters'
            },
            y_birth_fa: {
                required : '誕生年を入力してください',
            },
            m_birth_fa: {
                required : '誕生月を入力してください',
            },
            d_birth_fa: {
                required : '誕生日を入力してください',
            },
            first_name_mom: {
                required : '妻の苗字を入力して下さい。',
                maxlength: '姓 maxlength is 255 characters'
            },
            last_name_mom: {
                required : '妻の名前を入力して下さい。',
                maxlength: '名 maxlength is 255 characters'
            },
            first_name_furigana_mom: {
                required : '妻の苗字（フリガナ）を入力して下さい。',
                maxlength: 'セイ maxlength is 255 characters'
            },
            last_name_furigana_mom: {
                required : '妻の名前（フリガナ）を入力して下さい。',
                maxlength: 'メイ maxlength is 255 characters'
            },
            y_birth_mom: {
                required : '妻の生年を入力して下さい。',
            },
            m_birth_mom: {
                required : '妻の生月を入力して下さい。',
            },
            d_birth_mom: {
                required : '妻の生日を入力して下さい。',
            },
            check_accept:{
                required : '登録には利用規約とプライバシーポリシーに同意していただく必要があります',
            }
        },
        errorPlacement: function(error, element) {
            var element = element.closest('.form-validate').find('.form-error');
            error.appendTo(element);
        },
    });
}
