$(document).ready(function(){
    loadDataSkills();
    loadKidQty();
    $('#sitter-skills li').on('click', function name(params) {
        $(this).toggleClass('active');
        loadDataSkills();
        $('#skills').valid();
    });

    $('#exp_parenting').on('change', function name(params) {
        loadKidQty();
    });

    $('#slider').on('click', function() {
        $('#modalShowAvatars').modal('show');
    });

    $("#modalShowAvatars").on($.modal.BEFORE_CLOSE, function () {
        loadImageInMypage();
    });
    
    function loadDataSkills(){
        var skills = [];
        $('#sitter-skills li').each(function() {
            if($(this).hasClass('active')){
                var skill = $(this).attr('data-value');
                skills.push(skill);
            }
        });
        $('#skills').val(skills);
    };

    $('input').keypress(function(event) {
        if(event.keyCode == 13){
            event.preventDefault();
        }
    });

    function loadKidQty(){
        var check = parseInt($('#exp_parenting').val());
        if(check == 1){
            $('#kid_qty').attr('disabled', false);
        }
        else{
            $('#kid_qty option:first').prop('selected',true);
            $('#kid_qty').attr('disabled', true);
        }
    };

    // if(document.getElementById("showImage")){
    //     $("#showImage").sortable({
    //         update: function( event, ui ) {
    //             var sort_id = [];
    //             $( this ).find('li.ui-state-default').each(function(index, element){
    //                 var id = $(element).find(".js_remove_img").attr("data-id-image");
    //                 sort_id.push( id );
    //             });
    //             $.ajax({
    //                 type: 'POST',
    //                 url: $("#showImage").attr("data-action"),
    //                 data: { sort_id },
    //                 dataType: "json",
    //                 success: function(data) { },
    //                 error: function(data) {
    //                     alert("update fail")
    //                 }
    //             });
    //         }
    //     });
    //     $("#showImage").disableSelection();
    // }

    // validate

    let formValidate = $('#sitter-edit-form');
    $.validator.setDefaults({
        ignore: [':disabled']
    });
    formValidate.validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        focusInvalid: false,
        invalidHandler: function () {
            $(this).find(".form-validate .error:first").focus();
        },
        rules: {
            age:'required',
            pref:'required',
            city: {
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
            kid_age_start:'required',
            kid_age_end:'required',
            kid_age: {
                checkKidAge: true
            },
            kid_qty:'required',
            exp_parenting:'required',
            exp_sitter:'required',
            time_support:'required',
            salary_sitter:'required',
            salary_house:'required',
            self_introduce:'required',
            service_introduce:'required',
            skills: {
                required: true
            },
            schedule: {
                checkSchedules: true,
            },
            // minute_begin:{
            //     'required': true,
            //     'min': 0,
            //     'max': 59,
            // },
            // hour_begin:{
            //     'required': true,
            //     'min': 0,
            //     'max': 23,
            // },
            // minute_end:{
            //     'required': true,
            //     'min': 0,
            //     'max': 59,
            // },
            // hour_end:{
            //     'required': true,
            //     'min': 0,
            //     'max': 23,
            // },
            check_time: {
                checkValidTime: true,
            }
        },
        messages: {
            age: {
                required: 'この項目は必須です',
            },
            pref: {
                required: 'この項目は必須です',
            },
            city: {
                required: 'この項目は必須です',
                minlength: 'この項目は1桁以上、255桁以下でなければなりません。',
                maxlength: 'この項目は1桁以上、255桁以下でなければなりません。'
            },
            kid_age_start: {
                required: 'この項目は必須です',
            },
            kid_age_end: {
                required: 'この項目は必須です',
            },
            kid_age: {
                checkKidAge: '保育可能年齢が不正です。'
            },
            kid_qty: {
                required: 'この項目は必須です',
            },
            exp_sitter: {
                required: 'この項目は必須です',
            },
            exp_parenting: {
                required: 'この項目は必須です',
            },
            exp_sitter: {
                required: 'この項目は必須です',
            },
            time_support: {
                required: 'この項目は必須です',
            },
            salary_sitter: {
                required: 'この項目は必須です',
            },
            salary_house: {
                required: 'この項目は必須です',
            },
            self_introduce: {
                required: 'この項目は必須です',
            },
            service_introduce: {
                required: 'この項目は必須です',
            },
            skills: {
                required:'この項目は必須です',
            },
            schedule: {
                checkSchedules: 'この項目は必須です',
            },
            // minute_begin:{
            //     required: '開始時間の分は必須です。',
            //     min: '分は00から59でなければなりません。',
            //     max: '分は00から59でなければなりません。',
            // },
            // hour_begin:{
            //     required: '開始時間の時は必須です。',
            //     min: '時は00から23でなければなりません。',
            //     max: '時は00から23でなければなりません。',
            // },
            // minute_end:{
            //     required: '終了時間の分は必須です。',
            //     min: '分は00から59でなければなりません。',
            //     max: '分は00から59でなければなりません。',
            // },
            // hour_end:{
            //     required: '終了時間の時は必須です。',
            //     min: '時は00から23でなければなりません。',
            //     max: '時は00から23でなければなりません。',
            // },
            check_time: {
                checkValidTime: '終了時間は開始時間より後でなければなりません。',
            },
        },
        errorPlacement: function (error, element) {
            var element = element.closest('.form-validate').find('.form-error');
            element.html('');
            error.appendTo(element);
        },
    });
});

