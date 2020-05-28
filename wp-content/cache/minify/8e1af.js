!(function (e) {
    "use strict";
    function t() {
        (edgtf.scroll = e(window).scrollTop()),
            n(),
            edgtf.body.hasClass("edgtf-dark-header") && (edgtf.defaultHeaderStyle = "edgtf-dark-header"),
            edgtf.body.hasClass("edgtf-light-header") && (edgtf.defaultHeaderStyle = "edgtf-light-header");
    }
    function a() {}
    function o() {
        (edgtf.windowWidth = e(window).width()), (edgtf.windowHeight = e(window).height());
    }
    function d() {
        edgtf.scroll = e(window).scrollTop();
    }
    function n() {
        var e = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
            t = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
            a = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
            o = window.navigator.userAgent.indexOf("MSIE ");
        e && edgtf.body.addClass("edgtf-chrome"),
            t && edgtf.body.addClass("edgtf-safari"),
            a && edgtf.body.addClass("edgtf-firefox"),
            (o > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && edgtf.body.addClass("edgtf-ms-explorer"),
            /Edge\/\d./i.test(navigator.userAgent) && edgtf.body.addClass("edgtf-edge");
    }
    switch (
        ((window.edgtf = {}),
        (edgtf.modules = {}),
        (edgtf.scroll = 0),
        (edgtf.window = e(window)),
        (edgtf.document = e(document)),
        (edgtf.windowWidth = e(window).width()),
        (edgtf.windowHeight = e(window).height()),
        (edgtf.body = e("body")),
        (edgtf.html = e("html, body")),
        (edgtf.htmlEl = e("html")),
        (edgtf.menuDropdownHeightSet = !1),
        (edgtf.defaultHeaderStyle = ""),
        (edgtf.minVideoWidth = 1500),
        (edgtf.videoWidthOriginal = 1280),
        (edgtf.videoHeightOriginal = 720),
        (edgtf.videoRatio = 1.61),
        (edgtf.passepartoutTop = edgtfPerPageVars.vars.edgtfPassepartoutTop),
        (edgtf.passepartoutBottom = edgtfPerPageVars.vars.edgtfPassepartoutBottom),
        (edgtf.passepartout = edgtf.passepartoutTop + edgtf.passepartoutBottom),
        (edgtf.edgtfOnDocumentReady = t),
        (edgtf.edgtfOnWindowLoad = a),
        (edgtf.edgtfOnWindowResize = o),
        (edgtf.edgtfOnWindowScroll = d),
        e(document).ready(t),
        e(window).load(a),
        e(window).resize(o),
        e(window).scroll(d),
        !0)
    ) {}
})(jQuery),
    (function (e) {
        "use strict";
        function t() {
            z().init(), d(), n(), O().init(), c(), u(), g(), p(), m(), v(), _(), b(), w(), C(), y();
        }
        function a() {
            T();
        }
        function o() {
            m();
        }
        function d() {
            var e = window.navigator.userAgent,
                t = e.indexOf("MSIE ");
            if (t > 0) {
                var a = parseInt(e.substring(t + 5, e.indexOf(".", t)));
                edgtf.body.addClass("edgtf-ms-ie" + a);
            }
            return !1;
        }
        function n() {
            navigator.appVersion.toLowerCase().indexOf("mac") > -1 && edgtf.body.hasClass("edgtf-smooth-scroll") && edgtf.body.removeClass("edgtf-smooth-scroll");
        }
        function i() {
            window.addEventListener && window.addEventListener("wheel", r, { passive: !1 }), (document.onkeydown = l);
        }
        function s() {
            window.removeEventListener && window.removeEventListener("wheel", r, { passive: !1 }), (window.onmousewheel = document.onmousewheel = document.onkeydown = null);
        }
        function r(e) {
            f(e);
        }
        function l(e) {
            for (var t = [37, 38, 39, 40], a = t.length; a--; ) if (e.keyCode === t[a]) return void f(e);
        }
        function f(e) {
            (e = e || window.event), e.preventDefault && e.preventDefault(), (e.returnValue = !1);
        }
        function g() {
            e(".edgtf-row-background-text-holder").each(function () {
                var t = e(this),
                    a = t.find(".edgtf-row-background-text-wrapper"),
                    o = t.find(".edgtf-row-background-text-wrapper-inner");
                if (
                    (t.parent().addClass("edgtf-row-has-background-text"),
                    edgtf.windowWidth > 1280 && edgtf.windowWidth <= 1440 && void 0 !== o.data("font-size-1440") && !1 !== o.data("font-size-1440") && o.css("font-size", o.data("font-size-1440")),
                    edgtf.windowWidth > 1024 && edgtf.windowWidth <= 1280 && void 0 !== o.data("font-size-1280") && !1 !== o.data("font-size-1280") && o.css("font-size", o.data("font-size-1280")),
                    t.prev().css("z-index", 10),
                    a.hasClass("edgtf-row-background-text-animation") && !edgtf.htmlEl.hasClass("touch"))
                ) {
                    var d = t.find(".edgtf-row-background-text-1, .edgtf-row-background-text-2");
                    d.each(function (o) {
                        var n = e(this),
                            i = n.text(),
                            s = i.replace(/\w/g, function (e) {
                                return '<span class="edgtf-char-mask"><span>' + e + "</span></span>";
                            });
                        n.html(s);
                        var r = d.filter(".edgtf-row-background-text-1").find(".edgtf-char-mask").length,
                            l = function () {
                                a.css("visibility", "visible"),
                                    t.find(".edgtf-char-mask > span").each(function (t) {
                                        var a = e(this);
                                        setTimeout(function () {
                                            a.addClass("edgtf-show");
                                        }, o * r * 150 * 0.85 + 150 * t);
                                    });
                            };
                        t.parent().hasClass("edgtf-wait-for-preloader")
                            ? e(document).on("edgtfPreloaded", function () {
                                  l();
                              })
                            : e(window).load(function () {
                                  t.appear(
                                      function () {
                                          l();
                                      },
                                      { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
                                  );
                              });
                    });
                }
            });
        }
        function c() {
            e("#edgtf-back-to-top").on("click", function (e) {
                e.preventDefault(), edgtf.html.animate({ scrollTop: 0 }, edgtf.window.scrollTop() / 3, "easeInOutCubic");
            });
        }
        function u() {
            edgtf.window.scroll(function () {
                var t,
                    a = e(this).scrollTop(),
                    o = e(this).height();
                (t = a > 0 ? a + o / 2 : 1), h(t < 1e3 ? "off" : "on");
            });
        }
        function h(t) {
            var a = e("#edgtf-back-to-top");
            a.removeClass("off on"), "on" === t ? a.addClass("on") : a.addClass("off");
        }
        function p() {
            var t = e(".edgtf-self-hosted-video");
            t.length && t.mediaelementplayer({ audioWidth: "100%" });
        }
        function m() {
            var t = e(".edgtf-self-hosted-video-holder .edgtf-video-wrap");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.closest(".edgtf-self-hosted-video-holder").outerWidth(),
                        o = a / edgtf.videoRatio;
                    navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (t.parent().width(a), t.parent().height(o)),
                        t.width(a),
                        t.height(o),
                        t.find("video, .mejs-overlay, .mejs-poster").width(a),
                        t.find("video, .mejs-overlay, .mejs-poster").height(o);
                });
        }
        function v() {
            fluidvids.init({ selector: ["iframe"], players: ["www.youtube.com", "player.vimeo.com"] });
        }
        function y() {
            if (edgtf.body.hasClass("edgtf-smooth-page-transitions")) {
                if (edgtf.body.hasClass("edgtf-smooth-page-transitions-preloader")) {
                    var t = e("body > .edgtf-smooth-transition-loader.edgtf-mimic-ajax");
                    !(function () {
                        var a = e(".edgtf-main-rev-holder .rev_slider, .edgtf-slider .rev_slider");
                        a.length
                            ? a.on("revolution.slide.onchange", function (e, a) {
                                  t.fadeOut(300, "easeInOutExpo");
                              })
                            : e(window).load(function () {
                                  t.fadeOut(300, "easeInOutExpo");
                              });
                    })(),
                        e(window).load(function () {
                            e(window).on("pageshow", function (e) {
                                e.originalEvent.persisted && t.fadeOut(300, "easeInOutExpo");
                            });
                        });
                }
                if (edgtf.body.hasClass("edgtf-smooth-page-transitions-fadeout")) {
                    e("a").on("click", function (t) {
                        var a = e(this);
                        ((a.parents(".edgtf-shopping-cart-dropdown").length || a.parent(".product-remove").length) && a.hasClass("remove")) ||
                            (1 == t.which &&
                                a.attr("href").indexOf(window.location.host) >= 0 &&
                                void 0 === a.data("rel") &&
                                void 0 === a.attr("rel") &&
                                !a.hasClass("lightbox-active") &&
                                (void 0 === a.attr("target") || "_self" === a.attr("target")) &&
                                a.attr("href").split("#")[0] !== window.location.href.split("#")[0] &&
                                (t.preventDefault(),
                                e(".edgtf-wrapper-inner").fadeOut(1e3, "easeInOutExpo", function () {
                                    window.location = a.attr("href");
                                })));
                    });
                }
            }
        }
        function b() {
            var t = e(".edgtf-preload-background");
            t.length &&
                t.each(function () {
                    var t = e(this);
                    if ("" !== t.css("background-image") && "none" !== t.css("background-image")) {
                        var a = t.attr("style");
                        if (((a = a.match(/url\(["']?([^'")]+)['"]?\)/)), (a = a ? a[1] : ""))) {
                            var o = new Image();
                            (o.src = a),
                                e(o).load(function () {
                                    t.removeClass("edgtf-preload-background");
                                });
                        }
                    } else
                        e(window).load(function () {
                            t.removeClass("edgtf-preload-background");
                        });
                });
        }
        function w() {
            e("a[data-rel^='prettyPhoto']").prettyPhoto({
                hook: "data-rel",
                animation_speed: "normal",
                slideshow: !1,
                autoplay_slideshow: !1,
                opacity: 0.8,
                show_title: !0,
                allow_resize: !0,
                horizontal_padding: 0,
                default_width: 960,
                default_height: 540,
                counter_separator_label: "/",
                theme: "pp_default",
                hideflash: !1,
                wmode: "opaque",
                autoplay: !0,
                modal: !1,
                overlay_gallery: !1,
                keyboard_shortcuts: !0,
                deeplinking: !1,
                custom_markup: "",
                social_tools: !1,
                markup:
                    '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="Expand the image">Expand</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"><span class="fa fa-angle-right"></span></a>                                             <a class="pp_previous" href="#"><span class="fa fa-angle-left"></span></a>                                         </div>                                         <div id="pp_full_res"></div>                                         <div class="pp_details">                                             <div class="pp_nav">                                                 <a href="#" class="pp_arrow_previous">Previous</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">Next</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">Close</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>',
            });
        }
        function C() {
            var t = e(".edgtf-search-post-type");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.find(".edgtf-post-type-search-field"),
                        o = t.siblings(".edgtf-post-type-search-results"),
                        d = t.find(".edgtf-search-loading"),
                        n = t.find(".edgtf-search-icon");
                    d.addClass("edgtf-hidden");
                    var i,
                        s = t.data("post-type");
                    a.on("keyup paste", function (t) {
                        var a = e(this);
                        a.attr("autocomplete", "off"),
                            d.removeClass("edgtf-hidden"),
                            n.addClass("edgtf-hidden"),
                            clearTimeout(i),
                            (i = setTimeout(function () {
                                var t = a.val();
                                if (t.length < 3) o.html(""), o.fadeOut(), d.addClass("edgtf-hidden"), n.removeClass("edgtf-hidden");
                                else {
                                    var i = { action: "esben_edge_search_post_types", term: t, postType: s, search_post_types_nonce: e('input[name="edgtf_search_post_types_nonce"]').val() };
                                    e.ajax({
                                        type: "POST",
                                        data: i,
                                        url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                                        success: function (e) {
                                            var t = JSON.parse(e);
                                            "success" == t.status && (d.addClass("edgtf-hidden"), n.removeClass("edgtf-hidden"), o.html(t.data.html), o.fadeIn());
                                        },
                                        error: function (e, t, a) {
                                            console.log("Status: " + t), console.log("Error: " + a), d.addClass("edgtf-hidden"), n.removeClass("edgtf-hidden"), o.fadeOut();
                                        },
                                    });
                                }
                            }, 500));
                    }),
                        a.on("focusout", function () {
                            d.addClass("edgtf-hidden"), n.removeClass("edgtf-hidden"), o.fadeOut();
                        });
                });
        }
        function x(e) {
            var t = e.data(),
                a = {};
            for (var o in t) t.hasOwnProperty(o) && void 0 !== t[o] && !1 !== t[o] && (a[o] = t[o]);
            return a;
        }
        function k(e, t) {
            var a = { action: t };
            for (var o in e) e.hasOwnProperty(o) && void 0 !== e[o] && !1 !== e[o] && (a[o] = e[o]);
            return a;
        }
        function T() {
            var t = e(".edgtf-parallax-row-holder");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.data("parallax-bg-image"),
                        o = 0.4 * t.data("parallax-bg-speed"),
                        d = 0;
                    void 0 !== t.data("parallax-bg-height") && !1 !== t.data("parallax-bg-height") && (d = parseInt(t.data("parallax-bg-height"))),
                        t.css({ "background-image": "url(" + a + ")" }),
                        d > 0 && t.css({ "min-height": d + "px", height: d + "px" }),
                        t.parallax("50%", o);
                });
        }
        function _() {
            var t = e(".edgtf-owl-slider");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.children().length,
                        o = 1,
                        d = !0,
                        n = !0,
                        i = !0,
                        s = 5e3,
                        r = 600,
                        l = 0,
                        f = 0,
                        g = 0,
                        c = !1,
                        u = !1,
                        h = !1,
                        p = !1,
                        m = !1,
                        v = !0,
                        y = !1,
                        b = !!t.hasClass("edgtf-pl-is-slider"),
                        w = b ? t.parent() : t;
                    void 0 === t.data("number-of-items") || !1 === t.data("number-of-items") || b || (o = t.data("number-of-items")),
                        void 0 !== w.data("number-of-columns") && !1 !== w.data("number-of-columns") && b && (o = w.data("number-of-columns")),
                        "no" === w.data("enable-loop") && (d = !1),
                        "no" === w.data("enable-autoplay") && (n = !1),
                        "no" === w.data("enable-autoplay-hover-pause") && (i = !1),
                        void 0 !== w.data("slider-speed") && !1 !== w.data("slider-speed") && (s = w.data("slider-speed")),
                        void 0 !== w.data("slider-speed-animation") && !1 !== w.data("slider-speed-animation") && (r = w.data("slider-speed-animation")),
                        void 0 !== w.data("slider-margin") && !1 !== w.data("slider-margin") && (l = w.data("slider-margin")),
                        t.parent().hasClass("edgtf-normal-space") ? (l = 30) : t.parent().hasClass("edgtf-small-space") ? (l = 20) : t.parent().hasClass("edgtf-tiny-space") && (l = 10),
                        "yes" === w.data("slider-padding") && ((c = !0), (g = parseInt(0.28 * t.outerWidth())), (l = 50)),
                        "yes" === w.data("enable-center") && (u = !0),
                        "yes" === w.data("enable-auto-width") && (h = !0),
                        void 0 !== w.data("slider-animate-in") && !1 !== w.data("slider-animate-in") && (p = w.data("slider-animate-in")),
                        void 0 !== w.data("slider-animate-out") && !1 !== w.data("slider-animate-out") && (m = w.data("slider-animate-out")),
                        "no" === w.data("enable-navigation") && (v = !1),
                        "yes" === w.data("enable-pagination") && (y = !0),
                        v && y && t.addClass("edgtf-slider-has-both-nav"),
                        a <= 1 && ((d = !1), (n = !1), (v = !1), (y = !1));
                    var C = 2,
                        x = 3,
                        k = o;
                    o < 3 && ((C = o), (x = o)), o > 4 && (k = 4), (c || l > 0) && (f = 20);
                    var _ = function (t) {
                        if (h) {
                            var a = t.find(".owl-stage"),
                                o = a.width(),
                                d = t.find(".owl-item"),
                                n = 0;
                            d.each(function () {
                                n += e(this).outerWidth(!0);
                            }),
                                n > o && a.width(n);
                        }
                    };
                    t.waitForImages(function () {
                        t.owlCarousel({
                            items: o,
                            loop: d,
                            autoplay: n,
                            autoplayHoverPause: i,
                            autoplayTimeout: s,
                            smartSpeed: r,
                            margin: l,
                            stagePadding: g,
                            center: u,
                            autoWidth: h,
                            animateInClass: p,
                            animateOut: m,
                            dots: y,
                            nav: v,
                            navText: ['<span class="edgtf-prev-icon ion-ios-arrow-left"></span>', '<span class="edgtf-next-icon ion-ios-arrow-right"></span>'],
                            responsive: { 0: { items: 1, margin: f, stagePadding: 0, center: !1 }, 681: { items: C }, 769: { items: x }, 1025: { items: k }, 1280: { items: o } },
                            onInitialize: function () {
                                t.css("visibility", "visible"), T();
                            },
                            onInitialized: function () {
                                _(t);
                            },
                            onDrag: function (e) {
                                if (edgtf.body.hasClass("edgtf-smooth-page-transitions-fadeout")) {
                                    e.isTrigger > 0 && t.addClass("edgtf-slider-is-moving");
                                }
                            },
                            onDragged: function () {
                                edgtf.body.hasClass("edgtf-smooth-page-transitions-fadeout") &&
                                    t.hasClass("edgtf-slider-is-moving") &&
                                    setTimeout(function () {
                                        t.removeClass("edgtf-slider-is-moving");
                                    }, 500);
                            },
                            onRefreshed: function () {
                                setTimeout(function () {
                                    _(t);
                                }, 200);
                            },
                        });
                    });
                });
        }
        function I() {
            var t = { wheelSpeed: 0.6, suppressScrollX: !0 },
                a = function (a) {
                    var o = new PerfectScrollbar(a.selector, t);
                    e(window).resize(function () {
                        o.update();
                    });
                };
            return {
                init: function (e) {
                    e.length && a(e);
                },
            };
        }
        var S = {};
        (edgtf.modules.common = S),
            (S.edgtfFluidVideo = v),
            (S.edgtfEnableScroll = s),
            (S.edgtfDisableScroll = i),
            (S.edgtfOwlSlider = _),
            (S.edgtfInitParallax = T),
            (S.edgtfInitSelfHostedVideoPlayer = p),
            (S.edgtfSelfHostedVideoSize = m),
            (S.edgtfPrettyPhoto = w),
            (S.getLoadMoreData = x),
            (S.setLoadMoreAjaxData = k),
            (S.edgtfInitPerfectScrollbar = I),
            (S.edgtfOnDocumentReady = t),
            (S.edgtfOnWindowLoad = a),
            (S.edgtfOnWindowResize = o),
            e(document).ready(t),
            e(window).load(a),
            e(window).resize(o);
        var O = function () {
                var t = function (t) {
                        e(".edgtf-main-menu .edgtf-active-item, .edgtf-mobile-nav .edgtf-active-item, .edgtf-fullscreen-menu .edgtf-active-item").removeClass("edgtf-active-item"),
                            t.parent().addClass("edgtf-active-item"),
                            e(".edgtf-main-menu a, .edgtf-mobile-nav a, .edgtf-fullscreen-menu a").removeClass("current"),
                            t.addClass("current");
                    },
                    a = function () {
                        e("[data-edgtf-anchor]").waypoint(
                            function (a) {
                                "down" === a && t(e("a[href='" + window.location.href.split("#")[0] + "#" + e(this.element).data("edgtf-anchor") + "']"));
                            },
                            { offset: "50%" }
                        ),
                            e("[data-edgtf-anchor]").waypoint(
                                function (a) {
                                    "up" === a && t(e("a[href='" + window.location.href.split("#")[0] + "#" + e(this.element).data("edgtf-anchor") + "']"));
                                },
                                {
                                    offset: function () {
                                        return -(e(this.element).outerHeight() - 150);
                                    },
                                }
                            );
                    },
                    o = function () {
                        var t = window.location.hash.split("#")[1];
                        "" !== t && e('[data-edgtf-anchor="' + t + '"]').length > 0 && d(t);
                    },
                    d = function (a) {
                        var o,
                            d = e("a"),
                            i = a;
                        if ("" !== i && e('[data-edgtf-anchor="' + i + '"]').length > 0) {
                            var s = e('[data-edgtf-anchor="' + i + '"]').offset().top;
                            return (
                                (o = e('[data-edgtf-anchor="' + i + '"]').offset().top - n(s) - edgtfGlobalVars.vars.edgtfAddForAdminBar),
                                t(d),
                                edgtf.html.stop().animate({ scrollTop: Math.round(o) }, 800, "easeInOutQuad", function () {
                                    history.pushState && history.pushState(null, null, "#" + i);
                                }),
                                !1
                            );
                        }
                    },
                    n = function (e) {
                        "edgtf-sticky-header-on-scroll-down-up" === edgtf.modules.stickyHeader.behaviour && (edgtf.modules.stickyHeader.isStickyVisible = e > edgtf.modules.header.stickyAppearAmount),
                            "edgtf-sticky-header-on-scroll-up" === edgtf.modules.stickyHeader.behaviour && e > edgtf.scroll && (edgtf.modules.stickyHeader.isStickyVisible = !1);
                        var t = edgtf.modules.stickyHeader.isStickyVisible ? edgtfGlobalVars.vars.edgtfStickyHeaderTransparencyHeight : edgtfPerPageVars.vars.edgtfHeaderTransparencyHeight;
                        return edgtf.windowWidth < 1025 && (t = 0), t;
                    },
                    i = function () {
                        edgtf.document.on("click", ".edgtf-main-menu a, .edgtf-fullscreen-menu a, .edgtf-btn, .edgtf-anchor, .edgtf-mobile-nav a", function () {
                            var a,
                                o = e(this),
                                d = o.prop("hash").split("#")[1];
                            if ("" !== d && e('[data-edgtf-anchor="' + d + '"]').length > 0) {
                                var i = e('[data-edgtf-anchor="' + d + '"]').offset().top;
                                return (
                                    (a = e('[data-edgtf-anchor="' + d + '"]').offset().top - n(i) - edgtfGlobalVars.vars.edgtfAddForAdminBar),
                                    t(o),
                                    edgtf.html.stop().animate({ scrollTop: Math.round(a) }, 800, "easeInOutQuad", function () {
                                        history.pushState && history.pushState(null, null, "#" + d);
                                    }),
                                    !1
                                );
                            }
                        });
                    };
                return {
                    init: function () {
                        e("[data-edgtf-anchor]").length &&
                            (i(),
                            a(),
                            e(window).load(function () {
                                o();
                            }));
                    },
                };
            },
            z = function () {
                var t = e(".edgtf-icon-has-hover"),
                    a = function (e) {
                        if (void 0 !== e.data("hover-color")) {
                            var t = function (e) {
                                    e.data.icon.css("color", e.data.color);
                                },
                                a = e.data("hover-color"),
                                o = e.css("color");
                            "" !== a && (e.on("mouseenter", { icon: e, color: a }, t), e.on("mouseleave", { icon: e, color: o }, t));
                        }
                    };
                return {
                    init: function () {
                        t.length &&
                            t.each(function () {
                                a(e(this));
                            });
                    },
                };
            };
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            n(), s(), u(), l();
        }
        function a() {
            c().init(), h().init(), r(), f(), g();
        }
        function o() {
            s(), l();
        }
        function d() {
            c().scroll(), h().scroll();
        }
        function n() {
            e("audio.edgtf-blog-audio").mediaelementplayer({ audioWidth: "100%" });
        }
        function i(e, t) {
            if (t.hasClass("edgtf-masonry-images-fixed")) {
                var a = parseInt(t.find("article").css("padding-left")),
                    o = t.find(".edgtf-post-size-default"),
                    d = t.find(".edgtf-post-size-large-width"),
                    n = t.find(".edgtf-post-size-large-height"),
                    i = t.find(".edgtf-post-size-large-width-height");
                edgtf.windowWidth > 680
                    ? (o.css("height", e - 2 * a), n.css("height", Math.round(2 * e) - 2 * a), i.css("height", Math.round(2 * e) - 2 * a), d.css("height", e - 2 * a))
                    : (o.css("height", e), n.css("height", e), i.css("height", e), d.css("height", Math.round(e / 2)));
            }
        }
        function s() {
            var t = e(".edgtf-blog-holder.edgtf-blog-type-masonry");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.children(".edgtf-blog-holder-inner");
                    i(t.find(".edgtf-blog-masonry-grid-sizer").width(), t),
                        a.waitForImages(function () {
                            a.isotope({ layoutMode: "packery", itemSelector: "article", percentPosition: !0, packery: { gutter: ".edgtf-blog-masonry-grid-gutter", columnWidth: ".edgtf-blog-masonry-grid-sizer" } }),
                                a.css("opacity", "1"),
                                setTimeout(function () {
                                    a.isotope("layout");
                                }, 800);
                        });
                });
        }
        function r() {
            var t,
                a = e(".edgtf-blog-holder.edgtf-blog-chequered"),
                o = a.children(".edgtf-blog-holder-inner");
            a.length &&
                ((t = o.find(".edgtf-blog-masonry-grid-sizer").outerWidth()),
                o.children("article").css({ height: t + "px" }),
                o.isotope("layout", function () {
                    o.css("opacity", "1");
                }));
        }
        function l() {
            var t = e(".edgtf-blog-holder.edgtf-blog-masonry-gallery");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.children(".edgtf-blog-holder-inner"),
                        o = a.find("article"),
                        d = 1.25 * a.find(".edgtf-blog-masonry-grid-sizer").width();
                    o.css({ height: d + "px" }), a.isotope("layout", function () {}), f();
                });
        }
        function f() {
            var t = e(".edgtf-blog-holder.edgtf-blog-masonry-gallery");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.find("article"),
                        o = t.find(".edgtf-blog-pagination-holder"),
                        d = 0;
                    a.each(function () {
                        var t = e(this);
                        setTimeout(function () {
                            t.appear(
                                function () {
                                    d++,
                                        7 == d && (d = 0),
                                        setTimeout(function () {
                                            t.addClass("edgtf-appeared");
                                        }, 200 * d);
                                },
                                { accX: 0, accY: 0 }
                            );
                        }, 150);
                    }),
                        o.appear(
                            function () {
                                o.addClass("edgtf-appeared");
                            },
                            { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
                        );
                });
        }
        function g() {
            var t = e(".edgtf-blog-holder.edgtf-blog-narrow");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.find("article"),
                        o = t.find(".edgtf-blog-pagination-holder");
                    a.each(function () {
                        var t = e(this);
                        t.appear(
                            function () {
                                t.addClass("edgtf-appeared");
                            },
                            { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
                        );
                    }),
                        o.appear(
                            function () {
                                o.addClass("edgtf-appeared");
                            },
                            { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
                        );
                });
        }
        function c() {
            var t = e(".edgtf-blog-holder"),
                a = function (e) {
                    e.find(".edgtf-blog-pag-load-more a").on("click", function (t) {
                        t.preventDefault(), t.stopPropagation(), d(e);
                    });
                },
                o = function (e) {
                    var t = e.outerHeight(),
                        a = e.offset().top,
                        o = t + a - edgtfGlobalVars.vars.edgtfAddForAdminBar;
                    !e.hasClass("edgtf-blog-pagination-infinite-scroll-started") && edgtf.scroll + edgtf.windowHeight > o && d(e);
                },
                d = function (t) {
                    var a,
                        o,
                        d = t.children(".edgtf-blog-holder-inner");
                    void 0 !== t.data("max-num-pages") && !1 !== t.data("max-num-pages") && (o = t.data("max-num-pages")), t.hasClass("edgtf-blog-pagination-infinite-scroll") && t.addClass("edgtf-blog-pagination-infinite-scroll-started");
                    var c = edgtf.modules.common.getLoadMoreData(t),
                        u = t.find(".edgtf-blog-pag-loading");
                    a = c.nextPage;
                    var h = t.find('input[name*="qodef_blog_load_more_nonce_"]');
                    if (((c.blog_load_more_id = h.attr("name").substring(h.attr("name").length - 4, h.attr("name").length)), (c.blog_load_more_nonce = h.val()), a <= o)) {
                        u.addClass("edgtf-showing");
                        var p = edgtf.modules.common.setLoadMoreAjaxData(c, "esben_edge_blog_load_more");
                        e.ajax({
                            type: "POST",
                            data: p,
                            url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                            success: function (o) {
                                a++, t.data("next-page", a);
                                var c = e.parseJSON(o),
                                    h = c.html;
                                t.waitForImages(function () {
                                    t.hasClass("edgtf-blog-type-masonry") ? (s(d, u, h), i(d.find(".edgtf-blog-masonry-grid-sizer").width(), t)) : l(d, u, h),
                                        setTimeout(function () {
                                            n(),
                                                edgtf.modules.common.edgtfOwlSlider(),
                                                edgtf.modules.common.edgtfFluidVideo(),
                                                edgtf.modules.common.edgtfInitSelfHostedVideoPlayer(),
                                                edgtf.modules.common.edgtfSelfHostedVideoSize(),
                                                g(),
                                                f(),
                                                r();
                                        }, 400);
                                }),
                                    t.hasClass("edgtf-blog-pagination-infinite-scroll-started") && t.removeClass("edgtf-blog-pagination-infinite-scroll-started");
                            },
                        });
                    }
                    a === o && t.find(".edgtf-blog-pag-load-more").hide();
                },
                s = function (e, t, a) {
                    e.append(a).isotope("reloadItems").isotope({ sortBy: "original-order" }),
                        t.removeClass("edgtf-showing"),
                        setTimeout(function () {
                            e.isotope("layout");
                        }, 600);
                },
                l = function (e, t, a) {
                    t.removeClass("edgtf-showing"), e.append(a);
                };
            return {
                init: function () {
                    t.length &&
                        t.each(function () {
                            var t = e(this);
                            t.hasClass("edgtf-blog-pagination-load-more") && a(t), t.hasClass("edgtf-blog-pagination-infinite-scroll") && o(t);
                        });
                },
                scroll: function () {
                    t.length &&
                        t.each(function () {
                            var t = e(this);
                            t.hasClass("edgtf-blog-pagination-infinite-scroll") && o(t);
                        });
                },
            };
        }
        function u() {
            var t = e(".edgtf-blog-list-holder.edgtf-bl-masonry");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.find(".edgtf-blog-list");
                    a.waitForImages(function () {
                        a.isotope({ layoutMode: "packery", itemSelector: ".edgtf-bl-item", percentPosition: !0, packery: { gutter: ".edgtf-bl-grid-gutter", columnWidth: ".edgtf-bl-grid-sizer" } }), a.css("opacity", "1");
                    });
                });
        }
        function h() {
            var t = e(".edgtf-blog-list-holder"),
                a = function (t) {
                    var a = t.find(".edgtf-bl-standard-pagination li");
                    a.length &&
                        a.each(function () {
                            var a = e(this).children("a"),
                                o = 1;
                            a.on("click", function (e) {
                                e.preventDefault(), e.stopPropagation(), void 0 !== a.data("paged") && !1 !== a.data("paged") && (o = a.data("paged")), n(t, o);
                            });
                        });
                },
                o = function (e) {
                    e.find(".edgtf-blog-pag-load-more a").on("click", function (t) {
                        t.preventDefault(), t.stopPropagation(), n(e);
                    });
                },
                d = function (e) {
                    var t = e.outerHeight(),
                        a = e.offset().top,
                        o = t + a - edgtfGlobalVars.vars.edgtfAddForAdminBar;
                    !e.hasClass("edgtf-bl-pag-infinite-scroll-started") && edgtf.scroll + edgtf.windowHeight > o && n(e);
                },
                n = function (t, a) {
                    var o,
                        d,
                        n = t.find(".edgtf-blog-list");
                    void 0 !== t.data("max-num-pages") && !1 !== t.data("max-num-pages") && (d = t.data("max-num-pages")),
                        t.hasClass("edgtf-bl-pag-standard-blog-list") && t.data("next-page", a),
                        t.hasClass("edgtf-bl-pag-infinite-scroll") && t.addClass("edgtf-bl-pag-infinite-scroll-started");
                    var g = edgtf.modules.common.getLoadMoreData(t),
                        c = t.find(".edgtf-blog-pag-loading");
                    o = g.nextPage;
                    var u = t.find('input[name*="qodef_blog_load_more_nonce_"]');
                    if (((g.blog_load_more_id = u.attr("name").substring(u.attr("name").length - 4, u.attr("name").length)), (g.blog_load_more_nonce = u.val()), o <= d)) {
                        t.hasClass("edgtf-bl-pag-standard-blog-list") ? (c.addClass("edgtf-showing edgtf-standard-pag-trigger"), t.addClass("edgtf-bl-pag-standard-blog-list-animate")) : c.addClass("edgtf-showing");
                        var h = edgtf.modules.common.setLoadMoreAjaxData(g, "esben_edge_blog_shortcode_load_more");
                        e.ajax({
                            type: "POST",
                            data: h,
                            url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                            success: function (a) {
                                t.hasClass("edgtf-bl-pag-standard-blog-list") || o++, t.data("next-page", o);
                                var g = e.parseJSON(a),
                                    u = g.html;
                                t.hasClass("edgtf-bl-pag-standard-blog-list")
                                    ? (i(t, d, o),
                                      t.waitForImages(function () {
                                          t.hasClass("edgtf-bl-masonry") ? s(t, n, c, u) : r(t, n, c, u);
                                      }))
                                    : t.waitForImages(function () {
                                          t.hasClass("edgtf-bl-masonry") ? l(n, c, u) : f(n, c, u);
                                      }),
                                    t.hasClass("edgtf-bl-pag-infinite-scroll-started") && t.removeClass("edgtf-bl-pag-infinite-scroll-started");
                            },
                        });
                    }
                    o === d && t.find(".edgtf-blog-pag-load-more").hide();
                },
                i = function (e, t, a) {
                    var o = e.find(".edgtf-bl-standard-pagination"),
                        d = o.find("li.edgtf-bl-pag-number"),
                        n = o.find("li.edgtf-bl-pag-prev a"),
                        i = o.find("li.edgtf-bl-pag-next a");
                    d.removeClass("edgtf-bl-pag-active"),
                        d.eq(a - 1).addClass("edgtf-bl-pag-active"),
                        n.data("paged", a - 1),
                        i.data("paged", a + 1),
                        a > 1 ? n.css({ opacity: "1" }) : n.css({ opacity: "0" }),
                        a === t ? i.css({ opacity: "0" }) : i.css({ opacity: "1" });
                },
                s = function (e, t, a, o) {
                    t.html(o).isotope("reloadItems").isotope({ sortBy: "original-order" }),
                        a.removeClass("edgtf-showing edgtf-standard-pag-trigger"),
                        e.removeClass("edgtf-bl-pag-standard-blog-list-animate"),
                        setTimeout(function () {
                            t.isotope("layout");
                        }, 600);
                },
                r = function (e, t, a, o) {
                    a.removeClass("edgtf-showing edgtf-standard-pag-trigger"), e.removeClass("edgtf-bl-pag-standard-blog-list-animate"), t.html(o);
                },
                l = function (e, t, a) {
                    e.append(a).isotope("reloadItems").isotope({ sortBy: "original-order" }),
                        t.removeClass("edgtf-showing"),
                        setTimeout(function () {
                            e.isotope("layout");
                        }, 600);
                },
                f = function (e, t, a) {
                    t.removeClass("edgtf-showing"), e.append(a);
                };
            return {
                init: function () {
                    t.length &&
                        t.each(function () {
                            var t = e(this);
                            t.hasClass("edgtf-bl-pag-standard-blog-list") && a(t), t.hasClass("edgtf-bl-pag-load-more") && o(t), t.hasClass("edgtf-bl-pag-infinite-scroll") && d(t);
                        });
                },
                scroll: function () {
                    t.length &&
                        t.each(function () {
                            var t = e(this);
                            t.hasClass("edgtf-bl-pag-infinite-scroll") && d(t);
                        });
                },
            };
        }
        var p = {};
        (edgtf.modules.blog = p), (p.edgtfOnDocumentReady = t), (p.edgtfOnWindowLoad = a), (p.edgtfOnWindowResize = o), (p.edgtfOnWindowScroll = d), e(document).ready(t), e(window).load(a), e(window).resize(o), e(window).scroll(d);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            o();
        }
        function a() {
            o();
        }
        function o() {
            if (edgtf.body.hasClass("edgtf-header-divided")) {
                var t = e(".edgtf-menu-area"),
                    a = t.width(),
                    o = e(".edgtf-main-menu > ul > li > a"),
                    d = 0,
                    n = t.find(".edgtf-logo-wrapper .edgtf-normal-logo"),
                    i = 0;
                t.waitForImages(function () {
                    t.children(".edgtf-grid").length && (a = t.children(".edgtf-grid").outerWidth()), o.length && (d = parseInt(o.css("padding-left"))), n.length && (i = n.width() / 2);
                    var s = Math.round(a / 2 - d - i);
                    e(".edgtf-menu-area .edgtf-position-left").width(s),
                        e(".edgtf-menu-area .edgtf-position-right").width(s),
                        t.css("opacity", 1),
                        "function" == typeof edgtf.modules.header.edgtfSetDropDownMenuPosition && edgtf.modules.header.edgtfSetDropDownMenuPosition(),
                        "function" == typeof edgtf.modules.header.edgtfSetDropDownWideMenuPosition && edgtf.modules.header.edgtfSetDropDownWideMenuPosition();
                });
            }
        }
        var d = {};
        (edgtf.modules.headerDivided = d), (d.edgtfOnDocumentReady = t), (d.edgtfOnWindowResize = a), e(document).ready(t), e(window).resize(a);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e("a.edgtf-fullscreen-menu-opener");
            if (t.length) {
                var a,
                    o = e(".edgtf-fullscreen-menu-holder-outer"),
                    d = !1,
                    n = !1,
                    i = e(".edgtf-fullscreen-above-menu-widget-holder"),
                    s = e(".edgtf-fullscreen-below-menu-widget-holder"),
                    r = e(".edgtf-fullscreen-menu-holder-outer nav > ul > li > a"),
                    l = e(".edgtf-fullscreen-menu > ul li.has_sub > a"),
                    f = e(".edgtf-fullscreen-menu ul li:not(.has_sub) a");
                o.height(edgtf.windowHeight).niceScroll({ scrollspeed: 30, mousescrollstep: 20, cursorwidth: 0, cursorborder: 0, cursorborderradius: 0, cursorcolor: "transparent", autohidemode: !1, horizrailenabled: !1 }),
                    e(window).resize(function () {
                        o.height(edgtf.windowHeight);
                    }),
                    edgtf.body.hasClass("edgtf-fade-push-text-right") ? ((a = "edgtf-push-nav-right"), (d = !0)) : edgtf.body.hasClass("edgtf-fade-push-text-top") && ((a = "edgtf-push-text-top"), (n = !0)),
                    (d || n) &&
                        (i.length && i.children().css({ "-webkit-animation-delay": "0ms", "-moz-animation-delay": "0ms", "animation-delay": "0ms" }),
                        r.each(function (t) {
                            e(this).css({ "-webkit-animation-delay": 70 * (t + 1) + "ms", "-moz-animation-delay": 70 * (t + 1) + "ms", "animation-delay": 70 * (t + 1) + "ms" });
                        }),
                        s.length && s.children().css({ "-webkit-animation-delay": 70 * (r.length + 1) + "ms", "-moz-animation-delay": 70 * (r.length + 1) + "ms", "animation-delay": 70 * (r.length + 1) + "ms" })),
                    t.on("click", function (o) {
                        o.preventDefault(),
                            t.hasClass("edgtf-fm-opened")
                                ? (t.removeClass("edgtf-fm-opened"),
                                  edgtf.body.removeClass("edgtf-fullscreen-menu-opened edgtf-fullscreen-fade-in").addClass("edgtf-fullscreen-fade-out"),
                                  edgtf.body.addClass(a),
                                  edgtf.modules.common.edgtfEnableScroll(),
                                  e("nav.edgtf-fullscreen-menu ul.sub_menu").slideUp(200, function () {
                             //         e("nav.popup_menu").getNiceScroll().resize();
                                  }))
                                : (t.addClass("edgtf-fm-opened"),
                                  edgtf.body.removeClass("edgtf-fullscreen-fade-out").addClass("edgtf-fullscreen-menu-opened edgtf-fullscreen-fade-in"),
                                  edgtf.body.removeClass(a),
                                //  edgtf.modules.common.edgtfDisableScroll(),
                                  e(document).keyup(function (o) {
                                      27 == o.keyCode &&
                                          (t.removeClass("edgtf-fm-opened"),
                                          edgtf.body.removeClass("edgtf-fullscreen-menu-opened edgtf-fullscreen-fade-in").addClass("edgtf-fullscreen-fade-out"),
                                          edgtf.body.addClass(a),
                                          edgtf.modules.common.edgtfEnableScroll(),
                                          e("nav.edgtf-fullscreen-menu ul.sub_menu").slideUp(200, function () {
                                       //       e("nav.popup_menu").getNiceScroll().resize();
                                          }));
                                  }));
                    }),
                    l.on("tap click", function (t) {
                        t.preventDefault();
                        var a = e(this),
                            d = a.parent();
                        if (d.hasClass("has_sub")) {
                            var n = d.find("> ul.sub_menu");
                            n.is(":visible")
                                ? (n.slideUp(450, "easeInOutQuint", function () {
                                      o.getNiceScroll().resize();
                                  }),
                                  d.removeClass("open_sub"))
                                : (d.addClass("open_sub"),
                                  1 === l.length
                                      ? d
                                            .removeClass("open_sub")
                                            .find(".sub_menu")
                                            .slideUp(400, "easeInOutQuint", function () {
                                                o.getNiceScroll().resize(),
                                                    n.slideDown(400, "easeInOutQuint", function () {
                                                        o.getNiceScroll().resize();
                                                    });
                                            })
                                      : d
                                            .siblings()
                                            .removeClass("open_sub")
                                            .find(".sub_menu")
                                            .slideUp(400, "easeInOutQuint", function () {
                                                o.getNiceScroll().resize(),
                                                    n.slideDown(400, "easeInOutQuint", function () {
                                                        o.getNiceScroll().resize();
                                                    });
                                            }));
                        }
                        return !1;
                    }),
                    f.on("click", function (o) {
                        if ("http://#" === e(this).attr("href") || "#" === e(this).attr("href")) return !1;
                        1 == o.which &&
                            (t.removeClass("edgtf-fm-opened"),
                            edgtf.body.removeClass("edgtf-fullscreen-menu-opened"),
                            edgtf.body.removeClass("edgtf-fullscreen-fade-in").addClass("edgtf-fullscreen-fade-out"),
                            edgtf.body.addClass(a),
                            e("nav.edgtf-fullscreen-menu ul.sub_menu").slideUp(200, function () {
                                e("nav.popup_menu").getNiceScroll().resize();
                            }),
                            edgtf.modules.common.edgtfEnableScroll());
                    });
            }
        }
        var o = {};
        (edgtf.modules.headerMinimal = o), (o.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            o().init();
        }
        var a = {};
        (edgtf.modules.headerVertical = a), (a.edgtfOnDocumentReady = t), e(document).ready(t);
        var o = function () {
            var t = e(".edgtf-vertical-menu-area"),
                a = function () {
                    o() && t.getNiceScroll().resize();
                },
                o = function () {
                    return t.hasClass(".edgtf-with-scroll");
                },
                d = function () {
                    var o = t.find(".edgtf-vertical-menu");
                    !(function () {
                        var t = o.find("ul li.menu-item-has-children");
                        t.each(function () {
                            var o = e(this).find(" > .second, > ul"),
                                d = this,
                                n = e(this).find("> a");
                            n.on("click tap", function (i) {
                                i.preventDefault(),
                                    i.stopPropagation(),
                                    o.is(":visible")
                                        ? (e(d).removeClass("open"),
                                          o.slideUp("easeInExpo", function () {
                                              a();
                                          }))
                                        : n.parent().parent().children().hasClass("open") && n.parent().parent().parent().hasClass("edgtf-vertical-menu")
                                        ? (e(this).parent().parent().children().removeClass("open"),
                                          e(this).parent().parent().children().find(" > .second").slideUp("easeInExpo"),
                                          e(d).addClass("open"),
                                          o.slideDown("easeOutExpo", function () {
                                              a();
                                          }))
                                        : (e(this).parents("li").hasClass("open") || (t.removeClass("open"), t.find(" > .second, > ul").slideUp("easeInExpo")),
                                          e(this).parent().parent().children().hasClass("open") &&
                                              (e(this).parent().parent().children().removeClass("open"), e(this).parent().parent().children().find(" > .second, > ul").slideUp("easeInExpo")),
                                          e(d).addClass("open"),
                                          o.slideDown("easeOutExpo", function () {
                                              a();
                                          }));
                            });
                        });
                    })();
                },
                n = function () {
                    o() && t.niceScroll({ scrollspeed: 60, mousescrollstep: 40, cursorwidth: 0, cursorborder: 0, cursorborderradius: 0, cursorcolor: "transparent", autohidemode: !1, horizrailenabled: !1 });
                },
                i = function () {
                    function a() {
                        t.removeClass("active"), n.length && n.removeClass("active");
                    }
                    function o() {
                        t.addClass("active"), n.length && n.addClass("active"), (s = e(window).scrollTop());
                    }
                    function d() {
                        return t.hasClass("active");
                    }
                    var n = e(".edgtf-vertical-area-bottom-logo"),
                        i = t.find(".edgtf-vertical-area-opener"),
                        s = 0;
                    i.on("click tap", function () {
                        d() ? a() : o();
                    }),
                        e(window).scroll(function () {
                            Math.abs(e(window).scrollTop() - s) > 400 && a();
                        });
                };
            return {
                init: function () {
                    t.length && (d(), n(), edgtf.body.hasClass("edgtf-header-vertical-closed") && i());
                },
            };
        };
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            o(), d(), n();
        }
        function a() {
            d();
        }
        function o() {
            var t = e(".edgtf-mobile-header .edgtf-mobile-menu-opener"),
                a = e(".edgtf-mobile-header .edgtf-mobile-nav"),
                o = e(".edgtf-mobile-nav .mobile_arrow, .edgtf-mobile-nav h6, .edgtf-mobile-nav a.edgtf-mobile-no-link");
            t.length &&
                a.length &&
                t.on("tap click", function (e) {
                    e.stopPropagation(), e.preventDefault(), a.is(":visible") ? (a.slideUp(450, "easeInOutQuint"), t.removeClass("edgtf-mobile-menu-opened")) : (a.slideDown(450, "easeInOutQuint"), t.addClass("edgtf-mobile-menu-opened"));
                }),
                o.length &&
                    o.each(function () {
                        var t = e(this),
                            o = a.outerHeight();
                        t.on("tap click", function (e) {
                            var d = t.parent("li"),
                                n = d.siblings(".menu-item-has-children");
                            if (d.hasClass("has_sub")) {
                                var i = d.find("> ul.sub_menu");
                                i.is(":visible")
                                    ? (i.slideUp(450, "easeInOutQuint"), d.removeClass("edgtf-opened"), a.stop().animate({ height: o }, 300))
                                    : (d.addClass("edgtf-opened"),
                                      0 === n.length
                                          ? d.find(".sub_menu").slideUp(400, "easeInOutQuint", function () {
                                                i.slideDown(400, "easeInOutQuint"), a.stop().animate({ height: o + 50 }, 300);
                                            })
                                          : d
                                                .siblings()
                                                .removeClass("edgtf-opened")
                                                .find(".sub_menu")
                                                .slideUp(400, "easeInOutQuint", function () {
                                                    i.slideDown(400, "easeInOutQuint"), a.stop().animate({ height: o + 50 }, 300);
                                                }));
                            }
                        });
                    }),
                e(".edgtf-mobile-nav a, .edgtf-mobile-logo-wrapper a").on("click tap", function (o) {
                    "http://#" !== e(this).attr("href") && "#" !== e(this).attr("href") && (a.slideUp(450, "easeInOutQuint"), t.removeClass("edgtf-mobile-menu-opened"));
                });
        }
        function d() {
            if (edgtf.windowWidth <= 1024) {
                var t = e(".edgtf-mobile-header"),
                    a = t.length ? t.height() : 0,
                    o = t.find(".edgtf-mobile-nav"),
                    d = o.outerHeight(),
                    n = edgtf.windowHeight - 100,
                    i = a + d > n ? n - a : d;
                o.length && (o.height(i), edgtf.modules.common.edgtfInitPerfectScrollbar().init(o));
            }
        }
        function n() {
            var t = e(".edgtf-mobile-header"),
                a = t.find(".edgtf-mobile-menu-opener"),
                o = t.length ? t.outerHeight() : 0;
            if ((edgtf.body.hasClass("edgtf-content-is-behind-header") && o > 0 && edgtf.windowWidth <= 1024 && e(".edgtf-content").css("marginTop", -o), edgtf.body.hasClass("edgtf-sticky-up-mobile-header"))) {
                var d,
                    n = e("#wpadminbar"),
                    i = e(document).scrollTop();
                (d = o + edgtfGlobalVars.vars.edgtfAddForAdminBar),
                    e(window).scroll(function () {
                        var o = e(document).scrollTop();
                        o > d ? t.addClass("edgtf-animate-mobile-header") : t.removeClass("edgtf-animate-mobile-header"),
                            (o > i && o > d && !a.hasClass("edgtf-mobile-menu-opened")) || o < d
                                ? (t.removeClass("mobile-header-appear"), t.css("margin-bottom", 0), n.length && t.find(".edgtf-mobile-header-inner").css("top", 0))
                                : (t.addClass("mobile-header-appear"), t.css("margin-bottom", d)),
                            (i = e(document).scrollTop());
                    });
            }
        }
        var i = {};
        (edgtf.modules.mobileHeader = i), (i.edgtfOnDocumentReady = t), (i.edgtfOnWindowResize = a), e(document).ready(t), e(window).resize(a);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            edgtf.windowWidth > 1024 && a();
        }
        function a() {
            var t,
                a,
                o = e(".edgtf-page-header"),
                d = e(".edgtf-sticky-header"),
                n = e(".edgtf-fixed-wrapper"),
                i = n.children(".edgtf-menu-area"),
                s = i.outerHeight(),
                r = e(".edgtf-slider"),
                l = r.length ? r.outerHeight() : 0,
                f = n.length ? n.offset().top - edgtfGlobalVars.vars.edgtfAddForAdminBar : 0;
            switch (!0) {
                case edgtf.body.hasClass("edgtf-sticky-header-on-scroll-up"):
                    edgtf.modules.stickyHeader.behaviour = "edgtf-sticky-header-on-scroll-up";
                    var g = e(document).scrollTop();
                    (t = parseInt(edgtfGlobalVars.vars.edgtfTopBarHeight) + parseInt(edgtfGlobalVars.vars.edgtfLogoAreaHeight) + parseInt(edgtfGlobalVars.vars.edgtfMenuAreaHeight) + parseInt(edgtfGlobalVars.vars.edgtfStickyHeaderHeight)),
                        (a = function () {
                            var a = e(document).scrollTop();
                            (a > g && a > t) || a < t
                                ? ((edgtf.modules.stickyHeader.isStickyVisible = !1),
                                  d.removeClass("header-appear").find(".edgtf-main-menu .second").removeClass("edgtf-drop-down-start"),
                                  edgtf.body.removeClass("edgtf-sticky-header-appear"))
                                : ((edgtf.modules.stickyHeader.isStickyVisible = !0), d.addClass("header-appear"), edgtf.body.addClass("edgtf-sticky-header-appear")),
                                (g = e(document).scrollTop());
                        }),
                        a(),
                        e(window).scroll(function () {
                            a();
                        });
                    break;
                case edgtf.body.hasClass("edgtf-sticky-header-on-scroll-down-up"):
                    (edgtf.modules.stickyHeader.behaviour = "edgtf-sticky-header-on-scroll-down-up"),
                        0 !== edgtfPerPageVars.vars.edgtfStickyScrollAmount
                            ? (edgtf.modules.stickyHeader.stickyAppearAmount = parseInt(edgtfPerPageVars.vars.edgtfStickyScrollAmount))
                            : (edgtf.modules.stickyHeader.stickyAppearAmount =
                                  parseInt(edgtfGlobalVars.vars.edgtfTopBarHeight) + parseInt(edgtfGlobalVars.vars.edgtfLogoAreaHeight) + parseInt(edgtfGlobalVars.vars.edgtfMenuAreaHeight) + parseInt(l)),
                        (a = function () {
                            edgtf.scroll < edgtf.modules.stickyHeader.stickyAppearAmount
                                ? ((edgtf.modules.stickyHeader.isStickyVisible = !1),
                                  d.removeClass("header-appear").find(".edgtf-main-menu .second").removeClass("edgtf-drop-down-start"),
                                  edgtf.body.removeClass("edgtf-sticky-header-appear"))
                                : ((edgtf.modules.stickyHeader.isStickyVisible = !0), d.addClass("header-appear"), edgtf.body.addClass("edgtf-sticky-header-appear"));
                        }),
                        a(),
                        e(window).scroll(function () {
                            a();
                        });
                    break;
                case edgtf.body.hasClass("edgtf-fixed-on-scroll"):
                    edgtf.modules.stickyHeader.behaviour = "edgtf-fixed-on-scroll";
                    var c = function () {
                        edgtf.scroll <= f
                            ? (n.removeClass("fixed"), edgtf.body.removeClass("edgtf-fixed-header-appear"), i.css({ height: s + "px" }), o.css("margin-bottom", "0"))
                            : (n.addClass("fixed"), edgtf.body.addClass("edgtf-fixed-header-appear"), i.css({ height: s - 30 + "px" }), o.css("margin-bottom", s - 30 + "px"));
                    };
                    c(),
                        e(window).scroll(function () {
                            c();
                        });
            }
        }
        var o = {};
        (edgtf.modules.stickyHeader = o), (o.isStickyVisible = !1), (o.stickyAppearAmount = 0), (o.behaviour = ""), (o.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            o(), n();
        }
        function a() {
            d();
        }
        function o() {
            var t = e(".edgtf-drop-down > ul > li.narrow.menu-item-has-children");
            t.length &&
                t.each(function (t) {
                    var a = e(this),
                        o = a.offset().left,
                        d = a.find(".second"),
                        n = d.find(".inner ul"),
                        i = n.outerWidth(),
                        s = edgtf.windowWidth - o;
                    edgtf.body.hasClass("edgtf-boxed") && (s = edgtf.boxedLayoutWidth - (o - (edgtf.windowWidth - edgtf.boxedLayoutWidth) / 2));
                    var r;
                    a.find("li.sub").length > 0 && (r = s - i), d.removeClass("right"), n.removeClass("right"), (s < i || r < i) && (d.addClass("right"), n.addClass("right"));
                });
        }
        function d() {
            var t = e(".edgtf-drop-down > ul > li.wide");
            t.length &&
                t.each(function (a) {
                    var o = e(t[a]).find(".second");
                    if (o.length && !o.hasClass("left_position") && !o.hasClass("right_position")) {
                        o.css("left", 0);
                        var d = o.offset().left;
                        if (edgtf.body.hasClass("edgtf-boxed")) {
                            var n = e(".edgtf-boxed .edgtf-wrapper .edgtf-wrapper-inner").outerWidth();
                            (d -= (edgtf.windowWidth - n) / 2), o.css("left", -d), o.css("width", n);
                        } else o.css("left", -d), o.css("width", edgtf.windowWidth);
                    }
                });
        }
        function n() {
            var t = e(".edgtf-drop-down > ul > li");
            t.each(function (a) {
                if (e(t[a]).find(".second").length > 0) {
                    var o = e(t[a]),
                        d = o.find(".second");
                    if (o.hasClass("wide")) {
                        var n = 0,
                            i = e(this).find(".second > .inner > ul > li");
                        i.each(function () {
                            var t = e(this).height();
                            t > n && (n = t);
                        }),
                            i.css("height", ""),
                            i.height(n);
                    }
                    if ((edgtf.menuDropdownHeightSet || (o.data("original_height", d.height() + "px"), d.height(0)), navigator.userAgent.match(/(iPod|iPhone|iPad)/)))
                        o.on("touchstart mouseenter", function () {
                            d.css({ height: o.data("original_height"), overflow: "visible", visibility: "visible", opacity: "1" });
                        }).on("mouseleave", function () {
                            d.css({ height: "0px", overflow: "hidden", visibility: "hidden", opacity: "0" });
                        });
                    else if (edgtf.body.hasClass("edgtf-dropdown-animate-height"))
                        o.mouseenter(function () {
                            d.css({ visibility: "visible", height: "0px", opacity: "0" }),
                                d.stop().animate({ height: o.data("original_height"), opacity: 1 }, 300, function () {
                                    d.css("overflow", "visible");
                                });
                        }).mouseleave(function () {
                            d.stop().animate({ height: "0px" }, 150, function () {
                                d.css({ overflow: "hidden", visibility: "hidden" });
                            });
                        });
                    else {
                        var s = {
                            interval: 0,
                            over: function () {
                                setTimeout(function () {
                                    d.addClass("edgtf-drop-down-start"), d.stop().css({ height: o.data("original_height") });
                                }, 150);
                            },
                            timeout: 150,
                            out: function () {
                                d.stop().css({ height: "0px" }), d.removeClass("edgtf-drop-down-start");
                            },
                        };
                        o.hoverIntent(s);
                    }
                }
            }),
                e(".edgtf-drop-down ul li.wide ul li a").on("click", function (t) {
                    if (1 == t.which) {
                        var a = e(this);
                        setTimeout(function () {
                            a.mouseleave();
                        }, 500);
                    }
                }),
                (edgtf.menuDropdownHeightSet = !0);
        }
        var i = {};
        (edgtf.modules.header = i), (i.edgtfSetDropDownMenuPosition = o), (i.edgtfSetDropDownWideMenuPosition = d), (i.edgtfOnDocumentReady = t), (i.edgtfOnWindowLoad = a), e(document).ready(t), e(window).load(a);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t,
                a,
                o = e("a.edgtf-search-opener");
            o.length > 0 &&
                (edgtf.body.hasClass("edgtf-fullscreen-search")
                    ? ((a = e(".edgtf-fullscreen-search-close")),
                      (function () {
                          var t = e(".edgtf-fullscreen-search-holder");
                          o.on("click", function (o) {
                              o.preventDefault(),
                                  t.hasClass("edgtf-animate")
                                      ? (edgtf.body.removeClass("edgtf-fullscreen-search-opened edgtf-search-fade-out"),
                                        edgtf.body.removeClass("edgtf-search-fade-in"),
                                        t.removeClass("edgtf-animate"),
                                        setTimeout(function () {
                                            t.find(".edgtf-search-field").val(""), t.find(".edgtf-search-field").blur();
                                        }, 300),
                                        edgtf.modules.common.edgtfEnableScroll())
                                      : (edgtf.body.addClass("edgtf-fullscreen-search-opened edgtf-search-fade-in"),
                                        edgtf.body.removeClass("edgtf-search-fade-out"),
                                        t.addClass("edgtf-animate"),
                                        setTimeout(function () {
                                            t.find(".edgtf-search-field").focus();
                                        }, 900),
                                        edgtf.modules.common.edgtfDisableScroll()),
                                  a.on("click", function (e) {
                                      e.preventDefault(),
                                          edgtf.body.removeClass("edgtf-fullscreen-search-opened edgtf-search-fade-in"),
                                          edgtf.body.addClass("edgtf-search-fade-out"),
                                          t.removeClass("edgtf-animate"),
                                          setTimeout(function () {
                                              t.find(".edgtf-search-field").val(""), t.find(".edgtf-search-field").blur();
                                          }, 300),
                                          edgtf.modules.common.edgtfEnableScroll();
                                  }),
                                  e(document).mouseup(function (a) {
                                      var o = e(".edgtf-form-holder-inner");
                                      o.is(a.target) ||
                                          0 !== o.has(a.target).length ||
                                          (a.preventDefault(),
                                          edgtf.body.removeClass("edgtf-fullscreen-search-opened edgtf-search-fade-in"),
                                          edgtf.body.addClass("edgtf-search-fade-out"),
                                          t.removeClass("edgtf-animate"),
                                          setTimeout(function () {
                                              t.find(".edgtf-search-field").val(""), t.find(".edgtf-search-field").blur();
                                          }, 300),
                                          edgtf.modules.common.edgtfEnableScroll());
                                  }),
                                  e(document).keyup(function (e) {
                                      27 == e.keyCode &&
                                          (edgtf.body.removeClass("edgtf-fullscreen-search-opened edgtf-search-fade-in"),
                                          edgtf.body.addClass("edgtf-search-fade-out"),
                                          t.removeClass("edgtf-animate"),
                                          setTimeout(function () {
                                              t.find(".edgtf-search-field").val(""), t.find(".edgtf-search-field").blur();
                                          }, 300),
                                          edgtf.modules.common.edgtfEnableScroll());
                                  });
                          });
                          var d = e(".edgtf-fullscreen-search-holder .edgtf-search-field"),
                              n = e(".edgtf-fullscreen-search-holder .edgtf-field-holder .edgtf-line");
                          d.focus(function () {
                              n.css("width", "100%");
                          }),
                              d.blur(function () {
                                  n.css("width", "0");
                              });
                      })())
                    : edgtf.body.hasClass("edgtf-slide-from-header-bottom")
                    ? (function () {
                          o.on("click", function (t) {
                              t.preventDefault();
                              var a = e(this),
                                  o = parseInt(edgtf.windowWidth - a.offset().left - a.outerWidth());
                              edgtf.body.hasClass("edgtf-boxed") && edgtf.windowWidth > 1024 && (o -= parseInt((edgtf.windowWidth - e(".edgtf-boxed .edgtf-wrapper .edgtf-wrapper-inner").outerWidth()) / 2));
                              var d = e(".edgtf-page-header"),
                                  n = "100%",
                                  i = e(".edgtf-top-bar"),
                                  s = d.find(".edgtf-fixed-wrapper.fixed"),
                                  r = e(".edgtf-mobile-header"),
                                  l = e(".edgtf-slide-from-header-bottom-holder"),
                                  f = !!a.parents(".edgtf-top-bar").length,
                                  g = !!a.parents(".edgtf-fixed-wrapper.fixed").length,
                                  c = !!a.parents(".edgtf-sticky-header").length,
                                  u = !!a.parents(".edgtf-mobile-header").length;
                              l.removeClass("edgtf-is-active"),
                                  f
                                      ? i.find(".edgtf-slide-from-header-bottom-holder").addClass("edgtf-is-active")
                                      : g
                                      ? ((n = s.outerHeight() + edgtfGlobalVars.vars.edgtfAddForAdminBar), d.children(".edgtf-slide-from-header-bottom-holder").addClass("edgtf-is-active"))
                                      : c
                                      ? ((n = edgtfGlobalVars.vars.edgtfStickyHeaderHeight + edgtfGlobalVars.vars.edgtfAddForAdminBar), d.children(".edgtf-slide-from-header-bottom-holder").addClass("edgtf-is-active"))
                                      : u
                                      ? (r.hasClass("mobile-header-appear") && (n = r.children(".edgtf-mobile-header-inner").outerHeight() + edgtfGlobalVars.vars.edgtfAddForAdminBar),
                                        r.find(".edgtf-slide-from-header-bottom-holder").addClass("edgtf-is-active"))
                                      : d.children(".edgtf-slide-from-header-bottom-holder").addClass("edgtf-is-active"),
                                  l.hasClass("edgtf-is-active") && l.css({ right: o, top: n }).stop(!0).slideToggle(300, "easeOutBack"),
                                  e(document).keyup(function (e) {
                                      27 == e.keyCode && l.stop(!0).fadeOut(0);
                                  }),
                                  e(window).scroll(function () {
                                      l.stop(!0).fadeOut(0);
                                  });
                          });
                      })()
                    : edgtf.body.hasClass("edgtf-search-covers-header")
                    ? (function () {
                          o.on("click", function (t) {
                              t.preventDefault();
                              var a,
                                  o = e(this),
                                  d = e(".edgtf-page-header"),
                                  n = e(".edgtf-top-bar"),
                                  i = d.find(".edgtf-fixed-wrapper.fixed"),
                                  s = e(".edgtf-mobile-header"),
                                  r = e(".edgtf-search-cover"),
                                  l = !!o.parents(".edgtf-top-bar").length,
                                  f = !!o.parents(".edgtf-fixed-wrapper.fixed").length,
                                  g = !!o.parents(".edgtf-sticky-header").length,
                                  c = !!o.parents(".edgtf-mobile-header").length;
                              r.removeClass("edgtf-is-active"),
                                  l
                                      ? ((a = edgtfGlobalVars.vars.edgtfTopBarHeight), n.find(".edgtf-search-cover").addClass("edgtf-is-active"))
                                      : f
                                      ? ((a = i.outerHeight()), d.children(".edgtf-search-cover").addClass("edgtf-is-active"))
                                      : g
                                      ? ((a = edgtfGlobalVars.vars.edgtfStickyHeaderHeight), d.children(".edgtf-search-cover").addClass("edgtf-is-active"))
                                      : c
                                      ? ((a = s.hasClass("mobile-header-appear") ? s.children(".edgtf-mobile-header-inner").outerHeight() : s.outerHeight()), s.find(".edgtf-search-cover").addClass("edgtf-is-active"))
                                      : ((a = d.outerHeight()), d.children(".edgtf-search-cover").addClass("edgtf-is-active")),
                                  r.hasClass("edgtf-is-active") && r.height(a).stop(!0).fadeIn(600).find('input[type="text"]').focus(),
                                  r.find(".edgtf-search-close").on("click", function (e) {
                                      e.preventDefault(), r.stop(!0).fadeOut(450);
                                  }),
                                  r.blur(function () {
                                      r.stop(!0).fadeOut(450);
                                  }),
                                  e(window).scroll(function () {
                                      r.stop(!0).fadeOut(450);
                                  });
                          });
                      })()
                    : edgtf.body.hasClass("edgtf-search-slides-from-window-top") &&
                      ((t = e(".edgtf-search-slide-window-top")),
                      (a = e(".edgtf-swt-search-close")),
                      (function () {
                          o.on("click", function (o) {
                              o.preventDefault(),
                                  "0" == t.height() ? (e('.edgtf-search-slide-window-top input[type="text"]').focus(), edgtf.body.addClass("edgtf-search-open")) : edgtf.body.removeClass("edgtf-search-open"),
                                  e(window).scroll(function () {
                                      "0" != t.height() && edgtf.scroll > 50 && edgtf.body.removeClass("edgtf-search-open");
                                  }),
                                  a.on("click", function (e) {
                                      e.preventDefault(), edgtf.body.removeClass("edgtf-search-open");
                                  });
                          });
                      })()));
        }
        var o = {};
        (edgtf.modules.search = o), (o.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a(), o();
        }
        function a() {
            var t = e(".edgtf-wrapper"),
                a = e("a.edgtf-side-menu-button-opener"),
                o = "edgtf-right-side-menu-opened";
            t.prepend('<div class="edgtf-cover"/>'),
                e("a.edgtf-side-menu-button-opener, a.edgtf-close-side-menu").on("click", function (t) {
                    if ((t.preventDefault(), a.hasClass("opened"))) a.removeClass("opened"), edgtf.body.removeClass(o);
                    else {
                        a.addClass("opened"),
                            edgtf.body.addClass(o),
                            e(".edgtf-wrapper .edgtf-cover").on("click", function () {
                                edgtf.body.removeClass("edgtf-right-side-menu-opened"), a.removeClass("opened");
                            });
                        var d = e(window).scrollTop();
                        e(window).scroll(function () {
                            Math.abs(edgtf.scroll - d) > 400 && (edgtf.body.removeClass(o), a.removeClass("opened"));
                        });
                    }
                });
        }
        function o() {
            var t = e(".edgtf-side-menu");
            t.length && t.niceScroll({ scrollspeed: 60, mousescrollstep: 40, cursorwidth: 0, cursorborder: 0, cursorborderradius: 0, cursorcolor: "transparent", autohidemode: !1, horizrailenabled: !1 });
        }
        var d = {};
        (edgtf.modules.sidearea = d), (d.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e(".edgtf-title-holder.edgtf-bg-parallax");
            if (t.length > 0 && edgtf.windowWidth > 1024) {
                var a = e(".edgtf-title-holder.edgtf-bg-parallax-zoom-out"),
                    o = parseInt(t.data("height")),
                    d = parseInt(t.data("background-width")),
                    n = (o / 1e4) * 7,
                    i = -edgtf.scroll * n,
                    s = edgtfGlobalVars.vars.edgtfAddForAdminBar;
                t.css({ "background-position": "center " + (i + s) + "px" }),
                    a.css({ "background-size": d - edgtf.scroll + "px auto" }),
                    e(window).scroll(function () {
                        (i = -edgtf.scroll * i), t.css({ "background-position": "center " + (i + s) + "px" }), a.css({ "background-size": d - edgtf.scroll + "px auto" });
                    });
            }
        }
        var o = {};
        (edgtf.modules.title = o), (o.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            d(), n(), i();
        }
        function a() {
            s();
        }
        function o() {
            s();
        }
        function d() {
            e(document).on("click", ".edgtf-quantity-minus, .edgtf-quantity-plus", function (t) {
                t.stopPropagation();
                var a,
                    o = e(this),
                    d = o.siblings(".edgtf-quantity-input"),
                    n = parseFloat(d.data("step")),
                    i = parseFloat(d.data("max")),
                    s = !1,
                    r = parseFloat(d.val());
                o.hasClass("edgtf-quantity-minus") && (s = !0), s ? ((a = r - n), a >= 1 ? d.val(a) : d.val(0)) : ((a = r + n), void 0 === i ? d.val(a) : a >= i ? d.val(i) : d.val(a)), d.trigger("change");
            });
        }
        function n() {
            var t = e(".woocommerce-ordering .orderby");
            t.length && t.select2({ minimumResultsForSearch: 1 / 0 });
            var a = e(".edgtf-woocommerce-page .edgtf-content .variations td.value select");
            a.length && a.select2();
            var o = e("#calc_shipping_country");
            o.length && o.select2();
            var d = e(".cart-collaterals .shipping select#calc_shipping_state");
            d.length && d.select2();
        }
        function i() {
            var t = e(".edgtf-woo-single-page.edgtf-woo-single-has-pretty-photo .images .woocommerce-product-gallery__image");
            t.length && (t.children("a").attr("data-rel", "prettyPhoto[woo_single_pretty_photo]"), "function" == typeof edgtf.modules.common.edgtfPrettyPhoto && edgtf.modules.common.edgtfPrettyPhoto());
        }
        function s() {
            var t = e(".edgtf-pl-holder.edgtf-masonry-layout .edgtf-pl-outer");
            t.length &&
                t.each(function () {
                    var t = e(this);
                    t.waitForImages(function () {
                        t.isotope({ itemSelector: ".edgtf-pli", resizable: !1, masonry: { columnWidth: ".edgtf-pl-sizer", gutter: ".edgtf-pl-gutter" } }),
                            setTimeout(function () {
                                "function" == typeof edgtf.modules.common.edgtfInitParallax && edgtf.modules.common.edgtfInitParallax();
                            }, 1e3),
                            t.isotope("layout").css("opacity", 1);
                    });
                });
        }
        var r = {};
        (edgtf.modules.woocommerce = r), (r.edgtfOnDocumentReady = t), (r.edgtfOnWindowLoad = a), (r.edgtfOnWindowResize = o), e(document).ready(t), e(window).load(a), e(window).resize(o);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e(".edgtf-accordion-holder");
            t.length &&
                t.each(function () {
                    var t = e(this);
                    if ((t.hasClass("edgtf-accordion") && t.accordion({ animate: "swing", collapsible: !0, active: 0, icons: "", heightStyle: "content" }), t.hasClass("edgtf-toggle"))) {
                        var a = e(this),
                            o = a.find(".edgtf-accordion-title"),
                            d = o.next();
                        a.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"),
                            o.addClass("ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"),
                            d.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),
                            o.each(function () {
                                var t = e(this);
                                t.on("mouseenter mouseleave", function () {
                                    t.toggleClass("ui-state-hover");
                                }),
                                    t.on("click", function () {
                                        t.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"), t.next().toggleClass("ui-accordion-content-active").slideToggle(400);
                                    });
                            });
                    }
                });
        }
        var o = {};
        (edgtf.modules.accordions = o), (o.edgtfInitAccordions = a), (o.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t,
                a,
                o,
                d = e(
                    ".edgtf-grow-in, .edgtf-fade-in-down, .edgtf-element-from-fade, .edgtf-element-from-left, .edgtf-element-from-right, .edgtf-element-from-top, .edgtf-element-from-bottom, .edgtf-flip-in, .edgtf-x-rotate, .edgtf-z-rotate, .edgtf-y-translate, .edgtf-fade-in, .edgtf-fade-in-left-x-rotate"
                );
            d.length &&
                d.each(function () {
                    var d = e(this);
                    d.appear(
                        function () {
                            if (((a = d.data("animation")), (o = parseInt(d.data("animation-delay"))), void 0 !== a && "" !== a)) {
                                t = a;
                                var e = t + "-on";
                                setTimeout(function () {
                                    d.addClass(e);
                                }, o);
                            }
                        },
                        { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
                    );
                });
        }
        var o = {};
        (edgtf.modules.animationHolder = o), (o.edgtfInitAnimationHolder = a), (o.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            o().init();
        }
        var a = {};
        (edgtf.modules.button = a), (a.edgtfButton = o), (a.edgtfOnDocumentReady = t), e(document).ready(t);
        var o = function () {
            var t = e(".edgtf-btn"),
                a = function (e) {
                    if (void 0 !== e.data("hover-color")) {
                        var t = function (e) {
                                e.data.button.css("color", e.data.color);
                            },
                            a = e.css("color"),
                            o = e.data("hover-color");
                        e.on("mouseenter", { button: e, color: o }, t), e.on("mouseleave", { button: e, color: a }, t);
                    }
                },
                o = function (e) {
                    if (void 0 !== e.data("hover-bg-color")) {
                        var t = function (e) {
                                e.data.button.css("background-color", e.data.color);
                            },
                            a = e.css("background-color"),
                            o = e.data("hover-bg-color");
                        e.on("mouseenter", { button: e, color: o }, t), e.on("mouseleave", { button: e, color: a }, t);
                    }
                },
                d = function (e) {
                    if (void 0 !== e.data("hover-border-color")) {
                        var t = function (e) {
                                e.data.button.css("border-color", e.data.color);
                            },
                            a = e.css("borderTopColor"),
                            o = e.data("hover-border-color");
                        e.on("mouseenter", { button: e, color: o }, t), e.on("mouseleave", { button: e, color: a }, t);
                    }
                };
            return {
                init: function () {
                    t.length &&
                        t.each(function () {
                            a(e(this)), o(e(this)), d(e(this));
                        });
                },
            };
        };
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t,
                a,
                o,
                d,
                n,
                i,
                s,
                r,
                l,
                f,
                g,
                c = e(".edgtf-countdown"),
                u = new Date(),
                h = u.getMonth();
            c.length &&
                c.each(function () {
                    function c() {
                        v.find(".countdown-amount").css({ "font-size": u + "px", "line-height": u + "px" }), v.find(".countdown-period").css({ "font-size": p + "px" });
                    }
                    var u,
                        p,
                        m = e(this).attr("id"),
                        v = e("#" + m);
                    (t = v.data("year")),
                        (a = v.data("month")),
                        (o = v.data("day")),
                        (d = v.data("hour")),
                        (n = v.data("minute")),
                        (i = v.data("timezone")),
                        (s = v.data("month-label")),
                        (r = v.data("day-label")),
                        (l = v.data("hour-label")),
                        (f = v.data("minute-label")),
                        (g = v.data("second-label")),
                        (u = v.data("digit-size")),
                        (p = v.data("label-size")),
                        h != a && (a -= 1),
                        v.countdown({ until: new Date(t, a, o, d, n, 44), labels: ["Years", s, "Weeks", r, l, f, g], format: "ODHMS", timezone: i, padZeroes: !0, onTick: c });
                });
        }
        var o = {};
        (edgtf.modules.countdown = o), (o.edgtfInitCountdown = a), (o.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e(".edgtf-counter-holder");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.find(".edgtf-counter");
                    t.appear(
                        function () {
                            if ((t.css("opacity", "1"), a.hasClass("edgtf-zero-counter"))) {
                                var e = parseFloat(a.text());
                                a.countTo({ from: 0, to: e, speed: 1500, refreshInterval: 100 });
                            } else a.absoluteCounter({ speed: 2e3, fadeInDelay: 1e3 });
                        },
                        { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
                    );
                });
        }
        var o = {};
        (edgtf.modules.counter = o), (o.edgtfInitCounter = a), (o.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            o();
        }
        function a() {
            o();
        }
        function o() {
            var t = e(".edgtf-custom-font-holder");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = "",
                        o = "",
                        d = "",
                        n = "",
                        i = "",
                        s = "",
                        r = "";
                    void 0 !== t.data("item-class") && !1 !== t.data("item-class") && (a = t.data("item-class")),
                        void 0 !== t.data("font-size-1280") && !1 !== t.data("font-size-1280") && (o += "font-size: " + t.data("font-size-1280") + " !important;"),
                        void 0 !== t.data("font-size-1024") && !1 !== t.data("font-size-1024") && (d += "font-size: " + t.data("font-size-1024") + " !important;"),
                        void 0 !== t.data("font-size-768") && !1 !== t.data("font-size-768") && (n += "font-size: " + t.data("font-size-768") + " !important;"),
                        void 0 !== t.data("font-size-680") && !1 !== t.data("font-size-680") && (i += "font-size: " + t.data("font-size-680") + " !important;"),
                        void 0 !== t.data("line-height-1280") && !1 !== t.data("line-height-1280") && (o += "line-height: " + t.data("line-height-1280") + " !important;"),
                        void 0 !== t.data("line-height-1024") && !1 !== t.data("line-height-1024") && (d += "line-height: " + t.data("line-height-1024") + " !important;"),
                        void 0 !== t.data("line-height-768") && !1 !== t.data("line-height-768") && (n += "line-height: " + t.data("line-height-768") + " !important;"),
                        void 0 !== t.data("line-height-680") && !1 !== t.data("line-height-680") && (i += "line-height: " + t.data("line-height-680") + " !important;"),
                        (o.length || d.length || n.length || i.length) &&
                            (o.length && (r += "@media only screen and (max-width: 1280px) {.edgtf-custom-font-holder." + a + " { " + o + " } }"),
                            d.length && (r += "@media only screen and (max-width: 1024px) {.edgtf-custom-font-holder." + a + " { " + d + " } }"),
                            n.length && (r += "@media only screen and (max-width: 768px) {.edgtf-custom-font-holder." + a + " { " + n + " } }"),
                            i.length && (r += "@media only screen and (max-width: 680px) {.edgtf-custom-font-holder." + a + " { " + i + " } }")),
                        r.length && (s = '<style type="text/css">' + r + "</style>"),
                        s.length && e("head").append(s);
                });
        }
        var d = {};
        (edgtf.modules.customFont = d), (d.edgtfCustomFontResize = o), (d.edgtfOnDocumentReady = t), (d.edgtfOnWindowResize = a), e(document).ready(t), e(window).resize(a);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e(".edgtf-elements-holder");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.children(".edgtf-eh-item"),
                        o = "",
                        d = "";
                    a.each(function () {
                        var t = e(this),
                            a = "",
                            o = "",
                            n = "",
                            i = "",
                            s = "",
                            r = "";
                        void 0 !== t.data("item-class") && !1 !== t.data("item-class") && (a = t.data("item-class")),
                            void 0 !== t.data("1280-1600") && !1 !== t.data("1280-1600") && (o = t.data("1280-1600")),
                            void 0 !== t.data("1024-1280") && !1 !== t.data("1024-1280") && (n = t.data("1024-1280")),
                            void 0 !== t.data("768-1024") && !1 !== t.data("768-1024") && (i = t.data("768-1024")),
                            void 0 !== t.data("680-768") && !1 !== t.data("680-768") && (s = t.data("680-768")),
                            void 0 !== t.data("680") && !1 !== t.data("680") && (r = t.data("680")),
                            (o.length || n.length || i.length || s.length || r.length || "".length) &&
                                (o.length && (d += "@media only screen and (min-width: 1281px) and (max-width: 1600px) {.edgtf-eh-item-content." + a + " { padding: " + o + " !important; } }"),
                                n.length && (d += "@media only screen and (min-width: 1025px) and (max-width: 1280px) {.edgtf-eh-item-content." + a + " { padding: " + n + " !important; } }"),
                                i.length && (d += "@media only screen and (min-width: 769px) and (max-width: 1024px) {.edgtf-eh-item-content." + a + " { padding: " + i + " !important; } }"),
                                s.length && (d += "@media only screen and (min-width: 681px) and (max-width: 768px) {.edgtf-eh-item-content." + a + " { padding: " + s + " !important; } }"),
                                r.length && (d += "@media only screen and (max-width: 680px) {.edgtf-eh-item-content." + a + " { padding: " + r + " !important; } }"));
                    }),
                        d.length && (o = '<style type="text/css">' + d + "</style>"),
                        o.length && e("head").append(o),
                        "function" == typeof edgtf.modules.common.edgtfOwlSlider && edgtf.modules.common.edgtfOwlSlider();
                });
        }
        var o = {};
        (edgtf.modules.elementsHolder = o), (o.edgtfInitElementsHolderResponsiveStyle = a), (o.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e(".edgtf-fsis-slider");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.parent(),
                        n = a.children(".edgtf-fsis-prev-nav"),
                        i = a.children(".edgtf-fsis-next-nav"),
                        s = a.children(".edgtf-fsis-slider-mask");
                    a.addClass("edgtf-fsis-is-init"),
                        o(t),
                        d(t, n, i, -1),
                        t.on("drag.owl.carousel", function () {
                            setTimeout(function () {
                                s.hasClass("edgtf-drag") || a.hasClass("edgtf-fsis-active") || s.addClass("edgtf-drag");
                            }, 200);
                        }),
                        t.on("dragged.owl.carousel", function () {
                            setTimeout(function () {
                                s.hasClass("edgtf-drag") && s.removeClass("edgtf-drag");
                            }, 300);
                        }),
                        t.on("translate.owl.carousel", function (e) {
                            d(t, n, i, e.item.index);
                        }),
                        t.on("translated.owl.carousel", function () {
                            o(t),
                                setTimeout(function () {
                                    s.removeClass("edgtf-drag");
                                }, 300);
                        });
                });
        }
        function o(t) {
            var a = t.find(".owl-item.active");
            if ((t.find(".edgtf-fsis-item").removeClass("edgtf-fsis-content-image-init"), n(t), a.length)) {
                var o = a.find(".edgtf-fsis-item"),
                    d = o.children(".edgtf-fsis-image");
                setTimeout(function () {
                    o.addClass("edgtf-fsis-content-image-init");
                }, 100),
                    d
                        .off()
                        .on("mouseenter", function () {
                            o.addClass("edgtf-fsis-image-hover");
                        })
                        .on("mouseleave", function () {
                            o.removeClass("edgtf-fsis-image-hover");
                        })
                        .on("click", function () {
                            o.hasClass("edgtf-fsis-active-image")
                                ? (t.trigger("play.owl.autoplay"), t.parent().removeClass("edgtf-fsis-active"), o.removeClass("edgtf-fsis-active-image"))
                                : (t.trigger("stop.owl.autoplay"), t.parent().addClass("edgtf-fsis-active"), o.addClass("edgtf-fsis-active-image"));
                        }),
                    e(document).keyup(function (e) {
                        27 === e.keyCode && (t.trigger("play.owl.autoplay"), t.parent().removeClass("edgtf-fsis-active"), o.removeClass("edgtf-fsis-active-image"));
                    });
            }
        }
        function d(t, a, o, d) {
            var n = -1 === d ? t.find(".owl-item.active") : e(t.find(".owl-item")[d]),
                i = n.prev().find(".edgtf-fsis-image").css("background-image"),
                s = n.next().find(".edgtf-fsis-image").css("background-image");
            i.length && a.css({ "background-image": i }), s.length && o.css({ "background-image": s });
        }
        function n(e) {
            var t = e.find(".edgtf-fsis-item");
            t.length && t.removeClass("edgtf-fsis-active-image");
        }
        var i = {};
        (edgtf.modules.fullScreenImageSlider = i), (i.edgtfOnWindowLoad = t), e(window).load(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e(".edgtf-full-screen-sections");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.children(".edgtf-fss-wrapper"),
                        i = a.children(".edgtf-fss-item"),
                        s = i.length,
                        r = i.hasClass("edgtf-fss-item-has-style"),
                        l = !1,
                        f = "",
                        g = "",
                        c = "";
                    edgtf.body.hasClass("edgtf-light-header") ? (c = "light") : edgtf.body.hasClass("edgtf-dark-header") && (c = "dark"),
                        void 0 !== t.data("enable-continuous-vertical") && !1 !== t.data("enable-continuous-vertical") && "yes" === t.data("enable-continuous-vertical") && (l = !0),
                        void 0 !== t.data("enable-navigation") && !1 !== t.data("enable-navigation") && (f = t.data("enable-navigation")),
                        void 0 !== t.data("enable-pagination") && !1 !== t.data("enable-pagination") && (g = t.data("enable-pagination"));
                    var u = "no" !== f,
                        h = "no" !== g;
                    a.fullpage({
                        sectionSelector: ".edgtf-fss-item",
                        scrollingSpeed: 1200,
                        verticalCentered: !1,
                        continuousVertical: l,
                        navigation: h,
                        onLeave: function (a, n, l) {
                            r && o(e(i[n - 1]).data("header-style"), c), u && d(t, s, n);
                        },
                        afterRender: function () {
                            r && o(i.first().data("header-style"), c), u && (d(t, s, 1), t.children(".edgtf-fss-nav-holder").css("visibility", "visible")), a.css("visibility", "visible");
                        },
                    }),
                        n(t),
                        u &&
                            (t.find("#edgtf-fss-nav-up").on("click", function () {
                                return e.fn.fullpage.moveSectionUp(), !1;
                            }),
                            t.find("#edgtf-fss-nav-down").on("click", function () {
                                return e.fn.fullpage.moveSectionDown(), !1;
                            }));
                });
        }
        function o(e, t) {
            void 0 !== e && "" !== e
                ? edgtf.body.removeClass("edgtf-light-header edgtf-dark-header").addClass("edgtf-" + e + "-header")
                : "" !== t
                ? edgtf.body.removeClass("edgtf-light-header edgtf-dark-header").addClass("edgtf-" + t + "-header")
                : edgtf.body.removeClass("edgtf-light-header edgtf-dark-header");
        }
        function d(e, t, a) {
            var o = e,
                d = o.find("#edgtf-fss-nav-up"),
                n = o.find("#edgtf-fss-nav-down"),
                i = !1;
            void 0 !== e.data("enable-continuous-vertical") && !1 !== e.data("enable-continuous-vertical") && "yes" === e.data("enable-continuous-vertical") && (i = !0),
                1 !== a || i
                    ? a !== t || i
                        ? (d.css({ opacity: "1", height: "auto", visibility: "visible" }), n.css({ opacity: "1", height: "auto", visibility: "visible" }))
                        : (n.css({ opacity: "0", height: "0", visibility: "hidden" }), 2 === t && d.css({ opacity: "1", height: "auto", visibility: "visible" }))
                    : (d.css({ opacity: "0", height: "0", visibility: "hidden" }), n.css({ opacity: "0", height: "0", visibility: "hidden" }), a !== t && n.css({ opacity: "1", height: "auto", visibility: "visible" }));
        }
        function n(t) {
            var a = t.find(".edgtf-fss-item"),
                o = "",
                d = "";
            a.each(function () {
                var t = e(this),
                    a = "",
                    d = "",
                    n = "",
                    i = "",
                    s = "";
                void 0 !== t.data("item-class") && !1 !== t.data("item-class") && (a = t.data("item-class")),
                    void 0 !== t.data("laptop-image") && !1 !== t.data("laptop-image") && (d = t.data("laptop-image")),
                    void 0 !== t.data("tablet-image") && !1 !== t.data("tablet-image") && (n = t.data("tablet-image")),
                    void 0 !== t.data("tablet-portrait-image") && !1 !== t.data("tablet-portrait-image") && (i = t.data("tablet-portrait-image")),
                    void 0 !== t.data("mobile-image") && !1 !== t.data("mobile-image") && (s = t.data("mobile-image")),
                    (d.length || n.length || i.length || s.length) &&
                        (d.length && (o += "@media only screen and (max-width: 1280px) {.edgtf-fss-item." + a + " { background-image: url(" + d + ") !important; } }"),
                        n.length && (o += "@media only screen and (max-width: 1024px) {.edgtf-fss-item." + a + " { background-image: url( " + n + ") !important; } }"),
                        i.length && (o += "@media only screen and (max-width: 800px) {.edgtf-fss-item." + a + " { background-image: url( " + i + ") !important; } }"),
                        s.length && (o += "@media only screen and (max-width: 680px) {.edgtf-fss-item." + a + " { background-image: url( " + s + ") !important; } }"));
            }),
                o.length && (d = '<style type="text/css">' + o + "</style>"),
                d.length && e("head").append(d);
        }
        var i = {};
        (edgtf.modules.fullScreenSections = i), (i.edgtfInitFullScreenSections = a), (i.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e(".edgtf-google-map");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = !1;
                    void 0 !== t.data("predefined-style") && "yes" === t.data("predefined-style") && (a = !0);
                    var d;
                    void 0 !== t.data("custom-map-style") && (d = t.data("custom-map-style"));
                    var n;
                    void 0 !== t.data("color-overlay") && !1 !== t.data("color-overlay") && (n = t.data("color-overlay"));
                    var i;
                    void 0 !== t.data("saturation") && !1 !== t.data("saturation") && (i = t.data("saturation"));
                    var s;
                    void 0 !== t.data("lightness") && !1 !== t.data("lightness") && (s = t.data("lightness"));
                    var r;
                    void 0 !== t.data("zoom") && !1 !== t.data("zoom") && (r = t.data("zoom"));
                    var l;
                    void 0 !== t.data("pin") && !1 !== t.data("pin") && (l = t.data("pin"));
                    var f;
                    void 0 !== t.data("height") && !1 !== t.data("height") && (f = t.data("height"));
                    var g;
                    void 0 !== t.data("unique-id") && !1 !== t.data("unique-id") && (g = t.data("unique-id"));
                    var c;
                    void 0 !== t.data("scroll-wheel") && (c = t.data("scroll-wheel"));
                    var u;
                    void 0 !== t.data("addresses") && !1 !== t.data("addresses") && (u = t.data("addresses")), o(a, d, n, i, s, c, r, "edgtf-map-" + g, f, l, "map_" + g, "geocoder_" + g, u);
                });
        }
        function o(e, t, a, o, n, i, s, r, l, f, g, c, u) {
            if ("object" == typeof google) {
                var h = [];
                h = e
                    ? [
                          { featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#444444" }] },
                          { featureType: "landscape", elementType: "all", stylers: [{ color: "#f2f2f2" }] },
                          { featureType: "landscape", elementType: "geometry.fill", stylers: [{ saturation: "23" }, { color: "#ffffff" }, { visibility: "on" }] },
                          { featureType: "landscape", elementType: "geometry.stroke", stylers: [{ visibility: "on" }] },
                          { featureType: "landscape", elementType: "labels.text", stylers: [{ visibility: "on" }] },
                          { featureType: "landscape", elementType: "labels.text.fill", stylers: [{ color: "#8396d7" }] },
                          { featureType: "landscape", elementType: "labels.text.stroke", stylers: [{ hue: "#ff0000" }, { visibility: "off" }] },
                          { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] },
                          { featureType: "road", elementType: "all", stylers: [{ saturation: -100 }, { lightness: 45 }] },
                          { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#efe0c3" }, { visibility: "on" }] },
                          { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#85a1ca" }, { visibility: "on" }] },
                          { featureType: "road", elementType: "labels.icon", stylers: [{ invert_lightness: !0 }] },
                          { featureType: "road.highway", elementType: "labels", stylers: [{ visibility: "on" }] },
                          { featureType: "road.highway", elementType: "labels.icon", stylers: [{ invert_lightness: !0 }] },
                          { featureType: "road.arterial", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                          { featureType: "transit", elementType: "all", stylers: [{ visibility: "off" }] },
                          { featureType: "water", elementType: "all", stylers: [{ color: "#c9e4f3" }, { visibility: "on" }] },
                      ]
                    : [{ stylers: [{ hue: a }, { saturation: o }, { lightness: n }, { gamma: 1 }] }];
                var p;
                (p = e || "yes" === t ? "edgtf-style" : google.maps.MapTypeId.ROADMAP), (i = "yes" === i);
                var m = new google.maps.StyledMapType(h, { name: "Edge Google Map" });
                c = new google.maps.Geocoder();
                var v = new google.maps.LatLng(-34.397, 150.644);
                isNaN(l) || (l += "px");
                var y = {
                    zoom: s,
                    scrollwheel: i,
                    center: v,
                    zoomControl: !0,
                    zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL, position: google.maps.ControlPosition.RIGHT_CENTER },
                    scaleControl: !1,
                    scaleControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER },
                    streetViewControl: !1,
                    streetViewControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER },
                    panControl: !1,
                    panControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER },
                    mapTypeControl: !1,
                    mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, "edgtf-style"], style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR, position: google.maps.ControlPosition.LEFT_CENTER },
                    mapTypeId: p,
                };
                (g = new google.maps.Map(document.getElementById(r), y)), g.mapTypes.set("edgtf-style", m);
                var b;
                for (b = 0; b < u.length; ++b) d(u[b], f, g, c);
                document.getElementById(r).style.height = l;
            }
        }
        function d(e, t, a, o) {
            if ("" !== e) {
                var d = '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' + e + "</p></div></div>",
                    n = new google.maps.InfoWindow({ content: d });
                o.geocode({ address: e }, function (o, d) {
                    if (d === google.maps.GeocoderStatus.OK) {
                        a.setCenter(o[0].geometry.location);
                        var i = new google.maps.Marker({ map: a, position: o[0].geometry.location, icon: t, title: e.store_title });
                        google.maps.event.addListener(i, "click", function () {
                            n.open(a, i);
                        }),
                            google.maps.event.addDomListener(window, "resize", function () {
                                a.setCenter(o[0].geometry.location);
                            });
                    }
                });
            }
        }
        var n = {};
        (edgtf.modules.googleMap = n), (n.edgtfShowGoogleMap = a), (n.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            o().init();
        }
        var a = {};
        (edgtf.modules.icon = a), (a.edgtfIcon = o), (a.edgtfOnDocumentReady = t), e(document).ready(t);
        var o = function () {
            var t = e(".edgtf-icon-shortcode"),
                a = function (e) {
                    e.hasClass("edgtf-icon-animation") &&
                        e.appear(
                            function () {
                                e.parent(".edgtf-icon-animation-holder").addClass("edgtf-icon-animation-show");
                            },
                            { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
                        );
                },
                o = function (e) {
                    if (void 0 !== e.data("hover-color")) {
                        var t = function (e) {
                                e.data.icon.css("color", e.data.color);
                            },
                            a = e.find(".edgtf-icon-element"),
                            o = e.data("hover-color"),
                            d = a.css("color");
                        "" !== o && (e.on("mouseenter", { icon: a, color: o }, t), e.on("mouseleave", { icon: a, color: d }, t));
                    }
                },
                d = function (e) {
                    if (void 0 !== e.data("hover-background-color")) {
                        var t = function (e) {
                                e.data.icon.css("background-color", e.data.color);
                            },
                            a = e.data("hover-background-color"),
                            o = e.css("background-color");
                        "" !== a && (e.on("mouseenter", { icon: e, color: a }, t), e.on("mouseleave", { icon: e, color: o }, t));
                    }
                },
                n = function (e) {
                    if (void 0 !== e.data("hover-border-color")) {
                        var t = function (e) {
                                e.data.icon.css("border-color", e.data.color);
                            },
                            a = e.data("hover-border-color"),
                            o = e.css("borderTopColor");
                        "" !== a && (e.on("mouseenter", { icon: e, color: a }, t), e.on("mouseleave", { icon: e, color: o }, t));
                    }
                };
            return {
                init: function () {
                    t.length &&
                        t.each(function () {
                            a(e(this)), o(e(this)), d(e(this)), n(e(this));
                        });
                },
            };
        };
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            o().init();
        }
        var a = {};
        (edgtf.modules.iconListItem = a), (a.edgtfInitIconList = o), (a.edgtfOnDocumentReady = t), e(document).ready(t);
        var o = function () {
            var t = e(".edgtf-animate-list"),
                a = function (e) {
                    setTimeout(function () {
                        e.appear(
                            function () {
                                e.addClass("edgtf-appeared");
                            },
                            { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
                        );
                    }, 30);
                };
            return {
                init: function () {
                    t.length &&
                        t.each(function () {
                            a(e(this));
                        });
                },
            };
        };
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            d(), n();
        }
        function a() {}
        function o() {
            n();
        }
        function d() {
            var t = e(".edgtf-image-gallery.edgtf-ig-masonry-type");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.find(".edgtf-ig-masonry");
                    a.isotope({ layoutMode: "packery", itemSelector: ".edgtf-ig-image", percentPosition: !0, packery: { gutter: ".edgtf-ig-grid-gutter", columnWidth: ".edgtf-ig-grid-sizer" } }),
                        setTimeout(function () {
                            a.isotope("layout");
                        }, 900),
                        a.css("opacity", "1");
                });
        }
        function n() {
            var t = e(".edgtf-image-gallery.edgtf-ig-carousel-type .edgtf-ig-slider");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.find(".edgtf-ig-image img"),
                        o = !0;
                    if (
                        ("yes" === t.data("enable-auto-width") &&
                            a.each(function () {
                                var t = e(this),
                                    a = t.attr("height");
                                edgtf.windowWidth < 600 ? (a *= 0.7) : edgtf.windowWidth < 1025 ? (a *= 0.75) : edgtf.windowWidth < 1281 && (a *= 0.85), t.css("height", a);
                            }),
                        void 0 !== t.data("owl.carousel"))
                    ) {
                        t.trigger("refresh.owl.carousel");
                        var d = t.find(".owl-stage"),
                            n = parseInt(d.css("width"));
                        "" !== n && 0 != n && d.css("width", n + 1);
                    }
                    t.on("translate.owl.carousel", function () {
                        o = !1;
                    }),
                        t.on("translated.owl.carousel", function () {
                            o = !0;
                        }),
                        t.on("mousewheel", ".owl-stage", function (e) {
                            o && (e.deltaY > 0 ? t.trigger("prev.owl") : t.trigger("next.owl"), e.preventDefault());
                        });
                });
        }
        var i = {};
        (edgtf.modules.imageGallery = i),
            (i.edgtfInitImageGalleryMasonry = d),
            (i.edgtfInitImageGalleryCarousel = n),
            (i.edgtfOnWindowLoad = t),
            (i.edgtfOnWindowResize = o),
            (i.edgtfOnDocumentReady = a),
            e(document).ready(a),
            e(window).load(t),
            e(window).resize(o);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e(".edgtf-pie-chart-holder");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.children(".edgtf-pc-percentage"),
                        d = "#25abd1",
                        n = "#f7f7f7",
                        i = 176;
                    void 0 !== a.data("size") && "" !== a.data("size") && (i = a.data("size")),
                        void 0 !== a.data("bar-color") && "" !== a.data("bar-color") && (d = a.data("bar-color")),
                        void 0 !== a.data("track-color") && "" !== a.data("track-color") && (n = a.data("track-color")),
                        a.appear(
                            function () {
                                o(a), t.css("opacity", "1"), a.easyPieChart({ barColor: d, trackColor: n, scaleColor: !1, lineCap: "butt", lineWidth: 3, animate: 1500, size: i });
                            },
                            { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
                        );
                });
        }
        function o(e) {
            var t = e.find(".edgtf-pc-percent"),
                a = parseFloat(t.text());
            t.countTo({ from: 0, to: a, speed: 1500, refreshInterval: 50 });
        }
        var d = {};
        (edgtf.modules.pieChart = d), (d.edgtfInitPieChart = a), (d.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e(".edgtf-process-holder");
            t.length &&
                t.each(function () {
                    var t = e(this);
                    t.appear(
                        function () {
                            t.addClass("edgtf-process-appeared");
                        },
                        { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
                    );
                });
        }
        var o = {};
        (edgtf.modules.process = o), (o.edgtfInitProcess = a), (o.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e(".edgtf-progress-bar");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.find(".edgtf-pb-content"),
                        d = t.find(".edgtf-progress-number"),
                        n = a.data("percentage");
                    t.appear(function () {
                        o(t, n), a.css("width", "0%"), a.animate({ width: n + "%" }, 2e3), d.animate({ left: n + "%" }, 2e3);
                    });
                });
        }
        function o(t, a) {
            var o = parseFloat(a),
                d = t.find(".edgtf-pb-percent");
            d.length &&
                d.each(function () {
                    var t = e(this);
                    t.css("opacity", "1"), t.countTo({ from: 0, to: o, speed: 2e3, refreshInterval: 50 });
                });
        }
        var d = {};
        (edgtf.modules.progressBar = d), (d.edgtfInitProgressBars = a), (d.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            function t() {
                edgtf.body.hasClass("edgtf-fp-opened") || e("html, body").animate({ scrollTop: r }, 1e3, "easeInOutQuint", function () {});
            }
            var a = e("#edgtf-scrolling-images-showcase");
            if (a.length) {
                var o = a.find(".edgtf-sis-scrolling-items-inner"),
                    d = o.find(".edgtf-sis-item"),
                    n = d.length - 1,
                    i = o.height(),
                    s = o.offset().top,
                    r = i - s,
                    l = d.eq(n).css("top"),
                    f = a.find(".edgtf-sis-right-text"),
                    g = a.find(".edgtf-sis-svg"),
                    c = 0,
                    u = 0.5,
                    h = !1;
                if (
                    (a.hasClass("edgtf-sis-intro-enabled")
                        ? (d.addClass("edgtf-sis-item-hide"),
                          edgtf.window.load(function () {
                              setTimeout(function () {
                                  g.addClass("edgtf-sis-svg-animate-mask");
                              }, 200);
                              var t = 800;
                              setTimeout(function () {
                                  a.addClass("edgtf-scrolling-images-showcase-appear"),
                                      d.each(function () {
                                          var a = e(this);
                                          setTimeout(function () {
                                              a.removeClass("edgtf-sis-item-hide").css("visibility", "visible");
                                          }, t),
                                              (t += 300);
                                      });
                              }, 2300);
                          }))
                        : (a.addClass("edgtf-scrolling-images-showcase-appear"), g.addClass("edgtf-sis-svg-animate-mask"), d.css("visibility", "visible")),
                    f.on("click", function () {
                        t(),
                            setTimeout(function () {
                                (h = !0), edgtf.modules.common.edgtfEnableScroll();
                            }, 1e3);
                    }),
                    !edgtf.htmlEl.hasClass("touch"))
                ) {
                    d.eq(n).clone().addClass("edgtf-sis-bottom-threshold-item").appendTo(o);
                    var p = o.find(".edgtf-sis-bottom-threshold-item");
                    p.css("top", l),
                      
                        (u = edgtf.body.hasClass("edgtf-safari") ? 0.1 : 0.5),
                        window.addEventListener(
                            "wheel",
                            function (a) {
                                if (!h) {
                                    var o = a.deltaY > 0 ? 1 : -1,
                                        n = -1 != o;
                         //           p.offset().top < 0.9 * i - p.height() && n
                          //              ? (t(),
                           //               (h = !0),
                            //              setTimeout(function () {
                             //         //        edgtf.modules.common.edgtfEnableScroll();
                              //            }, 500))
                               //         : (n ? (c += u) : (c -= u),
                                //          c >= 0
                                 //             ? (d.each(function (t) {
                                  //                  e(this).css({ transform: "translate3d(0, " + 50 * -c + "%, 0)" });
                                   //             }),
                                    //            p.css({ transform: "translate3d(0, " + 50 * -c + "%, 0)" }))
                                     //         : (c = 0));
                                }
                            },
                            { passive: !1 }
                        );
                }
            }
        }
        var o = {};
        (edgtf.modules.scrollingImagesShowcase = o), (o.edgtfInitScrollingImagesShowcase = a), (o.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e(".edgtf-stacked-images-holder");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.find(".edgtf-si-images");
                    t.animate({ opacity: 1 }, 200),
                        setTimeout(function () {
                            t.appear(
                                function () {
                                    a.addClass("edgtf-appeared");
                                },
                                { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
                            );
                        }, 100);
                });
        }
        var o = {};
        (edgtf.modules.stackedImages = o), (o.edgtfInitItemShowcase = a), (o.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e(".edgtf-tabs");
            t.length &&
                t.each(function () {
                    var t = e(this);
                    t.children(".edgtf-tab-container").each(function (t) {
                        t += 1;
                        var a = e(this),
                            o = a.attr("id"),
                            d = a.parent().find(".edgtf-tabs-nav li:nth-child(" + t + ") a"),
                            n = d.attr("href");
                        (o = "#" + o), o.indexOf(n) > -1 && d.attr("href", o);
                    }),
                        t.tabs(),
                        e(".edgtf-tabs a.edgtf-external-link").off("click");
                });
        }
        var o = {};
        (edgtf.modules.tabs = o), (o.edgtfInitTabs = a), (o.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e(".edgtf-text-marquee");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.find(".edgtf-marquee-element"),
                        d = a.filter(".edgtf-original-text"),
                        n = a.filter(".edgtf-aux-text"),
                        i = function (e) {
                            return t.outerWidth() > e.outerWidth() ? t.outerWidth() : e.outerWidth();
                        };
                    !(function () {
                        o();
                        var t = i(d);
                        a.css({ width: t }),
                            n.css("left", t),
                            a.each(function (a) {
                                var o = e(this),
                                    s = 0,
                                    r = function () {
                                        (s -= 1),
                                            o.position().left <= -t && (o.css("left", parseInt(t - 1)), (s = 0)),
                                            o.css("transform", "translate3d(" + 0.8 * s + "px,0,0)"),
                                            requestNextAnimationFrame(r),
                                            e(window).resize(function () {
                                                (t = i(d)), (s = 0), d.css("left", 0), n.css("left", t);
                                            });
                                    };
                                r();
                            });
                    })();
                });
        }
        function o() {
            window.requestNextAnimationFrame = (function () {
                var e = void 0,
                    t = void 0,
                    a = navigator.userAgent,
                    o = 0,
                    d = this;
                return (
                    window.webkitRequestAnimationFrame &&
                        ((t = function (e) {
                            void 0 === e && (e = +new Date()), d.callback(e);
                        }),
                        (e = window.webkitRequestAnimationFrame),
                        (window.webkitRequestAnimationFrame = function (a, o) {
                            (d.callback = a), e(t, o);
                        })),
                    window.mozRequestAnimationFrame && ((o = a.indexOf("rv:")), -1 != a.indexOf("Gecko") && "2.0" === a.substr(o + 3, 3) && (window.mozRequestAnimationFrame = void 0)),
                    window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        function (e, t) {
                            var a, o;
                            window.setTimeout(function () {
                                (a = +new Date()), e(a), (o = +new Date()), (d.timeout = 1e3 / 60 - (o - a));
                            }, d.timeout);
                        }
                );
            })();
        }
        var d = {};
        (edgtf.modules.textMarquee = d), (d.edgtfInitTextMarquee = a), (d.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            a();
        }
        function a() {
            var t = e(".edgtf-vertical-split-slider");
            if (t.length) {
                edgtf.body.hasClass("edgtf-vss-initialized") && (edgtf.body.removeClass("edgtf-vss-initialized"), e.fn.multiscroll.destroy());
                var a = window.innerHeight - 180;
                e("body").hasClass("admin-bar").toString() && (a = window.innerHeight - 180 - 50), t.height(a).animate({ opacity: 1 }, 300);
                var n = "";
                edgtf.body.hasClass("edgtf-light-header") ? (n = "light") : edgtf.body.hasClass("edgtf-dark-header") && (n = "dark"),
                    t.multiscroll({
                        scrollingSpeed: 700,
                        easing: "easeInOutQuart",
                        navigation: !0,
                        useAnchorsOnLoad: !1,
                        sectionSelector: ".edgtf-vss-ms-section",
                        leftSelector: ".edgtf-vss-ms-left",
                        rightSelector: ".edgtf-vss-ms-right",
                        afterRender: function () {
                            d(e(".edgtf-vss-ms-left .edgtf-vss-ms-section:last-child").data("header-style"), n), edgtf.body.addClass("edgtf-vss-initialized");
                            var a = e("div.wpcf7 > form");
                            a.length &&
                                a.each(function () {
                                    var t = e(this);
                                    t.find(".wpcf7-submit")
                                        .off()
                                        .on("click", function (e) {
                                            e.preventDefault(), wpcf7.submit(t);
                                        });
                                });
                            var o = e('<div class="edgtf-vss-responsive"></div>'),
                                i = t.find(".edgtf-vss-ms-left > div"),
                                s = t.find(".edgtf-vss-ms-right > div");
                            t.after(o);
                            for (var r = 0; r < i.length; r++) o.append(e(i[r]).clone(!0)), o.append(e(s[i.length - 1 - r]).clone(!0));
                            var l = e(".edgtf-vss-responsive .edgtf-google-map");
                            l.length &&
                                l.each(function () {
                                    var t = e(this);
                                    t.empty();
                                    var a = Math.floor(1e5 * Math.random() + 1);
                                    t.attr("id", "edgtf-map-" + a), t.data("unique-id", a);
                                }),
                                "function" == typeof edgtf.modules.animationHolder.edgtfInitAnimationHolder && edgtf.modules.animationHolder.edgtfInitAnimationHolder(),
                                "function" == typeof edgtf.modules.button.edgtfButton && edgtf.modules.button.edgtfButton().init(),
                                "function" == typeof edgtf.modules.elementsHolder.edgtfInitElementsHolderResponsiveStyle && edgtf.modules.elementsHolder.edgtfInitElementsHolderResponsiveStyle(),
                                "function" == typeof edgtf.modules.googleMap.edgtfShowGoogleMap && edgtf.modules.googleMap.edgtfShowGoogleMap(),
                                "function" == typeof edgtf.modules.icon.edgtfIcon && edgtf.modules.icon.edgtfIcon().init(),
                                "function" == typeof edgtf.modules.progressBar.edgtfInitProgressBars && edgtf.modules.progressBar.edgtfInitProgressBars();
                        },
                        onLeave: function (a, i) {
                            o(t, i), d(e(e(".edgtf-vss-ms-left .edgtf-vss-ms-section")[e(".edgtf-vss-ms-left .edgtf-vss-ms-section").length - i]).data("header-style"), n);
                        },
                    }),
                    edgtf.windowWidth <= 1024 ? e.fn.multiscroll.destroy() : e.fn.multiscroll.build(),
                    e(window).resize(function () {
                        edgtf.windowWidth <= 1024 ? e.fn.multiscroll.destroy() : e.fn.multiscroll.build();
                    });
            }
        }
        function o(e, t) {
            e.hasClass("edgtf-vss-scrolling-animation") && (t > 1 && !e.hasClass("edgtf-vss-scrolled") ? e.addClass("edgtf-vss-scrolled") : 1 === t && e.hasClass("edgtf-vss-scrolled") && e.removeClass("edgtf-vss-scrolled"));
        }
        function d(e, t) {
            void 0 !== e && "" !== e
                ? edgtf.body.removeClass("edgtf-light-header edgtf-dark-header").addClass("edgtf-" + e + "-header")
                : "" !== t
                ? edgtf.body.removeClass("edgtf-light-header edgtf-dark-header").addClass("edgtf-" + t + "-header")
                : edgtf.body.removeClass("edgtf-light-header edgtf-dark-header");
        }
        var n = {};
        (edgtf.modules.verticalSplitSlider = n), (n.edgtfInitVerticalSplitSlider = a), (n.edgtfOnDocumentReady = t), e(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {}
        function a() {
            s(), l(), c(), n(), i(), g().init(), h().init(), p().init();
        }
        function o() {
            s();
        }
        function d() {
            g().scroll();
        }
        function n() {
            var t = e(".edgtf-portfolio-list-holder.edgtf-pl-has-animation");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = parseInt(t.attr("data-number-of-columns")) - 1,
                        o = 0;
                    t.find("article").each(function (t) {
                        var d = e(this);
                        setTimeout(function () {
                            d.appear(
                                function () {
                                    o++,
                                        o == a && (o = 0),
                                        setTimeout(function () {
                                            d.addClass("edgtf-item-show"),
                                                setTimeout(function () {
                                                    d.addClass("edgtf-item-shown");
                                                }, 1e3);
                                        }, 200 * o);
                                },
                                { accX: 0, accY: 0 }
                            );
                        }, 50);
                    });
                });
        }
        function i() {
            var t = e(".edgtf-portfolio-list-holder.edgtf-parallax-on-scroll");
            e("html").hasClass("no-touch") &&
                (t.each(function () {
                    e(this).each(function () {
                        var t = e(this),
                            a = (t.outerHeight(), t.find(".edgtf-pl-item"));
                        a.height(), a.attr("data-parallax", '{"y":-60, "smoothness":20}');
                    });
                }),
                setTimeout(function () {
                    ParallaxScroll.init();
                }, 100));
        }
        function s() {
            var t = e(".edgtf-portfolio-list-holder.edgtf-pl-masonry");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.children(".edgtf-pl-inner");
                    r(t.find(".edgtf-pl-grid-sizer").width(), t),
                        a.isotope({ layoutMode: "packery", itemSelector: "article", percentPosition: !0, packery: { gutter: ".edgtf-pl-grid-gutter", columnWidth: ".edgtf-pl-grid-sizer" } }),
                        setTimeout(function () {
                            edgtf.modules.common.edgtfInitParallax();
                        }, 600),
                        a.css("opacity", "1");
                });
        }
        function r(e, t) {
            if (t.hasClass("edgtf-pl-images-fixed")) {
                var a = parseInt(t.find("article").css("padding-left")),
                    o = t.find(".edgtf-pl-masonry-default"),
                    d = t.find(".edgtf-pl-masonry-large-width"),
                    n = t.find(".edgtf-pl-masonry-large-height"),
                    i = t.find(".edgtf-pl-masonry-large-width-height");
                edgtf.windowWidth > 680
                    ? (o.css("height", e - 2 * a), n.css("height", Math.round(2 * e) - 2 * a), i.css("height", Math.round(2 * e) - 2 * a), d.css("height", e - 2 * a))
                    : (o.css("height", e), n.css("height", e), i.css("height", e), d.css("height", Math.round(e / 2)));
            }
        }
        function l() {
            var t = e(".edgtf-portfolio-list-holder .edgtf-pl-filter-holder");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.closest(".edgtf-portfolio-list-holder"),
                        o = a.find(".edgtf-pl-inner"),
                        d = !!a.hasClass("edgtf-pl-pag-load-more"),
                        n = !1;
                    t.find(".edgtf-pl-filter:first").addClass("edgtf-pl-current"),
                        a.hasClass("edgtf-pl-gallery") && o.isotope(),
                        t.find(".edgtf-pl-filter").on("click", function () {
                            var i = e(this),
                                s = i.attr("data-filter"),
                                r = s.length ? s.substring(1) : "",
                                l = !!o.children().hasClass(r);
                            a.hasClass("edgtf-pl-has-animation") && !n && (a.find("article").addClass("edgtf-item-show edgtf-item-shown"), (n = !0)),
                                i.parent().children(".edgtf-pl-filter").removeClass("edgtf-pl-current"),
                                i.addClass("edgtf-pl-current"),
                                d && !l ? f(a, s, r) : (t.parent().children(".edgtf-pl-inner").isotope({ filter: s }), edgtf.modules.common.edgtfInitParallax());
                        });
                });
        }
        function f(t, a, o) {
            var d = t,
                s = d.find(".edgtf-pl-inner"),
                l = a,
                g = o,
                c = 0;
            void 0 !== d.data("max-num-pages") && !1 !== d.data("max-num-pages") && (c = d.data("max-num-pages"));
            var u = edgtf.modules.common.getLoadMoreData(d),
                h = u.nextPage,
                p = edgtf.modules.common.setLoadMoreAjaxData(u, "edgtf_core_portfolio_ajax_load_more"),
                m = d.find(".edgtf-pl-loading");
            h <= c &&
                (m.addClass("edgtf-showing edgtf-filter-trigger"),
                s.css("opacity", "0"),
                e.ajax({
                    type: "POST",
                    data: p,
                    url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                    success: function (t) {
                        h++, d.data("next-page", h);
                        var a = e.parseJSON(t),
                            o = a.html;
                        d.waitForImages(function () {
                            s.append(o).isotope("reloadItems").isotope({ sortBy: "original-order" }),
                                !s.children().hasClass(g)
                                    ? (m.removeClass("edgtf-showing edgtf-filter-trigger"), f(d, l, g))
                                    : setTimeout(function () {
                                          r(s.find(".edgtf-pl-grid-sizer").width(), d),
                                              s.isotope("layout").isotope({ filter: l }),
                                              m.removeClass("edgtf-showing edgtf-filter-trigger"),
                                              setTimeout(function () {
                                                  s.css("opacity", "1"), n(), i(), edgtf.modules.common.edgtfInitParallax();
                                              }, 150);
                                      }, 400);
                        });
                    },
                }));
        }
        function g() {
            var t = e(".edgtf-portfolio-list-holder"),
                a = function (t) {
                    var a = t.find(".edgtf-pl-standard-pagination li");
                    a.length &&
                        a.each(function () {
                            var a = e(this).children("a"),
                                o = 1;
                            a.on("click", function (e) {
                                e.preventDefault(), e.stopPropagation(), void 0 !== a.data("paged") && !1 !== a.data("paged") && (o = a.data("paged")), s(t, o);
                            });
                        });
                },
                o = function (e) {
                    var t = e.find(".edgtf-pl-load-more a");
                    t.css("visibility", "visible"),
                        t.on("click", function (t) {
                            t.preventDefault(), t.stopPropagation(), s(e);
                        });
                },
                d = function (e) {
                    var t = e.outerHeight(),
                        a = e.offset().top,
                        o = t + a - edgtfGlobalVars.vars.edgtfAddForAdminBar;
                    !e.hasClass("edgtf-pl-infinite-scroll-started") && edgtf.scroll + edgtf.windowHeight > o && s(e);
                },
                s = function (t, a) {
                    var o,
                        d,
                        n = t.find(".edgtf-pl-inner");
                    void 0 !== t.data("max-num-pages") && !1 !== t.data("max-num-pages") && (d = t.data("max-num-pages")),
                        t.hasClass("edgtf-pl-pag-standard") && t.data("next-page", a),
                        t.hasClass("edgtf-pl-pag-infinite-scroll") && t.addClass("edgtf-pl-infinite-scroll-started");
                    var i = edgtf.modules.common.getLoadMoreData(t),
                        s = t.find(".edgtf-pl-loading");
                    if ((o = i.nextPage) <= d) {
                        t.hasClass("edgtf-pl-pag-standard") ? (s.addClass("edgtf-showing edgtf-standard-pag-trigger"), t.addClass("edgtf-pl-pag-standard-animate")) : s.addClass("edgtf-showing");
                        var r = edgtf.modules.common.setLoadMoreAjaxData(i, "edgtf_core_portfolio_ajax_load_more");
                        t.find(".edgtf-btn .edgtf-btn-text").text(edgtfGlobalVars.vars.edgtfLoadingMessage),
                            e.ajax({
                                type: "POST",
                                data: r,
                                url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                                success: function (a) {
                                    t.hasClass("edgtf-pl-pag-standard") || o++,
                                        t.data("next-page", o),
                                        setTimeout(function () {
                                            t.find(".edgtf-btn .edgtf-btn-text").text(edgtfGlobalVars.vars.edgtfLoadingDefaultText);
                                        }, 100);
                                    var i = e.parseJSON(a),
                                        r = i.html;
                                    t.hasClass("edgtf-pl-pag-standard")
                                        ? (l(t, d, o),
                                          t.waitForImages(function () {
                                              t.hasClass("edgtf-pl-masonry") ? f(t, n, s, r) : t.hasClass("edgtf-pl-gallery") && t.hasClass("edgtf-pl-has-filter") ? f(t, n, s, r) : g(t, n, s, r);
                                          }))
                                        : t.waitForImages(function () {
                                              t.hasClass("edgtf-pl-masonry") ? c(t, n, s, r) : t.hasClass("edgtf-pl-gallery") && t.hasClass("edgtf-pl-has-filter") ? c(t, n, s, r) : u(n, s, r);
                                          }),
                                        t.hasClass("edgtf-pl-infinite-scroll-started") && t.removeClass("edgtf-pl-infinite-scroll-started"),
                                        o === d + 1 && t.find(".edgtf-pl-load-more-holder").hide();
                                },
                            });
                    }
                },
                l = function (e, t, a) {
                    var o = e.find(".edgtf-pl-standard-pagination"),
                        d = o.find("li.edgtf-pl-pag-number"),
                        n = o.find("li.edgtf-pl-pag-prev a"),
                        i = o.find("li.edgtf-pl-pag-next a");
                    d.removeClass("edgtf-pl-pag-active"),
                        d.eq(a - 1).addClass("edgtf-pl-pag-active"),
                        n.data("paged", a - 1),
                        i.data("paged", a + 1),
                        a > 1 ? n.css({ opacity: "1" }) : n.css({ opacity: "0" }),
                        a === t ? i.css({ opacity: "0" }) : i.css({ opacity: "1" });
                },
                f = function (e, t, a, o) {
                    t.find("article").remove(),
                        t.append(o),
                        r(t.find(".edgtf-pl-grid-sizer").width(), e),
                        t.isotope("reloadItems").isotope({ sortBy: "original-order" }),
                        a.removeClass("edgtf-showing edgtf-standard-pag-trigger"),
                        e.removeClass("edgtf-pl-pag-standard-animate"),
                        setTimeout(function () {
                            t.isotope("layout"), n(), i(), edgtf.modules.common.edgtfInitParallax();
                        }, 600);
                },
                g = function (e, t, a, o) {
                    a.removeClass("edgtf-showing edgtf-standard-pag-trigger"), e.removeClass("edgtf-pl-pag-standard-animate"), t.html(o), n(), i(), edgtf.modules.common.edgtfInitParallax();
                },
                c = function (e, t, a, o) {
                    t.append(o),
                        r(t.find(".edgtf-pl-grid-sizer").width(), e),
                        t.isotope("reloadItems").isotope({ sortBy: "original-order" }),
                        a.removeClass("edgtf-showing"),
                        setTimeout(function () {
                            t.isotope("layout"), n(), i(), edgtf.modules.common.edgtfInitParallax();
                        }, 600);
                },
                u = function (e, t, a) {
                    t.removeClass("edgtf-showing"), e.append(a), n(), i(), edgtf.modules.common.edgtfInitParallax();
                };
            return {
                init: function () {
                    t.length &&
                        t.each(function () {
                            var t = e(this);
                            t.hasClass("edgtf-pl-pag-standard") && a(t), t.hasClass("edgtf-pl-pag-load-more") && o(t), t.hasClass("edgtf-pl-pag-infinite-scroll") && d(t);
                        });
                },
                scroll: function () {
                    t.length &&
                        t.each(function () {
                            var t = e(this);
                            t.hasClass("edgtf-pl-pag-infinite-scroll") && d(t);
                        });
                },
            };
        }
        function c() {
            var t = e(".edgtf-portfolio-single-holder .edgtf-ps-masonry-images"),
                a = t.children();
            a.length && (a.isotope({ layoutMode: "packery", itemSelector: ".edgtf-ps-image", percentPosition: !0, packery: { gutter: ".edgtf-ps-grid-gutter", columnWidth: ".edgtf-ps-grid-sizer" } }), a.css("opacity", "1"));
        }
        var u = {};
        (edgtf.modules.portfolio = u), (u.edgtfOnDocumentReady = t), (u.edgtfOnWindowLoad = a), (u.edgtfOnWindowResize = o), (u.edgtfOnWindowScroll = d), e(document).ready(t), e(window).load(a), e(window).resize(o), e(window).scroll(d);
        var h = function () {
                var t = e(".edgtf-follow-portfolio-info .edgtf-portfolio-single-holder .edgtf-ps-info-sticky-holder");
                if (t.length)
                    var a = t.parent(),
                        o = a.offset().top,
                        d = a.height(),
                        n = e(".edgtf-ps-image-holder"),
                        i = n.height(),
                        s = e(".header-appear, .edgtf-fixed-wrapper"),
                        r = s.length ? s.height() : 0;
                var l = function () {
                        if (t.length && i > d && edgtf.scroll > o) {
                            var e = edgtf.scroll - o + edgtfGlobalVars.vars.edgtfAddForAdminBar + r;
                            e + d > i && (e = i - d), t.stop().animate({ marginTop: e });
                        }
                    },
                    f = function () {
                        t.length &&
                            i > d &&
                            (edgtf.scroll > o
                                ? edgtf.scroll + r + edgtfGlobalVars.vars.edgtfAddForAdminBar + d + 50 < o + i
                                    ? (e(".header-appear, .edgtf-fixed-wrapper").length && (r = e(".header-appear, .edgtf-fixed-wrapper").height()),
                                      t.stop().animate({ marginTop: edgtf.scroll - o + edgtfGlobalVars.vars.edgtfAddForAdminBar + r }),
                                      (r = 0))
                                    : t.stop().animate({ marginTop: i - d })
                                : t.stop().animate({ marginTop: 0 }));
                    };
                return {
                    init: function () {
                        l(),
                            e(window).scroll(function () {
                                f();
                            });
                    },
                };
            },
            p = function () {
                var t = e(".edgtf-full-screen-slider-holder"),
                    a = e(".edgtf-wrapper .edgtf-content"),
                    o = e(".edgtf-ps-full-screen-slider-layout"),
                    d = function () {
                        if (t.length) {
                            var e = parseInt(a.css("margin-top")),
                                d = t.find(".edgtf-ps-single-media"),
                                n = edgtf.windowHeight - edgtfPerPageVars.vars.edgtfPaspartuSize;
                            edgtf.windowWidth > 1024 ? e >= 0 && (n -= edgtfGlobalVars.vars.edgtfMenuAreaHeight) : (n = edgtf.windowHeight - edgtfGlobalVars.vars.edgtfMobileHeaderHeight),
                                o.css("height", n),
                                t.css("height", n),
                                d.css("height", n);
                        }
                    },
                    n = function () {
                        if (t.length) {
                            var a = e(".edgtf-ps-slider-content"),
                                o = e(".edgtf-control.edgtf-close"),
                                d = e(".edgtf-description"),
                                n = e(".edgtf-ps-slider-content-info");
                            a.on("click", function (t) {
                                t.preventDefault(),
                                    a.hasClass("opened") ||
                                        d.fadeOut(400, function () {
                                            a.addClass("opened"),
                                                setTimeout(function () {
                                                    n.fadeIn(400);
                                                }, 400),
                                                setTimeout(function () {
                                                    e(".edgtf-ps-slider-content-info").niceScroll({
                                                        scrollspeed: 60,
                                                        mousescrollstep: 40,
                                                        cursorwidth: 0,
                                                        cursorborder: 0,
                                                        cursorborderradius: 0,
                                                        cursorcolor: "transparent",
                                                        autohidemode: !1,
                                                        horizrailenabled: !1,
                                                    });
                                                }, 800);
                                        });
                            }),
                                o.on("click", function (e) {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        n.fadeOut(400, function () {
                                            a.removeClass("opened"),
                                                setTimeout(function () {
                                                    d.fadeIn(400);
                                                }, 400);
                                        });
                                });
                        }
                    };
                return {
                    init: function () {
                        d(),
                            n(),
                            e(window).resize(function () {
                                d();
                            });
                    },
                };
            };
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            s(), r(), g().init(), l();
        }
        function a() {
            n(), i().init();
        }
        function o() {}
        function d() {
            i().scroll();
        }
        function n() {
            var t = e(".edgtf-gallery-list-holder.edgtf-pgl-has-animation");
            t.length &&
                t.each(function () {
                    e(this)
                        .children(".edgtf-pgl-inner")
                        .children("article")
                        .each(function (t) {
                            var a = e(this);
                            a.appear(
                                function () {
                                    a.addClass("edgtf-item-show"),
                                        setTimeout(function () {
                                            a.addClass("edgtf-item-shown");
                                        }, 1e3);
                                },
                                { accX: 0, accY: 0 }
                            );
                        });
                });
        }
        function i() {
            var t = e(".edgtf-proofing-gallery-list-holder"),
                a = function (t) {
                    var a = t.find(".edgtf-pgl-standard-pagination li");
                    a.length &&
                        a.each(function () {
                            var a = e(this).children("a"),
                                o = 1;
                            a.on("click", function (e) {
                                e.preventDefault(), e.stopPropagation(), void 0 !== a.data("paged") && !1 !== a.data("paged") && (o = a.data("paged")), i(t, o);
                            });
                        });
                },
                o = function (e) {
                    e.find(".edgtf-pgl-load-more a").on("click", function (t) {
                        t.preventDefault(), t.stopPropagation(), i(e);
                    });
                },
                d = function (e) {
                    var t = e.outerHeight(),
                        a = e.offset().top,
                        o = t + a - edgtfGlobalVars.vars.edgtfAddForAdminBar;
                    !e.hasClass("edgtf-pgl-infinite-scroll-started") && edgtf.scroll + edgtf.windowHeight > o && i(e);
                },
                i = function (t, a) {
                    var o,
                        d,
                        n = t.find(".edgtf-pgl-inner");
                    void 0 !== t.data("max-num-pages") && !1 !== t.data("max-num-pages") && (d = t.data("max-num-pages")),
                        t.hasClass("edgtf-pgl-pag-standard") && t.data("next-page", a),
                        t.hasClass("edgtf-pgl-pag-infinite-scroll") && t.addClass("edgtf-pgl-infinite-scroll-started");
                    var i = edgtf.modules.common.getLoadMoreData(t),
                        c = t.find(".edgtf-pgl-loading");
                    if ((o = i.nextPage) <= d) {
                        t.hasClass("edgtf-pgl-pag-standard") ? (c.addClass("edgtf-showing edgtf-standard-pag-trigger"), t.addClass("edgtf-pgl-pag-standard-animate")) : c.addClass("edgtf-showing");
                        var u = edgtf.modules.common.setLoadMoreAjaxData(i, "edgtf_core_proofing_gallery_ajax_load_more");
                        e.ajax({
                            type: "POST",
                            data: u,
                            url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                            success: function (a) {
                                t.hasClass("edgtf-pgl-pag-standard") || o++, t.data("next-page", o);
                                var i = e.parseJSON(a),
                                    u = i.html;
                                t.hasClass("edgtf-pgl-pag-standard")
                                    ? (s(t, d, o),
                                      t.waitForImages(function () {
                                          t.hasClass("edgtf-pgl-masonry") ? r(t, n, c, u) : t.hasClass("edgtf-pgl-gallery") && t.hasClass("edgtf-pgl-has-filter") ? r(t, n, c, u) : l(t, n, c, u);
                                      }))
                                    : t.waitForImages(function () {
                                          t.hasClass("edgtf-pgl-masonry") ? f(n, c, u) : t.hasClass("edgtf-pgl-gallery") && t.hasClass("edgtf-pgl-has-filter") ? f(n, c, u) : g(n, c, u);
                                      }),
                                    t.hasClass("edgtf-pgl-infinite-scroll-started") && t.removeClass("edgtf-pgl-infinite-scroll-started");
                            },
                        });
                    }
                    o === d && t.find(".edgtf-pgl-load-more-holder").hide();
                },
                s = function (e, t, a) {
                    var o = e.find(".edgtf-pgl-standard-pagination"),
                        d = o.find("li.edgtf-pgl-pag-number"),
                        n = o.find("li.edgtf-pgl-pag-prev a"),
                        i = o.find("li.edgtf-pgl-pag-next a");
                    d.removeClass("edgtf-pgl-pag-active"),
                        d.eq(a - 1).addClass("edgtf-pgl-pag-active"),
                        n.data("paged", a - 1),
                        i.data("paged", a + 1),
                        a > 1 ? n.css({ opacity: "1" }) : n.css({ opacity: "0" }),
                        a === t ? i.css({ opacity: "0" }) : i.css({ opacity: "1" });
                },
                r = function (e, t, a, o) {
                    t.html(o).isotope("reloadItems").isotope({ sortBy: "original-order" }),
                        a.removeClass("edgtf-showing edgtf-standard-pag-trigger"),
                        e.removeClass("edgtf-pgl-pag-standard-animate"),
                        setTimeout(function () {
                            t.isotope("layout"), n();
                        }, 400);
                },
                l = function (e, t, a, o) {
                    a.removeClass("edgtf-showing edgtf-standard-pag-trigger"), e.removeClass("edgtf-pgl-pag-standard-animate"), t.html(o), n();
                },
                f = function (e, t, a) {
                    e.append(a).isotope("reloadItems").isotope({ sortBy: "original-order" }),
                        t.removeClass("edgtf-showing"),
                        setTimeout(function () {
                            e.isotope("layout"), n();
                        }, 400);
                },
                g = function (e, t, a) {
                    t.removeClass("edgtf-showing"), e.append(a), n();
                };
            return {
                init: function () {
                    t.length &&
                        t.each(function () {
                            var t = e(this);
                            t.hasClass("edgtf-pgl-pag-standard") && a(t), t.hasClass("edgtf-pgl-pag-load-more") && o(t), t.hasClass("edgtf-pgl-pag-infinite-scroll") && d(t);
                        });
                },
                scroll: function () {
                    t.length &&
                        t.each(function () {
                            var t = e(this);
                            t.hasClass("edgtf-pgl-pag-infinite-scroll") && d(t);
                        });
                },
            };
        }
        function s() {
            var t = e(".edgtf-proofing-gallery-single-holder .edgtf-pgs-gallery-filter-holder");
            t.length &&
                t.each(function () {
                    var t = e(this),
                        a = t.closest(".edgtf-pgs-gallery-holder");
                    a.find(".edgtf-pgs-gallery-inner");
                    t.find(".edgtf-pgs-gallery-filter:first").addClass("edgtf-pgs-filter-current"),
                        t.find(".edgtf-pgs-gallery-filter").on("click", function () {
                            var a = e(this),
                                o = a.attr("data-filter");
                            a.parent().children(".edgtf-pgs-gallery-filter").removeClass("edgtf-pgs-filter-current"), a.addClass("edgtf-pgs-filter-current"), t.parent().children(".edgtf-pgs-gallery-inner").isotope({ filter: o });
                        });
                });
        }
        function r() {
            var t = e(".edgtf-proofing-gallery-single-holder .edgtf-pgs-gallery-masonry"),
                a = t.children();
            a.length &&
                a.waitForImages(function () {
                    a.isotope({ layoutMode: "packery", itemSelector: ".edgtf-pgs-gallery-image", percentPosition: !0, packery: { gutter: ".edgtf-pgs-grid-gutter", columnWidth: ".edgtf-pgs-grid-sizer" } }), a.css("opacity", "1");
                });
        }
        function l() {
            var t = e(".edgtf-password-protected-holder");
            if (t.hasClass("edgtf-password-protected-full-height")) {
                var a = edgtf.windowWidth <= 1024 ? edgtfGlobalVars.vars.edgtfMobileHeaderHeight + e(".edgtf-top-bar").height() : 0,
                    o = edgtf.windowWidth > 1024 ? edgtf.passepartout : 0,
                    d = a + o;
                !edgtf.body.hasClass("edgtf-header-transparent") && edgtf.windowWidth > 1024 && (d = Number(d) + Number(edgtfGlobalVars.vars.edgtfMenuAreaHeight) + Number(edgtfGlobalVars.vars.edgtfLogoAreaHeight)),
                    t.css({ height: edgtf.windowHeight - d + "px" });
            }
        }
        var f = {};
        (edgtf.modules.gallery = f), (f.edgtfOnDocumentReady = t), (f.edgtfOnWindowLoad = a), (f.edgtfOnWindowResize = o), (f.edgtfOnWindowScroll = d), e(document).ready(t), e(window).load(a), e(window).resize(o), e(window).scroll(d);
        var g = (edgtf.modules.gallery.edgtfProofingGalleryApproving = function () {
            var t = e(".edgtf-pgs-gallery-holder"),
                a = function (t) {
                    t.find(".edgtf-pgs-gallery-image").each(function () {
                        var t = e(this),
                            a = t.find(".edgtf-pgs-image-action-icon");
                        a.on("click", function () {
                            a.addClass("edgtf-blink");
                            var o = { action: "edgtf_core_proofing_gallery_approving", gallery_id: t.data("gallery-id"), image_id: t.data("image-id") };
                            e.ajax({
                                type: "POST",
                                data: o,
                                url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                                success: function (e) {
                                    a.removeClass("edgtf-blink");
                                    var o = JSON.parse(e);
                                    "success" == o.status &&
                                        ("approved" == o.data.image_status
                                            ? (t.removeClass("proofing-gallery-image-rejected"), t.addClass("proofing-gallery-image-approved"))
                                            : (t.removeClass("proofing-gallery-image-approved"), t.addClass("proofing-gallery-image-rejected")));
                                },
                            });
                        });
                    });
                };
            return {
                init: function () {
                    t.length &&
                        t.each(function () {
                            a(e(this));
                        });
                },
            };
        });
    })(jQuery);
