import createElem from 'create-html-node'

const todayWeather = document.getElementById('todayWeather');
const mainWeather = document.getElementById('mainWeather')

function setTodayWeather(currentWeather, hourlyWeather, currentCityName) {
  const cityName = todayWeather.querySelector('h1');
  const temp = todayWeather.querySelector('.temp');
  const hourlyWeatherBlock = document.getElementById('hourlyWeather');

  cityName.textContent = currentCityName;
  mainWeather.textContent = currentWeather.weather[0].main;
  temp.textContent = currentWeather.temp;

  createWeatherCell(hourlyWeatherBlock, 'Now', currentWeather, currentWeather.temp)

  for (let i = 1; i < 25; i++) {
    let hour = new Date(hourlyWeather[i].dt * 1000).getHours();

    if (hour < 10) {
      hour = `0${hour}`
    }
    hour += `:00`

    const temp = hourlyWeather[i].temp;
    createWeatherCell(hourlyWeatherBlock, hour, hourlyWeather[i], temp)
  }
}

function createWeatherCell(parentElem, hour, array, temp) {
  const elem = createElem(parentElem, 'div', 'class:weatherIcons');
  createElem(elem, 'div').textContent = `${hour}`;
  
  const weatherImg = createElem(elem, 'div', 'class:weatherImg');
  weatherImg.style.backgroundImage = `url(http://openweathermap.org/img/wn/${array.weather[0].icon}@2x.png)`
  createElem(elem, 'div', `${temp}`, 'class:temp');
}

export default setTodayWeather