var header = document.getElementById("button-background");
var btns = header.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}

// // Add active class to the current button (highlight it)

// $("#button-background .button").on("click", function() {
//   $("#button-background .button.active").removeClass("active");
//   $(this).addClass("active");
// });

// mail chimp
type =
  "text/javascript" >
  window.dojoRequire(["mojo/signup-forms/Loader"], function(L) {
    L.start({
      baseUrl: "mc.us7.list-manage.com",
      uuid: "4ae5921a3912b451ab862009e",
      lid: "c5b62202c9",
      uniqueMethods: true
    });
  });

//menu switching
function show(id) {
  document.getElementById("main_place").innerHTML = document.getElementById(
    id
  ).innerHTML;
}

// hero image
$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});

// active class color change for menu buttons
// $("#button-background .button").on("click", function() {
//   $("#button-background .button.active").removeClass("active");
//   $(this).addClass("active");
// });
