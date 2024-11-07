const Book = require('./Book');
const EBook = require('./EBook');

const book1 = new Book(
  'Гарри Поттер и философский камень',
  'Дж. К. Роулинг',
  1997,
);
const book2 = new Book('Этюд в багровых тонах', 'Артур Конан Дойл', 1887);
const ebook1 = new EBook('Маленькая жизнь', 'Ханья Янагихара', 2015, 'EPUB');

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

// Используем геттер и сеттер для изменения года издания одной из книг
book1.year = 1998;
console.log(`Обновленный год издания для "${book1.title}": ${book1.year}`);

// Находим самую старую книгу из массива
const oldestBook = Book.findOldestBook([book1, book2, ebook1]);
console.log('Самая старая книга:');
oldestBook.printInfo();

// Создаем экземпляр EBook на основе существующего экземпляра Book
const ebook2 = EBook.createFromBook(book2, 'PDF');
ebook2.printInfo();
