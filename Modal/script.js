const modalBTN = document.querySelector(".modal-btn");
const closeBTN = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

modalBTN.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

closeBTN.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
