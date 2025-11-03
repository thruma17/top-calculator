console.clear();

// math variables
let num1 = ``;
let num2 = ``;
let operator = ``;
let result = 0;

// buttons variables
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const showResult = document.querySelector(".result");

// basic math functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

// calculator operation function
function operate(num1, operator, num2) {
  switch (operator) {
    case `+`:
      return add(num1, num2);
      break;
    case `-`:
      return subtract(num1, num2);
      break;
    case `*`:
      return multiply(num1, num2);
      break;
    case `/`:
      return divide(num1, num2);
      break;
  }
}

// operate();

// event listeners
