Задание 1
function getArrayParams(...arr) {
	if (arr.length === 0) {
		return {};
	}

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}

	const avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}
Задание 2
function summElementsWorker(...elements) {
	if (elements.length === 0) {
		return 0;
	}

	let sum = 0;
	for (let i = 0; i < elements.length; i++) {
		sum += elements[i];
	}
	return sum;
}

function differenceMaxMinWorker(...elements) {
	if (elements.length === 0) {
		return 0;
	}

	let max = elements[0];
	let min = elements[0];

	for (let i = 1; i < elements.length; i++) {
		if (elements[i] > max) {
			max = elements[i];
		}
		if (elements[i] < min) {
			min = elements[i];
		}
	}

	return max - min;
}

function differenceEvenOddWorker(...elements) {
	if (elements.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < elements.length; i++) {
		if (elements[i] % 2 === 0) {
			sumEvenElement += elements[i];
		} else {
			sumOddElement += elements[i];
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...elements) {
	if (elements.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < elements.length; i++) {
		if (elements[i] % 2 === 0) {
			sumEvenElement += elements[i];
			countEvenElement++;
		}
	}

	if (countEvenElement === 0) {
		return 0;
	}

	return sumEvenElement / countEvenElement;
}

console.log("summElementsWorker");
console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));
console.log("----------------------");


console.log("differenceMaxMinWorker");
console.log(differenceMaxMinWorker());
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));
console.log("----------------------");

console.log("differenceEvenOddWorker");
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));
console.log("----------------------");

console.log("averageEvenElementsWorker");
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));
console.log("----------------------");

задание 3
function summElementsWorker(...elements) {
	if (elements.length === 0) {
		return 0;
	}

	let sum = 0;
	for (let i = 0; i < elements.length; i++) {
		sum += elements[i];
	}
	return sum;
}

function differenceMaxMinWorker(...elements) {
	if (elements.length === 0) {
		return 0;
	}

	let max = elements[0];
	let min = elements[0];

	for (let i = 1; i < elements.length; i++) {
		if (elements[i] > max) {
			max = elements[i];
		}
		if (elements[i] < min) {
			min = elements[i];
		}
	}

	return max - min;
}

function differenceEvenOddWorker(...elements) {
	if (elements.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < elements.length; i++) {
		if (elements[i] % 2 === 0) {
			sumEvenElement += elements[i];
		} else {
			sumOddElement += elements[i];
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...elements) {
	if (elements.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < elements.length; i++) {
		if (elements[i] % 2 === 0) {
			sumEvenElement += elements[i];
			countEvenElement++;
		}
	}

	if (countEvenElement === 0) {
		return 0;
	}

	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}


const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];
console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, averageEvenElementsWorker));