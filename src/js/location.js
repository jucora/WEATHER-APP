import info from './weatherInfo';

const fahrenheit = (temperature, minTemp, maxTemp) => {
  info.temperature.textContent = Math.trunc(
    (9 * (temperature - 273.15)) / 5 + 32,
  );
  info.temperature.innerHTML += ' <sup>°F</sup>';
  info.minTempInfo.textContent = Math.trunc((9 * (minTemp - 273.15)) / 5 + 32);
  info.minTempInfo.innerHTML += ' <sup>°F</sup>';
  info.maxTempInfo.textContent = Math.trunc((9 * (maxTemp - 273.15)) / 5 + 32);
  info.maxTempInfo.innerHTML += ' <sup>°F</sup>';
};

const celsius = (temperature, minTemp, maxTemp) => {
  info.temperature.textContent = Math.trunc(temperature - 273.15);
  info.temperature.innerHTML += ' <sup>°C</sup>';
  info.minTempInfo.textContent = Math.trunc(minTemp - 273.15);
  info.minTempInfo.innerHTML += ' <sup>°C</sup>';
  info.maxTempInfo.textContent = Math.trunc(maxTemp - 273.15);
  info.maxTempInfo.innerHTML += ' <sup>°C</sup>';
};

const tempConverter = (temperature, minTemp, maxTemp) => {
  const switchInput = document.querySelector('#switchInput');
  switchInput.addEventListener('click', () => {
    if (switchInput.checked) {
      fahrenheit(temperature, minTemp, maxTemp);
    } else {
      celsius(temperature, minTemp, maxTemp);
    }
  });
};

const setInfo = (
  city,
  country,
  icon,
  weatherDescription,
  humidity,
  pressure,
  temperature,
  minTemp,
  maxTemp,
  windSpeed,
) => {
  const infoBox = document.querySelector('.infoBox');
  infoBox.style.display = 'block';
  info.city.textContent = city;
  info.city.innerHTML += ` <sup>${country}</sup>`;
  info.image.setAttribute('src', `http://openweathermap.org/img/w/${icon}.png`);

  info.weatherDescription.textContent = weatherDescription;
  info.humidityInfo.textContent = humidity;
  info.pressureInfo.textContent = pressure;
  document.querySelector('#switchInput').checked = false;
  celsius(temperature, minTemp, maxTemp);
  tempConverter(temperature, minTemp, maxTemp);
  info.windSpeedInfo.textContent = windSpeed;
};

async function get(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0b84588a72bb1a0b05cf80c44a63e31`,
    { mode: 'cors' },
  );
  const res = await response.json();
  if (res) {
    setInfo(
      res.name,
      res.sys.country,
      res.weather[0].icon,
      res.weather[0].description,
      res.main.humidity,
      res.main.pressure,
      res.main.temp,
      res.main.temp_min,
      res.main.temp_max,
      res.wind.speed,
    );
  }
}

export default get;
