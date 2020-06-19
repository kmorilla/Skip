$(document).ready(function () {
    $('.signup-button').click(function () {
        if ($('input#zip').val() == '95683') {
            window.location.href = '../signup.html';
        } else {
            $('.signup-button').attr('data-toggle', 'modal');
            $('.signup-button').attr('data-target', '#sign-up-modal');
        }
    });
});