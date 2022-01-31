const toggleBTN = document.querySelector(".sidebar-toggle");
const closeBTN = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

toggleBTN.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});

closeBTN.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
});
