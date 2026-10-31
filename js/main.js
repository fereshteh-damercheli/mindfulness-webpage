$("section.menu a").on("click", function () {
    let attr = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(attr).offset().top
    }, 500, 'linear')
})

