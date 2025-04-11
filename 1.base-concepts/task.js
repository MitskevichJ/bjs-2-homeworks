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

function solveEquation(a, b, c) {
	const discriminant = b * b - 4 * a * c;

	if (discriminant < 0) {
		return [];
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		return [root];
	} else {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [root1, root2];
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyPercent = (percent / 100) / 12;

	const loanBody = amount - contribution;

	if (loanBody <= 0) {
		return 0;
	}

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