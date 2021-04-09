import './style.less';
import createElem from 'create-html-node'

const input = document.querySelector('input');
const btn = document.querySelector('button');
const todayWeather = document.getElementById('todayWeather');


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
}

function setTodayWeather(currentWeather, hourlyWeather, currentCityName) {
  const cityName = todayWeather.querySelector('h2');
  const temp = todayWeather.querySelector('.temp');
  const hourlyWeatherBlock = document.getElementById('hourlyWeather');

  cityName.textContent = currentCityName;
  mainWeather.textContent = currentWeather.weather[0].main;
  temp.textContent = currentWeather.temp;

  createWeatherCell(hourlyWeatherBlock, 'Now', currentWeather, currentWeather.temp)

  for (let i = 0; i < 24; i++) {
    const hour = new Date(hourlyWeather[i].dt * 1000).getHours();
    const temp = hourlyWeather[i].temp;
    createWeatherCell(hourlyWeatherBlock, hour, hourlyWeather[i], hourlyWeather[i].temp)
  }
}

function createWeatherCell(parentElem, hour, array, temp) {
  const elem = createElem(parentElem, 'div', 'class:weatherIcons');
  createElem(elem, 'div', `${hour}`);
  const weatherImg = createElem(elem, 'div', 'class:weatherImg');
  weatherImg.style.backgroundImage = `url(http://openweathermap.org/img/wn/${array.weather[0].icon}@2x.png)`
  createElem(elem, 'div', `${temp}`);
}

function deleteInfoFromTheSite() {
  const weatherIcons = todayWeather.querySelectorAll('.weatherIcons');

  weatherIcons.forEach(elem => elem.remove())
}