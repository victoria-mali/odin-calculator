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
let res1;

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
            res1 = "";
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
        if (calculation.textContent.includes(operator)) {
            result = operate(operator, num1, num2);
            res1 = result;
            currentNum.textContent = res1;
        }
        
        operator = event.target.textContent;
        num1 = numStr;
        currentNum.textContent = num1;

        if (res1) {
            num1 = res1;
            calculation.textContent = res1 + " " + operator + " ";
            currentNum.textContent = num1;
        } else {
            calculation.textContent = num1 + " " + operator + " ";
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
    res1 = "";
    numStr = "";
    currentNum.textContent = "";
    calculation.textContent = "";
});

