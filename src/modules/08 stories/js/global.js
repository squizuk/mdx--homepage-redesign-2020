import { slick_on_mobile } from '../../01 Global/js/global';

(() => {
    // slider
    const $slick_slider = $('.stories__boxes');
    const settings_slider = {
        infinite: true,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
    }
    slick_on_mobile($slick_slider, settings_slider);
})();
