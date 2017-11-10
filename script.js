$(document).ready(function() {

  //Prevent double clicks
  $("*").dblclick(function(e){
    e.preventDefault();
  });

  //Function to start the game
  $("#start").on("click", function(event) {
    $(".container").css("display", "grid").animate({top: '100px'});
    var parent = $(".container");
    var divs = parent.children();
    while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  });

  //Restart game//
  $(".restart").on("click", function(){
    $(".wincontainer").css("display", "none");
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
    //Sets card one = to the card you click on, flip the card
    if (cardOne === null) {
      cardOne = $(this);
      $(this).addClass("change");
    } else {
      cardTwo = $(this);
      $(this).addClass("change");
      //If the first card is equivalent to the second card then it removes both cards
      if (($(cardOne).children(".back").attr("flipped") === $(cardTwo).children(".back").attr("flipped")) ) {
        setTimeout(function(){
          if($(".card").hasClass("change")){
            $(".change").removeClass("change").css("visibility", "hidden");
          }
        }, 3000)

        //Resetting value of cards so you can click another cards
        cardOne = null;
        cardTwo = null;
        wins++;

        // If cards don't match this runs and flips them back
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
    //Win condition
    if (wins >= 10) {
      $(".wincontainer").text("You won the game!");
      wins = 0;
    }
  });
});
