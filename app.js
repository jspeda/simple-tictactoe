$(document).ready(function() {

  var GameBoard = {
    init: function() {
      this.gameArray = [0,0,0,0,0,0,0,0,0];
      this.gameLabels = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    }

    // list out all winning combinations
  };

  Game = Object.create(GameBoard);

  Game.init();

  Game.fillSquare = function(item) {
    if(item.html() === "") {
      item.html("X");
      var currentSpot = this.gameLabels.indexOf(item.attr('id'));
      console.log(currentSpot);
      console.log(item.attr('id'));
      this.gameArray[currentSpot] = 1;
      console.log(this.gameArray);
    };
  };

  Game.computerFill = function() {
    // write a function to have the computer choose its square.
  };

  // write a function to check winning combinations every turn

$('.cell').click(function() {
  var that = $(this);
  Game.fillSquare(that);
  // console.log(that.attr('id'));
});


});
