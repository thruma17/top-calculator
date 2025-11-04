// math variables
let firstNum = ``;
let secondNum = ``;
let clickedOperator = ``;
let result = ``;

// buttons variables
const allBtns = document.querySelectorAll(`button`);
const numberBtn = document.querySelectorAll(`.number`);
const operatorBtn = document.querySelectorAll(`.operator`);
const deleteBtn = document.getElementById(`btnDel`);
const clearBtn = document.getElementById(`btnClear`);
const resultBtn = document.getElementById(`btnResult`);
const firstNumDisplay = document.getElementById(`first-num`);
const secondNumDisplay = document.getElementById(`second-num`);
const operatorDisplay = document.getElementById(`operator`);
const resultDisplay = document.getElementById(`display-text-result`);

firstNumDisplay.textContent = firstNum;
secondNumDisplay.textContent = secondNum;
operatorDisplay.textContent = clickedOperator;
resultDisplay.textContent = result;

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
  num1 = Number(num1);
  num2 = Number(num2);
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
    if (firstNum === ``) {
      firstNum += number.value;
      firstNumDisplay.textContent = firstNum;
      return;
    }
    if (firstNum !== ``) {
      secondNum += number.value;
      secondNumDisplay.textContent = secondNum;
    }
  });
});

operatorBtn.forEach((operator) => {
  operator.addEventListener(`click`, () => {
    if (firstNum) {
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

function displayResult() {
  if (firstNum && clickedOperator && secondNum) {
    if (secondNumDisplay.textContent.includes(`=`)) return;
    secondNumDisplay.textContent += resultBtn.textContent;
    resultDisplay.textContent = roundResult(
      operate(firstNum, clickedOperator, secondNum)
    );
    firstNum = resultDisplay.textContent;
  }
}

// helper functions
function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function resetCalculator() {
  window.location.reload();
}
