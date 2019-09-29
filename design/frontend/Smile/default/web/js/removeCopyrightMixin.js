define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    return function (widget) {

        $.widget('Smile.removeCopyright', widget, {
            _create: function () {
                console.log('Hello from rebuild');
            }
        });

        return $.Smile.removeCopyright;
    }

});