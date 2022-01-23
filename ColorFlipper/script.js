const colors = ["red", "green", "yellow", "gray", "lightblue"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  // after clicking the btn change the background color randomly
  document.body.style.backgroundColor = colors[randomNumber];

  // put the color name in the color text
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
