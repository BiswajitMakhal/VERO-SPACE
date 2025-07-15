
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

// slide text//
$(document).ready(function () {
    $(".flip-1").click(function () {
        $(".panel-1").slideToggle("slow");
    });
    $(".flip-2").click(function () {
        $(".panel-2").slideToggle("slow");
    });
    $(".flip-3").click(function () {
        $(".panel-3").slideToggle("slow");
    });
    $(".flip-4").click(function () {
        $(".panel-4").slideToggle("slow");
    });
    $(".flip-5").click(function () {
        $(".panel-5").slideToggle("slow");
    });
});