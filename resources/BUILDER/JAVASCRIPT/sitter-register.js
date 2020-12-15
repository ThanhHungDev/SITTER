$(document).ready(function () {
    let formValidate = $('#sitter-register');
    formValidate.validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        invalidHandler: function () {
            $(this).find(".form-validate .error:first").focus();
        },
        rules: {
            first_name: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                        }
                        return true;
                    }
                },
                minlength: 1,
                maxlength: 255
            },
            last_name: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                        }
                        return true;
                    }
                },
                minlength: 1,
                maxlength: 255,
            },
            first_name_furigana: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                        }
                        return true;
                    }
                },
                minlength: 1,
                maxlength: 255,
                checkKatakana: true
            },
            last_name_furigana: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                        }
                        return true;
                    }
                },
                minlength: 1,
                maxlength: 255,
                checkKatakana: true
            },
            gender: 'required',
            birth_year: {
                checkBirthDay : true,
                required: true,
                checkAge: true
            },
            birth_month: {
                checkBirthDay: true,
                required: true,
                checkAge: true
            },
            birth_day: {
                checkBirthDay: true,
                required: true,
                checkAge: true
            },
            post_code: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                            return true;
                        }
                        return false;
                    }
                },
                minlength: 1,
                maxlength: 8
            },
            pref: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                            return true;
                        }
                        return false;
                    }
                },
                minlength: 1,
                maxlength: 100
            },
            town: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                            return true;
                        }
                        return false;
                    }
                },
                minlength: 1,
                maxlength: 100
            },
            address: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                            return true;
                        }
                        return false;
                    }
                },
                minlength: 1,
                maxlength: 100
            },
            line1: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                            return true;
                        }
                        return false;
                    }
                },
            },
            phone: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                            return true;
                        }
                        return false;
                    }
                },
                checkHyphen: true,
                number   : true,
                minlength: 10,
                maxlength: 11
            },
            email: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                            return true;
                        }
                        return false;
                    }
                },
                emailValidate: true
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 32
            },
            confirm_password: {
                required: true,
                minlength: 6,
                maxlength: 32,
                equalTo: '#password'
            },
            check_accept: {
                required: true
            }
        },
        messages: {
            first_name: {
                required: '苗字を入力して下さい。',
                minlength: '苗字は1桁以上、255桁以下でなければなりません。',
                maxlength: '苗字は1桁以上、255桁以下でなければなりません。'
            },
            last_name: {
                required: '名前を入力して下さい。',
                minlength: 'お名前（名）は1桁以上、255桁以下でなければなりません。',
                maxlength: 'お名前（名）は1桁以上、255桁以下でなければなりません。'
            },
            first_name_furigana: {
                required: '苗字（フリガナ）を入力して下さい。',
                minlength: '苗字（フリガナ）は1桁以上、255桁以下でなければなりません。',
                maxlength: '苗字（フリガナ）は1桁以上、255桁以下でなければなりません。',
                checkKatakana: 'このフィールドにはカタカナのみを使用してください。'
            },
            last_name_furigana: {
                required: '名前（フリガナ）を入力して下さい。',
                minlength: '名前（フリガナ）は1桁以上、255桁以下でなければなりません。',
                maxlength: '名前（フリガナ）は1桁以上、255桁以下でなければなりません。',
                checkKatakana: 'このフィールドにはカタカナのみを使用してください。'
            },
            gender: {
                required: '性別を選択して下さい。'
            },
            birth_year: {
                checkBirthDay: '生年月日が不正です。',
                required: '年を入力して下さい',
                checkAge: '年齢は13歳以上である必要があります'
            },
            birth_month: {
                checkBirthDay: '生年月日が不正です。',
                required: '月を入力して下さい',
                checkAge: '年齢は13歳以上である必要があります'
            },
            birth_day: {
                checkBirthDay: '生年月日が不正です。',
                required: '日を入力して下さい',
                checkAge: '年齢は13歳以上である必要があります'
            },
            post_code: {
                required: '郵便番号を入力して下さい。',
                minlength: '郵便番号は1桁以上、255桁以下でなければなりません。',
                maxlength: '郵便番号は1桁以上、255桁以下でなければなりません。'
            },
            pref: {
                required: '都道府県を選択して下さい。'
            },
            town: {
                required: '市区町村を入力して下さい。'
            },
            address: {
                required: '町域を入力して下さい。'
            },
            line1: {
                required : '丁目以降を入力して下さい。',
            },
            phone: {
                required : '電話番号を入力して下さい。',
                checkHyphen : 'ハイフンは不要です',
                number   : '電話番号は数字を入力してください。',
                minlength: '電話番号は10桁以上、11桁以下でなければなりません。',
                maxlength: '電話番号は10桁以上、11桁以下でなければなりません。'
            },
            email: {
                required: 'メールアドレスを入力して下さい。',
                emailValidate: 'メールアドレスが不正です。'
            },
            password: {
                required: 'パスワードを入力して下さい。',
                minlength: 'パスワードは半角英数文字6文字以上にする必要があります。',
                maxlength: 'パスワードは半角英数文字6文字以上にする必要があります。' 
            },
            confirm_password: {
                required: 'パスワード確認入力して下さい。',
                minlength: 'パスワードは半角英数文字6文字以上にする必要があります。',
                maxlength: 'パスワードは半角英数文字6文字以上にする必要があります。',
                equalTo: 'パスワード確認はパスワードと一致しません。'
            },
            check_accept: {
                'required': '登録には利用規約とプライバシーポリシーに同意していただく必要があります。',
            }
        },
        errorPlacement: function (error, element) {
            var element = element.closest('.form-validate').find('.form-error');
            element.html('');
            error.appendTo(element);
        },
    });
    
});
function check_birthday() {
    let year = $('#sl-box-year').val();
    let month = $('#sl-box-month').val();
    let day = $('#sl-box-day').val();

    if ( year == '' || month == '' || day == '' ) {
        return true;
    } else {
        let date = new Date(year + '/' + month + '/ '+ day);
        if (date.getDate() != day) {
            return false;
        }
        let date_current = Date.now();
        return date_current > date.getTime();
    }
    
}

