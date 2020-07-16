$(document).ready(function () {
    $('.upload-info').click(function () {
        let inputName = $(this).attr('data-name');
        let element = 'input[name="'+inputName+'"]';
        $(element).trigger('click');
        // <span>表面を追加</span>
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
                var htmlElement = '<img class="load-image" src="'+e.target.result+'" alt="">';
                if(htmlElement){
                    // htmlElement += '<span class="btn-remove" title="trash"><i class="fas fa-trash-alt"></i></span>'
                    $(elementImage).html(htmlElement);
                }
                
            }
        }
    });

    let formValidate = $('#sitter-register-parent');
    formValidate.validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        invalidHandler: function () {
            $(this).find(".form-validate .error:first").focus();
        },
        rules: {
            type_upload: 'required',
            input_file_front: {
                accept: "jpg|jpeg|png|JPG|JPEG|PNG",
                required: true,
            },
            input_file_back: {
                accept: "jpg|jpeg|png|JPG|JPEG|PNG",
                required: true,
            },
            input_file_qualifi: {
                accept: "jpg|jpeg|png|JPG|JPEG|PNG",
                required: true,
            },
            check_accept: 'required',
            'skills[]': 'required',
            'experiences[]': 'required',
            contact_name: {
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
            contact_address: {
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
            contact_phone: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                        }
                        return true;
                    }
                },
                minlength: 10,
                maxlength: 11,
                checkHyphen : true,
            },
            contact_relationship: {
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
        },
        messages: {
            type_upload: {
                required: '本人確認書類を選択して下さい。',
            },

            input_file_front: {
                required: '画像を選択して下さい。',
                accept: 'ファイル形式が異なります。',
            },

            input_file_back: {
                required: '画像を選択して下さい。',
                accept: 'ファイル形式が異なります。',
            },

            input_file_qualifi: {
                required: '画像を選択して下さい。',
                accept: 'ファイル形式が異なります。',
            },

            'experiences[]': {
                required: 'お持ちの資格を選択して下さい。',
            },

            'skills[]': {
                required: 'サポートの項目は必須です',
            },

            check_accept: {
                required: 'このフィールドは必須です',
            },

            contact_name: {
                required: '緊急連絡先お名前を入力して下さい。',
                minlength: '緊急連絡先お名前は1桁以上、255桁以下でなければなりません。',
                maxlength: '緊急連絡先お名前は1桁以上、255桁以下でなければなりません。'
            },
            contact_address: {
                required: '緊急連絡先住所を入力して下さい。',
                minlength: '緊急連絡先住所は1桁以上、255桁以下でなければなりません。',
                maxlength: '緊急連絡先住所は1桁以上、255桁以下でなければなりません。'
            },
            contact_phone: {
                required: '緊急連絡先電話番号を入力して下さい。',
                number   : '緊急連絡先電話番号は数字を入力してください。',
                checkHyphen : 'ハイフンは不要です',
                minlength: '電話番号は10桁以上、11桁以下でなければなりません。',
                maxlength: '電話番号は10桁以上、11桁以下でなければなりません。'
            },
            contact_relationship: {
                required: '緊急連絡先とのご関係を入力して下さい。',
                minlength: '緊急連絡先とのご関係は1桁以上、255桁以下でなければなりません。',
                maxlength: '緊急連絡先とのご関係は1桁以上、255桁以下でなければなりません。'
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

function checkHyphen(text){
    if( text.indexOf("-") >= 0 ){
        return true
    }
    return false;
}

jQuery.validator.addMethod('checkHyphen', function (value) {
    return !checkHyphen(value);
});