const createSlideButtons = () => {
  const slideButtons = document.createElement("div");
  slideButtons.setAttribute("id", "slideButtons");
  return slideButtons;
};

const createSlide = (type) => {
  const slide = document.createElement("slide");
  slide.setAttribute("id", "slide");
  const ul = document.createElement("ul");
  slide.appendChild(ul);
  const li = document.createElement("li");
  ul.appendChild(li);
  const input = document.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("id", "button-" + i, "radio");
  input.setAttribute("name", "in");
  li.appendChild(input);
  const label = document.createElement("label");
  label.setAttribute("for", "button-" + i);
  li.appendChild(label);
  const slideContent = document.createElement("div");
  slideContent.classList.add("slideContent");
  li.appendChild(slideContent);

  return slide;
};

const info = (() => {
  const infoBox = document.createElement("div");
  infoBox.classList.add("infoBox");
  const city = document.createElement("h1");
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
  const temperatureDetail = document.createElement("ul");
  temperatureDetail.classList.add("weatherDetail");
  const temperatureTitle = document.createElement("li");
  temperatureTitle.textContent = "Temperature:";
  const temperatureInfo = document.createElement("li");
  temperatureDetail.appendChild(temperatureTitle);
  temperatureDetail.appendChild(temperatureInfo);
  weatherContainer.appendChild(weatherDetail);
  weatherContainer.appendChild(humityDetail);
  weatherContainer.appendChild(pressureDetail);
  weatherContainer.appendChild(temperatureDetail);
  const slideWeather = createSlide("weather");
  const slideMain = createSlide("main");
  const slideButtons = createSlideButtons();
  infoBox.appendChild(slideWeather);
  infoBox.appendChild(slideMain);
  infoBox.appendChild(slideButtons);
  infoBox.appendChild(city);
  infoBox.appendChild(image);
  infoBox.appendChild(line);
  infoBox.appendChild(weatherContainer);
  return {
    infoBox,
    weatherMain,
    weatherDescription,
    city,
    image,
    humidityInfo,
    pressureInfo,
    temperatureInfo,
  };
})();

export default info;
