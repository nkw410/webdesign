// ページトップ
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  if (sc > 100) {
    $("footer p.pagetop").fadeIn(500);
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});

// モバイルメニュー
$(".hmenu").click(function () {
  // navにスライドトグル;
  // モバイルメニューA
  // 上下開閉toggle↓
  // $("nav").slideToggle(500);
  // $(this)にクラスcloseをトグル
  $(this).toggleClass("close");
  // 停止
  return false;
});

// モバイルメニューB
// .containerをクリックした時→メニュー閉じる
$(".container").click(function () {
  $(".hmenu").removeClass("close");
});
