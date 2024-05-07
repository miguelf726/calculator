let numOne;
let numTwo;
let operator ;

const preview = document.querySelector('.preview')
const display = document.querySelector('.display')

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


function operate(operator, numOne, numTwo) {
  if (operator==='+') {
   return add(numOne, numTwo);
  }
  else if(operator==='-'){
    return subtract(numOne, numTwo)
  }
  else if(operator==='*'){
   return multiply(numOne, numTwo)
  }
  else if(operator==='/'){
   return divide(numOne, numTwo)
  }
}


console.log(operate('-',2, 3));
