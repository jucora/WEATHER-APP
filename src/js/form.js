import get from "./location";

const inputValidation = (input) => {
  if (input.value === null || input.value === "") {
    return false;
  } else {
    get(input.value);
  }
};

const buttonListener = (button, input) => {
  button.addEventListener("click", () => {
    inputValidation(input);
  });
};

const form = () => {
  const form = document.createElement("form");
  form.setAttribute("action", "#");
  const label = document.createElement("label");
  label.setAttribute("for", "searchInput");
  label.textContent = "City";
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "searchInput");
  input.setAttribute("placeholder", "City");
  input.setAttribute("required", true);
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonContainer");
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.textContent = "Search";
  buttonContainer.appendChild(button);
  buttonListener(button, input);
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(buttonContainer);
  return form;
};
export default form;
