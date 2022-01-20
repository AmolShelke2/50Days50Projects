const container = document.querySelector(".container");

const unsplashUrl = "https://source.unsplash.com/random/";
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashUrl}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomr()} x${getRandomr()}`;
}

function getRandomr() {
  return Math.floor(Math.random() * 10) + 300;
}
