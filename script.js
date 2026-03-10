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
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
};


const btnsDigit = document.querySelectorAll(".btn-digit");
const currentNum = document.querySelector(".current");

let numStr = "";
btnsDigit.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        numStr += event.target.textContent;
        currentNum.textContent = numStr;
    })
});

const btnOperator = document.querySelectorAll(".btn-operator");

let operator;
let num1;
btnOperator.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        operator = event.target.textContent;
        currentNum.textContent = "";
        num1 = numStr;
        numStr = "";
    })
});

const equal = document.querySelector("#equal");

equal.addEventListener("click", () => {
    let result = operate(operator, num1, numStr);
    currentNum.textContent = result;
})
