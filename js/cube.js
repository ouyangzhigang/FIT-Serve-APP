var initcover = false;
(function($) {
    $.fn.cube = function(succFn) {

        document.addEventListener && document.addEventListener("touchmove", function(a) {
            a.preventDefault()
        });
        var index=1;
        var wh = $(window).height();

        var rotatePrevStyle = {
                'display': 'block',
                'z-index': '99',
                '-webkit-transition': '0s',
                '-webkit-transform': 'rotateX(90deg) translateZ(' + wh / 2 + 'px)'
            },
            rotateCurrentStyle = {
                'display': 'block',
                'z-index': '101',
                '-webkit-transition': '0s',
                '-webkit-transform': 'rotateX(0deg) translateZ(' + wh / 2 + 'px)'
            },
            rotateNextStyle = {
                'display': 'block',
                'z-index': '100',
                '-webkit-transition': '0s',
                '-webkit-transform': 'rotateX(-90deg) translateZ(' + wh / 2 + 'px)'
            },
            rotateOtherStyle = {
                'display': 'none',
                'z-index': '1',
                '-webkit-transition': '0s',
                '-webkit-transform': 'rotateX(-180deg) translateZ(' + wh / 2 + 'px)'
            };

        var wrapper = this,
            container = this.parent(),
            all = this.children(),
            current,
            next,
            prev,
            prevStyle = rotatePrevStyle,
            currentStyle = rotateCurrentStyle,
            nextStyle = rotateNextStyle,
            otherStyle = rotateOtherStyle,
            dragY = 0,
            isTurning = false,
            isTurned = false;

        var rotate = function(y) {
            if (y >= 0) {
                
                prev.css({
                    'display': 'block',
                    // 'z-index': '101',
                    '-webkit-transform': 'rotateX(' + 90 * (1 - y) + 'deg) translateZ(' + wh / 2 + 'px)'
                });
                current.css({
                    'display': 'block',
                    // 'z-index': '100',
                    '-webkit-transform': 'rotateX(' + 90 * (-y) + 'deg) translateZ(' + wh / 2 + 'px)'
                });
                next.hide();
            } else {
                
                prev.hide();
                current.css({
                    'display': 'block',
                    // 'z-index': '100',
                    '-webkit-transform': 'rotateX(' + 90 * (-y) + 'deg) translateZ(' + wh / 2 + 'px)'
                });
                next.css({
                    'display': 'block',
                    // 'z-index': '101',
                    '-webkit-transform': 'rotateX(' + 90 * (-1 - y) + 'deg) translateZ(' + wh / 2 + 'px)'
                });
            };
        };

        var setOrder = function() {

            current = $('.hover');
            if ($('.hover').next().length !== 0) {
                next = current.next();
                
            } else {
                next = all.first();
            };
            if ($('.hover').prev().length !== 0) {                
                prev = current.prev();
            } else {
                prev = all.last();
            };

            all.css(otherStyle);
            prev.css(prevStyle);
            current.css(currentStyle);
            next.css(nextStyle);

            isTurning = false;
            isTurned = false;
        };

        var turn = function(effect, y, transition) {
            

            if (transition) {
                all.css('transition', '0.4s');
            } else {
                all.css('transition', '0s');
            };
            effect(y);
        };

        var animate = function () {
            var content = $('.hover');

            content.find('.slide-right').addClass('slideRight');                         //页面特效

            var allow_display_time = parseInt(content.attr('anim-time')||1000);
            
            setTimeout(function(){
                content.parent().find('.allowdown').animate({'bottom':'0px'});
                var dom = content.find('[delay-class]');
                dom.addClass(dom.attr('delay-class'));                
            },allow_display_time);
        };

        var init = function() {
            container.css('-webkit-perspective', wh + 'px');
            wrapper.css('-webkit-perspective', wh + 'px');
            wrapper.css('-webkit-transform', 'translateZ(-' + wh + 'px)');
            all.first().addClass('hover');

            setOrder();

            $('.hover').find('.text-up').addClass('textUp');

            if(!initcover){
                initcover = true;
                animate();
                $('.hover').find('.fade-out-cover').addClass('fadeOutCover');
            }

            if(window.isCoverPage){return;}
            wrapper.hammer().on('swipeup swipedown dragup dragdown release', function(e) {
                dragY = e.gesture.deltaY / $(window).height();
                switch (e.type) {
                    case 'swipeup':
                        turn(rotate, -1, true);
                        break;
                    case 'swipedown':
                        turn(rotate, 1, true);
                        break;
                    case 'dragup':
                    case 'dragdown':
                        if (!isTurning) {
                            turn(rotate, dragY, false);
                        };
                        break;
                    case 'release':
                        isTurning = true;
                        if (dragY > 0.2) {
                            isTurned = true;
                            turn(rotate, 1, true);
                            current.removeClass('hover');
                            prev.addClass('hover');

                            index--;
                            if (index<1) {index=all.length};

                        } else if (dragY < -0.2) {

                            index++;
                            if (index>all.length) {index=1};
                            isTurned = true;
                            turn(rotate, -1, true);
                            current.removeClass('hover');
                            next.addClass('hover');
                        } else {
                            turn(rotate, 0, true);
                            isTurned = false;
                        };
                        break;
                };
            });

            wrapper.on('webkitTransitionEnd', function() {
                if (isTurned) {
                    setOrder();
                    animate();
                    succFn && succFn(index); 
                };
                isTurning = false;
                isTurned = false;
            });
        }();
    };
})(jQuery);