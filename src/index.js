import './style.less';
import setTodayWeather from './tuneTodayWeatherBlock'
import setCommonInfo from './setCommonInfo'
import setDailyWeather from './setDailyWeatherBlock'


const todayWeather = document.getElementById('todayWeather');
const units = document.getElementById('units');

const input = document.querySelector('input');
const btn = document.querySelector('button');
const btnUnits = units.querySelector('button');

let modifiedObj;



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
      modifiedObj = response;
      modifiedObj.currentUnit = 'Kelvin';
/*       modifiedObj.changeUnit = () => {

      } */

      rec(modifiedObj);
      deleteInfoFromTheSite()
      addInfoIntoTheSite(modifiedObj, currentCityName);
    })
}

function rec(obj) {
  for (const key in obj) {
    if (key == 'temp' || key  == 'feels_like' || key == 'dew_point') {
      if (typeof obj[key] != 'object') {
        obj[key] = obj[key] + ' K';
      } else {
        for (const prop in obj[key]) {
          obj[key][prop] = obj[key][prop] + ' K';
        }
      }
      
    } else if (Array.isArray(obj[key])) {
      for (const iterator of obj[key]) {
        rec(iterator);
      }

    } else if(typeof obj[key] == 'object') {
      rec(obj[key]);
    }
  }
}

function returnCityCoord(currentCityName) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => response.coord)
}

function addInfoIntoTheSite(obj, currentCityName) {
  setTodayWeather(obj.current, obj.hourly, currentCityName);
  setCommonInfo(obj.current);
  setDailyWeather(obj.daily)
}

function deleteInfoFromTheSite() {
  const weatherIcons = todayWeather.querySelectorAll('.weatherIcons');

  weatherIcons.forEach(elem => elem.remove())
}

btnUnits.addEventListener('mousedown', () => {
  const tempArr = document.querySelectorAll('.temp');
  
  console.log(tempArr)

  if (modifiedObj.currentUnit == 'Kelvin') {
    
  }
})