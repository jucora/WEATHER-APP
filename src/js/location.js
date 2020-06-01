import info from "./weatherInfo";

const setInfo = (
  city,
  icon,
  weatherDescription,
  humidity,
  pressure,
  temperature
) => {
  const infoBox = document.querySelector(".infoBox");
  infoBox.style.display = "block";
  info.city.textContent = city;
  info.image.setAttribute(
    "src",
    "http://openweathermap.org/img/w/" + icon + ".png"
  );
  info.temperature.textContent = Math.trunc(temperature - 273.15);
  info.temperature.innerHTML += " <sup>°C</sup>";
  info.weatherDescription.textContent = weatherDescription;
  info.humidityInfo.textContent = humidity;
  info.pressureInfo.textContent = pressure;
};

async function get(city) {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=b0b84588a72bb1a0b05cf80c44a63e31",
    { mode: "cors" }
  );
  const res = await response.json();
  console.log(res);
  if (res) {
    setInfo(
      res.name,
      res.weather[0].icon,
      res.weather[0].description,
      res.main.humidity,
      res.main.pressure,
      res.main.temp
    );
  }
}

export default get;
