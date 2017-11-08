

$(function () {
  var parent = $(".container");
  var divs = parent.children();
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }
});



    
    function flip() {
        $(".card1").animate(
            {rotation: 360},
            {
              duration: 500,
              step: function(now) {
                  $(this).css({"transform": "rotateY(" + now + "deg)"});
                  $(this).css({"background-image": "url(images/grantchirpus.jpg)"});
                  
              }
            }
        );
    }

