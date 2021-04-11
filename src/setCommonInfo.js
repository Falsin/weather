import createElem from 'create-html-node'

const commonInfo = document.getElementById('commonInfo');

function setCommonInfo(obj) {
  const commonInfoElements = commonInfo.querySelectorAll('.commonInfoElement');

  obj.sunrise = `${new Date(obj.sunrise * 1000).getHours()}:${new Date(obj.sunrise * 1000).getMinutes()}`;
  obj.sunset = `${new Date(obj.sunset * 1000).getHours()}:${new Date(obj.sunset * 1000).getMinutes()}`;
  obj.visibility = `${obj.visibility / 1000}`;


  for (let i = 0; i < commonInfoElements.length; i++) {
    const units = commonInfoElements[i].dataset.units || '';
    const childElem = createElem(commonInfoElements[i], 'span');
    childElem.textContent = `${obj[commonInfoElements[i].id]} ${units}`;

    if (units == 'K') {
      childElem.dataset.units = 'K';
    }
  }

  //console.log(obj)
}

export default setCommonInfo