console.clear();

// math variables
let num1 = ``;
let num2 = ``;
let operator = ``;
let result = 0;

// buttons variables
const btnPlus = document.getElementById(`btnPlus`);
const btnMinus = document.getElementById(`btnMinus`);
const btnMultiply = document.getElementById(`btnMultiply`);
const btnDivide = document.getElementById(`btnDivide`);
const btnBack = document.getElementById(`btnBack`);
const btnDel = document.getElementById(`btnDel`);
const btnComa = document.getElementById(`btnComa`);
const btnResult = document.getElementById(`btnResult`);
const btn1 = document.getElementById(`btn1`);
const btn2 = document.getElementById(`btn2`);
const btn3 = document.getElementById(`btn3`);
const btn4 = document.getElementById(`btn4`);
const btn5 = document.getElementById(`btn5`);
const btn6 = document.getElementById(`btn6`);
const btn7 = document.getElementById(`btn7`);
const btn8 = document.getElementById(`btn8`);
const btn9 = document.getElementById(`btn9`);
const btn0 = document.getElementById(`btn0`);

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
