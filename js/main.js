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
  $(".story_img")
    .not(".insta_profile .story_img")
    .click(function () {
      $(this).toggleClass("active");
    });
  $(".heart").click(function () {
    $(this).toggleClass("active");
  });
  $(".repost").click(function () {
    $(this).toggleClass("active");
  });
  $(".save").click(function () {
    $(this).toggleClass("active");
  });
});
