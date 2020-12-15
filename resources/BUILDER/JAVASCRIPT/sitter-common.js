$(document).ready(function(){
    $('#slider').show();
    $('#slider-nav').show();
    $('#alert_message .close').click(function(e) {
        $("#alert_message").fadeOut('slow');
    });
    fetch_list_booking_data();
    $('#btn-sitter-public').one('click', function(e){
        e.preventDefault();
        $.ajax({
            type:'GET',
            url: SYSTEM_BASE_URL + "sitter/publish-profile",
            dataType: "json",
            success:function(data){
                if(data.code == 200){
                    $.toast({
                        heading: '成功',
                        text: 'プロフィールを公開しました',
                        showHideTransition: 'slide',
                        icon: 'success',
                        position: 'top-right',
                    });
                }else {
                    $.toast({
                        heading: 'エラー',
                        text: ' プロフィールを公開に失敗しました',
                        showHideTransition: 'slide',
                        icon: 'error',
                        position: 'top-right',
                    });
                }
            },
            error: function(data){
                $.toast({
                    heading: 'エラー',
                    text: ' プロフィールを公開に失敗しました',
                    showHideTransition: 'slide',
                    icon: 'error',
                    position: 'top-right',
                });
            }
        });
    });

    $('#slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '#slider-nav',
        pauseOnHover: true,
        swipe: true,
        arrows: false,
    });
    $('#slider-nav').slick({
        asNavFor: '#slider',
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        focusOnSelect: true
    });

    $(document).on('click', '.pagination-list-booking a', function (event) {
        event.preventDefault();
        var page = $(this).attr('href').split('page=')[1];
        fetch_list_booking_data(page);
    });

    function fetch_list_booking_data(page = 1) {
        console.log(SYSTEM_BASE_URL);
        $.ajax({
            url: SYSTEM_BASE_URL + "sitter/load-list-bookings?page=" + page,
            success: function (data) {
                $('#list-booking').html(data);
            }
        });
    }

    $('#btn-delete-stripe').on('click', function(e){
        $('#deleteStripeAccount').modal();
    });
});

function deleteStripeAccount(){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url: SYSTEM_BASE_URL + "sitter/delete-stripe-account",
        type: 'DELETE',
        success: function (data) {
            if(data.code == 200){
                $.toast({
                    heading: '成功',
                    text: '正常に削除されました',
                    showHideTransition: 'slide',
                    icon: 'success',
                    position: 'top-right',
                });
            }

            location.reload();
        },
        error: function(data){
            $.toast({
                heading: 'エラー',
                text: ' 削除エラー',
                showHideTransition: 'slide',
                icon: 'error',
                position: 'top-right',
            });
        }
    });
}

$('#btn-chose-certify').on('click', function(e){
    e.preventDefault();
    $("#certify").trigger("click");
});

function readURLCertify(input, idShowCertifies) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            if (e.target.result) {
                var base64 = e.target.result;

                var image        = document.createElement("img");
                    image.src    = base64;

                var divWrapperImage = document.createElement("div");
                divWrapperImage.className = 'certify js-waiting-ajax-save-image';

                var spanLoading = document.createElement("span");
                spanLoading.className = "js_loading_img";
                spanLoading.value = "js_loading_img";

                divWrapperImage.appendChild(image);
                divWrapperImage.appendChild(spanLoading);

                var div = document.createElement("div");
                div.className = "col-12 col-sm-6 col-lg-3 grid-image";
                div.appendChild(divWrapperImage);

                document.getElementById(idShowCertifies).insertBefore(div, document.getElementById(idShowCertifies).firstChild);

                var fileUpload = input.files[0];
                ///ajax save file to server
                saveImageCertify(fileUpload);
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

function saveImageCertify(file) {
    ///action
    var form = new FormData();
    form.append('file', file);
    var action = APP_URL + '/sitter/upload-certify';
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

// remove certify
$("#showCertifies").on('click', '.js_remove_img', function() {
    var _element = $( this );
    var dataId = _element.attr("data-id-image");
    _element.closest( 'div.grid-image' ).remove();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type:'POST',
        url: APP_URL + "/sitter/remove-certify",
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