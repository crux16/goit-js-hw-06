function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const inputRange = document.querySelector('#constrols input');
const boxes = document.querySelector('#boxes');



createBtn.addEventListener('click', () =>{
  
})