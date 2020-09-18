$(document).ready(function(){
    $('#slider').show();
    $('#slider-nav').show();

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
