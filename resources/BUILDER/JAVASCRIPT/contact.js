$(document).ready(function () {
    let formValidate = $('.form-contact');
    formValidate.validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        invalidHandler: function () {
            $(this).find(".form-validate .error:first").focus();
        },
        rules: {
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
            subject: {
                required: {
                     depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                            return true;
                        }
                        return false;
                    }
                }
            },
            content: {
                required: {
                     depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                            return true;
                        }
                        return false;
                    }
                }
            },
            check_policy: {
                required: true
            }
        },
        messages: {

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
            email: {
                required: 'メールアドレスは必須です。',
                emailValidate: 'メールアドレスが無効です。'
            },
            subject: {
                required: '件名は必須です。'
            },
            content: {
                required: 'メッセージは必須です。'
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
function validate_email(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$.validator.addMethod('emailValidate', function (value) {
    return validate_email(value);
})
