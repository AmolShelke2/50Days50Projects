// in this project we have to work with fetch API and using then and async we are getting the Jokes from the Third party and as a promises and then we are showing them on the screen using innerhtml

const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// USSING assync/await
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}

// Using.Then()

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
