// Current Temperature in city in country

let city = 'Tallinn';
let country = 'estonia';
let apiKey = 'b12b8c320e790354505a00b09bac7098';
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=b12b8c320e790354505a00b09bac7098&units=metric`;
axios.get(apiUrl).then(displayWeatherCondition);

function displayWeatherCondition(response) {
  let temperature = document.querySelector('#temperature');
  temperature.innerHTML = Math.round(response.data.main.temp);
  let country = document.querySelector('#country');
  country.innerHTML = response.data.sys.country;
  let city = document.querySelector('#city-name');
  city.innerHTML = response.data.name;
  let description = document.querySelector('#description');
  description.innerHTML = response.data.weather[0].description;
  let wind = document.querySelector('#wind');
  wind.innerHTML = Math.round(response.data.wind.speed);
  let rain = document.querySelector('#rain');
  rain.innerHTML = Math.round(response.data.clouds.all);
  console.log(response.data);
  let humidity = document.querySelector('#humidity');
  humidity.innerHTML = Math.round(response.data.main.humidity);
  let feeling = document.querySelector('#feeling');
  feeling.innerHTML = Math.round(response.data.main.feels_like);
  // Weather Icon
  let weatherIcon = document.querySelector('#icon');
  weatherIcon.setAttribute(
    'src',
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  );
  date.innerHTML = formatDate(response.data.dt * 1000);
  console.log(response.data);
}

// Display real date

function formatDate(timestamp) {
  let now = new Date(timestamp);
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let day = days[now.getDay()];
  return `${day} ${formatHours(timestamp)}`;
}

let now = new Date();
let date = now.getDate();
let hour = now.getHours();
let hours = now.getHours();
if (hour < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();
let day2 = now.getDay();
let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
let day = days[now.getDay()];
let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let month = months[now.getMonth()];
let h2 = document.querySelector('#date');
h2.innerHTML = `${day} ${date}
<br>
${month} ${year}
<br>

${hour}:${minutes}`;

// Time stamp function
function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

//Search Engine
// 2
function handleSubmit(event) {
  event.preventDefault();
  let citySearch = document.querySelector('#enter-city');
  search(citySearch.value);
  console.log(citySearch.value);
}
// 3
function search(city) {
  let apiKey = 'b12b8c320e790354505a00b09bac7098';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);

  // New axios call for forecast
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);
  console.log(apiUrl);
}

// Forecast
function showForecast(response) {
  let forecastElement = document.querySelector('#forecast');
  forecastElement.innerHTML = null;
  let forecast = null;
  for (let index = 0; index < 6; index++) {
    forecast = response.data.list[index];
    forecastElement.innerHTML += `<div
          class="col text-left p-4 d-flex align-items-center justify-content-center" id="background"
        >
          <ul>
            <li>${formatHours(forecast.dt * 1000)}</li>
            
            <img src="http://openweathermap.org/img/wn/${
              forecast.weather[0].icon
            }@2x.png" id="icons">
            <li>${Math.round(forecast.main.temp_max)}° / ${Math.round(
      forecast.main.temp_min,
    )}°</li>
          </ul>
        </div>`;
  }
}

// 1
let form = document.querySelector('#search-form');
form.addEventListener('submit', handleSubmit);

// Current

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let heading = document.querySelector('#city-name');
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  heading.innerHTML = `${latitude} ${longitude}`;
  apiUrl =
    'https://api.openweathermap.org/data/2.5/weather?q=&units=metric&appid=b12b8c320e790354505a00b09bac7098';
  apiKey = 'b12b8c320e790354505a00b09bac7098';
  axios.get(apiUrl).then(getCurrentPosition);
}

function searchLocation(position) {
  let apiKey = 'b12b8c320e790354505a00b09bac7098';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector('#current-location');
currentLocationButton.addEventListener('click', getCurrentLocation);

search('Tallinn');
