function add(a, b) {
    disp.textContent = +a + +b;
}

function subtract(a, b) {
    disp.textContent = +a - +b;
}

function multiply(a, b) {
    disp.textContent = +a * +b;
}

function divide(a, b) {
    disp.textContent = +a / +b;
}

function operate(opA, opB, operator) {
    switch (operator) {
        case '+':
            add(opA, opB)
            break;
        case '-':
            subtract(opA, opB)
            break;
        case 'x':
            multiply(opA, opB)
            break;
        case '/':
            divide(opA, opB)
            break;
    }
}

let opA = '';
let opB = '';
let operator;
let input = '';
let result;

const disp = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const op = document.querySelectorAll('.operator')

function display() {
    digits.forEach((digit) => {
        digit.addEventListener('click',() => {
            disp.textContent += digit.textContent;
            input += digit.textContent;
            storeInput()
        })
})
}

display()

function operatorClick() {
    op.forEach((btn) => {
        btn.addEventListener('click', () => {
            if ( btn.textContent === '=') {
                result = btn.textContent
                storeInput();
            } else {
                operator = btn.textContent;
            disp.textContent = '⁦';
            storeInput()
            }
            
        })
    })
}

operatorClick();

function storeInput() {
    if ( result === '=') {
        operate(opA, opB, operator);
    }
    else if ( typeof operator === 'undefined') {
        opA += input;
        input = '';
    } else {
        opB += input;
        input = '';
    }
}