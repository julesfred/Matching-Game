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


  function flipit() {
    $(".back").removeClass("hide");
    $(".card").flip();
  }
  flipit();


  
    


  
});