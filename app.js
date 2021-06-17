
const displayContainer = document.getElementById('screen');


const button0 = document.getElementById('0');
const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const clear = document.getElementById('clear');
const plus = document.getElementById('sum');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const equals = document.getElementById('equals');

button0.addEventListener('click', function () { display("0"); holdingArea("0") });
button1.addEventListener('click', function () { display("1"); holdingArea("1") });
button2.addEventListener('click', function () { display("2"); holdingArea("2") });
button3.addEventListener('click', function () { display("3"); holdingArea("3") });
button4.addEventListener('click', function () { display("4"); holdingArea("4") });
button5.addEventListener('click', function () { display("5"); holdingArea("5") });
button6.addEventListener('click', function () { display("6"); holdingArea("6") });
button7.addEventListener('click', function () { display("7"); holdingArea("7") });
button8.addEventListener('click', function () { display("8"); holdingArea("8") });
button9.addEventListener('click', function () { display("9"); holdingArea("9") });
clear.addEventListener('click', function () { clearAll(); });
plus.addEventListener('click', function () { display(" + "); holdingArea("+") });
minus.addEventListener('click', function () { display(" - "); holdingArea("-") });
divide.addEventListener('click', function () { display(" / ");; holdingArea("/") });
multiply.addEventListener('click', function () { display(" x "); holdingArea("x") });
equals.addEventListener('click', function () { display(" = "); holdingArea("=") });

let displayValue = 0;
let operand1 = "";
let operand2 = "";
let operator = "";
let holdingValueForNextOperation = 0;
let firstTime = true;

display(displayValue);

function holdingArea(input) {


    if (input == "+" || input == "-" || input == "x" || input == "/") {
        operator = input;
        console.log("Operator in holding area: " + operator);

    }
    else if (operator == "") {
        operand1 += input;
        console.log("Operand 1 in holding area: " + operand1);
    }
    else if (operator != "") {
        operand2 += input;
       //console.log("Operand 2 in holding area: " + operand2);
    }

    if (input == "=") {

        operate(operand1, operand2, operator);

    }
}


function operate(operand1, operand2, operator) {

    let x = parseInt(operand1);
    let y = parseInt(operand2);

    if (operator == "+") {

        display(sum(x, y));
    }
    if (operator == "-") {

        display(subtract(x, y));
    }
    if (operator == "/") {

        display(division(x, y));
    }
    if (operator == "x") {

        display(multiplication(x, y));
    }
}

// Set display value based on user's button presses
function display(inputValue) {

    if (inputValue == "clear") {
        displayValue = 0;
        inputValue = 0;
    }

    if (displayValue == 0) {
        displayValue = inputValue;
    }
    else {
        displayValue += inputValue;
    }
    //console.log(displayValue);

    displayContainer.innerText = (displayValue)
}

// Set display value to 0 if clear button is pressed
function clearAll() {

    display("clear");
    operand1 = 0;
    operand2 = 0;
    operator = "";
    displayContainer.innerText = (0)
}

// Sum funtion
function sum(operand1, operand2) {

    return operand1 + operand2;

}
function subtract(operand1, operand2) {

    return operand1 - operand2;

}
function division(operand1, operand2) {

    return operand1 / operand2;

}
function multiplication(operand1, operand2) {

    return operand1 * operand2;

}

