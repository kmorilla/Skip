$(document).ready(function () {
    $(".time-slot").click(function () {
        $(".time-slot").css({ "background-color": "#fff", "color": "#292F36" });
        $(this).css({ "background-color": "#08C188", "color": "#fff" });
    });

    $(".vehicle").click(function () {
        $(".vehicle").css({ "background-color": "#fff", "color": "#292F36", "border": "1px solid #292F36" });
        $(this).css({ "background-color": "#08C188", "color": "#fff", "border": "#08C188" });
    });

    $(".address").click(function () {
        $(".address").css({ "background-color": "#fff", "color": "#292F36", "border": "1px solid #292F36" });
        $(this).css({ "background-color": "#08C188", "color": "#fff", "border": "#08C188" });

    });
});