// Создаем объект book
let book = {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: 1997
  };
  
  // Деструктуризируем title и author из объекта book
  let { title, author } = book;
  
  // Выводим деструктурированные переменные в консоль
  console.log(title);  // Выведет: "Гарри Поттер и философский камень"
  console.log(author); // Выведет: "Джоан Роулинг"