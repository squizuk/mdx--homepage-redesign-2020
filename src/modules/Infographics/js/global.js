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


function getRotationDegrees(obj) {
  var matrix = obj.css("-webkit-transform") ||
  obj.css("-moz-transform")    ||
  obj.css("-ms-transform")     ||
  obj.css("-o-transform")      ||
  obj.css("transform");
  if(matrix !== 'none') {
      var values = matrix.split('(')[1].split(')')[0].split(',');
      var a = values[0];
      var b = values[1];
      var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
  } else { var angle = 0; }
  return (angle < 0) ? angle + 360 : angle;
}

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
  var rotation = getRotationDegrees(this.el);
  var transform = 'translateY(' + -(scrollTop / this.speed) + 'px) rotate(' + rotation + 'deg)';
    this.el.css('transform', transform);
};

$(function () {
  $('[data-scroll-speed]').moveIt();
});


