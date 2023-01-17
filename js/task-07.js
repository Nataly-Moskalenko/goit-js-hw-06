const fontSizeControl = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

fontSizeControl.value = 16;

fontSizeControl.addEventListener("input", (event) => {
text.style.fontSize = `${event.currentTarget.value}px`;
})