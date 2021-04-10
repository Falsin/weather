import './style.less';
import createElem from 'create-html-node'
import setTodayWeather from './tuneTodayWeatherBlock'
import setCommonInfo from './setCommonInfo'

const input = document.querySelector('input');
const btn = document.querySelector('button');
const todayWeather = document.getElementById('todayWeather');
const dailyWeather = document.getElementById('dailyWeather');


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
  console.log(obj);
  setTodayWeather(obj.current, obj.hourly, currentCityName);
  setCommonInfo(obj.current);
  setDailyWeather(obj.daily)
}

function setDailyWeather(array) {
  const daysArray = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
  ]

  for (let i = 1; i < array.length; i++) {
    const table = dailyWeather.querySelector('table');
    const dayLine = createElem(table, 'tr');
    createElem(dayLine, 'td', `${daysArray[new Date(array[i].dt * 1000).getDay()]}`);
    const weatherIcon = createElem(dayLine, 'td');
    //console.log(array[i].weather[0].icon)
    weatherIcon.style.backgroundImage = `url(http://openweathermap.org/img/wn/${array[i].weather[0].icon}@2x.png)`

    for (let i = 0; i < 2; i++) {
      const element = createElem(dayLine, 'td', 'Hello!');
    }
  }
}

function deleteInfoFromTheSite() {
  const weatherIcons = todayWeather.querySelectorAll('.weatherIcons');

  weatherIcons.forEach(elem => elem.remove())
}