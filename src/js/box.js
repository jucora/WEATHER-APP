const weatherBox = () => {
  const div = document.createElement("div");
  div.classList.add("weatherBox");
  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Weather";
  div.appendChild(title);
  return div;
};

export default weatherBox;
