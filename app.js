let display = "";

let leftOperator = "";
let rightOperator = "";
let firstOperand = "";
let secondOperand = "";

const displayDiv = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

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

function clearDisplay() {
  calculator.leftOperator = "";
  calculator.rightOperator = "";
  calculator.firstOperand = "";
  calculator.secondOperand = "";
}

function populateDisplay() {
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("num")) {
        console.log("hello");
        display += btn.textContent;
        updateDisplay();
      } 
      else if (btn.classList.contains("operator")) {
        console.log("operator");
        updateDisplay();
      }
      else if (btn.classList.contains("equals")) {
        console.log("equals");
        updateDisplay();
      }
      else if (btn.classList.contains("decimal")) {
        console.log("decimal");
        updateDisplay();
      }
      else if (btn.classList.contains("delete")) {
        console.log("delete");
        updateDisplay();
      }
      else if (btn.classList.contains("clear")) {
        console.log("clear");
        updateDisplay();
      }
    });
  });
}
populateDisplay();

function operator() {
  if ((leftOperator = "")) {
    display = leftOperator;
    console.log(display);
  }
}
operator();


function updateDisplay() {
  displayDiv.textContent = display;
}
updateDisplay();

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
