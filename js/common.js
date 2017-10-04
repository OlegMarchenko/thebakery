$(document).ready(function () {

    $('.js-theme-dark').on('click', function() {
        $('.header-container').removeClass('light-header').addClass('dark-header');
        $(this).addClass('active');
        $('.js-theme-light').removeClass('active');
    });

    $('.js-theme-light').on('click', function() {
        $('.header-container').addClass('light-header').removeClass('dark-header');
        $(this).addClass('active');
        $('.js-theme-dark').removeClass('active');
    });

    $('.sl_slide').slick();
});
