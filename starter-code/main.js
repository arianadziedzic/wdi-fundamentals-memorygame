console.log("JS file is connected to HTML! Woo!")


//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

/* if (cardOne === cardTwo) {
    alert('You found a match!')
  } else {
    alert('Sorry, try again.');
  }*/

var gameBoard = document.getElementById('game-board');
var cards = 4;
var createBoard = function() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    gameBoard.appendChild(cardElement);
  }
};

createBoard()