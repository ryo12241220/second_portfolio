  //ホームボタンを押すと一番上にもどる。
$(function () {

  // $img = $(".top-img");
  // changeImg = "changeImg";
  // setInterval(function () {
  //   $img.toggleClass(changeImg);
  // }, 3000);

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

   var headerNavi = $(".header-nav");
   var headerNaviHeignt =$(".header-nav").height();
  // var result = $(".result").offset().top;
  // var works = $(".works").offset().top;
  // var flow = $("flow").offset().top;
  //   if  (((works-result)/2 + result) <= $(window).scrollTop() &&
  //     $(window).scrollTop() < (works + (flow - works)/2)
  //   ) {
  //     $(".works-btn").addClass("section-top-message-color");
  //   } else {
  //     $(".works-btn").removeClass("section-top-message-color");
  //   }
  
  $(window).on("load scroll", function () {
    if ($(window).scrollTop() < $(".result").offset().top) {
      headerNavi.removeClass("header-nav-default");
    } else {
      headerNavi.addClass("header-nav-default");
    }
    if ($(window).scrollTop() < $(".result").offset().top - headerNaviHeignt){
      $(".top-btn").addClass("section-top-message-color");
    } else {
      $(".top-btn").removeClass("section-top-message-color");
    }
    if (
      $(".result").offset().top - headerNaviHeignt <= $(window).scrollTop() &&
      $(window).scrollTop() < $(".works").offset().top - headerNaviHeignt
    ) {
      $(".result-btn").addClass("section-top-message-color");
    } else {
      $(".result-btn").removeClass("section-top-message-color");
    }
    if (
      $(".works").offset().top - headerNaviHeignt <= $(window).scrollTop() &&
      $(window).scrollTop() < $(".flow").offset().top - headerNaviHeignt
    ) {
      $(".works-btn").addClass("section-top-message-color");
    } else {
      $(".works-btn").removeClass("section-top-message-color");
    }
    if (
      $(".flow").offset().top - headerNaviHeignt <= $(window).scrollTop() &&
      $(window).scrollTop() < $(".service").offset().top - headerNaviHeignt
    ) {
      $(".flow-btn").addClass("section-top-message-color");
    } else {
      $(".flow-btn").removeClass("section-top-message-color");
    }
    if (
      $(".service").offset().top - headerNaviHeignt <= $(window).scrollTop() &&
      $(window).scrollTop() < $(".profile").offset().top - headerNaviHeignt
    ) {
      $(".service-btn").addClass("section-top-message-color");
    } else {
      $(".service-btn").removeClass("section-top-message-color");
    }
    if (
      $(".profile").offset().top - headerNaviHeignt  <= $(window).scrollTop() &&
      $(window).scrollTop() < $(".contact").offset().top  - headerNaviHeignt
    ) {
      $(".profile-btn").addClass("section-top-message-color");
    } else {
      $(".profile-btn").removeClass("section-top-message-color");
    }
    if ($(".contact").offset().top - headerNaviHeignt <= $(window).scrollTop() ) {
      $(".contact-btn").addClass("section-top-message-color");
    } else {
      $(".contact-btn").removeClass("section-top-message-color");
    }
});
//   $(window).on("load scroll", function () {
//     if ($(window).scrollTop() < $(".profile").offset().top) {
//       header.removeClass("header-nav-default");
//     } else {
//       header.addClass("header-nav-default");
//     }
//     if ($(window).scrollTop() < $(".profile").offset().top - 70) {
//       $(".top-btn").addClass("section-top-message-color");
//     } else {
//       $(".top-btn").removeClass("section-top-message-color");
//     }
//     if (
//       $(".profile").offset().top - 70 <= $(window).scrollTop() &&
//       $(window).scrollTop() < $(".result").offset().top - 70
//     ) {
//       $(".profile-btn").addClass("section-top-message-color");
//     } else {
//       $(".profile-btn").removeClass("section-top-message-color");
//     }
//     if (
//       $(".result").offset().top - 70 <= $(window).scrollTop() &&
//       $(window).scrollTop() < $(".works").offset().top - 70
//     ) {
//       $(".result-btn").addClass("section-top-message-color");
//     } else {
//       $(".result-btn").removeClass("section-top-message-color");
//     }
//     if (
//       $(".works").offset().top - 70 <= $(window).scrollTop() &&
//       $(window).scrollTop() < $(".flow").offset().top - 70
//     ) {
//       $(".works-btn").addClass("section-top-message-color");
//     } else {
//       $(".works-btn").removeClass("section-top-message-color");
//     }
//     if (
//       $(".flow").offset().top - 70 <= $(window).scrollTop() &&
//       $(window).scrollTop() < $(".service").offset().top - 70
//     ) {
//       $("flow-btn").addClass("section-top-message-color");
//     } else {
//       $(".flow-btn").removeClass("section-top-message-color");
//     }
//     if (
//       $(".service").offset().top - 70 <= $(window).scrollTop() &&
//       $(window).scrollTop() < $(".contact").offset().top - 70
//     ) {
//       $("service-btn").addClass("section-top-message-color");
//     } else {
//       $(".service-btn").removeClass("section-top-message-color");
//     }
//     if ($(".contact").offset().top - 70 <= $(window).scrollTop()) {
//       $(".contact-btn").addClass("section-top-message-color");
//     } else {
//       $(".contact-btn").removeClass("section-top-message-color");
//     }
 });
    //サービスにあるスライダーの制御
    $(function () {
    $(".slider").slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
    });
  });

  // ナビクリックした際のスクロール
  $(function () {
  $(".top-btn").click(function () {
    var top = $(".header").offset().top;
    $("html, body").animate({ scrollTop: top }, 500);
  });
  $(".result-btn").click(function () {
    var result = $(".result").offset().top;
    $("html, body").animate({ scrollTop: result }, 500);
  });
  $(".works-btn").click(function () {
    var works = $(".works").offset().top;
    $("html, body").animate({ scrollTop: works }, 500);
  });
  $(".flow-btn").click(function () {
    var flow = $(".flow").offset().top;
    $("html, body").animate({ scrollTop: flow }, 500);
  });
  $(".service-btn").click(function () {
    var service = $(".service").offset().top;
    $("html, body").animate({ scrollTop: service }, 500);
  });
  $(".profile-btn").click(function () {
    var profile = $(".profile").offset().top;
    $("html, body").animate({ scrollTop: profile }, 500);
  });
  $(".contact-btn").click(function () {
    var contact = $(".contact").offset().top;
    $("html, body").animate({ scrollTop: contact }, 500);
  });
});
//--------------------------------------------------------------------------------
//スクロール時文字の線を引く
$(function () {
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
});
