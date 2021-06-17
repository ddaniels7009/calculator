
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

button0.addEventListener('click', function () { display("0"); gatherValues("0") });
button1.addEventListener('click', function () { display("1"); gatherValues("1") });
button2.addEventListener('click', function () { display("2"); gatherValues("2") });
button3.addEventListener('click', function () { display("3"); gatherValues("3") });
button4.addEventListener('click', function () { display("4"); gatherValues("4") });
button5.addEventListener('click', function () { display("5"); gatherValues("5") });
button6.addEventListener('click', function () { display("6"); gatherValues("6") });
button7.addEventListener('click', function () { display("7"); gatherValues("7") });
button8.addEventListener('click', function () { display("8"); gatherValues("8") });
button9.addEventListener('click', function () { display("9"); gatherValues("9") });
clear.addEventListener('click', function () { clearAll(); });
plus.addEventListener('click', function () { display(" + "); gatherValues("+") });
minus.addEventListener('click', function () { display(" - "); gatherValues("-") });
divide.addEventListener('click', function () { display(" / ");; gatherValues("/") });
multiply.addEventListener('click', function () { display(" x "); gatherValues("x") });
equals.addEventListener('click', function () { display(" = "); gatherValues("=") });

let displayValue = 0;
let operand1 = "";
let operand2 = "";
let operator = "";
let operator2 = "";
let runningTotal = 0;
let firstTime = true;
let operatorCount = 0;
let holdMe = 0;

display(displayValue);

function gatherValues(input) {

    // Check if input is an operator. If it is, set the operator and add 1 to the operator count
    if (input == "+" || input == "-" || input == "/" || input == "x") {
       
        operator = input;
        operatorCount++;
        
        
        //console.log("Operator : " + operator);
    }
    
 

    // check if operator is the same as last time. **********************
    


    // Check if the first operand has already been set. If it hasn't, set the operand based on user input until another operator is entererd
    if (operator == "" && firstTime == true) {

        operand1 += input;


    }

    //set the first operand to the running total in order to run the next operation
    if (firstTime == false) {
       operand1 = runningTotal;
        console.log("wtf" + operand1);
    }

    // Set the second operand as long as the first operand has been set and the input is not an operator
    if (operator != "" && input != "+" && input != "-" && input != "/" && input != "x" && input != "=") {

        operand2 += input;

    }



    // Store all calculations prior to hitting equal sign
    if (operatorCount == 2 || input == "=" && firstTime == true) {

        console.log("Before Operator: " + operator);
        console.log("Before Op1: " + operand1);
        console.log("Before Op2: " + operand2);


        runningTotal = operate(operand1, operand2, operator);
        //operand1 = runningTotal;

    }


    if (firstTime == false) {
        operand1 = runningTotal;
    
        console.log("wtf" + operand1);
    }

    if (input == "=") {

        display(runningTotal, "equals");
    }


}

function setO(xxx){

}

function clearOperand() {
    operand2 = "";
    operatorCount--;
    firstTime = false;

}


function operate(operand1, operand2, operator) {


    console.log("After Operator: " + operator);
    console.log("After Op1: " + operand1);
    console.log("After Op2: " + operand2);

    let x = parseFloat(operand1);
    let y = parseFloat(operand2);
    let z = operator;

    clearOperand();

    if (z == "+") {

        return (sum(x, y));
    }
    if (z == "-") {

        return (subtract(x, y));
    }
    if (z == "/") {

        return (division(x, y));
    }
    if (z == "x") {

        return (multiplication(x, y));
    }
}

// Set display value based on user's button presses
function display(inputValue, equals) {

    if (inputValue == "clear") {
        displayValue = 0;
        inputValue = 0;
    }

    else if (displayValue == 0) {
        displayValue = inputValue;
    }
    else if (equals == "equals") {
        displayValue = inputValue;
    }
    else {
        displayValue += inputValue;
    }
    //console.log(displayValue);

    displayContainer.innerText = (displayValue)
}

function empty() {
    operand1 = "";
    operand2 = "";
    operator = "";
}

// Set display value to 0 if clear button is pressed
function clearAll() {
    display(displayValue = 0);
    operand1 = "";
    operand2 = "";
    operator = "";
    runningTotal = 0;
    firstTime = true;
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

