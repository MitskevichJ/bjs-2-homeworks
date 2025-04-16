function parseCount(value) {
	const parsedValue = Number.parseFloat(value);

	if (Number.isNaN(parsedValue)) {
		throw new Error("Невалидное значение");
	}

	return parsedValue;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}


console.log(validateCount("5"));
console.log(validateCount("5.5"));
console.log(validateCount("abc"));
console.log(validateCount(null));

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = this.perimeter / 2;
		const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return Number(area.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		const triangle = new Triangle(a, b, c);
		return triangle;
	} catch (error) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует";
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
		};
	}
}

const triangle1 = getTriangle(3, 4, 5);
console.log(triangle1.perimeter); 
console.log(triangle1.area); 

const triangle2 = getTriangle(1, 2, 10);
console.log(triangle2.area);
console.log(triangle2.perimeter);

const triangle3 = getTriangle(10, 10, 10);
console.log(triangle3.perimeter);
console.log(triangle3.area);