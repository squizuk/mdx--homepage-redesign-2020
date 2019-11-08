import { debounce } from 'lodash';

const moveItItem = function (el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function (scrollTop) {
    var top = this.el.offset().top;
    var distance = top - scrollTop;
    var transform = 'translateY(' + (distance / this.speed) + 'px)';
    this.el.css('transform', transform);
};

$.fn.isOnScreen = function () {
    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

$.fn.moveIt = function () {
    var $window = $(window);
    var instances = [];

    $(this).each(function () {
        instances.push(new moveItItem($(this)));
    });

    instances.forEach((inst) => {
        var scrollTop = $window.scrollTop();
        // inst.update(scrollTop);
    })

    window.addEventListener('scroll', function () {
        var scrollTop = $window.scrollTop();
        instances.forEach(function (inst) {
            if($(inst.el).isOnScreen()) {
                inst.update(scrollTop);
            }
        });
    }, { passive: true });
}

function slick_on_mobile(slider, settings) {
    $(window).on('load resize', function () {
        if ($(window).width() > 768) {
            if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
            }
            return
        }
        if (!slider.hasClass('slick-initialized')) {
            return slider.slick(settings);
        }
    });
};

const setAnimation = (target, options) => {
    const animate = (options) => {
        const animationTime = options.time ? `animation animation--time-${options.time}` : 'animation--time-medium';
        const animationClass = `animation animation--${options.name} ${animationTime}`;

        if (!$(target).hasClass(animationClass)) {
            $(target).addClass(animationClass);
        }
    }
    const debounceAnimation = debounce(() => {
        const isTargetOnScreen = $(target).isOnScreen();

        if (isTargetOnScreen) {
            animate(options);
        }
    }, 18);
    $(window).on('scroll', debounceAnimation);
    $(document).ready(() => {
        const isTargetOnScreen = $(target).isOnScreen();
        isTargetOnScreen && animate(options);
    })
}

const animateTargets = document.querySelectorAll('[data-animate]');

animateTargets.forEach((item) => {
    setAnimation(item, {
        name: $(item).data('animate'),
        time: $(item).data('animate-time') // short / medium / long
    });
})

$('[data-scroll-speed]').moveIt();

export { slick_on_mobile };
