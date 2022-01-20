const background = document.getElementById("background");
const password = document.getElementById("password");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const passwordLength = input.length;
  const blurValue = 20 - passwordLength * 2;

  background.style.filter = `blur(${blurValue}px)`;
});
