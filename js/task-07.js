const sizeController = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

sizeController.addEventListener('input', () => {
   output.style.fontSize = `${sizeController.value}px`;
});