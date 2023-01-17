const inputNumber = document.querySelector("#controls input")
const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes(amount) {
  const divBoxes = [];
  amount = inputNumber.value;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${(30 + i * 10)}px`;
    div.style.height = `${(30 + i * 10)}px`;
    //    
    divBoxes.push(div);
  }
  boxes.append(...divBoxes);
};

function destroyBoxes() {
  boxes.innerHTML = "";
}

// createBtn.addEventListener("click", () => {
//   const divBoxes = [];
//   const amount = inputNumber.value;
//   for (let i = 0; i < amount; i += 1) {
//     const div = document.createElement("div");
//     div.style.backgroundColor = getRandomHexColor();
//     div.style.width = `${(30 + i * 10)}px`;
//     div.style.height = `${(30 + i * 10)}px`;
//     console.log(div);
//     divBoxes.push(div);
//   }
//   boxes.append(...divBoxes);
// });