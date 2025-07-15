
$(document).ready(function () {
    $('#nav-toggler').click(function () {
        $('#mobile-nav').addClass('active');
        $('#overlay').addClass('active');
    });

    $('#nav-close, #overlay').click(function () {
        $('#mobile-nav').removeClass('active');
        $('#overlay').removeClass('active');
    });
});