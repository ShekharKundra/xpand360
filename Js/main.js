try {
    function setAriaLabels(e) {
        var t = e.target,
            a = $(t).find(".owl-prev"),
            o = $(t).find(".owl-next");
        a.attr("aria-label", "Previous"), o.attr("aria-label", "Next"), a.removeAttr("role"), o.removeAttr("role")
    }
    $(document).ready((function() { $(".dropnav > a").on("click", (function(e) { e.preventDefault(), $(this).parent().toggleClass("active") })) })), $(".nav-toggle").click((function() { $(this).toggleClass("on"), $("nav").slideToggle() })), $(window).scroll((function() { $(window).scrollTop() >= 300 ? $(".bottom-header").addClass("fixed-header") : $(".bottom-header").removeClass("fixed-header") })), $("#hero-slider").owlCarousel({ items: 1, loop: !0, margin: 0, autoplay: !0, autoplayTimeout: 5e3, autoplayHoverPause: !0, onInitialized: setAriaLabels }), $(".parthnamerlogo").owlCarousel({ loop: !0, margin: 0, dot: !1, nav: !1, autoplay: !0, autoplayTimeout: 5e3, autoplayHoverPause: !0, onInitialized: setAriaLabels, responsive: { 0: { items: 4 }, 600: { items: 5 }, 1e3: { items: 8 } } }), $("#testomonial_Slider").owlCarousel({ loop: !0, margin: 15, dot: !1, nav: !1, autoplay: !0, autoplayTimeout: 5e3, autoplayHoverPause: !0, onInitialized: setAriaLabels, responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 4 } } }), $(".count").each((function() { $(this).prop("Counter", 0).animate({ Counter: $(this).text() }, { duration: 8e3, easing: "swing", step: function(e) { $(this).text(Math.ceil(e)) } }) }))
} catch (e) {}