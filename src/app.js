function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let weatherDescriptionElement = document.querySelector(
    "#weather-description"
  );
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  weatherDescriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "6b03381b6c536d7a860743b8ced31fot";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
