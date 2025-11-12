$(document).ready(function () {
  $(".hamburger_1").click(function () {
    $(this).toggleClass("active");
  });

  $(".hamburger_2").click(function () {
    $(this).toggleClass("active");
  });
  var swiper = new Swiper(".instaSwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
  $(".heart").click(function () {
    $(this).toggleClass("active");
  });
  $(".repost").click(function () {
    $(this).toggleClass("active");
  });
});
