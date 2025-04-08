Задача №1
"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const d = b**2 - 4 * a * c; 

  if (d < 0) {
  } else if (d === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  } else {
    const root1 = (-b + Math.sqrt(d)) / (2 * a);
    const root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
}
const result1 = solveEquation(1, -5, 6); 
console.log(result1); 

const result2 = solveEquation(1, 2, 1); 
console.log(result2); 

const result3 = solveEquation(1, 1, 1); 
console.log(result3); 

Задача №2
"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const d = b**2 - 4 * a * c; 

  if (d < 0) {
  } else if (d === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  } else {
    const root1 = (-b + Math.sqrt(d)) / (2 * a);
    const root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  const monthlyPercent = (percent / 100) / 12;

 
  const loanBody = amount - contribution;

  
  const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**countMonths) - 1)));


  const totalPayment = contribution + (monthlyPayment * countMonths);

  
  const roundedTotalPayment = Number(totalPayment.toFixed(2));

  return roundedTotalPayment;
}