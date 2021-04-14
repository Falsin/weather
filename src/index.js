import './style.less';
import setTodayWeather from './tuneTodayWeatherBlock'
import setCommonInfo from './setCommonInfo'
import setDailyWeather from './setDailyWeatherBlock'

const todayWeather = document.getElementById('todayWeather');
const units = document.getElementById('units');
const searchBtn = document.getElementById('searchBtn');

const input = document.querySelector('input');
const btnUnits = units.querySelector('button');

let mainObj = {
  currentUnit: 'Kelvin',
  tempArrKeys: ['temp', 'feels_like', 'dew_point'],
  percentArrKeys: ['clouds', 'humidity'],
  pressureArrKeys: ['pressure'],
  visibilityArrKeys: ['visibility'],
};

mainObj.cnangeUnit = function (arr) {
  if (this.currentUnit == 'Kelvin') {
    this.currentUnit = 'Celsius';
    this.calcValue(arr);
  } else {
    this.currentUnit = 'Kelvin';
    this.calcValue(arr);
  }
}

mainObj.calcValue = function (arr) {
  if (this.currentUnit !== 'Kelvin') {
    arr.forEach(elem => {
      let splitedString = elem.textContent.split(' ');
      elem.textContent =  Math.round(+splitedString[0] - 273,15) + ' °С';
    })
  } else {
    arr.forEach(elem => {
      let splitedString = elem.textContent.split(' ');
      elem.textContent =  Math.round(+splitedString[0] + 273,15) + ' K';
    })
  }
}

mainObj.changeFormatValues = function () {
  let that = this.modifiedObj.current;

  that.sunrise = `${new Date(that.sunrise * 1000).getHours()}:${new Date(that.sunrise * 1000).getMinutes()}`;
  that.sunset = `${new Date(that.sunset * 1000).getHours()}:${new Date(that.sunset * 1000).getMinutes()}`;
  that.visibility = `${that.visibility / 1000}`;
}

searchBtn.addEventListener('mousedown', () => processingRequest(input.value))

window.onload = () => processingRequest('London');

function processingRequest(currentCityName) {
  returnCityCoord(currentCityName)
    .then(response => {
      return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.lat}&lon=${response.lon}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
    })
    .then(response => response.json())
    .then(response => {
      mainObj.modifiedObj = response;

      mainObj.changeFormatValues()

      rec(mainObj.modifiedObj, mainObj.tempArrKeys, 'K');
      rec(mainObj.modifiedObj, mainObj.percentArrKeys, '%');
      rec(mainObj.modifiedObj, mainObj.pressureArrKeys, 'hPa');
      rec(mainObj.modifiedObj, mainObj.visibilityArrKeys, 'km');

      deleteInfoFromTheSite()
      addInfoIntoTheSite(mainObj.modifiedObj, currentCityName);

      if (mainObj.currentUnit !== 'Kelvin') {
        const tempArr = document.querySelectorAll('.temp');
        mainObj.calcValue(tempArr);
      }
    })
}

function rec(obj, conditionArray, unit) {
  for (const key in obj) {
    if (conditionArray.includes(key)) {
      if (typeof obj[key] != 'object') {
        obj[key] = Math.round(+obj[key]) + ` ${unit}`;
      } else {
        for (const prop in obj[key]) {
          obj[key][prop] = Math.round(+obj[key][prop]) + ` ${unit}`;
        }
      }
      
    } else if (Array.isArray(obj[key])) {
      for (const iterator of obj[key]) {
        rec(iterator, conditionArray, unit);
      }

    } else if(typeof obj[key] == 'object') {
      rec(obj[key], conditionArray, unit);
    }
  }
}

function returnCityCoord(currentCityName) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
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
  const commonWeatherInfo = document.querySelectorAll('.commonWeatherInfo');
  const tableLines = document.querySelectorAll('.tableLine');

  weatherIcons.forEach(elem => elem.remove());
  commonWeatherInfo.forEach(elem => elem.remove());
  tableLines.forEach(elem => elem.remove());
}

btnUnits.addEventListener('mousedown', () => {
  btnUnits.textContent = (mainObj.currentUnit == 'Kelvin') ? '°С' : 'K';
  const tempArr = document.querySelectorAll('.temp');
  mainObj.cnangeUnit(tempArr)
})