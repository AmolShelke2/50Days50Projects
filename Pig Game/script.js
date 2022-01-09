/* 

Game Rules: 

-- The game has 2 player Playing in rounds

-- In each turn, a player rolls a dice as many times as he wishes. Each results get to his round score

-- But if the player rolls a 1, all his round socre gets lost. after that it's the next players turn 
that it's the next player turn 

-- The player can choose to 'Hold' which means that his ROUND score gets added to his Global score. 
after that, it's the next players turn 

-- the first player to reach 100 points on GLOBAL score wins the game

*/

// document.querySelector('#current--' + activePlayer).textContent = dice;
// var x = document.querySelector('#score--0').textContent;
// console.log(x);

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

// document.querySelector('.dice').style.display = 'none';
document.getElementById("score--0").textContent = "0";
document.getElementById("score--1").textContent = "0";
document.getElementById("current--0").textContent = "0";
document.getElementById("current--1").textContent = "0";

document.querySelector(".btn--roll").addEventListener("click", function () {
  //roll the dice

  // 1. Random  Number
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
  var diceDom = document.querySelector(".dice");
  diceDom.style.display = "block";
  diceDom.src = "dice-" + dice + ".png";

  // 3 . Update the round score IF the rolled number was not a 1
  if (dice > 1) {
    // Add score
  } else {
    // Next player
  }
});
