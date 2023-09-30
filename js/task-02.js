const recipe = document.querySelector('#ingredients');
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

recipe.innerHTML = `<li style="list-style:none;padding:0;"><h2>Ingredients:</h2></li>`;


for (const ingredient of ingredients) {
  const list = document.createElement("li");
  list.textContent = ingredient;
  recipe.append(list);
}