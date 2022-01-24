// set initial count

let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.target.classList;

    styles.contains("decrease")
      ? count--
      : styles.contains("increase")
      ? count++
      : (count = 0);

    value.textContent = count;
    if (count > 0) {
      value.style.color = "green";
    }

    if (count < 0) {
      value.style.color = "red";
    }

    if (count === 0) {
      value.style.color = "#222";
    }
  });
});
