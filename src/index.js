import "./css/style.css";
import weatherBox from "./js/box";
import form from "./js/form";

async function getLocation() {
  const weatherBox = document.querySelector(".weatherBox");
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=b0b84588a72bb1a0b05cf80c44a63e31",
    { mode: "cors" }
  );
  const res = await response.json();
  weatherBox.innerHTML += res.weather[0].description;
}

const searchInput = () => {
  const weatherBox = document.querySelector(".weatherBox");
  weatherBox.appendChild(form());
};

const start = () => {
  const container = document.querySelector(".container");
  container.appendChild(weatherBox());
  searchInput();
  getLocation();
};

document.addEventListener("DOMContentLoaded", start());
