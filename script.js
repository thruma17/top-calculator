console.clear();

// buttons variables
const numberBtn = document.querySelectorAll(`.number`);
const operatorBtn = document.querySelectorAll(`.operator`);
const clearBtn = document.querySelector(`.clear`);
const deleteBtn = document.querySelector(`.delete`);
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
let result = 0;

// event listeners
numberBtn.forEach((number) => {
  number.addEventListener(`click`, () => {
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
  });
});

operatorBtn.forEach((operator) => {
  operator.addEventListener(`click`, () => {
    clickedOperator = operator.value;
    operatorDisplay.textContent = clickedOperator;

    console.log(
      `FirstNum: ${firstNum} Operator: ${clickedOperator} SecondNum: ${secondNum}`
    );
  });
});

resultBtn.addEventListener(`click`, () => {
  result = operate(parseInt(firstNum), clickedOperator, parseInt(secondNum));
  resultDisplay.textContent = result;
});
