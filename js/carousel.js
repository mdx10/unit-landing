$(document).ready(function () {
  const owl = $('#slider');

  owl.owlCarousel({
    items: 1,
    loop: true,
  });

  const prev = $('#slider-prev');
  const next = $('#slider-next');

  prev.click(function () {
    owl.trigger('prev.owl.carousel');
  });

  next.click(function () {
    owl.trigger('next.owl.carousel');
  });
});
