import { slick_on_mobile } from '../../01 Global/js/global';

(() => {
  // slider
  const $slick_slider = $('.events__boxes');
  const settings_slider = {
    infinite: true,
    dots: true,
    arrows: false
  }
  slick_on_mobile($slick_slider, settings_slider);
})();