$.validator.addMethod('checkKidAge', function () {
    $ageStart = parseInt($('#kid_age_start').val());
    $ageEnd = parseInt($('#kid_age_end').val());
    if($ageStart && $ageEnd){
        if($ageStart > $ageEnd)
            return false;
    }
    return true;
});

$.validator.addMethod('checkSchedules', function () {
    $schedules = JSON.parse($('#sitter-mypage-edit #js-event-data').val());
    if(jQuery.isEmptyObject($schedules)){
        return false;
    }
    return true;
});

$.validator.addMethod('checkValidTime', function () {
    if($('#js-modal-calendar').hasClass('d-none')){
        return true;
    }
    return checkValidTime();
});

$('#kid_age_start, #kid_age_end').on('change', function(){
    $('#kid_age').valid();
});

$(document).on('input', '#js-hour-begin, #js-minute-begin, #js-hour-end, #js-minute-end', function(evt) {
    var text = $(this).val();
    if(text.length >= 2){
        text = text.substr(0,2);
    }
    $(this).val(text);
    $('#check-time').valid();
    return false;
});



function chooseFile() {
    $("#avatars").click();
}

/// set up event remove image
$("#showImage").on('click', '.js_remove_img', function() {
    var _element = $( this );
    var dataId = _element.attr("data-id-image");
    var wrapper_image_popup = _element.closest( 'ul' );
    _element.closest( 'li' ).remove();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type:'POST',
        url: APP_URL + "/sitter/remove-avatar",
        data: { imageId : dataId },
        dataType: "json",
        success:function(data){
            if(data.code == 200){
                $.toast({
                    heading: '成功',
                    text: '画像を削除しました',
                    showHideTransition: 'slide',
                    icon: 'success',
                    position: 'top-right',
                });
            }else{
                $.toast({
                    heading: 'エラー',
                    text: '画像を削除に失敗しました',
                    showHideTransition: 'slide',
                    icon: 'error',
                    position: 'top-right',
                });
            }
        },
        error: function(data){
            $.toast({
                heading: 'エラー',
                text: '画像を削除に失敗しました',
                showHideTransition: 'slide',
                icon: 'error',
                position: 'top-right',
            });
        }
    });
});

