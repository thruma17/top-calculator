console.clear();

// math variables
let currentNum = `0`;
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
const topDisplay = document.getElementById(`display-top`);
const bottomDisplay = document.getElementById(`display-bottom`);

topDisplay.textContent = `${firstNum}${clickedOperator}`;
bottomDisplay.textContent = currentNum;

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
  if (!clickedOperator) {
    topDisplay.textContent = ``;
  }
  if (bottomDisplay.textContent === `0`) bottomDisplay.textContent = ``;
  if (bottomDisplay.textContent < maxNumber) {
    bottomDisplay.textContent += number;
    currentNum = bottomDisplay.textContent;
    logOperation();
  }
}

// delete numbers
deleteBtn.addEventListener(`click`, deleteNumber);

function deleteNumber() {
  if (bottomDisplay.textContent === `0`) return;
  if (parseInt(bottomDisplay.textContent) <= 9) {
    return (bottomDisplay.textContent = `0`);
  } else {
    bottomDisplay.textContent = bottomDisplay.textContent
      .toString()
      .slice(0, -1);
    currentNum = bottomDisplay.textContent;
  }
  logOperation();
}

// allow decimals
decimalBtn.addEventListener(`click`, decimalNumber);

function decimalNumber() {
  if (bottomDisplay.textContent.includes(`.`)) return;
  if (!clickedOperator) {
    topDisplay.textContent = ``;
  }
  if (bottomDisplay.textContent === `0` || bottomDisplay.textContent === ``) {
    return (bottomDisplay.textContent = `0.`);
  }
  bottomDisplay.textContent += `.`;
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
    logOperation();
    secondNum = ``;
    clickedOperator = operator;
    topDisplay.textContent = `${result}${clickedOperator}`;
    bottomDisplay.textContent = ``;
    firstNum = result;
    result = `0`;
  } else {
    firstNum = currentNum;
    clickedOperator = operator;
    currentNum = ``;
    topDisplay.textContent = `${firstNum}${clickedOperator}`;
    bottomDisplay.textContent = currentNum;
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
  if (firstNum === `` || !clickedOperator) return;
  secondNum = currentNum;
  currentNum = ``;
  if (firstNum && clickedOperator && secondNum) {
    if (clickedOperator === `÷` && secondNum === `0`) {
      alert(`REALLY???\nYou can't divide by 0!`);
      resetCalculator();
    }
    result = roundResult(operate(firstNum, clickedOperator, secondNum));
    logOperation();
    currentNum = result.toString();
    firstNum = currentNum;
    clickedOperator = ``;
    secondNum = ``;
    topDisplay.textContent = `${firstNum}${clickedOperator}`;
    bottomDisplay.textContent = ``;
  }
  logOperation();
}

// add keyboard support
window.addEventListener(`keydown`, keyPress);

function keyPress(e) {
  if (e.key === ` `) return;
  if (e.key >= 0 && e.key <= 9) writeNumber(e.key);
  if (e.key === `.`) decimalNumber();
  if (e.key === "=" || e.key === "Enter") displayResult();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "Escape") resetCalculator();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    writeOperator(convertOperator(e.key));
}

function convertOperator(keyboard) {
  if (keyboard === "/") return "÷";
  if (keyboard === "*") return "×";
  if (keyboard === "-") return "−";
  if (keyboard === "+") return "+";
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
