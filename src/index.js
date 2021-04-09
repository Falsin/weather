import './style.less';
  
const input = document.querySelector('input');
const btn = document.querySelector('button');
const cityName = document.querySelector('h2');

btn.addEventListener('mousedown', () => {
  processingRequest(input.value);
})

window.onload = () => {
  processingRequest('London')
}

function processingRequest(currentCityName) {
  returnCityCoord(currentCityName)
    .then(response => {
      return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.lat}&lon=${response.lon}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
    })
    .then(response => response.json())
    .then(response => addInfoIntoTheSite(response))
}

function returnCityCoord(currentCityName) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => response.coord)
}

function addInfoIntoTheSite(obj) {
  console.log(obj);
}

/* window.onload = () => {
  const currentCityName = 'London';
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
  .then(response => response.json())
  .then(response => {
    let coord = {
      lat: response.coord.lat,
      lon: response.coord.lon,
    };
    return coord;
  })
  .then(response => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.lat}&lon=${response.lon}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
    .then(response => {
      return response.json()
    })
    .then(response => {
      cityName.textContent = currentCityName;
      console.log(response)
    })
  })
} */

/* btn.addEventListener('mousedown', () => {
  showCityIntoConsole()
})

function showCityIntoConsole(params) {
  const cityName = input.value;
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
  .then(response => response.json())
  .then(response => {
    let coord = {
      lat: response.coord.lat,
      lon: response.coord.lon,
    };
    return coord;
  })
  .then(response => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.lat}&lon=${response.lon}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
    .then(response => {
      console.log(response.json());
    })
  })
}

window.onload = () => {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=7583fd4c80f1f8e75fe03f14d121ece0', {mode: 'cors'})
  .then(response => response.json())
  .then(response => {
    let coord = {
      lat: response.coord.lat,
      lon: response.coord.lon,
    };
    return coord;
  })
  .then(response => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.lat}&lon=${response.lon}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
    .then(response => {
      let answer = response.json();
      console.log(answer);
      return answer;
    })
    .then(response => {
      let currentDate = new Date(response.current.dt * 1000);
      console.log(currentDate)
    })
  })
} */