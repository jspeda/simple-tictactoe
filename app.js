$(document).ready(function() {

  var GameBoard = {
    init: function() {
      this.gameArray = [0,0,0,0,0,0,0,0,0];
      this.gameLabels = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    },

    makeBoard: function() {
      // write a function to link the gameArray to the cells on the page
    }
  };

  Game = Object.create(GameBoard);

  Game.init();

  Game.fillSquare = function(item) {
      if(item.html() === "") {
        item.html("X");
        // need to mark off that specific box in the array.
      };
  };

  Game.computerFill = function() {
    // write a function to have the computer choose its square.
  };

$('.cell').click(function() {
  var that = $(this);
  Game.fillSquare(that);
  console.log(that.attr('id'));
});


});
