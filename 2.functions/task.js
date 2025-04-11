function getArrayParams(...arr) {
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

второе задание
function summElementsWorker(...elements) {
	if (elements.length === 0) return 0;
	return elements.reduce((acc, current) => acc + current, 0);
}

function differenceMaxMinWorker(...elements) {
	if (elements.length === 0) return 0;
	const max = Math.max(...elements);
	const min = Math.min(...elements);
	return max - min;
}

function differenceEvenOddWorker(...elements) {
	if (elements.length === 0) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let element of elements) {
		if (element % 2 === 0) {
			sumEvenElement += element;
		} else {
			sumOddElement += element;
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...elements) {
	if (elements.length === 0) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let element of elements) {
		if (element % 2 === 0) {
			sumEvenElement += element;
			countEvenElement++;
		}
	}

	return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));
console.log(differenceMaxMinWorker());
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

задание три
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