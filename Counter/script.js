// set initial count

let count = 0;

const value = document.querySelector("#value");
const increaseBTN = document.querySelector(".increase");
const decreaseBTN = document.querySelector(".decrease");
const resetBTN = document.querySelector(".reset");

increaseBTN.addEventListener("click", function () {
  count++;
  value.textContent = count;
  if (count > 0) {
    value.style.color = "green";
  }
});

decreaseBTN.addEventListener("click", function () {
  count--;
  value.textContent = count;
  if (count < 0) {
    value.style.color = "red";
  }
});

resetBTN.addEventListener("click", function () {
  count = 0;
  value.textContent = count;
  if (count === 0) {
    value.style = "#222";
  }
});
