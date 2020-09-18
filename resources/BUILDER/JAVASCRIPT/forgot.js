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
            }
        },
        messages: {
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
                equalTo: 'パスワードが一致しません。'
            }
        },
        errorPlacement: function (error, element) {
            var element = element.closest('.form-validate').find('.form-error');
            element.html('');
            error.appendTo(element);
        },
    });
    
});
$.validator.addMethod('emailValidate', function (value) {
    return validate_email(value);
});
function validate_email(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}