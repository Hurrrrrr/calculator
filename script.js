// Basic calculator

let displayValue = 0;
let numStore = null;


function add(num1, num2) {
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
        case "+":
            return add(first, second);
        case "-":
            return subtract(first, second);
        case "*":
            return multiply(first, second);
        case "/":
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
    numStore = null;
    updateDisplay();
}