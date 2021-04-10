import './style.less';
import createElem from 'create-html-node'
import setTodayWeather from './tuneTodayWeatherBlock'

const input = document.querySelector('input');
const btn = document.querySelector('button');
const todayWeather = document.getElementById('todayWeather');
const commonInfo = document.getElementById('commonInfo');


btn.addEventListener('mousedown', () => {
  processingRequest(input.value);
})

window.onload = () => processingRequest('London');

function processingRequest(currentCityName) {
  returnCityCoord(currentCityName)
    .then(response => {
      return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.lat}&lon=${response.lon}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
    })
    .then(response => response.json())
    .then(response => {
      deleteInfoFromTheSite()
      addInfoIntoTheSite(response, currentCityName);
    })
}

function returnCityCoord(currentCityName) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => response.coord)
}

function addInfoIntoTheSite(obj, currentCityName) {
  //console.log(obj);
  setTodayWeather(obj.current, obj.hourly, currentCityName)
  setCommonInfo(obj.current)
}

function deleteInfoFromTheSite() {
  const weatherIcons = todayWeather.querySelectorAll('.weatherIcons');

  weatherIcons.forEach(elem => elem.remove())
}

function setCommonInfo(obj) {
  console.log(obj)

  const clouds = document.getElementById('clouds');
  createElem(clouds, 'span', `${obj.clouds} %`);

  const dewPoint = document.getElementById('dew_point');
  createElem(dewPoint, 'span', `${obj.dew_point} K`);

  const feelsLike = document.getElementById('feels_like');
  createElem(feelsLike, 'span', `${obj.feels_like} K`);

  const humidity = document.getElementById('humidity');
  createElem(humidity, 'span', `${obj.humidity} %`);

  const pressure = document.getElementById('pressure');
  createElem(pressure, 'span', `${obj.pressure} hPa`);

  const sunrise = document.getElementById('sunrise');
  const timeSunrise = createElem(sunrise, 'span');
  timeSunrise.textContent = `${new Date(obj.sunrise * 1000).getHours()}:${new Date(obj.sunrise * 1000).getMinutes()}`;

  const sunset = document.getElementById('sunset');
  const timeSunset = createElem(sunset, 'span');
  timeSunset.textContent = `${new Date(obj.sunset * 1000).getHours()}:${new Date(obj.sunset * 1000).getMinutes()}`;
} 