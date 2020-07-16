$(document).ready(function () {
    $('.em-identity-card').slick({
        slidesToShow  : 1,
        slidesToScroll: 1,
        autoplay      : true,
        autoplaySpeed : 1000,
    });  

    var DF_FORM_VALIDATE = $(".editMypage");
    if(DF_FORM_VALIDATE.length){
        validateForm(DF_FORM_VALIDATE);
    }
    
})
$('#postCode').jpostal({
    postcode : [
        '#postCode'
    ],
    address : {
        '#pref'  : '%3',
        '#town'  : '%4, %5' 
    }
});
$('#postCode').keyup(function () {
    let strPostCode = $(this).val();
    if (strPostCode.length <= 8 ) {
        if (strPostCode.length>3 && strPostCode.indexOf('-') < 0) {
            $(this).val(strPostCode.substr(0,3) + '-' + strPostCode.substr(3))
        }
    }else {
        $(this).val(strPostCode.substr(0,8))
    }
})

$(document).on("click",".child-delete",function() {

    let id_item = $(this).attr('data-id');
    if(id_item){
        $('#confirm-form').modal();
        $('#confirm-form').attr('data-id', id_item);
    } else {

        $(this).parent().parent().remove();
        let number_child_current = $('input[name="child_number"]').val();
        var number_child_saved   = parseInt($('input[name="number_child_root"]').val());

        $('.list-child').find('.contain-child-0').each(function () {
            
            $(this).find('.label_child_number').text(parseInt(number_child_saved)+1);
            $(this).find('input[name^="first_name_child_"]').attr('name', 'first_name_child_' + number_child_saved);
            $(this).find('input[name^="last_name_child_"]').attr('name', 'last_name_child_' + number_child_saved);
            $(this).find('input[name^="first_name_furigana_child_"]').attr('name', 'first_name_furigana_child_' + number_child_saved);
            $(this).find('input[name^="last_name_furigana_child_"]').attr('name', 'last_name_furigana_child_' + number_child_saved);
            $(this).find('input[name^="gender_child_"]').attr('name', 'gender_child_' + number_child_saved);
            $(this).find('select[name^="y_birth_child_"]').attr('name', 'y_birth_child_' + number_child_saved);
            $(this).find('select[name^="m_birth_child_"]').attr('name', 'm_birth_child_' + number_child_saved);
            $(this).find('select[name^="d_birth_child_"]').attr('name', 'd_birth_child_' + number_child_saved);
            $(this).find('input[name^="allergic_"]').attr('name', 'allergic_' + number_child_saved);
            $(this).find('input[name^="chronic_"]').attr('name', 'chronic_' + number_child_saved);
            number_child_saved = number_child_saved + 1;
        })

        let current_item = parseInt(number_child_current)-1;
        $('input[name="child_number"]').val(current_item);
    }

})

$('.btn-accept').click(function (params) {

    let id  = $('#confirm-form').attr('data-id');
    let action = $('#deleteChild').attr('action');
    $(this).attr('disabled', 'disabled');

    if(id != ''){
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            url     : action,
            type    : 'post',
            dataType: 'json',
            data    : {id:id},
            success: function( data ){
                $('.btn-accept').removeAttr('disabled');
                location.reload();
            }
        });
    } 
})

$('.btn-register').click(function () {
    let number_child = $('input[name="child_number"]').val();
    validateChilds(number_child);   
})

$('.add-child').click(function (params) {

    let count_item = $('input[name="child_number"]').val();
    let index      = count_item;

    $('#child-default').find('.label_child_number').text(parseInt(index) + 1);
    $('#child-default').find('input[name="first_name_child_0"]').attr('name', 'first_name_child_' + index);
    $('#child-default').find('input[name="last_name_child_0"]').attr('name', 'last_name_child_' + index);
    $('#child-default').find('input[name="first_name_furigana_child_0"]').attr('name', 'first_name_furigana_child_' + index);
    $('#child-default').find('input[name="last_name_furigana_child_0"]').attr('name', 'last_name_furigana_child_' + index);
    $('#child-default').find('input[name="gender_child_0"]').attr('name', 'gender_child_' + index);
    $('#child-default').find('select[name="y_birth_child_0"]').attr('name', 'y_birth_child_' + index);
    $('#child-default').find('select[name="m_birth_child_0"]').attr('name', 'm_birth_child_' + index);
    $('#child-default').find('select[name="d_birth_child_0"]').attr('name', 'd_birth_child_' + index);
    $('#child-default').find('input[name="allergic_0"]').attr('name', 'allergic_' + index);
    $('#child-default').find('input[name="chronic_0"]').attr('name', 'chronic_' + index);

    let itemChild = $('#child-default').html();
    $('.list-child').append(itemChild);
    $('input[name="child_number"]').val(parseInt(count_item)+1);

    $('#child-default').find('input[name="first_name_child_'+ index +'"]').attr('name','first_name_child_0');
    $('#child-default').find('input[name="last_name_child_'+ index +'"]').attr('name','last_name_child_0');
    $('#child-default').find('input[name="first_name_furigana_child_'+ index +'"]').attr('name','first_name_furigana_child_0');
    $('#child-default').find('input[name="last_name_furigana_child_'+ index +'"]').attr('name','last_name_furigana_child_0');
    $('#child-default').find('input[name="gender_child_'+ index +'"]').attr('name','gender_child_0');
    $('#child-default').find('select[name="y_birth_child_'+ index +'"]').attr('name','y_birth_child_0');
    $('#child-default').find('select[name="m_birth_child_'+ index +'"]').attr('name','m_birth_child_0');
    $('#child-default').find('select[name="d_birth_child_'+ index +'"]').attr('name','d_birth_child_0');
    $('#child-default').find('input[name="allergic_'+ index +'"]').attr('name', 'allergic_0');
    $('#child-default').find('input[name="chronic_'+ index +'"]').attr('name', 'chronic_0');

})

// validate
function validateForm(formJquery){
    formJquery.validate({
        submitHandler: function(form) {
            let number_child = $('input[name="child_number"]').val();
            let status = validateChilds(number_child);
            return status;
        },
        rules: {
            post_code: {
                required : true,
                maxlength: 255
            },
            pref: {
                required : true,
                maxlength: 255
            },
            town: {
                required : true,
                maxlength: 255
            },
            address: {
                maxlength: 255
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
            }
        },
        messages: {
            post_code: {
                required : '郵便番号は必須です',
                maxlength: '郵便番号は1桁以上、255桁以下でなければなりません。'
            },
            pref: {
                required : '都道府県は必須です',
            },
            town: {
                required : '市区町村は必須です',
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
        },
        errorPlacement: function(error, element) {
            var element = element.closest('.form-validate').find('.form-error');
            error.appendTo(element);
        },
    });
}

function validateChilds(number_child) {
    var status = true;
    $('.form-error').html('');

    for (let index = 0; index < number_child; index++) {
        // first_name_child
        let val_first_name = $('input[name="first_name_child_' + index + '"]').val().trim();
        if(!val_first_name){
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
