let counterValue = 0;

const value = document.querySelector('#value');

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    value.textContent = counterValue;    
  });

const buttonIncrement = document.querySelector('button[data-action="increment"]');
buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    value.textContent = counterValue;   
  });