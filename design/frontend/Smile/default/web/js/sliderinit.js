define([
    'jquery',
    'jquery/ui',
    'js/owl.carousel'
], function ($) {
    'use strict';

    $.widget('Smile.sliderinit',{
        _create: function () {
            var element = $(this.element);

            element.addClass('owl-carousel');

            element.owlCarousel(this.options);
        }
    });

    return $.Smile.sliderinit;

});
