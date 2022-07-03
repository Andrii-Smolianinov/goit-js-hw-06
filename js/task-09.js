function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const BackgroundColorEl = document.querySelector("span.color");
const buttonChangeColorEl = document.querySelector("button.change-color");

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  BackgroundColorEl.textContent = getRandomHexColor();
}

buttonChangeColorEl.addEventListener("click", changeColor);
