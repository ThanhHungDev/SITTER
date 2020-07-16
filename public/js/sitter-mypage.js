$(document).ready(function(){
    $('#slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed: 2000,
        asNavFor: '#slider-nav'
    });
    $('#slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#slider',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});
