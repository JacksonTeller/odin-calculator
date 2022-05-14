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
  }
    numDisplay.innerText += e.target.innerText;
}

//clear display
function clear() {
    numDisplay.innerText = '';
}

let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clear);

//main function

function takeOpAndNum1(e) {
  if (displArr['operator'] != undefined) {
    displArr['num2'] = Number(numDisplay.innerText);
    console.log(operate(displArr['operator'], displArr['num1'], displArr['num2']));
    displArr['num1'] = operate(displArr['operator'], displArr['num1'], displArr['num2']);
    displArr['operator'] = e.target.className.slice(4);
  } else if (displArr['num1'] === undefined) {
    displArr['num1'] = Number(numDisplay.innerText);
    displArr['operator'] = e.target.className.slice(4);
  } else if (displArr['num2'] === undefined) {
    displArr['num2'] = Number(numDisplay.innerText);
    displArr['operator'] = e.target.className.slice(4);
  }
  // displArr['num1'] = Number(numDisplay.innerText);
  // displArr['operator'] = e.target.className.slice(4);
  clear();
  console.log(displArr);
}

function equalsTo() {
  // if (displArr['num2'] === undefined) {
  //   displArr['num2'] = Number(numDisplay.innerText);
  // }
  displArr['num2'] = Number(numDisplay.innerText);
  console.log(displArr);
  numDisplay.innerText = operate(displArr['operator'], displArr['num1'], displArr['num2']);
  console.log(operate(displArr['operator'], displArr['num1'], displArr['num2']));
  displArr['num1'] = undefined;
  displArr['operator'] = 'equal';
  displArr['num2'] = undefined;
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



// let num2 = displayValue.innerText;




let numBtns = document.querySelectorAll('.num-btns');
numBtns.forEach(btn => btn.addEventListener('click', showNumbers));

// let displayValue = numDisplay.innerText;

// let valueNum1 = multiplyBtn.addEventListener('click', saveValue);

// console.log()