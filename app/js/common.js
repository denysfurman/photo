

$(function () {


    //all page
    $('.all_pages').click(function() {
        $('.all_pages').toggleClass('open');
    });


    //galleryy
    $('.fancybox_gall').fancybox({

    });

    //slider portfolio
    $('.slick-slider_1').slick({
        speed:600,


        pauseOnHover:false,
        dots:false,
        pauseOnDotsHover:true,
        cssEase:'linear',
        fade:true,
        draggable:true,
        prevArrow:'<button class="PrevArrow"></button>',
        nextArrow:'<button class="NextArrow"></button>',
        slidesToShow: 1,
    });

    $('.slick-filter button').click(function() {
        var dc = $(this).attr("id");
        var filter = $('.slick-slider_1');
        if (dc != "show_all") {
            $('.slick-slider_1').slick('slickUnfilter')
            filter.slick('slickFilter', '.'+dc);

        } else {
            $('.slick-slider_1').slick('slickUnfilter')
        }
    });

    $('.slick-filter button').click(function() {
        $(".slick-filter button").removeClass("active");
        $(this).addClass("active");
    });






    //slick
    $(".Modern-Slider").slick({


        speed:600,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:false,
        dots:false,
        pauseOnDotsHover:true,
        cssEase:'linear',
        fade:true,
        draggable:true,
        prevArrow:'<button class="PrevArrow"></button>',
        nextArrow:'<button class="NextArrow"></button>',
    });





    $(document).ready(function () {

        var open_btn = $('.menu_btn');
        var close_btn = $('.close_btn');
        var panels = $('.panel');
        var links = $('.litem');
        var lines = $('.line');
        var data_content = $('.data__content');
        var data_sub = $('.data__sub');


        var tl = new TimelineLite({ paused: true });

        tl.to(panels, 0.5, { width: '100%' })
            .to(open_btn, 0.5, { opacity: 0, visibility: 'hidden', 'z-index': 0 }, "-=0.5")
            .to(data_content, 0.5, { y: 0, opacity: 1 })
            .to(data_sub, 0.5, { y: 0, opacity: 1 }, "-=0.25")
            .staggerTo(links, 0.4, { y: 0 }, 0.05, "-=0.45")
            .to(lines, 0.5, { opacity: 1 });


        open_btn.on('click', function (e) {
            e.preventDefault();
            tl.play();
        });

        close_btn.on('click', function (e) {
            e.preventDefault();
            tl.reverse();
        });

    });

    $('.open_menu').click(function() {
        $(".navigation").addClass("active");
    });

    $('.close_btn a').click(function() {
        setTimeout(function() {
            $(".navigation").removeClass("active");
        }, 2200);

    });





    // init Masonry
    var $grid = $('.grid').masonry({
        // options...
        itemSelector: '.item',

        columnWidth: 1
    });

// // layout Masonry after each image loads
//     $grid.imagesLoaded().progress( function() {
//         $grid.masonry('layout');
//     });


});


jQuery(function ($) {

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function () {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function (i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});

