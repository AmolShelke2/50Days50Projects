const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "Hey EveryOne I am Amol Shelke💕";

let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerHTML = text.slice(0, idx);
}
