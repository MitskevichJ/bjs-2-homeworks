"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d < 0) {} else if (d === 0) {
		let root = -b / (2 * a);
		arr.push(root);
	} else {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root1, root2);
	}

	return arr;
}

console.log(solveEquation(1, -3, 2));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, 0, -4));
console.log(solveEquation(1, 0, 4));

Задание 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyPercent = (percent / 100) / 12;

	const loanBody = amount - contribution;

	const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / ((Math.pow(1 + monthlyPercent, countMonths)) - 1)));

	const totalAmount = monthlyPayment * countMonths + contribution;

	const roundedTotalAmount = parseFloat(totalAmount.toFixed(2));

	return roundedTotalAmount;
}
console.log(calculateTotalMortgage(10, 0, 50000, 12)); 
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); 
console.log(calculateTotalMortgage(10, 0, 20000, 24)); 
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); 
console.log(calculateTotalMortgage(10, 0, 10000, 36)); 
console.log(calculateTotalMortgage(15, 0, 10000, 36)); 