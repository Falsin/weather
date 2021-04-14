import createElem from 'create-html-node'

const commonInfo = document.getElementById('commonInfo');

function setCommonInfo(obj) {
  const commonInfoElements = commonInfo.querySelectorAll('.commonInfoElement');

  for (let i = 0; i < commonInfoElements.length; i++) {
    let objElem = obj[commonInfoElements[i].id];

    const childElem = createElem(commonInfoElements[i], 'span', 'class:commonWeatherInfo');
    childElem.textContent = `${objElem}`;

    if (typeof objElem == 'string' && objElem.includes('K')) {
      childElem.classList.add('temp')
    }
  }
}

export default setCommonInfo