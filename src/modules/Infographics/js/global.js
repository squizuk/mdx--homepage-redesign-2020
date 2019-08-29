// slider
$slick_slider = $('.infographics__list');
settings_slider = {
  infinite: true,
  dots: true,
  arrows: false
  // more settings
}
slick_on_mobile( $slick_slider, settings_slider);

// slick on mobile
function slick_on_mobile(slider, settings){
  $(window).on('load resize', function() {
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