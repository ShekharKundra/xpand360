try {
    // Mobile Click Drop Down
    $(document).ready(function() {
        // Toggle dropdown on click for mobile
        $('.dropnav > a').on('click', function(e) {
            e.preventDefault();
            $(this).parent().toggleClass('active');
        });
    });

    // toggle 
    $(".nav-toggle").click(function() {
        $(this).toggleClass("on");
        $("nav").slideToggle();
    });

    // Sticy nav bar 
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 300) {
            $('.bottom-header').addClass('fixed-header');
        } else {
            $('.bottom-header').removeClass('fixed-header');

        }
    });

    // Slider 
    $('#hero-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        onInitialized: setAriaLabels

    });

    // parthner logo
    $('.parthnamerlogo').owlCarousel({
        loop: true,
        margin: 0,
        dot: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        onInitialized: setAriaLabels,
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 5
            },
            1000: {
                items: 8
            }
        }
    });

    // parthner logo
    $('#testomonial_Slider').owlCarousel({
        loop: true,
        margin: 15,
        dot: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        onInitialized: setAriaLabels,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // btn name
    function setAriaLabels(event) {
        var owl = event.target;
        var prevButton = $(owl).find('.owl-prev');
        var nextButton = $(owl).find('.owl-next');

        prevButton.attr('aria-label', 'Previous');
        nextButton.attr('aria-label', 'Next');
    }


    // Cout number
    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 8000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


} catch (error) {

}