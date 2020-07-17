$(document).ready(function () {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 150) {
            $('.top a').fadeIn(300);
        } else {
            $('.top a').fadeOut(300);
        }
    });
    $('.top a').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

});

