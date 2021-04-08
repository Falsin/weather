import './style.less';
  
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('mousedown', () => {
  showCityIntoConsole()
})

function showCityIntoConsole(params) {
  const cityName = input.value;
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
      console.log(response.json());
    })
  })
}

/* function showCityIntoConsole() {
  const cityName = input.value;
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&exclude=daily&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
  .then(response => {
    let answer = response.json();
    console.log(answer);
    return answer;
  })
  .then(response => {
    let answer = response.main;
    console.log(response.name)
    console.log(answer)
    return answer;
  })
  .then(response => {
    console.log(response.temp + " Fahrenheit");
    console.log(response.feels_like + " Fahrenheit")
    console.log('Привет!')
  })
} */

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
      console.log(response.json());
    })
  })
}