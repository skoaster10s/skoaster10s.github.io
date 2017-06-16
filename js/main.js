(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    sr.reveal('.sr-progress', {
        duration: 600
    }, 50)

    sr.reveal('.sr-projects', {
        duration: 600
    }, 50)

    // // Initialize and Configure Magnific Popup Lightbox Plugin
    // $('.popup-gallery').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     tLoading: 'Loading image #%curr%...',
    //     mainClass: 'mfp-img-mobile',
    //     gallery: {
    //         enabled: true,
    //         navigateByImgClick: true,
    //         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    //     },
    //     image: {
    //         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    //     }
    // });

})(jQuery); // End of use strict


window.onload = function onLoad() {
    /** Python Progress Bar **/
    var pythonBar = new ProgressBar.Circle('#pythonBar', {
        color: '#aaa',
        trailColor: 'white',

        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 9,
        trailWidth: 11,
        easing: 'easeInOut',
        duration: 2500
    });

    pythonBar.setText("Proficient");
    pythonBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    pythonBar.text.style.fontSize = '2rem';
    pythonBar.text.style.color= 'white';
    pythonBar.animate(0.8);

    /** Java Progress Bar **/
    var javaBar = new ProgressBar.Circle('#javaBar', {
        color: '#aaa',
        trailColor: 'white',

        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 9,
        trailWidth: 11,
        easing: 'easeInOut',
        duration: 2500
    });

    javaBar.setText("Proficient");
    javaBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    javaBar.text.style.fontSize = '2rem';
    javaBar.text.style.color= 'white';
    javaBar.animate(0.65);

    /** C/C++ Progress Bar **/
    var ccBar = new ProgressBar.Circle('#ccBar', {
        color: '#aaa',
        trailColor: 'white',

        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 9,
        trailWidth: 11,
        easing: 'easeInOut',
        duration: 2500
    });

    ccBar.setText("Intermediate");
    ccBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    ccBar.text.style.fontSize = '2rem';
    ccBar.text.style.color= 'white';
    ccBar.animate(0.38);

    /** Web Progress Bar **/
    var webBar = new ProgressBar.Circle('#webBar', {
        color: '#aaa',
        trailColor: 'white',

        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 9,
        trailWidth: 11,
        easing: 'easeInOut',
        duration: 2500
    });

    webBar.setText("Intermediate");
    webBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    webBar.text.style.fontSize = '2rem';
    webBar.text.style.color= 'white';
    webBar.animate(0.38);
};
