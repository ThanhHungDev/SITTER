$(document).ready(function () {
    $('#rate-star').rateit({min: 1, max: 5, step: 1});
    $('#rate-star').bind('rated', function (e) {
        let rateValue = $(this).rateit('value');
        $('#rate').val(rateValue);
    });
    let formValidate = $('#review-sitter');
    formValidate.validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        invalidHandler: function () {
            $(this).find(".form-validate .error:first").focus();
        },
        ignore: false,
        rules: {
            comment: {
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
            rate: {
                checkRate: true
            }
        },
        messages: {
            comment: {
                required: 'この項目は必須です。',
            },
            rate: {
                checkRate: 'この項目は必須です。',
            }
        },
        errorPlacement: function (error, element) {
            var element = element.closest('.form-validate').find('.form-error');
            element.html('');
            error.appendTo(element);
        },
    });
});

jQuery.validator.addMethod('checkRate', function () {
    let rate = $('#rate').val();
    if (rate) return true;
    return false;
});
