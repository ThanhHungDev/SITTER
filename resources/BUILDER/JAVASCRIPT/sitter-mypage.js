$(document).ready(function(){
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
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '#slider',
        dots: true,
        centerMode: true,
        autoplay: true,
        focusOnSelect: true
    });
});
