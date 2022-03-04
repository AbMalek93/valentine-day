$(document).ready(function () {

    $('.preloader').delay(3000).fadeOut();

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }

        //menu-fixed
        if (scrolling > 200) {
            $('#header-part').addClass('menu-fixed');
        } else {
            $('#header-part').removeClass('menu-fixed');
        }
    });
    $('.back-to-top').on('click', function () {
        $('body,html').animate({
            scrollTop: '0px',
        }, 2000);
    });
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });
})