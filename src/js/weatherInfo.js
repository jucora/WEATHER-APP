const info = (() => {
  const infoBox = document.createElement("div");
  infoBox.classList.add("infoBox");
  const humidityTitle = document.createElement("h2");
  humidityTitle.textContent = "Humidity";
  const humidityInfo = document.createElement("p");
  const pressureTitle = document.createElement("h2");
  pressureTitle.textContent = "Pressure";
  const pressureInfo = document.createElement("p");
  infoBox.appendChild(humidityTitle);
  infoBox.appendChild(humidityInfo);
  infoBox.appendChild(pressureTitle);
  infoBox.appendChild(pressureInfo);
  return {
    infoBox,
    humidityInfo,
    pressureInfo,
  };
})();

export default info;
