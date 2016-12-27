$(document).ready(function() {

  $('.modal').show();

  var playerTeam = "";
  var computerTeam = "";

  $('.X, .O').click(function() {
    playerTeam = $(this).html();
    console.log(playerTeam);
    $('.modal').hide();
  });

  var GameBoard = {
    init: function() {
      this.gameArray = [0,0,0,0,0,0,0,0,0];
      this.gameLabels = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    },

    // winningCombos: {
    //   ["a", "b", "c"],
    //   ["d", "e", "f"],
    //   ["g", "h", "i"],
    //   ["a", "d", "g"],
    //   ["b", "e", "h"],
    //   ["c", "f", "i"],
    //   ["a", "e", "i"],
    //   ["c", "e", "g"]
    // }

    // list out all winning combinations
  };

  Game = Object.create(GameBoard);

  Game.fillSquare = function(item) {
    if(item.html() === "") {
      item.html(playerTeam);
      var currentSpot = this.gameLabels.indexOf(item.attr('id'));
      console.log("current spot: " + currentSpot +
      " cell ID: " + item.attr('id'));
      this.gameArray[currentSpot] = 1;
      console.log(this.gameArray);
    };
  };

  Game.computerMove = function() {
    // write a function to have the computer choose its square.
    if (playerTeam === "X") computerTeam = "O";
    else computerTeam = "X";


    // choose a random number between 97 and 105
    var chosenCellASCII = Math.floor(Math.random()*(105-97+1)+97);
    var chosenCell = String.fromCharCode(chosenCellASCII);
    var placeInGameArray = this.gameLabels.indexOf(chosenCell);
    // this while loop crashes the browser when game completes.
    var checker = 1;
    while (this.gameArray[placeInGameArray] === 1 && checker <= 9) {
      checker++;
      chosenCellASCII = Math.floor(Math.random()*(105-97+1)+97);
      chosenCell = String.fromCharCode(chosenCellASCII);
      placeInGameArray = this.gameLabels.indexOf(chosenCell);
    }
      this.gameArray[placeInGameArray] = 1;
      console.log("The computer moved at: " + chosenCell);
      $("#" + chosenCell).html(computerTeam);
  };

  Game.checkIfDone = function() {
    // write a function to check winning combinations every turn /
    // every time fillSquare is called. If there is a winner or a tie,
    // declare the result and initialize a new board.

    console.log("checking if done... " + this.gameArray);
    // function to check if each index of the game array is 1
    function isDone(cell) {
      return cell === 1;
    };
    if (this.gameArray.every(isDone)) {
      $('.titlecard').html("game over!");
      var timer = 5;
      var resetTime = setInterval(function() {
        if (timer >= 0) {
          $('.titlecard').html("new game in " + timer);
          timer--;
        }
        else {
          Game.init();
          $('.cell').empty();
          $('.titlecard').html("simple tic-tac-toe");
        }
      }, 1000);
    }
  };

  Game.init();

  $('.cell').click(function() {
    var that = $(this);
    Game.fillSquare(that);
    Game.computerMove();
    Game.checkIfDone();
  });


});
