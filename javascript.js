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
  let weatherIcon = document.querySelector('#icon');
  weatherIcon.setAttribute(
    'src',
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  );
  console.log(response.data);
}

// Display real date

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

// Weather Icon

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
  // let cityName = 'keila';
  // let country = 'estonia';
  let apiKey = 'b12b8c320e790354505a00b09bac7098';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
// 1
let form = document.querySelector('#search-form');
form.addEventListener('submit', handleSubmit);

search('Tallinn');
