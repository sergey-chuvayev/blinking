(function ( $ ) {

    $.fn.blinking = function (options){

        var settings = $.extend({
            speed: 300,
            background: true
        }, options );

        var element = this;
        setInterval(function () {
            element.css('color',getRandomColor());
            if (settings.background) {
                element.css('background',getRandomColor());
            };
        },settings.speed);

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    }

}( jQuery ));