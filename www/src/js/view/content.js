var Vue = require('vue');
var $ = require('jquery');
var firstScreenView = require('./firstScreen.js');

var contentView = new Vue({
    el: '#content',
    methods: {
        show: function() {
            TweenMax.set(this.$el, {autoAlpha: 0, className: "-=hidden"});
            TweenMax.to(this.$el, 1, {autoAlpha: 1, x: '0%', className: "+=_show"});
        }
    }
});

$(window).on('wheel.contentView.show', function() {
    $(window).off('wheel.contentView.show')
    contentView.show();
    firstScreenView.showContent();
});

