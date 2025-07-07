function add(a, b) {
    console.log("hello there")
    opA = +a + +b;
    opB = '';
    // operator = undefined;
    disp.textContent = opA;
}

function subtract(a, b) {
    opA = +a - +b;
    opB = '';
    // operator = undefined;
    disp.textContent = opA
}

function multiply(a, b) {
    opA = +a * +b;
    opB = '';
    // operator = undefined;
    disp.textContent = opA;
}

function divide(a, b) {
    opA = +a / +b;
    opB = '';
    // operator = undefined;
    disp.textContent = Math.round( opA * 10) / 10;
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

function digitClick() {
    digits.forEach((digit) => {
        digit.addEventListener('click',() => {
            if (opA == '') {
                disp.textContent = '⁦'; 
            }
            if ( digit.textContent == '0' && operator == '/' ) {
                disp.textContent = 'ERROR'
            }
            else { disp.textContent += digit.textContent;
            input += digit.textContent;
            storeInput() }
        })
})
}

function operatorClick() {
    op.forEach((btn) => {
        btn.addEventListener('click', () => {
            if ( btn.textContent == 'clear' ) {
                clear();
            } else if ( btn.textContent === '=') {
                result = btn.textContent
                storeInput()
            } else {
                if ( btn.textContent != operator) {
                    disp.textContent = '⁦';
                    operate(opA, opB, operator);
                    operator = btn.textContent;
                }
                
                if ( !(opB === '') ) {
                    console.log("hello");
                    operate(opA, opB, operator);
                }
            }
            
        })
    })
}

function storeInput() {
    if ( result === '=') {
        operate(opA, opB, operator);
        result = undefined;
        opA = '';
        operator = undefined;
    } else if ( typeof operator === 'undefined') {
        opA += input;
        input = '';
    } else {
        // if (opB == '') {
        //     disp.textContent = '⁦'; 
        // }
        opB += +input;
        disp.textContent = opB;
        input = '';
    }
    
}

function clear() {
    opA = '';
    opB = '';
    operator = undefined;
    input = '';
    result = undefined;
    disp.textContent = '⁦';     
}

let opA = '';
let opB = '';
let operator;
let input = '';
let result;

const disp = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const op = document.querySelectorAll('.operator')


digitClick()
operatorClick();

