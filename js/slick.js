$(function () {
  $(".t-b-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".t-b-reviews-list-left",
    nextArrow: ".t-b-reviews-list-right",
  });
});
