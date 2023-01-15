const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const items = ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;
  return item;
});

list.append(...items);

// const items = [];
// ingredients.forEach((ingredient) => {
//   const item = document.createElement('li');
//   item.classList.add('item');
//   item.textContent = ingredient;
//   items.push(item);
// });
// list.append(...items);

// ingredients.forEach((ingredient) => {
//   const item = document.createElement('li');
//   item.classList.add('item');
//   item.textContent = ingredient;
//   list.appendChild(item);
// });

// const list = document.querySelector("#ingredients");
// const markup = ingredients
//   .map(ingredient => `<li class="item">${ingredient}</li>`)
//   .join("");
// console.log(markup);
// list.innerHTML = markup;
// console.log(list);
