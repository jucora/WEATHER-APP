import "./css/style.css";
import weatherBox from "./js/box";
import form from "./js/form";
import info from "./js/weatherInfo";

const structure = () => {
  for (let i = 1; i <= 4; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "cover" + i);
    div.classList.add("cover");
    document.querySelector("body").appendChild(div);
  }
  const weatherContainer = weatherBox();
  weatherContainer.appendChild(form());
  const container = document.querySelector(".container");
  container.appendChild(weatherContainer);
  weatherContainer.appendChild(info.infoBox);
};

document.addEventListener("DOMContentLoaded", structure());
