let display = "0";
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";

const displayDiv = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  currentOperator = "";
  display = "0";
 
}

function updateDisplay() {
  displayDiv.textContent = display;
}
updateDisplay();

function updateDisplay() {
  displayDiv.textContent = display;
}
updateDisplay();

function populateDisplay() {
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("num")) {
        // console.log("hello");
        operand(btn.textContent);
        updateDisplay();
      } else if (btn.classList.contains("operator")) {
        // console.log("operator");
        operator(btn.textContent);
        updateDisplay();
      } else if (btn.classList.contains("equals")) {
        // console.log("equals");
        equals();
        updateDisplay();
      } else if (btn.classList.contains("decimal")) {
        // console.log("decimal");
        
        decimal(btn.textContent);
        updateDisplay();
      } else if (btn.classList.contains("delete")) {
        console.log("delete");
        deleteNumber();
        updateDisplay();
      } else if (btn.classList.contains("clear")) {
        // console.log('clear')
        clearDisplay();
        updateDisplay();
      }
    });
  });
}
populateDisplay();

function operand(num) {
  if (currentOperator === "") {
    if (display === "0" || display === undefined) {
      display = num;
      console.log(display);
    } else if (display === firstNumber) {
      display = num;
    } else {
      display += num;
    }
  } else {
    if (display === firstNumber) {
      display = num;
    } else {
      display += num;
    }
  }
}
operand();

function operator(op) {
  if (currentOperator != "") {
    secondNumber=display
    display = operate(
      Number(firstNumber),
      Number(secondNumber),
      currentOperator
    );
    console.log(display);
    firstNumber = display;
    currentOperator = op;
  } else {
    currentOperator = op;
    firstNumber = display;
    console.log(currentOperator);
  }
}

function equals() {
  if (currentOperator === "") {
    display = display;
  } else {
    secondNumber = display;
    display = operate(
      Number(firstNumber),
      Number(secondNumber),
      currentOperator
    );
    console.log(display);
    firstNumber = display;
    currentOperator = "";
  }
  if (currentOperator === "") {
    display = display;
  } else {
    secondNumber = display;
    display = operate(
      Number(firstNumber),
      Number(secondNumber),
      currentOperator
    );
    console.log(display);
    firstNumber = display;
    currentOperator = "";
  }
}

function decimal(period) {
  if (display === firstNumber || display === secondNumber) {
    display = "0";
    display += period;
  } else if (display === "0" || display === undefined) {
    display = "0";
    display += period;
  } else if (!display.includes(period)) {
    display += period;
  }
}
function deleteNumber() {
  display = display.slice(0, display.length - 1);
}
function decimal(period) {
  if (display === firstNumber || display === secondNumber) {
    display = "0";
    display += period;
  } else if (display === "0" || display === undefined) {
    display = "0";
    display += period;
  } else if (!display.includes(period)) {
    display += period;
  }
}

function add(numOne, numTwo) {
  return numOne + numTwo;
}
function subtract(numOne, numTwo) {
  return numOne - numTwo;
}
function multiply(numOne, numTwo) {
  return numOne * numTwo;
}
function divide(numOne, numTwo) {
  return numOne / numTwo;
}

function operate(leftNum, rightNum, operator) {
  if (operator === "+") {
    return add(leftNum, rightNum);
  } else if (operator === "-") {
    return subtract(leftNum, rightNum);
  } else if (operator === "*") {
    return multiply(leftNum, rightNum);
  } else if (operator === "/") {
    return divide(leftNum, rightNum);
  }
}
