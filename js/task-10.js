function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const inputRange = document.querySelector('#controls input[type="number"]');
const boxes = document.querySelector('#boxes');
let inputAmount = 0;

function createBoxes(amount) {
  
  if(amount){
    let boxSize = 30;
    for(let i = 0; i < amount; i += 1){
      const box = document.createElement('div');
      box.className = 'box';
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.border = `1px inset ${getRandomHexColor()}`;
      boxes.appendChild(box);

      boxSize += 10;
    }
    return;
  }
   return alert('no amount inputted!');
}

inputRange.addEventListener('input', (event) =>{
  if (event.currentTarget.value > 100){
    alert('100 is the max range!');
    event.currentTarget.value = 100;
  }
  inputAmount = event.currentTarget.value;
});

createBtn.addEventListener('click', () => {
  return createBoxes(inputAmount);  
});

destroyBtn.addEventListener('click', () => {
  return boxes.innerHTML = '';
});