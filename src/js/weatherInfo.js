const info = (() => {
  const infoBox = document.createElement("div");
  infoBox.classList.add("infoBox");
  const city = document.createElement("h1");
  const temperature = document.createElement("h2");
  temperature.classList.add("class", "temperature");
  const line = document.createElement("hr");
  const image = document.createElement("img");
  image.classList.add("weatherImage");
  const weatherContainer = document.createElement("div");
  weatherContainer.classList.add("weatherContainer");
  const weatherDetail = document.createElement("ul");
  weatherDetail.classList.add("weatherDetail");
  const weatherMain = document.createElement("li");
  weatherMain.textContent = "Clouds:";
  const weatherDescription = document.createElement("li");
  weatherDetail.appendChild(weatherMain);
  weatherDetail.appendChild(weatherDescription);

  const humityDetail = document.createElement("ul");
  humityDetail.classList.add("weatherDetail");
  const humidityTitle = document.createElement("li");
  humidityTitle.textContent = "Humidity:";
  const humidityInfo = document.createElement("li");
  humityDetail.appendChild(humidityTitle);
  humityDetail.appendChild(humidityInfo);
  const pressureDetail = document.createElement("ul");
  pressureDetail.classList.add("weatherDetail");
  const pressureTitle = document.createElement("li");
  pressureTitle.textContent = "Pressure: ";
  const pressureInfo = document.createElement("li");
  pressureDetail.appendChild(pressureTitle);
  pressureDetail.appendChild(pressureInfo);

  weatherContainer.appendChild(weatherDetail);
  weatherContainer.appendChild(humityDetail);
  weatherContainer.appendChild(pressureDetail);

  infoBox.appendChild(city);
  infoBox.appendChild(temperature);
  infoBox.appendChild(image);
  infoBox.appendChild(line);
  infoBox.appendChild(weatherContainer);
  return {
    infoBox,
    weatherMain,
    weatherDescription,
    city,
    temperature,
    image,
    humidityInfo,
    pressureInfo,
  };
})();

export default info;
