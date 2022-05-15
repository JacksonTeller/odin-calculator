//operator functions
function add(num1, num2) {
    return num1 + num2;
}
  
function subtract(num1, num2) {
    return num1 - num2;
}
  
function multiply(num1, num2) {
    return num1 * num2;
}
  
function divide(num1, num2) {
    return num1 / num2;
}

//take an operator and two number and call for appropriate function above
function operate(op, num1, num2) {
    // if (num2 === 0 && op === 'divide') {
    //   return numDisplay.innerText = `Don't... -_-`;
    // } else 
    if (op === 'add') {
      return add(num1, num2);
    } else if (op === 'subtract') {
      return subtract(num1, num2);
    } else if (op === 'multiply') {
      return multiply(num1, num2);
    } else if (op === 'divide') {
      return divide(num1, num2);
    }
}

//display the input
function showNumbers(e) {
  if (displArr['operator'] === 'equal') {
    numDisplay.innerText = '';
    displArr['operator'] = undefined;
  } else if (displArr['clean-display'] === 'yes') {
    numDisplay.innerText = '';
    displArr['clean-display'] = undefined;
  }
    numDisplay.innerText += e.target.innerText;
}

//clear display
function clear() {
    numDisplay.innerText = '';
    displArr['num1'] = undefined;
    displArr['operator'] = undefined;
    displArr['num2'] = undefined;
    displArr['clean-display'] = undefined;
}

let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clear);

//main function

function takeOpAndNum1(e) {
  if (displArr['operator'] != undefined) {
    displArr['num2'] = Number(numDisplay.innerText);
    console.log(operate(displArr['operator'], displArr['num1'], displArr['num2']));
    displArr['num1'] = Number(operate(displArr['operator'], displArr['num1'], displArr['num2']).toFixed(4));
    displArr['operator'] = e.target.className.slice(4);
    numDisplay.innerText = displArr['num1'];
  } else if (displArr['num1'] === undefined) {
    displArr['num1'] = Number(numDisplay.innerText);
    displArr['operator'] = e.target.className.slice(4);
  } else if (displArr['num2'] === undefined) {
    displArr['num2'] = Number(numDisplay.innerText);
    displArr['operator'] = e.target.className.slice(4);
  }
  displArr['clean-display'] = 'yes';
  // displArr['num1'] = Number(numDisplay.innerText);
  // displArr['operator'] = e.target.className.slice(4);
  // numDisplay.innerText = '';
  console.log(displArr);
  checkDisplay();
}

function equalsTo() {
  displArr['num2'] = Number(numDisplay.innerText);
  console.log(displArr['operator'] === 'divide')
  if (displArr['num1'] === undefined) {
    numDisplay.innerText = '';
  } else if (displArr['num2'] === 0 && displArr['operator'] === 'divide') {
    numDisplay.innerText = `Don't... -_-`;
    displArr['num1'] = undefined;
    displArr['num2'] = undefined;
  } else {
    numDisplay.innerText = Number(operate(displArr['operator'], displArr['num1'], displArr['num2']).toFixed(4));
    console.log(operate(displArr['operator'], displArr['num1'], displArr['num2']));
    displArr['num1'] = undefined;
    displArr['num2'] = undefined;
  }
  displArr['operator'] = 'equal';
  console.log(displArr);
  checkDisplay();
}

//Step1: take the first number and operator
let ops = document.querySelectorAll('.ops');
// let multiplyBtn = document.querySelector('.multiply');
let numDisplay = document.querySelector('.display');
let equalBtn = document.querySelector('.equal');

const displArr = {};
console.log(displArr);
ops.forEach(op => op.addEventListener('click', takeOpAndNum1));

// multiplyBtn.addEventListener('click', takeOpAndNum1);

//Step2: take the second number and show the answer
equalBtn.addEventListener('click', equalsTo);


let numBtns = document.querySelectorAll('.num-btns');
numBtns.forEach(btn => btn.addEventListener('click', showNumbers));

// let displayValue = numDisplay.innerText;

// let valueNum1 = multiplyBtn.addEventListener('click', saveValue);

//check display for unwanted messages
function checkDisplay() {
  if (numDisplay.innerText === 'undefined' || numDisplay.innerText === 'NaN') {
    numDisplay.innerText = '';
  }
}

//decimals
let point = document.querySelector('.point');
point.addEventListener('click', decimals);

function decimals(e) {
  if (!(numDisplay.innerText).includes('.')) {
    numDisplay.innerText += e.target.innerText;
  }
}

//backspace
let backspace = document.querySelector('.backspace');
backspace.addEventListener('click', erase);

function erase() {
  numDisplay.innerText = (numDisplay.innerText).slice(0,-1);
}