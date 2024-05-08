let rightNum = "";
let leftNum = "";
let operator = "";

const preview = document.querySelector(".preview");
const display = document.querySelector(".display");
const numberBtn = document.querySelectorAll(".num");
const operandBtn = document.querySelectorAll(".operand");
const clearBtn = document.querySelector(".clear");

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

console.log(operate("-"));

function clearDisplay() {
  return (display.textContent = "");
}

clearBtn.addEventListener("click", () => {
  display.textContent = "";
  preview.textContent = "";
});

const digit = numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("num");
    display.textContent += btn.textContent;
    preview.textContent += btn.textContent;
  });
});
const operand = operandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("num");
    preview.textContent += btn.textContent;
  });
});


function operate(operator) {

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
  
