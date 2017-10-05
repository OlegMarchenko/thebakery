$(document).ready(function () {

    $('.js-theme-dark').on('click', function() {
        $('.header-container').removeClass('light-header').addClass('dark-header');
        $('.section-about-us').addClass('dark-about-us');
        $('.section-our-products').addClass('section-our-products-dark');
        $('.pre-footer').removeClass('section-contact-us').addClass('section-contact-us-dark');
        $('.footer').removeClass('footer-light').addClass('footer-dark');
        $(this).addClass('active');
        $('.js-theme-light').removeClass('active');
    });

    $('.js-theme-light').on('click', function() {
        $('.header-container').addClass('light-header').removeClass('dark-header');
        $('.section-about-us').removeClass('dark-about-us');
        $('.section-our-products').removeClass('section-our-products-dark');
        $('.pre-footer').removeClass('section-contact-us-dark').addClass('section-contact-us');
        $('.footer').removeClass('footer-dark').addClass('footer-light');
        $(this).addClass('active');
        $('.js-theme-dark').removeClass('active');
    });

    $('.sl_slide').slick();

    $('.products-slider').slick({
        appendArrows: $(".appendArrows"),
        arrows: true
    });

    $( "#tabs" ).tabs();
});
