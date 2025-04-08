"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d < 0) {
		return arr;
	} else if (d === 0) {
		let root = -b / (2 * a);
		arr.push(root);
		return arr;
	} else {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root1, root2);
		return arr;
	}
}

console.log(solveEquation(1, -3, 2)); 
console.log(solveEquation(1, 2, 1)); 
console.log(solveEquation(1, 0, -4)); 
console.log(solveEquation(1, 0, 4)); 