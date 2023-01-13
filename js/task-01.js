const items = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${items.length}`);

for (let item of items) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}