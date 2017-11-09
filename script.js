// $(document).ready(function() {

// function startGame() {
//   $(".container").css("display", "grid");
// }

// $(function () {
//   var parent = $(".container");
//   var divs = parent.children();
//   while (divs.length) {
//     parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//   }
// });


// function flipit() {
//     $(".back").removeClass("hide");
//     $(".card").flip();
// }



// flipit();

// function restartGame(){
//   $(".container").flip();
// }

// });

$(document).ready(function() {
  $("#start").on("click", function(event) {
    $(".container").css("display", "grid");




    var parent = $(".container");
    var divs = parent.children();
    while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  });


  $(".card").on("click", function() {
    $(".back").removeClass("hide");
    $(".card").flip();
    $(this).addClass("clicked");
  });

  $(".card").on("flip:done", function() {
    if ($(this).hasClass("clicked")) {
      // $(".card").flip(false);
    }
  });




$(".restart").on("click", function(event) {
    $(".card").flip(false);

        var parent = $(".container");
        var divs = parent.children();
        while (divs.length) {
          parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    });

});
