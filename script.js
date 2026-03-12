const btnsDigit = document.querySelectorAll(".btn-digit");
const btnClear = document.querySelector(".btn-clear");
const calculation = document.querySelector(".calculation");
const currentNum = document.querySelector(".current");
const btnOperator = document.querySelectorAll(".btn-operator");
const equal = document.getElementById("=");
const btnDecimal = document.querySelector(".btn-decimal");
const btnDel = document.querySelector(".btn-delete");
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
        const divisionResult = divide(num1, num2);
        if (divisionResult === "Error") {
            return "Error";
        }
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
            result = undefined;
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
        btnDecimal.disabled = false;


    if (calculation.textContent === "" && currentNum.textContent === "" && numStr === "" && previousResult === undefined) {
        return
    };

        if ((numStr === "") && (previousResult === undefined)) {
            calculation.textContent = calculation.textContent.replace(operator, event.target.textContent);
            operator = event.target.textContent;
            return;
        }


        const operators = ["÷", "×", "-", "+"];
            if ((operators.some(i => calculation.textContent.includes(i))) && numStr !== "") {
                result = operate(operator, num1, num2);
                previousResult = result;
        }


        operator = event.target.textContent;
        num1 = numStr;
        currentNum.textContent = num1;
        calculation.textContent = num1 + " " + operator + " ";


        if (previousResult) {
            num1 = previousResult;
            calculation.textContent = previousResult + " " + operator + " ";
            currentNum.textContent = num1;
        }

        numStr = "";
    })
});


equal.addEventListener("click", () => {
    btnDecimal.disabled = false;
    if (calculation.textContent.includes("=")) {
        return
    }

    if (operator === "" || operator === undefined || numStr === "") {
    num1 = "";
    num2 = "";
    operator = "";
    previousResult = "";
    numStr = "";
    result = "";
    currentNum.textContent = "";
    calculation.textContent = "";
    return
    }

    result = operate(operator, num1, num2);
    currentNum.textContent = result;
    calculation.textContent += " = " + result;

});


btnClear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    previousResult = undefined;
    numStr = "";
    result = "";
    currentNum.textContent = "";
    calculation.textContent = "";
});

btnDecimal.addEventListener("click", () => {
    if (currentNum.textContent.includes(".")) {
        btnDecimal.disabled = true;
}})


 btnDel.addEventListener("click", () => {
    if (currentNum.textContent !== "") {
        numStr = numStr.slice(0, -1);
        num2 = numStr;
        currentNum.textContent = numStr;
    } 
    if ((calculation.textContent.includes(operator)) && (numStr !== "")) {
        calculation.textContent = calculation.textContent.slice(0, -1);
        return;
    }
})


document.addEventListener("keydown", function (event) { 
    const operatorIds = ["+", "-", "*", "/", "="];
    if (event.code.includes("Digit")) {
        document.getElementById(event.key).click();
    } else if (operatorIds.some(i => event.key.includes(i))) {
        document.getElementById(event.key).click();
    } else if (event.key === "Backspace") {
        btnDel.click();
    } else if (event.key === "Escape") {
        btnClear.click();
    } else if (event.key === "Enter") {
        equal.click();
    }
})
