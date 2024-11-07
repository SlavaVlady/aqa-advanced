
const Book = require('./Book');

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    printInfo() {
        console.log(`Название: ${this._title}, Автор: ${this._author}, Год издания: ${this._year}, Формат файла: ${this._fileFormat}`);
    }

    // Геттеры и сеттеры для свойства fileFormat (формат файла)
    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(value) {
        if (typeof value !== 'string') {
            throw new Error("Формат файла должен быть строкой");
        }
        this._fileFormat = value;
    }

    // Статический метод для создания экземпляра EBook на основе экземпляра Book и формата файла
    static createFromBook(book, fileFormat) {
        if (!(book instanceof Book)) {
            throw new Error("Аргумент должен быть экземпляром класса Book");
        }
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}

// Экспортируем класс EBook
module.exports = EBook;
