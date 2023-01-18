const btnChangeColor = document.querySelector(".widget .change-color");
const backgroundColor = document.querySelector(".widget .color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

btnChangeColor.addEventListener("click", () => {
  backgroundColor.textContent = getRandomHexColor();
  btnChangeColor.style.backgroundColor = getRandomHexColor();
});