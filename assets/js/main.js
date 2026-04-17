!(function ($) {
  "use strict";
  $(window).on('load', function () {
    const preloader = $('#preloader');
    if (preloader.length) preloader.delay(100).fadeOut('slow', function () { $(this).remove(); });
  });
  if ($('.typed').length) {
    let typed_strings = $(".typed").data('typed-items').split(',');
    new Typed('.typed', { strings: typed_strings, loop: true, typeSpeed: 100, backSpeed: 50, backDelay: 2000 });
  }
  $(document).on('click', '.nav-menu a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      const target = $(this.hash); if (target.length) {{e.preventDefault();
        const scrollto = target.offset().top;
        $('html, body').animate({ scrollTop: scrollto }, 800, 'easeInOutExpo');
        if ($(this).parents('.nav-menu, .mobile-nav').length) {{$('.nav-menu .active, .mobile-nav .active').removeClass('active'); $(this).closest('li').addClass('active');}}
        const body = $('body'); if (body.hasClass('mobile-nav-active')) {{body.removeClass('mobile-nav-active'); $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');}}
        return false;}}
    }
  });
  $(document).on('click', '.mobile-nav-toggle', function () { $('body').toggleClass('mobile-nav-active'); $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x'); });
  $(document).click(function (e) { const c = $(".mobile-nav-toggle"), b = $('body'); if (!c.is(e.target) && c.has(e.target).length === 0 && b.hasClass('mobile-nav-active')) { b.removeClass('mobile-nav-active'); $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x'); }});
  $(window).scroll(function () { if ($(this).scrollTop() > 100) $('.back-to-top').fadeIn('slow'); else $('.back-to-top').fadeOut('slow'); });
  $('.back-to-top').click(function () { $('html, body').animate({ scrollTop: 0 }, 800, 'easeInOutExpo'); return false; });
  function aos_init() { AOS.init({ duration: 800, once: true }); } $(window).on('load', function () { aos_init(); });
})(jQuery);
