$(document).ready(function() {
  $("*").dblclick(function(e){
    e.preventDefault();
    
  });
  $("#start").on("click", function(event) {
    $(".container").css("display", "grid").animate({top: '100px'});




    var parent = $(".container");
    var divs = parent.children();
    while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  });

var cardOne = null;
var cardTwo = null;
var wins = 0;


$(".card").on("click", function() {
  if (cardOne === null) {
    cardOne = $(this);
    $(this).addClass("change");
  } else {
    cardTwo = $(this);
    $(this).addClass("change");
    if (($(cardOne).children(".back").attr("flipped") === $(cardTwo).children(".back").attr("flipped")) ) {
      console.log("yay a match");
      $(cardTwo).delay(3000).removeClass("change").css("visibility", "hidden");
        console.log("cardtwo");
        $(cardOne).delay(3000).removeClass("change").css("visibility", "hidden");
          console.log("cardOne");
      cardOne = null;
      cardTwo = null;
      wins++;
      console.log(wins);
    } else {
      $(cardOne).delay(3000).removeClass("change");
      $(cardTwo).addClass("change").delay(3000).queue(function(next){
        $(this).removeClass("change");
        next();
      });
      cardOne = null;
      cardTwo = null;
    }
  }
  if (wins >= 6) {
    $(".card").off("click");
    console.log("You win!");
  }
});



$(".restart").on("click", function(event) {
        var parent = $(".container");
        var divs = parent.children();
        while (divs.length) {
          parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    });

});