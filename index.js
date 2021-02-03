// JavaScript Data Types Homework
// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   'san francisco': {
//     temp: 20.9,
//     humidity: 100,
//   },
//   moscow: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// let city = prompt('Enter a city');
// city = city.toLowerCase();
// city = city.trim();
// if (weather[city] !== undefined) {
//   let temperature = weather[city].temp;
//   let humidity = weather[city].humidity;
//   let celsiusTemperature = Math.round(temperature);
//   let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
//   alert(
//     `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature})°F in ${city} with a humidity of ${humidity}% `,
//   );
// } else {
//   alert(
//     `Sorry we dont know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`,
//   );
// }

// HTML/CSS to JS

// 1

let now = new Date();
let h2 = document.querySelector('h2');

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

h2.innerHTML = `${day}, ${date} ${month}, ${year}, ${hour}:${minutes}`;

function search(city) {
  let apiKey = 'b12b8c320e790354505a00b09bac7098';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
// 3
// function convertToFahrenheit(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector('#temperature');
//   temperatureElement.innerHTML = '26';
// }

// function convertToCelsius(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector('#temperature');
//   temperatureElement.innerHTML = '-3°';
// }

// let fahrenheitLink = document.querySelector('#fahrenheit-link');
// fahrenheitLink.addEventListener('click', convertToFahrenheit);

// let celsiusLink = document.querySelector('#celsius-link');
// celsiusLink.addEventListener('click', convertToCelsius);

// let searchForm = document.querySelector('#search-form');
// searchForm.addEventListener('submit', changeCityName);

search('Tallinn');
