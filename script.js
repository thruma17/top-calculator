console.clear();

// math variables
let currentNum = ``;
let firstNum = ``;
let clickedOperator = ``;
let secondNum = ``;
let result = `0`;
const maxNumber = 999999999999;

// buttons variables
const allBtns = document.querySelectorAll(`button`);
const numberBtn = document.querySelectorAll(`.number`);
const decimalBtn = document.getElementById(`btnDecimal`);
const operatorBtn = document.querySelectorAll(`.operator`);
const deleteBtn = document.getElementById(`btnDel`);
const clearBtn = document.getElementById(`btnClear`);
const resultBtn = document.getElementById(`btnResult`);
const operationDisplay = document.getElementById(`display-operation`);
const resultDisplay = document.getElementById(`display-result`);

operationDisplay.textContent = ``;
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
    case `−`:
      return subtract(num1, num2);
      break;
    case `×`:
      return multiply(num1, num2);
      break;
    case `÷`:
      return divide(num1, num2);
      break;
  }
}

// style buttons on click
allBtns.forEach((btn) => {
  btn.addEventListener(`mousedown`, () => {
    btn.style.backgroundColor = `#2d2371`;
  });
  btn.addEventListener(`mouseup`, () => {
    btn.style.backgroundColor = `slateblue`;
  });
});

// write numbers
numberBtn.forEach((btn) => {
  btn.addEventListener(`click`, () => writeNumber(btn.textContent));
});

function writeNumber(number) {
  if (resultDisplay.textContent === `0`) resultDisplay.textContent = ``;
  resultDisplay.textContent += number;
  currentNum = resultDisplay.textContent;
  logOperation();
}

// delete numbers
deleteBtn.addEventListener(`click`, deleteNumber);

function deleteNumber() {
  if (resultDisplay.textContent === `0`) return;
  if (parseInt(resultDisplay.textContent) <= 9) {
    return (resultDisplay.textContent = `0`);
  } else {
    resultDisplay.textContent = resultDisplay.textContent
      .toString()
      .slice(0, -1);
    currentNum = resultDisplay.textContent;
  }
  logOperation();
}

// allow decimals
decimalBtn.addEventListener(`click`, decimalNumber);

function decimalNumber() {
  if (operationDisplay.textContent.includes(`,`)) return;
  operationDisplay.textContent += `,`;
  logOperation();
}

// write operator
operatorBtn.forEach((btn) => {
  btn.addEventListener(`click`, () => writeOperator(btn.textContent));
});

function writeOperator(operator) {
  if (clickedOperator !== ``) {
    secondNum = currentNum;
    currentNum = ``;
    result = roundResult(operate(firstNum, clickedOperator, secondNum));
    clickedOperator = operator;
    operationDisplay.textContent = `${result}${clickedOperator}`;
    resultDisplay.textContent = ``;
    firstNum = result;
  } else {
    firstNum = currentNum;
    clickedOperator = operator;
    currentNum = ``;
    operationDisplay.textContent = `${firstNum}${clickedOperator}`;
    resultDisplay.textContent = ``;
  }
  logOperation();
}

// clear all
clearBtn.addEventListener(`click`, resetCalculator);

function resetCalculator() {
  window.location.reload();
}

// show result
resultBtn.addEventListener(`click`, displayResult);

function displayResult() {
  secondNum = currentNum;
  currentNum = ``;
  if (firstNum && clickedOperator && secondNum) {
    result = roundResult(operate(firstNum, clickedOperator, secondNum));
    currentNum = result;
    firstNum = ``;
    clickedOperator = ``;
    secondNum = ``;
    operationDisplay.textContent = `${result}${clickedOperator}`;
    resultDisplay.textContent = ``;
    result = ``;
  }
  logOperation();
}

// helper functions
function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

// logs
function logOperation() {
  console.log(
    `currentNum: ${currentNum}, firstNum: ${firstNum}, operator: ${clickedOperator}, secondNum: ${secondNum}, result: ${result}.`
  );
}
