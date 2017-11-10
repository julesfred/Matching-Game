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

  $(".restart").on("click", function(){
    console.log("reset");
    $(".card").removeClass("change").css("visibility", "visible");
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
      setTimeout(function(){
        if($(".card").hasClass("change")){
          $(".change").removeClass("change").css("visibility", "hidden");
        }
      }, 3000)
      cardOne = null;
      cardTwo = null;
      wins++;
      console.log(wins);
    } else {
      setTimeout(function(){
        if($(".card").hasClass("change")){
          $(".card").removeClass("change");
        }
      }, 3000)
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
