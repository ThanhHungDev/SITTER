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
            input_file_front: 'required',
            input_file_back: 'required',
            input_file_qualifi: 'required',
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
                minlength: 1,
                maxlength: 255
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
                required: '本人確認書類を選択は必須です',
            },

            input_file_front: {
                required: 'ファイルは必須です',
            },

            input_file_back: {
                required: 'ファイルは必須です',
            },

            input_file_qualifi: {
                required: 'ファイルは必須です',
            },

            'experiences[]': {
                required: 'お持ちの資格・経験は必須です',
            },

            'skills[]': {
                required: 'サポートの項目は必須です',
            },

            check_accept: {
                required: 'このフィールドは必須です',
            },

            contact_name: {
                required: '緊急連絡先住所は必須です',
                minlength: '緊急連絡先住所は1桁以上、255桁以下でなければなりません。',
                maxlength: '緊急連絡先住所は1桁以上、255桁以下でなければなりません。'
            },
            contact_address: {
                required: '緊急連絡先住所は必須です',
                minlength: '緊急連絡先住所は1桁以上、255桁以下でなければなりません。',
                maxlength: '緊急連絡先住所は1桁以上、255桁以下でなければなりません。'
            },
            contact_phone: {
                required: '緊急連絡先電話番号は必須です',
                minlength: '緊急連絡先電話番号は1桁以上、255桁以下でなければなりません。',
                maxlength: '緊急連絡先電話番号は1桁以上、255桁以下でなければなりません。'
            },
            contact_relationship: {
                required: 'あなたとの関係は必須です',
                minlength: 'あなたとの関係は1桁以上、255桁以下でなければなりません。',
                maxlength: 'あなたとの関係は1桁以上、255桁以下でなければなりません。'
            },
            check_accept: {
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