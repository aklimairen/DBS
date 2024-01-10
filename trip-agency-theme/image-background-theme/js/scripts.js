$(function() { // all strict code goes in this function

    "use strict";

    $(document).ready(function() {

        // single page navigation
        var navChildren = $(".navbar-nav li").children();
        var aArray = [];
        for (var i = 0; i < navChildren.length; i++) {
            var aChild = navChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        }
        $(window).scroll(function() {
            var windowPos = $(window).scrollTop();
            var windowHeight = $(window).height();
            var docHeight = $(document).height();
            for (var i = 0; i < aArray.length; i++) {
                var theID = aArray[i];
                var secPosition = $(theID).offset().top;
                secPosition = secPosition - 135;
                var divHeight = $(theID).height();
                divHeight = divHeight + 90;
                if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                    $("a[href='" + theID + "']").parent().addClass("active");
                } else {
                    $("a[href='" + theID + "']").parent().removeClass("active");
                }
            }
        });

        //..... Owl carousel
        $('.owl-carousel').owlCarousel({
            items: 4,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                400: {
                    items: 2,
                    nav: false
                },
                800: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    dots: true,
                    loop: true,
                    smartSpeed: 900,
                    navText: ["<span class='icon-chevron-left'></span>", "<span class='icon-chevron-right'></span>"]
                },
                1400: {
                    items: 3,
                    dots: true,
                    loop: true,
                    smartSpeed: 900,
                    navText: ["<span class='icon-chevron-left'></span>", "<span class='icon-chevron-right'></span>"]
                }
            }
        });
        // End Of Owl carousel


        //.....for bootstrap tooltips
        $('[data-toggle="tooltip"]').tooltip();

        //.....Sticky navbar 
        //Custom function which toggles between sticky class (is-sticky)
        var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
            var stickyHeight = sticky.outerHeight();
            var stickyTop = stickyWrapper.offset().top;
            if (scrollElement.scrollTop() >= stickyTop) {
                stickyWrapper.height(stickyHeight);
                sticky.addClass("is-sticky");
            } else {
                sticky.removeClass("is-sticky");
                stickyWrapper.height('auto');
            }
        };
        // End of Sticky navbar 

        //.....Script for magnific Popup modal

        $('.with-caption').magnificPopup({
            type: 'image',
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function(item) {

                    var caption = item.el.attr('title');

                    return '<a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">Place Name: </a> ' + item.el.attr('title');
                }
            },
            gallery: {
                enabled: true
            },
            callbacks: {
                open: function() {
                    this.wrap.on('click.pinhandler', '.pin-it', function(e) {

                    });
                },
                beforeClose: function() {
                    //this.wrap.off('click.pinhandler');
                }
            }
        });
        // End of magnific Popup modal




        //..... Find all data-toggle="sticky-onscroll" elements
        $('[data-toggle="sticky-onscroll"]').each(function() {
            var sticky = $(this);
            var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
            sticky.before(stickyWrapper);
            sticky.addClass('sticky');

            // Scroll & resize events
            $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
                stickyToggle(sticky, stickyWrapper, $(this));
            });

            // On page load
            stickyToggle(sticky, stickyWrapper, $(window));
        });


        //.....script for Banner ripples effect
        $('.drop-ripple').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,
        });


        //.....script for page scroll to top and bottom
        $('.page-scroll ').on('click', function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 70
                    }, 1000);
                    return false;
                }
            }
        });
        //end of page scroll to top and bottom



        //.....for wow animation
        new WOW().init();


        /* ---- particles.js config ---- */
        particlesJS('particles-js',

            {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                    "hide_card": false,
                    "background_color": "#b61924",
                    "background_image": "",
                    "background_position": "50% 50%",
                    "background_repeat": "no-repeat",
                    "background_size": "cover"
                }
            }

        );

    });

});