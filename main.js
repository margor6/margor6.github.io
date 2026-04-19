$(document).ready(function() {
    
    // 1. Animacja wejściowa Hero (Fade-in)
    // Ponieważ h1 jest widoczne z poziomu CSS, najpierw je ukrywamy, a potem płynnie pokazujemy.
    $('.hero-text h1').hide().fadeIn(2000);





    // 3. Obsługa przycisku "Powrót na górę"
    $(window).scroll(function() {
        // Jeśli zjechaliśmy o więcej niż 300 pikseli w dół
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // Kliknięcie w przycisk zabiera na samą górę sekcji Hero
    $('#back-to-top').click(function() {
        $('html, body').animate({
            // Przewijamy do górnej krawędzi elementu #hero
            scrollTop: $('#hero').offset().top 
        }, 800);
    });

});