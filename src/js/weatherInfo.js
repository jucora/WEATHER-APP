const info = (() => {
  const infoBox = document.createElement('div');
  infoBox.classList.add('infoBox');
  // SWITCH TEMP CONVERTER
  const switchBox = document.createElement('div');
  switchBox.classList.add('switchBox');
  switchBox.innerHTML += '<p>Celsius</p>';
  const switchInput = document.createElement('input');
  switchInput.setAttribute('type', 'checkbox');
  switchInput.setAttribute('id', 'switchInput');
  const switchLabel = document.createElement('label');
  switchLabel.setAttribute('for', 'switchInput');
  switchLabel.classList.add('lbl');
  switchBox.appendChild(switchInput);
  switchBox.appendChild(switchLabel);
  switchBox.innerHTML += '<p>Fahrenheit</p>';
  // LEFT INFO BOX
  const leftInfoBox = document.createElement('div');
  leftInfoBox.classList.add('leftInfoBox');
  // RIGHT INFO BOX
  const rightInfoBox = document.createElement('div');
  rightInfoBox.classList.add('rightInfoBox');

  const city = document.createElement('h1');
  const temperature = document.createElement('h2');
  temperature.classList.add('class', 'temperature');
  const image = document.createElement('img');
  image.classList.add('weatherImage');
  const weatherDetail = document.createElement('ul');
  weatherDetail.classList.add('weatherDetail');
  const weatherMain = document.createElement('li');
  weatherMain.textContent = 'Clouds:';
  const weatherDescription = document.createElement('li');
  weatherDetail.appendChild(weatherMain);
  weatherDetail.appendChild(weatherDescription);
  // HUMIDITY
  const humityDetail = document.createElement('ul');
  humityDetail.classList.add('weatherDetail');
  const humidityTitle = document.createElement('li');
  humidityTitle.textContent = 'Humidity:';
  const humidityInfo = document.createElement('li');
  humityDetail.appendChild(humidityTitle);
  humityDetail.appendChild(humidityInfo);
  // PRESSURE
  const pressureDetail = document.createElement('ul');
  pressureDetail.classList.add('weatherDetail');
  const pressureTitle = document.createElement('li');
  pressureTitle.textContent = 'Pressure: ';
  const pressureInfo = document.createElement('li');
  pressureDetail.appendChild(pressureTitle);
  pressureDetail.appendChild(pressureInfo);
  // MIN TEMPERATURE
  const minTempDetail = document.createElement('ul');
  minTempDetail.classList.add('weatherDetail');
  const minTempTitle = document.createElement('li');
  minTempTitle.textContent = 'Min Temp: ';
  const minTempInfo = document.createElement('li');
  minTempDetail.appendChild(minTempTitle);
  minTempDetail.appendChild(minTempInfo);
  // MAX TEMP
  const maxTempDetail = document.createElement('ul');
  maxTempDetail.classList.add('weatherDetail');
  const maxTempTitle = document.createElement('li');
  maxTempTitle.textContent = 'Max Temp: ';
  const maxTempInfo = document.createElement('li');
  maxTempDetail.appendChild(maxTempTitle);
  maxTempDetail.appendChild(maxTempInfo);
  // WIND SPEED
  const windSpeedDetail = document.createElement('ul');
  windSpeedDetail.classList.add('weatherDetail');
  const windSpeedTitle = document.createElement('li');
  windSpeedTitle.textContent = 'Wind Speed: ';
  const windSpeedInfo = document.createElement('li');
  windSpeedDetail.appendChild(windSpeedTitle);
  windSpeedDetail.appendChild(windSpeedInfo);

  leftInfoBox.appendChild(city);
  leftInfoBox.appendChild(temperature);
  leftInfoBox.appendChild(image);

  rightInfoBox.appendChild(weatherDetail);
  rightInfoBox.appendChild(humityDetail);
  rightInfoBox.appendChild(pressureDetail);
  rightInfoBox.appendChild(minTempDetail);
  rightInfoBox.appendChild(maxTempDetail);
  rightInfoBox.appendChild(windSpeedDetail);

  infoBox.appendChild(switchBox);
  infoBox.appendChild(leftInfoBox);
  infoBox.appendChild(rightInfoBox);

  return {
    infoBox,
    weatherMain,
    weatherDescription,
    city,
    temperature,
    image,
    humidityInfo,
    pressureInfo,
    minTempInfo,
    maxTempInfo,
    windSpeedInfo,
  };
})();

export default info;
