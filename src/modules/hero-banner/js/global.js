$(function() {
    $('.hero-banner__arrow-down').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 120}, 800, 'linear');
    });
  });