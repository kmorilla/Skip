

$(document).ready(function () {
    $("#datepicker").datepicker({
        nextText: 'navigate_next',
        prevText: 'navigate_before',
    });

    $(".ui-icon").addClass("material-icons");

    $(".ui-datepicker-inline").on("click", function () {
        $(".ui-icon").addClass("material-icons");
    });

    $("a").on("click", function () {
        $(".ui-icon").addClass("material-icons");
    });
});