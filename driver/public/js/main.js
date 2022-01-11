"use strict";
$(document).ready(function () {
  /* url  navigation active */
  //   var url = window.location;
  //   function menuitems() {
  //     var element = $(".sidebar .navbar .nav-item a")
  //       .filter(function () {
  //         return this.href == url;
  //         console.log(url);
  //       })
  //       .addClass("active")
  //       .closest(".dropdown-menu")
  //       .addClass("show")
  //       .closest("li.dropdown")
  //       .addClass("show");
  //   }
  //   menuitems();

  /* sidebar left  expand collapase */
  //   $(".menu-left").on("click", function () {
  //     $("body").addClass("menu-left-open");
  //     $("body .wrapper").append('<div class="backdrop"></div>');
  //     $(".backdrop").on("click", function () {
  //       $("body").removeClass("menu-left-open");
  //       $(".backdrop").fadeOut().remove();
  //     });
  //   });

  // $('.sidebar-close').on('click', function () {
  //     $('body').removeClass('menu-left-open');
  //     $('.backdrop').fadeOut().remove();
  // });

  /* sideabr right expand collapase */
  //   $(".menu-right").on("click", function () {
  //     $("body").addClass("menu-right-open");
  //     $("body .wrapper").append('<div class="backdrop-right"></div>');
  //     $(".backdrop-right, .menu-left-close").on("click", function () {
  //       $("body").removeClass("menu-right-open");
  //       $(".backdrop-right").fadeOut().remove();
  //     });
  //   });

  /* search control visible slide hide slide */
  //   $(".searchbtn").on("click", function () {
  //     $(".searchcontrol").addClass("active");
  //   });
  //   $(".close-search").on("click", function () {
  //     $(".searchcontrol").removeClass("active");
  //   });

  /* theme cookie usage */

  /* theme color cookie */
  if (
    $.type($.cookie("theme-color")) != "undefined" &&
    $.cookie("theme-color") != ""
  ) {
    $("body").removeClass("color-theme-blue");
    $("body").addClass($.cookie("theme-color"));
  }
  $(".theme-color .btn").on("click", function () {
    $("body").removeClass("color-theme-blue");
    $("body").removeClass($.cookie("theme-color"));
    $.cookie("theme-color", $(this).attr("data-theme"), {
      expires: 1,
    });
    $("body").addClass($.cookie("theme-color"));
  });

  /* theme layout cookie */
  if (
    $.type($.cookie("theme-color-layout")) != "undefined" &&
    $.cookie("theme-color-layout") != ""
  ) {
    $("body").removeClass("theme-light");
    $("body").addClass($.cookie("theme-color-layout"));
  }

  $(".theme-layout .btn").on("click", function () {
    $("body").removeClass("theme-light");
    $("body").removeClass($.cookie("theme-color-layout"));
    $.cookie("theme-color-layout", $(this).attr("data-layout"), {
      expires: 1,
    });
    $("body").addClass($.cookie("theme-color-layout"));
  });

  if (
    $.type($.cookie("theme-color-layout")) != "theme-light" &&
    $.cookie("theme-color-layout") != "theme-light"
  ) {
    $("#theme-dark").prop("checked", true);
  }
  $("#theme-dark").on("change", function () {
    if ($(this).is(":checked") === true) {
      $("body").removeClass("theme-light");
      $("body").removeClass($.cookie("theme-color-layout"));
      $.cookie("theme-color-layout", "theme-dark", {
        expires: 1,
      });
      $("body").addClass($.cookie("theme-color-layout"));
    } else {
      $("body").removeClass("theme-dark");
      $("body").removeClass($.cookie("theme-color-layout"));
      $.cookie("theme-color-layout", "theme-light", {
        expires: 1,
      });
      $("body").addClass($.cookie("theme-color-layout"));
    }
  });

  /* page content height for sticky footer */
  //   $(".content-sticky-footer").css({
  //     "padding-bottom": $(".footer-wrapper").height() + 35,
  //   });
  //   $(".footer-wrapper").css("margin-top", -($(".footer-wrapper").height() + 20));

  /* page inside iframe just for demo app */
  if (self !== top) {
    $("body").addClass("max-demo-frame");
  }
});
// $(window).on("load", function () {
//   $(".loader").remove();
// });
