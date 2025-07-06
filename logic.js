function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(opA, opB, operator) {
    switch (operator) {
        case '+':
            return add(opA, opB)
            break;
        case '-':
            return subtract(opA, opB)
            break;
        case '*':
            return multiply(opA, opB)
            break;
        case '/':
            return divide(opA, opB)
            break;
    }
}

let opA
let opB;
let operator;

