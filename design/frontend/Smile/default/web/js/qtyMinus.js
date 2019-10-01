define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget( "Smile.qtyMinus", {
        _create: function() {
            var element = $(this.element);
            var qty = $('#qty');

            element.on('click', function() {
                var counter = qty.val();
                console.log('test MINUS');
                counter--;
                qty.val(counter < 1 ? 0 : counter);
                console.log(counter);
            });
        }
    });

    return $.Smile.qtyMinus;

});
