// slider
$slick_slider = $('.infographics__list');
settings_slider = {
  infinite: true,
  dots: true,
  arrows: false
  // more settings
}
slick_on_mobile($slick_slider, settings_slider);

// slick on mobile
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


// Scroll animation

$.fn.moveIt = function () {
  var $window = $(window);
  var instances = [];

  $(this).each(function () {
    instances.push(new moveItItem($(this)));
  });

  window.addEventListener('scroll', function () {
    var scrollTop = $window.scrollTop();
    instances.forEach(function (inst) {
      inst.update(scrollTop);
    });
  }, { passive: true });
}

var moveItItem = function (el) {
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function (scrollTop) {
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

$(function () {
  $('[data-scroll-speed]').moveIt();
});


