let display = "";

let firstNumber = "";
let secondNumber = "";
let firstOperator = "";
let secondOperator = "";

const displayDiv = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  firstOperator = "";
  secondOperator = "";
  display = "";
}

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
equals()
        updateDisplay();
      } else if (btn.classList.contains("decimal")) {
        console.log("decimal");
        updateDisplay();
      } else if (btn.classList.contains("delete")) {
        console.log("delete");
        updateDisplay();
      } else if (btn.classList.contains("clear")) {
        clearDisplay();
        updateDisplay();
      }
    });
  });
}
populateDisplay();

function operand(num) {
  if (firstOperator === "") {
    if (display === "" || display === undefined) {
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

// function operator(op) {
//   firstNumber = display;
//   firstOperator = op;
//   console.log(firstOperator);
// }

// function equals() {
//   if(firstOperator===''){
//     display=display
//   }else {
//     secondNumber=display
//     operate(firstOperator, secondOperator, firstOperator)
//   }
// }

function updateDisplay() {
  displayDiv.textContent = display;
}
updateDisplay();

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
