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
  return (result = a + b);
}
function subtract(a, b) {
  return (result = a - b);
}
function multiply(a, b) {
  return (result = a * b);
}
function divide(a, b) {
  return (result = a / b);
}

// calculator operation function
function operate(num1, operator, num2) {
  num1 = prompt(`Insert first number`, ``);
  operator = prompt(`Insert operator`, ``);
  num2 = prompt(`Insert second number`, ``);
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  switch (operator) {
    case `+`:
      add(num1, num2);
      break;
    case `-`:
      subtract(num1, num2);
      break;
    case `*`:
      multiply(num1, num2);
      break;
    case `/`:
      divide(num1, num2);
      break;
  }

  alert(result);
}

// operate();

// event listeners
