$(document).ready(function() {

  GameBoard = {
    this.gameArray: [0,0,0,0,0,0,0,0,0],
    this.gameLabels: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],

    makeBoard: function() {
      // write a function to link the gameArray to the cells on the page
    }
  }

  Actions = Object.create(GameBoard);

  Actions.fillSquare = function() {
    $('.square').click(function() {
      if((this).html() === "") {
        (this).html("X");
        // need to mark off that specific box in the array.
      }
    });
  };

  Actions.computerFill = function() {
    // write a function to have the computer choose its square.
  };
}

});
