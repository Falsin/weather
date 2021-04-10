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
  const commonInfoElements = commonInfo.querySelectorAll('.commonInfoElement');

  obj.sunrise = `${new Date(obj.sunrise * 1000).getHours()}:${new Date(obj.sunrise * 1000).getMinutes()}`;
  obj.sunset = `${new Date(obj.sunset * 1000).getHours()}:${new Date(obj.sunset * 1000).getMinutes()}`;
  obj.visibility = `${obj.visibility / 1000}`;

  for (let i = 0; i < commonInfoElements.length; i++) {
    const childElem = createElem(commonInfoElements[i], 'span');
    childElem.textContent = `${obj[commonInfoElements[i].id]} ${commonInfoElements[i].dataset.inits || ''}`;
  }
}