function saveImage(file) {
    ///action
    var form = new FormData();
    form.append('file', file);
    var action = APP_URL + '/sitter/upload-avatar';
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    /// request data
    $.ajax({
        type: 'POST',
        url: action,
        data: form,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success: function(data) {
            var blockImagesAjax = $(".js-waiting-ajax-save-image");
            if (data.code == 200) {
                // $('.wrapper-image-slide').removeClass("js-waiting-ajax-save-image");
                blockImagesAjax.addClass("itemRemove");

                var spanRemove = document.createElement("span");
                spanRemove.className = "js_remove_img";
                spanRemove.value = "js_remove_img";
                spanRemove.innerHTML = '<i class="far fa-trash-alt"></i>';
                spanRemove.setAttribute("data-id-image", data.id);

                blockImagesAjax.removeClass('js-waiting-ajax-save-image');
                blockImagesAjax.append(spanRemove);
                
                $('.js_loading_img').remove();
                $.toast({
                    heading: '成功',
                    text: '画像をアップロードしました',
                    showHideTransition: 'slide',
                    icon: 'success',
                    position: 'top-right',
                });
            }else {
                $.toast({
                    heading: 'エラー',
                    text: '画像のアップロードに失敗しました',
                    showHideTransition: 'slide',
                    icon: 'error',
                    position: 'top-right',
                });
                $('.js_loading_img').closest('li').remove();
            }
        },
        error: function(data) {
            $.toast({
                heading: 'エラー',
                text: '画像のアップロードに失敗しました',
                showHideTransition: 'slide',
                icon: 'error',
                position: 'top-right',
            });
            $('.js_loading_img').closest('li').remove();
        }
    });
}

function readURL(input, idShowImage) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {

            if (e.target.result) {
                var base64 = e.target.result;

                var image        = document.createElement("img");
                    image.src    = base64;

                var divWrapperImage = document.createElement("div");
                divWrapperImage.className = 'wrapper-image-slide js-waiting-ajax-save-image';

                var spanLoading = document.createElement("span");
                spanLoading.className = "js_loading_img";
                spanLoading.value = "js_loading_img";

                divWrapperImage.appendChild(image);
                divWrapperImage.appendChild(spanLoading);

                ///create li 
                var li = document.createElement("li");
                li.className = "ui-state-default";
                li.appendChild(divWrapperImage);

                document.getElementById(idShowImage).insertBefore(li, document.getElementById(idShowImage).firstChild);

                var fileUpload = input.files[0];
                ///ajax save file to server
                saveImage(fileUpload);
            }
        };
        reader.readAsDataURL(input.files[0]);
    }else{
        $.toast({
            heading: 'エラー',
            text: 'Error!',
            showHideTransition: 'slide',
            icon: 'error',
            position: 'top-right',
        });
    }
}

function loadImageInMypage(){
    $.ajax({
        type:'GET',
        url: APP_URL + "/sitter/load-avatars",
        dataType: "json",
        success:function(data){
            if(data.code == 200){
                $slideImage1 = '<img class="icon-upload" id="upload-avatar" src="'+ APP_URL + '/image/icons/icon-upload.png") >';
                $slideImage2 = '';
                $.each(data.data, function(key, image){
                    $source1 = APP_URL + '/storage/uploads/avatars/' + image.name;
                    $source2 = APP_URL + '/storage/uploads/avatars/thumbnail/' + image.name;
                    $slideImage1 +='<img src="'+ $source1 +'">';
                    $slideImage2 +='<img src="'+ $source2 +'">';
                });
                $('#slider').empty();
                $('#slider-nav').empty();
                $('#slider').removeClass('slick-initialized slick-slider').append($slideImage1);
                $('#slider-nav').removeClass('slick-initialized slick-slider').append($slideImage2);
                runSlide();
            }else{
                $.toast({
                    heading: 'エラー',
                    text: 'エラー',
                    showHideTransition: 'slide',
                    icon: 'error',
                    position: 'top-right',
                });
            }
        },
        error: function(data){
            $.toast({
                heading: 'エラー',
                text: 'エラー',
                showHideTransition: 'slide',
                icon: 'error',
                position: 'top-right',
            });
        }
    });
}
function runSlide(){
    $('#slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '#slider-nav',
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        swipe: true,
    });
    $('#slider-nav').slick({
        asNavFor: '#slider',
        dots: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
    });
};
