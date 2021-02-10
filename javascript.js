// Current Temperature in city in country

let city = 'keila';
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
h2.innerHTML = `${day}, ${date} ${month}, ${year}, ${hour}:${minutes}`;

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
  apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);
  console.log(apiUrl);
}

function showForecast(response) {
  let forecastElement = document.querySelector('#forecast');
  let forecast = response.data.list[0];

  forecastElement.innerHTML = `<div
          class="col text-left bg-info p-4 d-flex align-items-center justify-content-center"
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

  forecast = response.data.list[1];
  forecastElement.innerHTML =
    forecastElement.innerHTML +
    `<div
          class="col text-left bg-info p-4 d-flex align-items-center justify-content-center"
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
  forecast = response.data.list[2];
  forecastElement.innerHTML =
    forecastElement.innerHTML +
    `<div
          class="col text-left bg-info p-4 d-flex align-items-center justify-content-center"
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
  forecast = response.data.list[3];
  forecastElement.innerHTML =
    forecastElement.innerHTML +
    `<div
          class="col text-left bg-info p-4 d-flex align-items-center justify-content-center"
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
  forecast = response.data.list[4];
  forecastElement.innerHTML =
    forecastElement.innerHTML +
    `<div
          class="col text-left bg-info p-4 d-flex align-items-center justify-content-center"
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
  forecast = response.data.list[5];
  forecastElement.innerHTML =
    forecastElement.innerHTML +
    `<div
          class="col text-left bg-info p-4 d-flex align-items-center justify-content-center"
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
// 1
let form = document.querySelector('#search-form');
form.addEventListener('submit', handleSubmit);

// Forecast

search('Tallinn');
