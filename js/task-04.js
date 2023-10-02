const increase = document.querySelector('#counter button[data-action="increment"]');
const decrease = document.querySelector('#counter button[data-action="decrement"]');
const value = document.querySelector('#value') ;
let counterValue = 0;

function counterChange() {
    const up = increase.dataset.action;
    const down = decrease.dataset.action;
    if(this.dataset.action === up) {
        counterValue += 1;
        return value.innerHTML = counterValue;
    }
    if(this.dataset.action === down) {
        counterValue -= 1;
        return value.innerHTML = counterValue;
    }
};

increase.addEventListener('click', counterChange);
decrease.addEventListener('click', counterChange);