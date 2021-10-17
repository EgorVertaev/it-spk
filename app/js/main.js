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