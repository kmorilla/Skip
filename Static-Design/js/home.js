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
        if ($('#appointments').find('div').hasClass('appointment')) {
            $('.schedule-today').hide();
        }
        else {
            $('.schedule-today').show();
        }
    });

    if ($('#appointments').find('div').hasClass('appointment')) {
        $('.schedule-today').hide();
    }
    else {
        $('.schedule-today').show();
    }

    var click = 1;

    $('.gas-icon').click(function () {
        var transparentPercent;
        var colorPercent;
        var fillUps;

        switch (click) {
            case 1:
                transparentPercent = 80;
                colorPercent = 20;
                fillUps = 4;
                break;
            case 2:
                transparentPercent = 60;
                colorPercent = 40;
                fillUps = 3;
                break;
            case 3:
                transparentPercent = 40;
                colorPercent = 40;
                fillUps = 2;
                break;
            case 4:
                transparentPercent = 20;
                colorPercent = 20;
                fillUps = 1;
                break;
            case 5:
                transparentPercent = 0;
                colorPercent = 0;
                fillUps = 0;
                break;
            default:
                click = 0
                transparentPercent = 100;
                colorPercent = 0;
                fillUps = 5;
                break;
        }

        $('.gas-icon').css({ 'background': 'linear-gradient( transparent ' + transparentPercent + '% ,' + '#08C188' + ' ' + colorPercent + '%' });

        $('#fill-ups').find('p>span').text(fillUps);

        click++;
    });


});


/* background: linear-gradient( transparent 60%, var(--accent-color) 40%); */
