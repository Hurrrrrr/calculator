// Basic calculator

let displayValue = 0;
let storeValue = null;
let opStore = null;


function addition(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

function operate(operator, first, second) {
    switch(operator) {
        case "add":
            return addition(first, second);
        case "sub":
            return subtract(first, second);
        case "mul":
            return multiply(first, second);
        case "divy":
            return divide(first, second);
    }
}

function updateDisplay() {
    const display = document.getElementById("display");
    display.innerText = displayValue;
}

function numButton(num) {
    if (displayValue < 1000000000 && displayValue > -1000000000) {      // ensure the number is fewer than ten digits
        displayValue = (displayValue * 10) + num;                       // press the calculator number button
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = 0;
    storeValue = null;
    opStore = null;
    updateDisplay();
}

function opButton(opInput) {
    if (opStore != null) {
        displayValue = operate(opStore, storeValue, displayValue);
        updateDisplay();
    }
    opStore = opInput;
    storeValue = displayValue;
    displayValue = 0;
}

function equals() {
    displayValue = operate(opStore, storeValue, displayValue);
    updateDisplay();
}