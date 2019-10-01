define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget( "Smile.qtyPlus", {
        _create: function() {
            // var progress = this.options.value + "%";
            // this.element
            //     .addClass( "progressbar" )
            //     .text( progress );
            var element = $(this.element);
            var qty = $('#qty');


            element.on('click', function() {
                var counter = qty.val();
                console.log('test PLUS');
                counter++;
                qty.val(counter);
                console.log(counter);
            });
        }
    });

    return $.Smile.qtyPlus;

});
