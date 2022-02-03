const weatherApi = {
  key: "bab281d79e5f1e9755a68d754cc313e7",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

const getBtn = document.getElementById("get-btn");
const inputBox = document.getElementById("input-box");
const weatherBODY = document.querySelector(".weather-body");
getBtn.addEventListener("click", async () => {
  const input = inputBox.value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=bab281d79e5f1e9755a68d754cc313e7&q=${input}&units=metric`
  );
  const weather = await response.json();
  console.log(weather);

  const cardHTML = `
        <div class="location-details">
          <div class="city" id="city">${weather.name}</div>
          <div class="date" id="date">3 Feb (ThursDay), 2022</div>
        </div>

        <div class="weather-status">
          <div class="temp" id="temp">${weather.main.temp}&deg;C</div>
          <div class="min-max" id="min-max">
          ${weather.main.temp_min} / ${weather.main.temp_max}&deg;C(max)
          </div>
        </div>
  `;
  weatherBODY.style.display = "block";
  weatherBODY.innerHTML = cardHTML;
});
