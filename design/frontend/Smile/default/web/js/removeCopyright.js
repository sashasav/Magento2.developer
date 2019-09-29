define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget( "Smile.removeCopyright", {
        _create: function() {
            // var progress = this.options.value + "%";
            // this.element
            //     .addClass( "progressbar" )
            //     .text( progress );
            console.log('test');
            var element = $(this.element);

            element.on('click', function() {
                $(this).remove();
            });
        }
    });
    
    return $.Smile.removeCopyright;
    
});