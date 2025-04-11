"use strict";

function solveEquation(a, b, c) {
	const discriminant = b * b - 4 * a * c;
	let roots = [];

	if (discriminant === 0) {
		const root = -b / (2 * a);
		roots = [root];
	} else if (discriminant > 0) {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		roots = [root1, root2];
	}

	return roots;
}

console.log(solveEquation(1, -3, 2));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, 0, -4));
console.log(solveEquation(1, 0, 4));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyInterestRate = (percent / 100) / 12;

	const loanBody = amount - contribution;

	const monthlyPayment = loanBody * (monthlyInterestRate + (monthlyInterestRate / (((1 + monthlyInterestRate) ** countMonths) - 1)));

	const totalPayment = monthlyPayment * countMonths;


	const roundedTotalPayment = parseFloat(totalPayment.toFixed(2));

	return roundedTotalPayment;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 20000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 200000, 24));
console.log(calculateTotalMortgage(10, 100000, 200000, 24));
console.log(calculateTotalMortgage(10, 0, 100000, 60));