function check_age() {
    let year = $('#sl-box-year').val();
    let month = $('#sl-box-month').val();
    let day = $('#sl-box-day').val();

    if ( year == '' || month == '' || day == '' ) {
        return true;
    } else {
        let date = new Date(year + '/' + month + '/ '+ day);
        if (date.getDate() != day) {
            return false;
        }
        let date_current = Date.now();
        let ageDifMs = date_current - date.getTime();
        let ageDate = new Date(ageDifMs);
        let age = Math.abs(ageDate.getUTCFullYear() - 1970);

        if(age <= 13) {
            return false;
        }

        return true;
    }   
}

function validate_email(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function checkHyphen(text){
    if( text.indexOf("-") >= 0 ){
        return true
    }
    return false;
}
jQuery.validator.addMethod('checkBirthDay', function () {
    return check_birthday();
})
jQuery.validator.addMethod('checkBirthDay', function () {
    return check_birthday();
})

jQuery.validator.addMethod('checkAge', function () {
    return check_age();
})

jQuery.validator.addMethod('emailValidate', function (value) {
    return validate_email(value);
})
jQuery.validator.addMethod('checkHyphen', function (value) {
    return !checkHyphen(value);
});

jQuery.validator.addMethod('checkKatakana', function (value) {
    return wanakana.isKatakana(value);
})

$('#btn-post-code').on('click',function () {
    $('#sl-box-pref').val('');
    $('#inp-town').val('');
    $('#inp-address').val('');
    $('#pref-kana').val('');
    $('#city-kana').val('');
    $('#town-kana').val('');
    $('#inp-post-code').change();
});
$('#inp-post-code').jpostal({
    postcode : [
        '#inp-post-code'
    ],
    address : {
        '#sl-box-pref': '%3',
        '#inp-town'   : '%4',
        '#inp-address': '%5',
        '#pref-kana'  : '%8',
        '#city-kana'  : '%9',
        '#town-kana'  : '%10',
    }
});
$('#inp-post-code').focusout(function () {
    let strPostCode = $(this).val();
    if (strPostCode.length <= 8 ) {
        if (strPostCode.length>3 && strPostCode.indexOf('-') < 0) {
            $(this).val(strPostCode.substr(0,3) + '-' + strPostCode.substr(3))
        }
    }else {
        $(this).val(strPostCode.substr(0,8))
    }
});

$('#line2').focusout(function () {
    let line2 = $(this).val().trim();
    if (line2.length > 0 ) {
        $('#line2-kana').val(wanakana.toKatakana(line2));
    }
});

$(document).on('blur', '#reg-phone, #inp-post-code, #line1', function() {
    $(this).val(convertNumberJP($(this).val()));
});

function checkLine1(){
    let value = $("#line1").val().trim();
    if(!value) return;
    let arr = ['0','1','2','3','4','5','6','7','8','9','-','０','１','２','３','４','５','６','７','８','９','ー'];
    let arr_input = value.split('');        
    
    let remove_char = "";
    for(let i = 0; i < arr_input.length; i++){
        
        if(!arr.includes(arr_input[i])){
            $("#line1").val(remove_char.trim());
            return;
        }
        remove_char = remove_char+arr_input[i];
    }
    $("#line1").val(remove_char.trim());
}

$('#line1').on('blur',function(){
    checkLine1();
});
