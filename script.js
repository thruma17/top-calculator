console.clear();

// buttons variables
const numberBtn = document.querySelectorAll(`.number`);
const operatorBtn = document.querySelectorAll(`.operator`);
const clearBtn = document.querySelector(`.clear`);
const deleteBtn = document.querySelector(`.delete`);
const btnResult = document.querySelector(`.result`);
const firstOperand = document.getElementById(`first-num`);
const secondOperand = document.getElementById(`second-num`);
const operatorDisplay = document.getElementById(`operator`);

firstOperand.textContent = `0`;
secondOperand.textContent = ``;
operatorDisplay.textContent = ``;

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

// math variables
let firstNum = ``;
let secondNum = ``;
let clickedOperator = ``;
let result = 0;

// event listeners
numberBtn.forEach((number) => {
  number.addEventListener(`click`, () => {
    firstNum += number.value;
    firstOperand.textContent = firstNum;
    if (firstNum > 999999999) {
      firstOperand.textContent = `ERROR`;
    }
  });
});

operatorBtn.forEach((operator) => {
  operator.addEventListener(`click`, () => {
    console.log(operator.textContent);
  });
});
