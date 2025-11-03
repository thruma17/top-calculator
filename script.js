console.clear();

// buttons variables
const allBtns = document.querySelectorAll(`button`);
const numberBtn = document.querySelectorAll(`.number`);
const operatorBtn = document.querySelectorAll(`.operator`);
const deleteBtn = document.querySelector(`.delete`);
const clearBtn = document.querySelector(`.clear`);
const resultBtn = document.querySelector(`.result`);
const firstNumDisplay = document.getElementById(`first-num`);
const secondNumDisplay = document.getElementById(`second-num`);
const operatorDisplay = document.getElementById(`operator`);
const resultDisplay = document.getElementById(`display-text-result`);

firstNumDisplay.textContent = ``;
secondNumDisplay.textContent = ``;
operatorDisplay.textContent = ``;
resultDisplay.textContent = `0`;

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
  if (parseInt(b) === 0) {
    return `REALLY???`;
  }
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
    case `x`:
      return multiply(num1, num2);
      break;
    case `÷`:
      return divide(num1, num2);
      break;
  }
}

// math variables
let firstNum = ``;
let secondNum = ``;
let clickedOperator = ``;

const DEFAULT_RESULT = 0;
let result = DEFAULT_RESULT;

// event listeners
allBtns.forEach((btn) => {
  btn.addEventListener(`mousedown`, () => {
    btn.style.backgroundColor = `#2d2371`;
  });
  btn.addEventListener(`mouseup`, () => {
    btn.style.backgroundColor = `slateblue`;
  });
});

numberBtn.forEach((number) => {
  number.addEventListener(`click`, () => {
    if (result === 0) {
      if (clickedOperator === ``) {
        firstNum += number.value;
        firstNumDisplay.textContent = firstNum;
        if (firstNum > 99999) {
          firstNumDisplay.textContent = `ERROR`;
        }
      } else {
        secondNum += number.value;
        secondNumDisplay.textContent = secondNum;
        if (secondNum > 99999) {
          secondNumDisplay.textContent = `ERROR`;
        }
      }
    } else {
      result = 0;
      resultDisplay.textContent = `0`;
      firstNum += number.value;
      firstNumDisplay.textContent = firstNum;
      if (firstNum > 99999) {
        firstNumDisplay.textContent = `ERROR`;
      }
    }
  });
});

operatorBtn.forEach((operator) => {
  operator.addEventListener(`click`, () => {
    if (firstNum === ``) {
      firstNum = result;
      firstNumDisplay.textContent = firstNum;
    }
    if (secondNum) {
      displayResult();
      newOperation();
    }
    clickedOperator = operator.value;
    operatorDisplay.textContent = clickedOperator;
  });
});

resultBtn.addEventListener(`click`, displayResult);

clearBtn.addEventListener(`click`, resetCalculator);

// functions
function newOperation() {
  firstNum = result;
  firstNumDisplay.textContent = firstNum;
  secondNum = ``;
  secondNumDisplay.textContent = ``;
  operatorDisplay.textContent = clickedOperator;
}

function clearOperation() {
  firstNum = ``;
  firstNumDisplay.textContent = ``;
  secondNum = ``;
  secondNumDisplay.textContent = ``;
  operatorDisplay.textContent = ``;
}

function resetCalculator() {
  window.location.reload();
}

function displayResult() {
  if (firstNum && clickedOperator && secondNum) {
    result = operate(parseInt(firstNum), clickedOperator, parseInt(secondNum));
    result = Math.round(result * 1000) / 1000;
    resultDisplay.textContent = result;
    clearOperation();
  }
}
