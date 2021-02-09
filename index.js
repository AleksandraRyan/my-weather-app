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

function search(city) {
  let units = 'metric';
  let cityElement = 'Tallinn';
  let countryElement = document.querySelector('#country');
  countryElement.innerHTML = response.data.sys.country;
  let apiKey = 'b12b8c320e790354505a00b09bac7098';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityElement},${countryElement}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function changeCityName(event) {
  event.preventDefault();
  let city = document.querySelector('#enter-city').value;
  search(city);
}

function displayWeatherCondition(response) {
  document.querySelector('#city-name').innerHTML = response.data.name;
  document.querySelector('#temperature').innerHTML = Math.round(
    response.data.main.temp,
  );
  document.querySelector('#humidity').innerHTML = response.data.main.humidity;
  document.querySelector('#wind').innerHTML = Math.round(
    response.data.wind.speed,
  );
  document.querySelector('#feeling').innerHTML = Math.round(
    response.data.main.feels_like,
  );
  document.querySelector('#description').innerHTML =
    response.data.weather[0].main;
  console.log(response.data);
  axios.get(apiUrl).then(displayWeatherCondition);
}

let newCity = document.querySelector('#search-form');

newCity.addEventListener('submit', changeCityName);

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
