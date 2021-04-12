import createElem from 'create-html-node'

const dailyWeather = document.getElementById('dailyWeather');

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
    const tableLine = createElem(table, 'tr');
    createElem(tableLine, 'td', `${daysArray[new Date(array[i].dt * 1000).getDay()]}`);

    const weatherIconCeil = createElem(tableLine, 'td');
    const weatherIcon = createElem(weatherIconCeil, 'img');
    weatherIcon.src = `http://openweathermap.org/img/wn/${array[i].weather[0].icon}@2x.png`;

    createElem(tableLine, 'td', `${array[i].humidity} %`);

    const tempBlock = createElem(tableLine, 'td');
    createElem(tempBlock, 'div', `${array[i].temp.day}`, 'class: temp');
    createElem(tempBlock, 'div', `${array[i].temp.night}`, 'class: temp');
  }
}

export default setDailyWeather