/**
 * Item: CodeX
 * Description:  Personal Portfolio
 * Author/Developer: TruongLai
 * Author/Developer URL: 
 * Version: v1.0.0
 */
! function (e) {
    "use strict";
    e(function () {
        e(document).on("click", 'a[data-scroll][href^="#"]', function (a) {
                var t = e(this).attr("href"),
                    i = e(t);
                0 !== i.length && (a.preventDefault(), e("body, html").animate({
                    scrollTop: i.offset().top
                }, 600))
            }), e("body").scrollspy({
                target: ".sidebar .list-menu"
            }), e(".sidebar .list-menu").clone().children().appendTo(".mobile-navbar .navbar-nav").find(".nav-link").removeClass("active"), e(document).on("mouseup", function (a) {
                if (e(".mobile-navbar #mobileNavbarSupportedContent").hasClass("show")) {
                    var t = e(".mobile-navbar .navbar-toggler");
                    t.is(a.target) || 0 !== t.has(a.target).length || t.trigger("click")
                }
            }),
            function () {
                var a, t, i = 2500,
                    n = 660,
                    o = 1500;

                function s(e) {
                    var a = function (e) {
                        return e.is(":last-child") ? e.parent().children().eq(0) : e.next()
                    }(e);
                    e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({
                        width: "2px"
                    }, n, function () {
                        var t;
                        t = a, e.removeClass("is-visible").addClass("is-hidden"), t.removeClass("is-hidden").addClass("is-visible"),
                            function (e, a) {
                                e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({
                                    width: e.width() + 10
                                }, n, function () {
                                    setTimeout(function () {
                                        s(e)
                                    }, o)
                                })
                            }(a)
                    })
                }
                a = e(".cd-headline"), t = i, a.each(function () {
                    var a = e(this);
                    if (a.hasClass("clip")) {
                        var i = a.find(".cd-words-wrapper"),
                            n = i.width() + 10;
                        i.css("width", n)
                    }
                    setTimeout(function () {
                        s(a.find(".is-visible").eq(0))
                    }, t)
                })
            }(), e(".home-area").hasClass("video-variant") ? e("#homeVideo").YTPlayer() : e(".home-area").hasClass("particles-variant") ? particlesJS("particles-js", {
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: !0,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#999999"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#888888"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100
                        }
                    },
                    opacity: {
                        value: .7,
                        random: !1,
                        anim: {
                            enable: !1,
                            speed: 3,
                            opacity_min: .1,
                            sync: !1
                        }
                    },
                    size: {
                        value: 5,
                        random: !0,
                        anim: {
                            enable: !1,
                            speed: 40,
                            size_min: .1,
                            sync: !1
                        }
                    },
                    line_linked: {
                        enable: !0,
                        distance: 150,
                        color: "#999999",
                        opacity: .4,
                        width: 1
                    },
                    move: {
                        enable: !0,
                        speed: 6,
                        direction: "none",
                        random: !1,
                        straight: !1,
                        out_mode: "out",
                        bounce: !1,
                        attract: {
                            enable: !1,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: !1,
                            mode: "repulse"
                        },
                        onclick: {
                            enable: !1,
                            mode: "push"
                        },
                        resize: !0
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: .4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: !0
            }) : e(".home-area").hasClass("galaxy-variant") ? particlesJS("particles-js", {
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: !0,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100
                        }
                    },
                    opacity: {
                        value: 1,
                        random: !0,
                        anim: {
                            enable: !0,
                            speed: 1,
                            opacity_min: 0,
                            sync: !1
                        }
                    },
                    size: {
                        value: 3,
                        random: !0,
                        anim: {
                            enable: !1,
                            speed: 4,
                            size_min: .3,
                            sync: !1
                        }
                    },
                    line_linked: {
                        enable: !1,
                        distance: 150,
                        color: "#ffffff",
                        opacity: .4,
                        width: 1
                    },
                    move: {
                        enable: !0,
                        speed: 1,
                        direction: "none",
                        random: !0,
                        straight: !1,
                        out_mode: "out",
                        bounce: !1,
                        attract: {
                            enable: !1,
                            rotateX: 600,
                            rotateY: 600
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: !1,
                            mode: "bubble"
                        },
                        onclick: {
                            enable: !1,
                            mode: "repulse"
                        },
                        resize: !0
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 250,
                            size: 0,
                            duration: 2,
                            opacity: 0,
                            speed: 3
                        },
                        repulse: {
                            distance: 400,
                            duration: .4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: !0
            }) : e(".home-area").hasClass("snow-variant") ? particlesJS("particles-js", {
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: !0,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#fff"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100
                        }
                    },
                    opacity: {
                        value: .5,
                        random: !0,
                        anim: {
                            enable: !1,
                            speed: 1,
                            opacity_min: .1,
                            sync: !1
                        }
                    },
                    size: {
                        value: 8,
                        random: !0,
                        anim: {
                            enable: !1,
                            speed: 40,
                            size_min: .1,
                            sync: !1
                        }
                    },
                    line_linked: {
                        enable: !1,
                        distance: 500,
                        color: "#ffffff",
                        opacity: .4,
                        width: 2
                    },
                    move: {
                        enable: !0,
                        speed: 3,
                        direction: "bottom",
                        random: !1,
                        straight: !1,
                        out_mode: "out",
                        bounce: !1,
                        attract: {
                            enable: !1,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: !1,
                            mode: "bubble"
                        },
                        onclick: {
                            enable: !1,
                            mode: "repulse"
                        },
                        resize: !0
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: .5
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 4,
                            duration: .3,
                            opacity: 1,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: .4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: !0
            }) : e(".home-area").hasClass("bubble-variant") && particlesJS("particles-js", {
                particles: {
                    number: {
                        value: 4,
                        density: {
                            enable: !0,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000"
                        },
                        polygon: {
                            nb_sides: 6
                        },
                        image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100
                        }
                    },
                    opacity: {
                        value: .2,
                        random: !0,
                        anim: {
                            enable: !1,
                            speed: 1,
                            opacity_min: .1,
                            sync: !1
                        }
                    },
                    size: {
                        value: 90,
                        random: !1,
                        anim: {
                            enable: !0,
                            speed: 10,
                            size_min: 40,
                            sync: !1
                        }
                    },
                    line_linked: {
                        enable: !1,
                        distance: 200,
                        color: "#ffffff",
                        opacity: 1,
                        width: 2
                    },
                    move: {
                        enable: !0,
                        speed: 8,
                        direction: "none",
                        random: !1,
                        straight: !1,
                        out_mode: "out",
                        bounce: !1,
                        attract: {
                            enable: !1,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: !1,
                            mode: "grab"
                        },
                        onclick: {
                            enable: !1,
                            mode: "push"
                        },
                        resize: !0
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: .4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: !0
            }), e(".testimonials-area .owl-carousel").owlCarousel({
                items: 3,
                loop: !0,
                margin: 30,
                nav: !1,
                dots: !0,
                smartSpeed: 400,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            }), e(".contact-form").on("submit", function (a) {
                var t = e(this),
                    i = t.find("#contact-submit"),
                    n = i.text(),
                    o = t.find(".contact-feedback");
                a.preventDefault(), i.html("Wait...").addClass("wait").prop("disabled", !0), setTimeout(function () {
                    e.ajax({
                        url: t.attr("action"),
                        type: "POST",
                        data: t.serialize()
                    }).done(function (e) {
                        "success" == e ? (i.removeClass("wait").html("Success").addClass("success"), o.addClass("success").html("Thank you for your message. It has been sent.").fadeIn(200), setTimeout(function () {
                            i.html(n).removeClass("success").prop("disabled", !1), o.fadeOut(200).removeClass("success").html("")
                        }, 6e3), t[0].reset()) : (console.log(e), i.removeClass("wait").html("Error").addClass("error"), o.addClass("error").html("Server error! Please check your browser console log for more details.").fadeIn(200), setTimeout(function () {
                            i.html(n).removeClass("error").prop("disabled", !1), o.fadeOut(200).removeClass("error").html("")
                        }, 6e3))
                    })
                }, 1e3)
            })
    }), e(window).on("load", function () {
        var a, t;
        e(".preloader-icon").fadeOut(400), e(".preloader").delay(500).fadeOut("slow"), a = e(".portfolio-area .portfolio-grid"), t = e(".portfolio-area .filter-control li"), a.isotope({
            itemSelector: ".single-item"
        }), t.on("click", function () {
            t.removeClass("tab-active"), e(this).addClass("tab-active");
            var i = e(this).data("filter");
            a.isotope({
                filter: i,
                transitionDuration: ".25s"
            })
        }), e(".portfolio-area .portfolio-grid .portfolio-item").each(function () {
            var a = e(this),
                t = a.attr("href");
            e(a).animatedModal({
                animatedIn: "fadeIn",
                animatedOut: "fadeOut",
                animationDuration: ".15s",
                beforeOpen: function () {
                    e(t + ".lightbox-wrapper .lightbox-gallery").owlCarousel({
                        loop: !0,
                        margin: 10,
                        nav: !1,
                        items: 1,
                        smartSpeed: 400
                    })
                },
                afterClose: function () {
                    e(t + ".lightbox-wrapper .lightbox-gallery").trigger("destroy.owl.carousel")
                }
            })
        })
    })
}(jQuery);