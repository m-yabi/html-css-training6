$(function () {
  $(".openbtn1").click(function () {
    $(this).toggleClass("active");
    $("#header__menu").toggleClass("panelactive");
  });
});
