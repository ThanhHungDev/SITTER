$(document).ready(function () {
    let formValidate = $('.form-register');
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
                maxlength: 255
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
                maxlength: 255
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
                maxlength: 255
            },
            gender: 'required',
            birth_year: {
                checkBirthDay : true,
                required: true
            },
            birth_month: {
                checkBirthDay: true,
                required: true
            },
            birth_day: {
                checkBirthDay: true,
                required: true
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
            check_policy: {
                required: true
            }
        },
        messages: {
            first_name: {
                required: 'お名前（姓）は必須です',
                minlength: 'お名前（姓）は1桁以上、255桁以下でなければなりません。',
                maxlength: 'お名前（姓）は1桁以上、255桁以下でなければなりません。'
            },
            last_name: {
                required: 'お名前（名）は必須です',
                minlength: 'お名前（名）は1桁以上、255桁以下でなければなりません。',
                maxlength: 'お名前（名）は1桁以上、255桁以下でなければなりません。'
            },
            first_name_furigana: {
                required: 'フリガナ（姓）は必須です',
                minlength: 'フリガナ（姓）は1桁以上、255桁以下でなければなりません。',
                maxlength: 'フリガナ（姓）は1桁以上、255桁以下でなければなりません。'
            },
            last_name_furigana: {
                required: 'フリガナ（名）は必須です',
                minlength: 'フリガナ（名）は1桁以上、255桁以下でなければなりません。',
                maxlength: 'フリガナ（名）は1桁以上、255桁以下でなければなりません。'
            },
            gender: {
                required: '性別は必須です'
            },
            birth_year: {
                checkBirthDay: '間違った生年月日',
                required: '年は必須です'
            },
            birth_month: {
                checkBirthDay: '間違った生年月日',
                required: '月は必須です'
            },
            birth_day: {
                checkBirthDay: '間違った生年月日',
                required: '日は必須です'
            },
            post_code: {
                required: '郵便番号は必須です',
                minlength: '郵便番号は1桁以上、255桁以下でなければなりません。',
                maxlength: '郵便番号は1桁以上、255桁以下でなければなりません。'
            },
            pref: {
                required: '都道府県は必須です'
            },
            town: {
                required: '市区町村は必須です'
            },
            phone: {
                required : '電話番号は必須です',
                checkHyphen : 'ハイフンは不要です',
                number   : '電話番号は数字を入力してください。',
                minlength: '電話番号話番号は10桁以上、11桁以下でなければなりません。',
                maxlength: '電話番号話番号は10桁以上、11桁以下でなければなりません。'
            },
            email: {
                required: 'メールアドレスは必須です。',
                emailValidate: 'メールアドレスが無効です。'
            },
            password: {
                required: 'パスワードは必須です。',
                minlength: 'パスワードは6文字以上、32文字以下でなければなりません。',
                maxlength: 'パスワードは6文字以上、32文字以下でなければなりません。' 
            },
            confirm_password: {
                required: 'パスワード確認は必須です。',
                minlength: 'パスワードは6文字以上、32文字以下でなければなりません。',
                maxlength: 'パスワードは6文字以上、32文字以下でなければなりません。',
                equalTo: 'パスワード確認はパスワードと一致しません。'
            },
            check_policy: {
                'required': 'プライバシーポリシーと利用規約に同意する必要があります。',
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
        let date = new Date(year + '/' + month + '/'+ day);
        if (date.getDate() != day) {
            return false;
        }
        let date_current = Date.now();
        return date_current > date.getTime();
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
$.validator.addMethod('checkBirthDay', function () {
    return check_birthday();
})

$.validator.addMethod('emailValidate', function (value) {
    return validate_email(value);
})
$.validator.addMethod('checkHyphen', function (value) {
    return !checkHyphen(value);
});
$('#btn-post-code').on('click',function () {
    $('#sl-box-pref').val('');
    $('#inp-town').val('');
    $('#inp-address').val('');
    $('#inp-post-code').change();
});
$('#inp-post-code').jpostal({
    postcode : [
        '#inp-post-code'
    ],
    address : {
        '#sl-box-pref'  : '%3',
        '#inp-town'  : '%4' ,
        '#inp-address' : '%5'
    }
});
$('#inp-post-code').on('change',function () {
    let strPostCode = regReplace($(this).val(), "０１２３４５６７８９ー", "0123456789-")
    this.value = strPostCode
    if (strPostCode.length <= 8 ) {
        if (strPostCode.length>3 && strPostCode.indexOf('-') < 0) {
            $(this).val(strPostCode.substr(0,3) + '-' + strPostCode.substr(3)) 
        }
    }else {
        $(this).val(strPostCode.substr(0,8))
    }
    $(this).keyup();
})
function regReplace( text, search, replace ) {
    // Make the search string a regex.
    let regex = RegExp( '[^0-9]|[' + search + ']', 'g' );
    return text.replace( regex,  
        function( chr ) {
            // Get the position of the found character in the search string.
            let ind = search.indexOf( chr );
            // Get the corresponding character from the replace string.
            return replace.charAt( ind )
    });
}