$(function () {
  $(".openbtn1").click(function () {
    $(this).toggleClass("active");
    $("#header__menu").toggleClass("panelactive");
  });
});

const swiper = new Swiper(".swiper", {
  // 無限ループにするか
  loop: true,
  allowTouchMove: false,

  // ふわっとなるスピード
  speed: 1000,

  // 自動再生
  autoplay: {
    // 次のスライドに切り替わる速さ
    delay: 5000,
  },

  // フェードにしたい場合はこれを入れるだけ！
  effect: "fade",
});
