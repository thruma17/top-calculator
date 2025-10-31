console.clear();

// variables
let num1 = ``;
let num2 = ``;
let operator = ``;
let result = 0;

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
