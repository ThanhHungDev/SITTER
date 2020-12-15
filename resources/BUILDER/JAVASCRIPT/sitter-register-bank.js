$(document).ready(function () {
    let formValidate = $('#bank-account-form');
    formValidate.validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        invalidHandler: function () {
            $(this).find(".form-validate .error:first").focus();
        },
        rules: {
            account_number: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                        }
                        return true;
                    }
                },
                minlength: 7,
                maxlength: 8,
                number   : true,
            },
            account_holder_name: {
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
            bank_code: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                        }
                        return true;
                    }
                }
            },
            branch_code: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                        }
                        return true;
                    }
                }
            }
        },
        messages: {
            account_number: {
                required: '口座番号を入力して下さい。',
                minlength: '無効な銀行口座番号です: 7 〜 8 桁の番号を指定してください。',
                maxlength: '無効な銀行口座番号です: 7 〜 8 桁の番号を指定してください。',
                number   : '口座番号は数字を入力してください。',
            },
            account_holder_name: {
                required: '口座名義を入力して下さい。',
                minlength: '口座名義は1桁以上、255桁以下でなければなりません。',
                maxlength: '口座名義は1桁以上、255桁以下でなければなりません。',
                checkKatakana: 'このフィールドにはカタカナのみを使用してください。',
            },
            bank_code: {
                required: '銀行名を入力して下さい。'
            },
            branch_code: {
                required: '支店名を入力して下さい。'
            },
        },
        errorPlacement: function (error, element) {
            var element = element.closest('.form-validate').find('.form-error');
            element.html('');
            error.appendTo(element);
        },
    });

    jQuery.validator.addMethod('checkKatakana', function (value) {
        return wanakana.isKatakana(value);
    })

    $('#stripe_test_bank').on('click', function(){
        $('#account-number').val('0001234');
        $('#account-holder-name').val('アカウントテスト');
        $('#routing-number').val('1100000');
    });

    // bank name
    selectCommon($('#js-bank-code'), API_SITTER_URL + '/bank-code', '');

    $('#js-bank-code').on('change', function(){
        var data = $(this).select2('data');
        var bank_code = data[0].id;
        var bank_name = data[0].text;
        $("#js-branch-code").val('');
        if(bank_code){
            $("#js-branch-code").removeAttr("disabled");
            let url = API_SITTER_URL + '/branch-code?bank_code=' + bank_code;
            selectCommon($("#js-branch-code"), url, '');
            $('#bank-name').val(bank_name);
            $('#js-bank-code').valid();
        }
    })

    $('#js-branch-code').on('change', function(){
        var data = $(this).select2('data');
        var branch_code = data[0].id;
        var branch_name = data[0].text;
        var bank_code = $("#js-bank-code").val();
        
        var routing_number = bank_code + branch_code;
        
        $("#routing-number").val(routing_number);
        $('#branch-name').val(branch_name);
        $('#js-branch-code').valid();
    })

    $('#account-number').on('blur',function(){
        $(this).val(convertNumberJP($(this).val()));
        checkBankNumber();
    });

    function checkBankNumber(){
        let value = $("#account-number").val().trim();
        if(!value) return;
        let arr = ['0','1','2','3','4','5','6','7','8','9','０','１','２','３','４','５','６','７','８','９'];
        let arr_input = value.split('');        
        
        let remove_char = "";
        for(let i = 0; i < arr_input.length; i++){
            
            if(!arr.includes(arr_input[i])){
                $("#account-number").val(remove_char.trim());
                return;
            }
            remove_char = remove_char+arr_input[i];
        }
        $("#account-number").val(remove_char.trim());
    }

    // console.log(bank_code);
    function selectCommon(element, url, placeholder){
        element.select2({
            language: {
                errorLoading: function () {return "error";},
                minimumInputLength: function () {return "1文字以上入力してください";},
                noResults: function () {return "結果が見つかりません";},
                searching: function () {return "焼く...";}
            },
            ajax: {
                dataType: "json",
                delay: 250,
                url: url,
                data: function (params) {
                    var query = {
                        name: params.term,
                    }
        
                    return query;
                },
                processResults: function (data) {
                    return {
                        results: data,
                    }
                },
                cache: true,
                templateSelection: function (data, container) {
                    $(data.element).attr('data-bank-code', data.id);
                    return data.text;
                }
            },
            placeholder: placeholder,
        });
    }
});
