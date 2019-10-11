// Add active class to the current button (highlight it)
var header = document.getElementById("button-background");
var btns = header.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// mail chimp
(function($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = "EMAIL";
  ftypes[0] = "email";
  fnames[2] = "LNAME";
  ftypes[2] = "text";
})(jQuery);
var $mcj = jQuery.noConflict(true);

//menu switching
function show(id) {
  document.getElementById("main_place").innerHTML = document.getElementById(
    id
  ).innerHTML;
}

// $("#my_form").submit(function(event) {
//   event.preventDefault(); //prevent default action
//   var post_url = $(this).attr("action"); //get form action url
//   var request_method = $(this).attr("method"); //get form GET/POST method
//   var form_data = $(this).serialize(); //Encode form elements for submission

//   $.ajax({
//     url: post_url,
//     type: request_method,
//     data: form_data
//   }).done(function(response) {
//     //
//     $("#server-results").html(response);
//   });
// });

//menu replacing content
// $(".button")
//   .first()
//   .addClass("active");

// $(".button").click(function() {
//   var $this = $(this);
//   ($siblings = $this.parent().children()), (position = $siblings.index($this));
//   console.log(position);

//   $(".content section")
//     .removeClass("active")
//     .eq(position)
//     .addClass("active");

//   $siblings.removeClass("active");
//   $this.addClass("active");
// });

// hero image
$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});

//Menu On Hover
// $("body").on("mouseenter mouseleave", ".nav-item", function(e) {
//   if ($(window).width() > 750) {
//     var _d = $(e.target).closest(".nav-item");
//     _d.addClass("show");
//     setTimeout(function() {
//       _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
//     }, 1);
//   }
// });

// active class color change for menu buttons
// $("#button-background .button").on("click", function() {
//   $("#button-background .button.active").removeClass("active");
//   $(this).addClass("active");
// });

// jQuery.noConflict();
// (function($) {
//   $(function() {
//     // hero image
//     $(".jumbotron").css({ height: $(window).height() + "px" });

//     $(window).on("resize", function() {
//       $(".jumbotron").css({ height: $(window).height() + "px" });
//     });

//     //Menu On Hover
//     $("body").on("mouseenter mouseleave", ".nav-item", function(e) {
//       if ($(window).width() > 750) {
//         var _d = $(e.target).closest(".nav-item");
//         _d.addClass("show");
//         setTimeout(function() {
//           _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
//         }, 1);
//       }
//     });

//     // active class color change for menu buttons
//     $("#button-background .button").on("click", function() {
//       $("#button-background .button.active").removeClass("active");
//       $(this).addClass("active");
//     });
//   });
// })(jQuery);

// jQuery(document).ready(function($){

//   // jQuery code is in here

//   });
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

// function init() {
//   about = document.getElementById("eat-button");
//   about.style.color = "blue";
// }

// Use the CDN or host the script yourself
// https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js
// https://matthewelsom.com/assets/js/libs/instafeed.min.js
