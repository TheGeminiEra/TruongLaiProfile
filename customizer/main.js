! function (o) {
    "use strict";
    o(window).scroll(function () {
        o(this).scrollTop() > window.innerHeight / 1.5 ? o(".demo-tool").fadeIn("fast") : o(".demo-tool").fadeOut("fast")
    }), o(".demo-tool .tool-toggler").click(function () {
        o(".demo-tool").toggleClass("show")
    }), o(".demo-tool .tool-box .color-switcher li").on("click", function () {
        var t = o(this).data("path");
        o("#color-scheme").attr("href", t)
    })
}(jQuery);