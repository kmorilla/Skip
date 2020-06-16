$(document).ready(function () {
    $(".accordion-button").click(function () {
        $(this).find(".load-more").text(($(this).find(".load-more").text() == 'Load More') ? 'Load Less' : 'Load More');
        $(this).find(".accordion-icon").text(($(this).find(".accordion-icon").text() == 'expand_more') ? 'expand_less' : 'expand_more');
    });
});