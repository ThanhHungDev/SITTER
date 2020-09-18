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
});
