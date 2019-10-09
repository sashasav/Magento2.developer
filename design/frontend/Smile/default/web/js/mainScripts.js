define([
    'jquery',
    'select2',
    'owl',
    'domReady!'
], function ($) {
    $('.field.qty .control input').parent().prepend('<button class="btn-plus">+</button>').append('<button class="btn-minus">-</button>');

    $('.btn-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.btn-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
