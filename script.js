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

let num1, num2, operator;

const operate = function(operator, num1, num2) {
    if (operator === "+") {
        add(num1, num2);
    } else if (operator === "-") {
        subtract(num1, num2);
    } else if (operator === "*") {
        multiply(num1, num2);
    } else if (operator === "/") {
        divide(num1, num2);
    }
};


const btnsDigit = document.querySelectorAll(".btn-digit");
const currentNum = document.querySelector(".current");

const updateNum1 = function(num1) {
    btnsDigit.forEach((btn) => {
        btn.addEventListener("click", () => {
           // currentNum.textContent = btn.id;
            num1 = btn.id;
            currentNum.textContent = num1;
            console.log(num1);
        })
    })
}

updateNum1();