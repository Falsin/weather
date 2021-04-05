import './style.less';

/* fetch('http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=London', {mode: 'cors'})
  .then(response => {
    console.log(response.json());
  }) */

fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=7583fd4c80f1f8e75fe03f14d121ece0', {mode: 'cors'})
  .then(response => {
    console.log(response.json());
  })  