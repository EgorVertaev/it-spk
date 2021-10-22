$(document).ready(function() {
    $(window).scroll(function(){
        const navOffset = $('.header').offset().top;

        if(navOffset > 20) {
            $('.header').addClass('header--scroll')
        } else if(navOffset === 0) {
            $('.header').removeClass('header--scroll')
        }
        
    });
});

$(document).ready(function() {
    $('.burger').on('click', function() {
        $('.menu-mob').addClass('menu-mob--show');
        $('body').addClass('body-noscroll');
        $('html').addClass('html-noscroll');
    });

    $('.menu-mob__btn').on('click', function() {
        $('.menu-mob').removeClass('menu-mob--show');
        $('body').removeClass('body-noscroll');
        $('html').removeClass('html-noscroll');
    });
})

$(document).ready(function() {
    $('.btn-js').on('click', function() {
        $('.form-popup').addClass('form-popup--show');
        $('body').addClass('body-noscroll');
        $('html').addClass('html-noscroll');
    });

    $('.form-popup__btn').on('click', function() {
        $('.form-popup').removeClass('form-popup--show');
        $('body').removeClass('body-noscroll');
        $('html').removeClass('html-noscroll');
    });
});

$$(".header a").on("click", function (e) {
    e.preventDefault(); 
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('html').animate({scrollTop: top}, 1000);
});