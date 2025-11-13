$(document).ready(function () {
  $(".hamburger_1").click(function () {
    $(this).toggleClass("active");
  });

  $(".hamburger_2").click(function () {
    $(this).toggleClass("active");
  });

  $(".circle_ani_btn").click(function () {
    $(".circle_ani_mold").toggleClass("active");
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
  $(".notify").click(function () {
    $(this).toggleClass("active");
  });
  $(".follow_btn").click(function () {
    $(this).toggleClass("active");
  });
});

// 변수 0

// 클릭하면 회전한다

// 로테이트0이다

// 클릭할때마다 +36deg
// 한번클릭하면 36도 돈다
