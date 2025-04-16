class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = Math.min(this.state * 1.5, 100);
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

const sherlock = new PrintEditionItem(
	"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
	2019,
	1008
);

console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state);

const picknick = new FantasticBook(
	"Аркадий и Борис Стругацкие",
	"Пикник на обочине",
	1972,
	168
);

console.log(picknick.author);
picknick.state = 10;
console.log(picknick.state);
picknick.fix();
console.log(picknick.state);
// второе задание
class PrintEdition {
	constructor(author, name, releaseDate, pages) {
		this.author = author;
		this.name = name;
		this.releaseDate = releaseDate;
		this.pages = pages;
		this.state = 100;
	}

	setDamage(damage) {
		this.state = Math.max(0, this.state - damage);
	}

	restore() {
		this.state = 100;
	}
}

class Book extends PrintEdition {
	constructor(author, name, releaseDate, pages) {
		super(author, name, releaseDate, pages);
	}
}

class Magazine extends PrintEdition {
	constructor(name, releaseDate, pages) {
		super(null, name, releaseDate, pages);
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book instanceof PrintEdition && book.state > 30) {
			const existingBook = this.findBookBy('name', book.name);
			if (!existingBook) {
				this.books.push(book);
			} else {
				console.log(`Книга "${book.name}" уже есть в библиотеке.`);
			}
		} else {
			console.log("Книга не может быть добавлена из-за низкого состояния.");
		}
	}

	findBookBy(key, value) {
		return this.books.find(book => book[key] === value) || null;
	}

	giveBookByName(bookName) {
		const bookIndex = this.books.findIndex(book => book.name === bookName);
		if (bookIndex !== -1) {
			return this.books.splice(bookIndex, 1)[0];
		}
		return null;
	}
}

// Тестовый сценарий
const library = new Library("Главная библиотека");

const detectiveBook = new Book("Артур Конан Дойл", "Приключения Шерлока Холмса", 1905, 300);
const fantasticBook = new Book("Айзек Азимов", "Я, робот", 1950, 250);
const novelBook = new Book("Лев Толстой", "Война и мир", 1869, 1200);
const magazine = new Magazine("Наука и жизнь", 2023, 50);

library.addBook(detectiveBook);
library.addBook(fantasticBook);
library.addBook(novelBook);
library.addBook(magazine);

let bookToFind = library.findBookBy("releaseDate", 1919);
if (!bookToFind) {
	bookToFind = new Book("Неизвестный автор", "Книга 1919 года", 1919, 400);
	library.addBook(bookToFind);
}

const bookToGive = library.giveBookByName("Война и мир");
console.log("Книга выдана:", bookToGive ? bookToGive.name : "Книга не найдена");

if (bookToGive) {
	bookToGive.setDamage(70);
	console.log("Состояние книги после повреждения:", bookToGive.state);
	bookToGive.restore();
	console.log("Состояние книги после восстановления:", bookToGive.state);
	library.addBook(bookToGive);
}

console.log("Количество книг в библиотеке:", library.books.length);
console.log("Содержимое библиотеки:", library.books.map(book => book.name));