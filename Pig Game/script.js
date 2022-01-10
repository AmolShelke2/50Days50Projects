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

var scores, roundScore, activePlayer, isPlaying;
init();

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (isPlaying) {
    // 1. Random  Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";

    // 3 . Update the round score IF the rolled number was not a 1
    if (dice !== 1) {
      // Add score
      roundScore += dice;
      document.querySelector("#current--" + activePlayer).textContent =
        roundScore;
    } else {
      // Next player
      nextPlayer();
    }
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  // adding current score to global score
  if (isPlaying) {
    scores[activePlayer] += roundScore;
    // scores[activePlayer] = scores[activePlayer] + roundScore

    // update the UI
    document.querySelector("#score--" + activePlayer).textContent =
      scores[activePlayer];

    // check if player won the Game
    if (scores[activePlayer] >= 20) {
      // state variable

      isPlaying = false;
      document.querySelector("#name--" + activePlayer).textContent = "Winner❤️";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player--" + activePlayer)
        .classList.add("player--winner");
      document
        .querySelector(".player--" + activePlayer)
        .classList.remove("player--winner");
    } else {
      // Next player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  // Next player

  // Ternary operator
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";

  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn--new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  isPlaying = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score--0").textContent = "0";
  document.getElementById("score--1").textContent = "0";
  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";

  document.getElementById("name--0").textContent = "Player 1";
  document.getElementById("name--1").textContent = "Player 2";

  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");

  document.querySelector(".player--0").classList.remove("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
}
