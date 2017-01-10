$(document).ready(function() {

  $('.modal').show();

  var playerTeam = "";
  var computerTeam = "";

  $('.X, .O').click(function() {
    playerTeam = $(this).html();
    $('.modal').hide();
  });

  var GameBoard = {
    init: function() {
      this.gameArray = [0,0,0,0,0,0,0,0,0];
      this.gameLabels = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    }
  };

  Game = Object.create(GameBoard);

  Game.playerMove = function(item) {
    if($(item).html() === "") {
      this.checker++;
      $(item).html(playerTeam);
      var currentSpot = this.gameLabels.indexOf($(item).attr('id'));
      console.log(`Player moving to ${currentSpot}`);
      this.gameArray[currentSpot] = 1;
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
      return cell === 1 || cell === 2;
    };

    if (this.gameArray[placeInGameArray] === 0) {
      this.gameArray[placeInGameArray] = 2;
      console.log(`computer moving to ${placeInGameArray}`);
      $("#" + chosenCell).html(computerTeam);
    }
    else if (this.gameArray.indexOf(0) === -1) return;

    else return false;
  };

  Game.isValidMove = function(item) {
    if ($(item).html() !== "") {
      return false;
    }
    return true;
  };

  Game.checkIfDone = function() {

    function isDone(cell) {
      return cell === 1;
    };

    var ga = this.gameArray;
    if (
      ga[0] === 1 && ga[1] === 1 && ga[2] === 1 ||
      ga[3] === 1 && ga[4] === 1 && ga[5] === 1 ||
      ga[6] === 1 && ga[7] === 1 && ga[8] === 1 ||
      ga[0] === 1 && ga[3] === 1 && ga[6] === 1 ||
      ga[1] === 1 && ga[4] === 1 && ga[7] === 1 ||
      ga[2] === 1 && ga[5] === 1 && ga[8] === 1 ||
      ga[0] === 1 && ga[4] === 1 && ga[8] === 1 ||
      ga[2] === 1 && ga[4] === 1 && ga[6] === 1
    ) {
      Game.restart("player");
    }
    else if (
      ga[0] === 2 && ga[1] === 2 && ga[2] === 2 ||
      ga[3] === 2 && ga[4] === 2 && ga[5] === 2 ||
      ga[6] === 2 && ga[7] === 2 && ga[8] === 2 ||
      ga[0] === 2 && ga[3] === 2 && ga[6] === 2 ||
      ga[1] === 2 && ga[4] === 2 && ga[7] === 2 ||
      ga[2] === 2 && ga[5] === 2 && ga[8] === 2 ||
      ga[0] === 2 && ga[4] === 2 && ga[8] === 2 ||
      ga[2] === 2 && ga[4] === 2 && ga[6] === 2
    ) {
      Game.restart("computer");
    }
    else if (this.gameArray.every(isDone)) {
      Game.restart("nobody");
    }
  };

  Game.restart = function(winner) {
    Game.init();
    $('.titlecard').html("game over! " + winner + " wins!");
    var timer = 5;
    var resetTime = setInterval(function() {
      if (timer >= 0) {
        $('.titlecard').html("new game in " + timer);
        timer--;
      }
      else {
        $('.cell').empty();
        $('.titlecard').html("simple tic-tac-toe");
        timer = 5;
        clearInterval(resetTime);
      }
    }, 1000);
  };

  Game.init();

  $('.cell').click(function() {
    function isDone(cell) {
      return cell === 1;
    };
    var that = $(this);
    if (Game.isValidMove(that) === false) {

    }
    else {
      Game.playerMove(that);
      console.log(`${Game.gameArray}`);
      var computerInstance = Game.computerMove();
      while (computerInstance === false) {
        console.log(computerInstance);
       computerInstance = Game.computerMove();
      }
      Game.checkIfDone();
    }
  });
});
