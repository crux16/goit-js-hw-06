const recipe = document.querySelector('#ingredients');
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const ingredient of ingredients) {
  const list = document.createElement("li");
  list.textContent = ingredient;
  recipe.append(list);
}