const bgChange = document.querySelector('.widget');
const bgBtn = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

bgBtn.addEventListener('click', () => {
  const bgHex = document.querySelector('.color');
  const randomColor = getRandomHexColor();
  bgChange.style.backgroundColor = randomColor;
  bgHex.innerHTML = randomColor;
})