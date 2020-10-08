$(function () {
  $img = $(".top-img");
  changeImg = "changeImg";
  setInterval(function () {
    $img.toggleClass(changeImg);
  }, 3000);

  //topbtn
  $(".top-btn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});
//--------------------------------------------------------------------------------
//navの色付け
$(function () {
  var header = $(".header-nav");

  $(window).on("load scroll", function () {
    if ($(window).scrollTop() < $(".header").offset().top + 100) {
      header.removeClass("header-nav-default");
      $(".top-btn").addClass("section-top-message-color");
    } else {
      header.addClass("header-nav-default");
      $(".top-btn").removeClass("section-top-message-color");
    }
    if (
      $(".header").offset().top + 100 < $(window).scrollTop() &&
      $(window).scrollTop() < $(".profile").offset().top + 100
    ) {
      $(".profile-btn").addClass("section-top-message-color");
    } else {
      $(".profile-btn").removeClass("section-top-message-color");
    }
    if (
      $(".profile").offset().top + 100 < $(window).scrollTop() &&
      $(window).scrollTop() < $(".flow").offset().top + 100
    ) {
      $(".flow-btn").addClass("section-top-message-color");
    } else {
      $(".flow-btn").removeClass("section-top-message-color");
    }
    if (
      $(".flow").offset().top + 100 < $(window).scrollTop() &&
      $(window).scrollTop() < $(".service").offset().top + 100
    ) {
      $(".service-btn").addClass("section-top-message-color");
    } else {
      $(".service-btn").removeClass("section-top-message-color");
    }
    if (
      $(".service").offset().top + 100 < $(window).scrollTop() &&
      $(window).scrollTop() < $(".works").offset().top + 100
    ) {
      $(".works-btn").addClass("section-top-message-color");
    } else {
      $(".works-btn").removeClass("section-top-message-color");
    }
    if (
      $(".works").offset().top + 100 < $(window).scrollTop() &&
      $(window).scrollTop() < $(".contact").offset().top + 100
    ) {
      $(".contact-btn").addClass("section-top-message-color");
    } else {
      $(".contact-btn").removeClass("section-top-message-color");
    }

    $(".slider").slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
    });
  });

  //--------------------------------------------------------------------------------
  //ナビのスクロール
  // var height = $(".header").height();
  // if (window.matchMedia("(min-width:768px)").matches) {
  $(".top-btn").click(function () {
    var top = $(".header").offset().top;
    $("html, body").animate({ scrollTop: top }, 500);
  });
  $(".profile-btn").click(function () {
    var profile = $(".profile").offset().top;
    $("html, body").animate({ scrollTop: profile }, 500);
  });
  $(".flow-btn").click(function () {
    var flow = $(".flow").offset().top;
    $("html, body").animate({ scrollTop: flow }, 500);
  });
  $(".service-btn").click(function () {
    var service = $(".service").offset().top;
    $("html, body").animate({ scrollTop: service }, 500);
  });
  $(".works-btn").click(function () {
    var works = $(".works").offset().top;
    $("html, body").animate({ scrollTop: works }, 500);
  });
  $(".contact-btn").click(function () {
    var contact = $(".contact").offset().top;
    $("html, body").animate({ scrollTop: contact }, 500);
  });
  $(".button-text").click(function () {
    var profile = $(".profile").offset().top;
    $("html, body").animate({ scrollTop: profile }, 500);
  });
  // }
});
//--------------------------------------------------------------------------------
//スクロール時文字の線を引く
$(window).on("scroll", function () {
  var elem = $(".animation");
  var isAnimate = "animation-scroll";

  elem.each(function () {
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if (scrollPos > elemOffset - wh + wh / 4) {
      $(this).addClass(isAnimate);
    }
  });
});
