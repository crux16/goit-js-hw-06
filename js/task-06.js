const inputBox = document.querySelector('#validation-input');
const validate = document.querySelector('input[data-length="6"]');

inputBox.addEventListener('blur', () => {

    switch(inputBox.value.length){
        case parseFloat(validate.dataset.length):
            inputBox.classList.add('valid');
            inputBox.classList.remove('invalid');
            break;
        case 0:
            inputBox.classList.remove('valid');
            inputBox.classList.remove('invalid');
            break;
        default:
            inputBox.classList.remove('valid');
            inputBox.classList.add('invalid');
            break;
    }
});