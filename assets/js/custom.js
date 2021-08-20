$(document).ready(function () {
    'use strict';

    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
    ;

    $(".product-gallery-menu>div.list-group>a").click(function (e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });

//place holde animation
    Placeholdem(document.querySelectorAll('[placeholder]'));
    var fadeElems = document.body.querySelectorAll('.fade'),
            fadeElemsLength = fadeElems.length,
            i = 0,
            interval = 50;

    function incFade() {
        if (i < fadeElemsLength) {
            fadeElems[ i ].className += ' fade-load';
            i++;
            setTimeout(incFade, interval);
        }
    }

    setTimeout(incFade, interval);


    var $zoom;
    // Initiate magnification powers
    $zoom = $('.zoom').magnify({
        afterLoad: function () {
//            console.log('Magnification powers activated!');
        }
    });

    $('button').click(function () {
        $zoom.destroy();
    });
    $('html').on({
        magnifystart: function () {
            console.log('\'magnifystart\' event fired');
        },
        magnifyend: function () {
            console.log('\'magnifyend\' event fired');
        }
    });

// Select all links with hashes
    $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function (event) {
                // On-page links
                if (
                        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                        &&
                        location.hostname == this.hostname
                        ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                            ;
                        });
                    }
                }
            });

});

