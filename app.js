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

  Game.playerMove = function(item) {
    if($(item).html() === "") {
      this.checker++;
      $(item).html(playerTeam);
      var currentSpot = this.gameLabels.indexOf($(item).attr('id'));
      // console.log("current spot: " + currentSpot +
      // " cell ID: " + item.attr('id'));
      this.gameArray[currentSpot] = 1;
      // console.log(this.gameArray);
    }
    else return;
  };

  Game.computerMove = function() {
    if (playerTeam === "X") computerTeam = "O";
    else computerTeam = "X";

    // choose a random number between 97 and 105
    var chosenCellASCII = Math.floor(Math.random()*(105-97+1)+97);
    var chosenCell = String.fromCharCode(chosenCellASCII);
    var placeInGameArray = this.gameLabels.indexOf(chosenCell);

    function isDone(cell) {
      return cell === 1;
    };
    if (this.gameArray[placeInGameArray] === 1 && !this.gameArray.every(isDone)) {
      return false;
    }
    else if (this.gameArray.every(isDone)) return;

    else {
      this.gameArray[placeInGameArray] = 1;
      console.log("The computer moved at: " + chosenCell);
      $("#" + chosenCell).html(computerTeam);
    }

    // while (this.gameArray[placeInGameArray] === 1 && this.checker < 9) {
    //   this.checker++;
    //   chosenCellASCII = Math.floor(Math.random()*(105-97+1)+97);
    //   chosenCell = String.fromCharCode(chosenCellASCII);
    //   placeInGameArray = this.gameLabels.indexOf(chosenCell);
    // }
    // if ($("#" + chosenCell).html("")) {
    //   this.gameArray[placeInGameArray] = 1;
    //   console.log("The computer moved at: " + chosenCell);
    //   $("#" + chosenCell).html(computerTeam);
    // }
  };

  Game.isValidMove = function(item) {
    if ($(item).html() !== "") {
      return false;
    }
    return true;
  };

  Game.checkIfDone = function() {
    console.log("checking if done... " + this.gameArray);
    function isDone(cell) {
      return cell === 1;
    };

    // if ()




    if (this.gameArray.every(isDone)) {
      Game.restart();
    }
  };

  Game.restart = function() {
    $('.titlecard').html("game over!");
    console.log("GAME OVER")
    var timer = 5;
    var resetTime = setInterval(function() {
      if (timer >= 0) {
        $('.titlecard').html("new game in " + timer);
        timer--;
      }
      else {
        Game.init();
        $('.cell').empty();
        $('.titlecard').html("simple tic-tac-toe")
        timer = 5;
        clearInterval(resetTime);
      }
    }, 1000);
  };

  Game.init();

  $('.cell').click(function() {
    var that = $(this);
    if (Game.isValidMove(that) === false) {
      console.log("pick another square");
    }
    else {
      Game.playerMove(that);
      var computerInstance = Game.computerMove();
      while (computerInstance === false) {
       computerInstance = Game.computerMove();
      }
      Game.checkIfDone();
    }
  });
});
