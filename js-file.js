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
  if ((numDisplay.innerText).length >= 14) {
    return;  
  } else {
    numDisplay.innerText += e.target.innerText;
  }
}

function showKeyNumbers(e) {
  const keyNum = document.querySelector(`.num-btns[data-key="${e.keyCode}"]`);
  if (displArr['operator'] === 'equal') {
    numDisplay.innerText = '';
    displArr['operator'] = undefined;
  } else if (displArr['clean-display'] === 'yes') {
    numDisplay.innerText = '';
    displArr['clean-display'] = undefined;
  }
    numDisplay.innerText += keyNum.innerText;
}

let numBtns = document.querySelectorAll('.num-btns');
numBtns.forEach(btn => btn.addEventListener('click', showNumbers));
window.addEventListener('keydown', showKeyNumbers);

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

//take numbers and find answers
function takeOpAndNum(e) {
  if (displArr['operator'] != undefined) {
    displArr['num2'] = Number(numDisplay.innerText);
    if (displArr['num1'] === undefined) {
      displArr['num1'] = Number(numDisplay.innerText);
    } else {
      displArr['num1'] = Number(operate(displArr['operator'], displArr['num1'], displArr['num2']).toFixed(4));
    }
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
  checkDisplay();
}

function equalsTo() {
  displArr['num2'] = Number(numDisplay.innerText);
  if (displArr['num1'] === undefined) {
    numDisplay.innerText = '';
  } else if (displArr['num2'] === 0 && displArr['operator'] === 'divide') {
    numDisplay.innerText = `Don't... -_-`;
    displArr['num1'] = undefined;
    displArr['num2'] = undefined;
  } else {
    let answer = operate(displArr['operator'], displArr['num1'], displArr['num2']).toFixed(4);
    if (answer.length >= 14) {
      numDisplay.innerText = `Sorry, Dave...`
    } else {
      numDisplay.innerText = Number(operate(displArr['operator'], displArr['num1'], displArr['num2']).toFixed(4));
    }
    displArr['num1'] = undefined;
    displArr['num2'] = undefined;
  }
  displArr['operator'] = 'equal';
  checkDisplay();
}


let ops = document.querySelectorAll('.ops');
let numDisplay = document.querySelector('.display');
let equalBtn = document.querySelector('.equal');

const displArr = {};
ops.forEach(op => op.addEventListener('click', takeOpAndNum));

equalBtn.addEventListener('click', equalsTo);

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