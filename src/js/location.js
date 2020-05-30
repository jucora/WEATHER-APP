import info from "./weatherInfo";

const setInfo = (humidity, pressure) => {
  const infoBox = document.querySelector(".infoBox");
  infoBox.style.display = "block";
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
  if (res) {
    setInfo(res.main.humidity, res.main.pressure);
  }
}

export default get;
