var socres, roundScore, activePlayer, dice;

score = [0, 0];
roundScore = 0;

activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

document.getElementById("current-0").textContent = dice;
