// Basic calculator

let displayValue = 0;       // Used to store the current number being manipulated by user
let storeValue = null;      // Used to store the previous number
let opStore = null;         // Used to store the most recently-selected operator
let lastNum = null;          // Used to store the type (number/equals or operator) of the most recent operator


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
    if (num2 === 0) {
        alert("Error! Cannot divide by zero.");
        return NaN;
    }
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
        lastNum = true;
    }
}

function clearDisplay() {
    displayValue = 0;
    storeValue = null;
    opStore = null;
    lastNum = null;
    updateDisplay();
}

function opButton(opInput) {
    // If the user has already input an operator before this current one
    // perform the previously staged operation
    if (lastNum === true) {     // Only operate if the last key pressed was a number
        if (opStore != null) {
            displayValue = operate(opStore, storeValue, displayValue);
            updateDisplay();
        }
        opStore = opInput;
        storeValue = displayValue;
        displayValue = 0;
        lastNum = false;
    }
}

function equals() {
    // Do nothing is the user hasn't selected an operator yet
    if (opStore != null) {
        displayValue = operate(opStore, storeValue, displayValue);
        opStore = null;
        lastNum = true;
        updateDisplay();
    }
}