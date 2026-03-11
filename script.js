const btnsDigit = document.querySelectorAll(".btn-digit");
const calculation = document.querySelector(".calculation");
const currentNum = document.querySelector(".current");
const btnOperator = document.querySelectorAll(".btn-operator");
const equal = document.querySelector("#equal");
let operator;
let num1;
let num2;

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
    return a / b;
};


const operate = function(operator, num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "×") {
        return multiply(num1, num2);
    } else if (operator === "÷") {
        return divide(num1, num2);
    }
};


let numStr = "";

btnsDigit.forEach((btn) => {
    btn.addEventListener("click", (event) => {
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
        operator = event.target.textContent;
        num1 = numStr;
        calculation.textContent = num1 + " " + operator + " ";
        numStr = "";
    })
});


equal.addEventListener("click", () => {
    let result = operate(operator, num1, num2);
    currentNum.textContent = result;
    calculation.textContent += " = " + result;
})
