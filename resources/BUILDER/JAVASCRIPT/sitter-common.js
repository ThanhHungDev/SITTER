$(document).ready(function(){
    $('#slider').show();
    $('#slider-nav').show();
    $('#alert_message .close').click(function(e) {
        $("#alert_message").fadeOut('slow');
    });
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
});
