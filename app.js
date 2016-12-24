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

  Game.computerMove = function() {
    // write a function to have the computer choose its square.
    // if (something)

    // call Game.fillSquare() within this function when the optimal
    // move is found.
  };

  Game.checkForVictory = function() {
    // write a function to check winning combinations every turn /
    // every time fillSquare is called. If there is a winner or a tie,
    // declare the result and initialize a new board.
  }


  $('.cell').click(function() {
    var that = $(this);
    Game.fillSquare(that);
  });


});
