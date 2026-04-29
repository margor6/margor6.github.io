$(document).ready(function() {
    
    // 1. Hero (Fade-in)
    $('.hero-text h1').hide().fadeIn(2000);





    // 2. "back to top"
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function() {
        $('html, body').animate({
            // Przewijamy do górnej krawędzi elementu #hero
            scrollTop: $('#hero').offset().top 
        }, 800);
    });

});