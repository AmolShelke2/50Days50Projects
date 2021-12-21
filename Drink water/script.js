const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

// For all cups
smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  // for remove the cups if the cup will click again
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  // to fill the small cups  cups
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

// updating the big cup

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  // this will remove the remained from the cup when it will 100%
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  }

  //   this will visible the percentage of water remainig to drink
  else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}Ltr`;
  }
}
