import './style.less';
import setTodayWeather from './tuneTodayWeatherBlock'
import setCommonInfo from './setCommonInfo'
import setDailyWeather from './setDailyWeatherBlock'


const todayWeather = document.getElementById('todayWeather');
const units = document.getElementById('units');

const input = document.querySelector('input');
const searchBtn = document.getElementById('searchBtn');
const btnUnits = units.querySelector('button');

let mainObj = {
  currentUnit: 'Kelvin',
  tempArrKeys: ['temp', 'feels_like', 'dew_point'],
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

searchBtn.addEventListener('mousedown', () => {
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
      mainObj.modifiedObj = response;

      rec(mainObj.modifiedObj, mainObj.tempArrKeys);
      deleteInfoFromTheSite()
      addInfoIntoTheSite(mainObj.modifiedObj, currentCityName);
      if (mainObj.currentUnit !== 'Kelvin') {
        const tempArr = document.querySelectorAll('.temp');
        mainObj.calcValue(tempArr);
      }
    })
}

function rec(obj, conditionArray) {
  for (const key in obj) {
    if (conditionArray.includes(key)) {
      if (typeof obj[key] != 'object') {
        obj[key] = obj[key] + ' K';
      } else {
        for (const prop in obj[key]) {
          obj[key][prop] = Math.round(obj[key][prop]) + ' K';
        }
      }
      
    } else if (Array.isArray(obj[key])) {
      for (const iterator of obj[key]) {
        rec(iterator, conditionArray);
      }

    } else if(typeof obj[key] == 'object') {
      rec(obj[key], conditionArray);
    }
  }
}

/* function rec(obj) {
  for (const key in obj) {
    if (key == 'temp' || key  == 'feels_like' || key == 'dew_point') {
      if (typeof obj[key] != 'object') {
        obj[key] = obj[key] + ' K';
      } else {
        for (const prop in obj[key]) {
          obj[key][prop] = Math.round(obj[key][prop]) + ' K';
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
} */

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
  if (mainObj.currentUnit == 'Kelvin') {
    btnUnits.textContent = '°С';
  } else {
    btnUnits.textContent = 'K';
  }

  const tempArr = document.querySelectorAll('.temp');

  mainObj.cnangeUnit(tempArr)
})