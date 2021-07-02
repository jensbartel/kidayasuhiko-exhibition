// fade in animation //
$(document).ready(function () {
    $(window).scroll(function () {
        $('.fade-in').each(reveal);
    });
});


function reveal() {

    var height = $(this).outerHeight();
    height = height * 0.05;
    var bottom_of_object = $(this).offset().top + height;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_object) {
        $(this).animate({
            'opacity': '1'
        }, 1000);
    }
}

