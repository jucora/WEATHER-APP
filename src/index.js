import "./css/style.css";
import weatherBox from "./js/box";
import form from "./js/form";
import info from "./js/weatherInfo";

const structure = () => {
  const weatherContainer = weatherBox();
  weatherContainer.appendChild(form());
  const container = document.querySelector(".container");
  container.appendChild(weatherContainer);
  weatherContainer.appendChild(info.infoBox);
};

document.addEventListener("DOMContentLoaded", structure());
