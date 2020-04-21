$(function () {
  setTimeout(function () {
    $("body").addClass("over");
  }, 2500);
  $(window).scroll(function () {
    var a = $(window).scrollTop();
    if (a > 20) {
      $("header").addClass("header_back");
    } else {
      $("header").removeClass("header_back");
    }
    $(".effect").each(function () {
      var className = $(this).attr("class");
      var position = $(this).offset().top; //ページの一番上から要素までの距離を取得 //スクロールの位置を取得
      var windowHeight = $(window).height(); //ウインドウの高さを取得
      var earlyAnimationPosition = position - windowHeight * 0.9;
      var middleAnimationPosition = position - windowHeight * 0.7;
      var fastAnimationPosition = position - windowHeight;
      if (a > middleAnimationPosition && className.match(/fade_up_go/)) {
        //スクロール位置が要素の位置を過ぎたとき
        $(this).addClass("fade_up");
      } else if (a > middleAnimationPosition && className.match(/fade_in_go/)) {
        $(this).addClass("fade_in");
      } else if (
        a > earlyAnimationPosition &&
        className.match(/fade_up_go_early/)
      ) {
        $(this).addClass("fade_up");
      } else if (
        a > middleAnimationPosition &&
        className.match(/fade_up_go_s/)
      ) {
        $(this).addClass("fade_up_s");
      } else if (a > middleAnimationPosition && className.match(/comeon_go/)) {
        $(".comeon").addClass("fade_in2");
      }
    });
  });

  var headerHeight = $("header").height();
  function scrollToAbout() {
    $("html,body").animate({
      scrollTop: $(".about").offset().top - headerHeight,
    });
  }
  function scrollToSkill() {
    $("html,body").animate({
      scrollTop: $(".skill").offset().top - headerHeight,
    });
  }
  function scrollToWorks() {
    $("html,body").animate({
      scrollTop: $(".works").offset().top - headerHeight,
    });
  }
  function scrollToContact() {
    $("html,body").animate({
      scrollTop: $(".contact").offset().top - headerHeight,
    });
  }

  $(".about_go").click(function () {
    scrollToAbout();
  });
  $(".skill_go").click(function () {
    scrollToSkill();
  });
  $(".works_go").click(function () {
    scrollToWorks();
  });
  $(".contact_go").click(function () {
    scrollToContact();
  });
});
