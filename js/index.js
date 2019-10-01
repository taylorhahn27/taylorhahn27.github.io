// hero image
$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});

//Menu On Hover
$("body").on("mouseenter mouseleave", ".nav-item", function(e) {
  if ($(window).width() > 750) {
    var _d = $(e.target).closest(".nav-item");
    _d.addClass("show");
    setTimeout(function() {
      _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
    }, 1);
  }
});

// replacing one div with another div
// function showMicro() {
//   var str = document.getElementById("demo").innerHTML;
//   var res = str.replace("W3Schools", "Microsoft");
//   document.getElementById("demo").innerHTML = res;
// }

// function showw3c() {
//   var str = document.getElementById("demo").innerHTML;
//   var res = str.replace("Microsoft", "W3Schools");
//   document.getElementById("demo").innerHTML = res;
// }
