const btnsDigit = document.querySelectorAll(".btn-digit");
const btnClear = document.querySelector(".btn-clear");
const calculation = document.querySelector(".calculation");
const currentNum = document.querySelector(".current");
const btnOperator = document.querySelectorAll(".btn-operator");
const equal = document.querySelector("#equal");
let operator;
let num1;
let num2;
let result;
let numStr = "";
let previousResult;

const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    if (b === 0) {
        return "Error";
    } else 
    return a / b;
};


const operate = function(operator, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operator === "+") {
        return Math.round((add(num1, num2) + Number.EPSILON) * 100) / 100;
    } else if (operator === "-") {
        return Math.round((subtract(num1, num2) + Number.EPSILON) * 100) / 100;
    } else if (operator === "×") {
        return Math.round((multiply(num1, num2) + Number.EPSILON) * 100) / 100;
    } else if (operator === "÷") {
        return Math.round((divide(num1, num2) + Number.EPSILON) * 100) / 100;
    }
};



btnsDigit.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (calculation.textContent.includes("=")) {
            num1 = "";
            num2 = "";
            numStr = "";
            previousResult = "";
            calculation.textContent = "";
            currentNum.textContent = "";  
        }
        
        numStr += event.target.textContent;
        currentNum.textContent = numStr;
        num2 = numStr;

        if (calculation.textContent.includes(operator)) {
            calculation.textContent += event.target.textContent;
        }
    })
});


btnOperator.forEach((btn) => {
    btn.addEventListener("click", (event) => {


         //if after num1 we press operator, and then another operator, we need to only change the operator and nothing else
        // if the str is empty (meaning we already pressed operator before), and previousResult wasn't saved
        // we only change the operator and text on display
        // and return it to end the function
        if ((numStr === "") && (previousResult === undefined)) {
            calculation.textContent = calculation.textContent.replace(operator, event.target.textContent);
            operator = event.target.textContent;
            return;
        }

        
        // make new calculation using result of the first calc 
        // if there's already an operator on display and str is empty,
        // it makes an operation with 
        // captures the result in previousresult
        const operators = ["÷", "×", "-", "+"];
            if ((operators.some(i => calculation.textContent.includes(i))) && numStr !== "") {
                result = operate(operator, num1, num2);
                previousResult = result;
        }



        //captures operator, assigns str content to num1, prints num1 on display,
        // prints num1 + operator on display, empties the string.
        operator = event.target.textContent;
        num1 = numStr;
        currentNum.textContent = num1;
        calculation.textContent = num1 + " " + operator + " ";


        //if we captured a value in previousResult, it's going to use it for num1
        // it prints new num1 and operator
        // current number becomes result of previous operation
        if (previousResult) {
            num1 = previousResult;
            calculation.textContent = previousResult + " " + operator + " ";
            currentNum.textContent = num1;
        }

        numStr = "";
    })
});


equal.addEventListener("click", () => {
    result = operate(operator, num1, num2);
    currentNum.textContent = result;
    calculation.textContent += " = " + result;
});


btnClear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    previousResult = "";
    numStr = "";
    currentNum.textContent = "";
    calculation.textContent = "";
});
