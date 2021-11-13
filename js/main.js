//initial variables
const initialNumber = 0;
const initialInput = 1;

//changing variables
let displayNumber = initialNumber;
let inputNumber = initialInput;

//DOM elements
let displayElement = document.querySelector('.display');
let inputElement = document.querySelector('.input');
let plusButton = document.querySelector('.plus')
let minusButton = document.querySelector('.minus')

//Button operators
const add = () => {
    if (isNaN(inputElement.value)) {
        return;
    } else {
        displayNumber = parseInt(inputElement.value) + displayNumber;
        displayElement.innerHTML = displayNumber;
        changeColor();
    }
};

const minus = () => {
    if (isNaN(inputElement.value)) {
        return;
    } else {
        displayNumber = displayNumber - parseInt(inputElement.value);
        displayElement.innerHTML = displayNumber;
        changeColor();
    }
};

//Event listeners

plusButton.addEventListener('click', add);
minusButton.addEventListener('click', minus);

//Initial state

const initiallize = () => {
    displayElement.innerHTML = displayNumber;
    inputElement.value = inputNumber;
};

initiallize();

//Changing colors
const changeColor = () => {
    if (displayNumber < 0) {
        displayElement.style.color = 'red';
    } else {
        displayElement.style.color = 'black'
    }
};