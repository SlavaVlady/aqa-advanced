// Класс "Книга" (Book)
class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  // Метод для вывода информации о книге
  printInfo() {
    console.log(
      `Название: ${this._title}, Автор: ${this._author}, Год издания: ${this._year}`,
    );
  }

  // Геттеры и сеттеры для свойства title (название)
  get title() {
    return this._title;
  }
  set title(value) {
    if (typeof value !== 'string') {
      throw new Error('Название должно быть строкой');
    }
    this._title = value;
  }

  // Геттеры и сеттеры для свойства author (автор)
  get author() {
    return this._author;
  }
  set author(value) {
    if (typeof value !== 'string') {
      throw new Error('Автор должен быть строкой');
    }
    this._author = value;
  }

  // Геттеры и сеттеры для свойства year (год издания)
  get year() {
    return this._year;
  }
  set year(value) {
    if (typeof value !== 'number') {
      throw new Error('Год издания должен быть числом');
    }
    this._year = value;
  }

  // Статический метод для нахождения самой старой книги в массиве
  static findOldestBook(books) {
    return books.reduce((oldest, book) =>
      book.year < oldest.year ? book : oldest,
    );
  }
}

// Экспортируем класс Book, чтобы он был доступен в других файлах
module.exports = Book;
