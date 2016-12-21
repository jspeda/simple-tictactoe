$(document).ready(function() {

  var ticTac = function() {
    this.gameArray = [0,0,0,0,0,0,0,0,0];
    this.gameLabels = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    for (var i = 0; i < this.gameArray.length; i++) {
      for (var j = 0; j < this.gameArray[i].length; j++) {
        console.log(this.gameArray[i][j]);
      }
      console.log("\n");
    }
  };

  ticTac.prototype.fillSquare = function() {
    $('.square').click(function() {
      if ((this).html() === "") (this).html("X");
    });
  }

  ticTac.prototype.computerFill = function() {

  }


ticTac();

});
