const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
const defaultName = outputName.innerHTML;

const theOutput = () => {
    if (inputName.value){
       return outputName.innerHTML = inputName.value;
    } 
       return outputName.innerHTML = defaultName;
};

inputName.addEventListener('input', theOutput);