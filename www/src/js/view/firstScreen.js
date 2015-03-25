var Vue = require('vue');

var firstScreenView = new Vue({
    el: '#first-screen',
    methods: {
        showContent: function() {
            TweenMax.set(this.$el, {className: "+=_show-content"});
        }
    }
});

module.exports = firstScreenView;
