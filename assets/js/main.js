// Header ve footer load işlemi
$(document).ready(function () {

    $(document).scroll(function () {
        if (window.scrollY >= 100) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");

        }
    });

    $("#faqs .faq-item .faq-title").click(function (e) {
        e.preventDefault();
        let contentHeight = $(this).next().prop("scrollHeight");

        if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active");
            $(this).next().css("max-height", 0);

        } else {
            $("#faqs .faq-item").removeClass("active");
            $("#faqs .faq-item .faq-content").css("max-height", 0);
            $(this).parent().addClass("active");
            $(this).next().css("max-height", contentHeight);
        }
    });

    // Transition kısmını engellemeye yarıyor.
    $("body").addClass("page-loaded");
});

//#####Swiper Örneği######



