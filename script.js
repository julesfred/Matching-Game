// $(document).ready(function() {
//   $("#start").on("click", function(event) {
//     $(".container").css("display", "grid");




//     var parent = $(".container");
//     var divs = parent.children();
//     while (divs.length) {
//       parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//     }
//   });


// $(".card").on("click", function() {
//   $(this).children(".front").css("-webkit-transform", "perspective(800px) rotateY(180deg)");
//   $(this).children(".back").css("-webkit-transform", "perspective(800px) rotateY(0)");
//   $(this).children(".front").toggleClass("change");
//   $(this).children(".back").toggleClass("change2");
// });



// $(".restart").on("click", function(event) {
//         var parent = $(".container");
//         var divs = parent.children();
//         while (divs.length) {
//           parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//         }
//     });

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

  $(".card").flip({ trigger: "click" });

  var cardOne = null;
  var cardTwo = null;

  $(".card").on("click", function() {

    $(".back").removeClass("hide");

    if (cardOne === null) {
      cardOne = $(this);
      console.log(cardOne);
    } else {
      cardTwo = $(this);

      if ( ($(cardOne).children(".back").attr("flipped") === $(cardTwo).children(".back").attr("flipped")) ) {
        console.log("yay a match");
        $(cardOne).children(".back").fadeOut(4000);
        $(cardTwo).children(".back").fadeOut(4000);
        cardOne = null;
        cardTwo = null;
      } else {
        console.log("sucks");
        $(cardOne).flip(false);
        $(cardTwo).flip(false);
        cardOne = null;
        cardTwo = null;
      }

    }


  })



  $(".restart").on("click", function(event) {
    $(".back").css("backface-visibility", "visible");
    $(".front").css("backface-visibility", "visible");
    $(".card").flip(false);

  });



});