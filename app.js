$(document).ready(function() {

  GameBoard = {
    this.gameArray: [0,0,0,0,0,0,0,0,0],
    this.gameLabels: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],

    makeBoard: function() {

    },

    fillSquare: function() {
      $('.square').click(function() {
        if((this).html() === "") (this).html("X");
      });
    },

    computerFill: function() {

    },
  }

});
