const inputNumber = document.querySelector("#controls input")
const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes(amount) {
  const divBoxes = []; 
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${(30 + i * 10)}px`;
    div.style.height = `${(30 + i * 10)}px`;
    divBoxes.push(div);
  }
  boxes.append(...divBoxes);
};

function createCollectionBoxes() {  
  createBoxes(inputNumber.value);
  createBtn.disabled = true;
  inputNumber.disabled = true;  
};

function destroyBoxes() {
  boxes.innerHTML = "";
  createBtn.disabled = false; 
  inputNumber.disabled = false;
};

createBtn.addEventListener("click", createCollectionBoxes);

destroyBtn.addEventListener("click", destroyBoxes);