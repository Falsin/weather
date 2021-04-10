import createElem from 'create-html-node'

const commonInfo = document.getElementById('commonInfo');

function setCommonInfo(obj) {
  const commonInfoElements = commonInfo.querySelectorAll('.commonInfoElement');

  console.log(commonInfo)
  obj.sunrise = `${new Date(obj.sunrise * 1000).getHours()}:${new Date(obj.sunrise * 1000).getMinutes()}`;
  obj.sunset = `${new Date(obj.sunset * 1000).getHours()}:${new Date(obj.sunset * 1000).getMinutes()}`;
  obj.visibility = `${obj.visibility / 1000}`;

  for (let i = 0; i < commonInfoElements.length; i++) {
    const childElem = createElem(commonInfoElements[i], 'span');
    childElem.textContent = `${obj[commonInfoElements[i].id]} ${commonInfoElements[i].dataset.inits || ''}`;
  }
}

export default setCommonInfo