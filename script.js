$(document).ready(function() {
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
    if ((cardOne.children(".back").attr("flipped") === cardTwo.children(".back").attr("flipped")) ) {
      console.log("yay a match");
      cardTwo.delay(3000).fadeTo(1000, 0, function(){
        $(this).removeClass("change");
        $(this).css("visibility", "hidden");
      });
      if($(".card").hasClass("change")) {
        cardOne.delay(3000).fadeTo(1000, 0, function(){
          // $(this).removeClass("change");
          $(this).css("visibility", "hidden");
        });
      }
      cardOne = null;
      cardTwo = null;
      wins++;
      console.log(wins);
    } else {
      cardOne.delay(3000).queue(function(next) {
        $(this).removeClass("change");
      });
      $(this).addClass("change").delay(3000).queue(function(next){
        $(this).removeClass("change");
        $(".card").removeClass("change");
        next();
      });
      cardOne = null;
      cardTwo = null;
    }
  }
  if (wins >= 6) {
    // $(".card").off("click");
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