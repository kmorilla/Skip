$(document).ready(function () {
    $('.event-icon').click(function () {
        $('.popup-text').fadeIn(100);
    });

    $(document).click(function (event) {
        if (!$(event.target).closest(".event-icon").length) {
            $(".popup-text").fadeOut(100);
        }
    });

    $('.popup-text').click(function () {
        $(this).closest('.appointment').remove();
    });

    if (!$('#appointments').find('.appointment')) {
        $('.schedule-today').show();
    }

    console.log($('#appointments').find('.appointment'));

});