//  массив объектов users
let users = [
    { name: "Александр", email: "alex@test.com", age: 25 },
    { name: "Ирина", email: "irina@etest.com", age: 30 },
    { name: "Василий", email: "vasiliy@test.com", age: 28 }
  ];
  
  // Перебираем все элементы массива с помощью цикла for...of
  for (const user of users) {
    // Деструктурируем свойства name, email и age
    const { name, email, age } = user;
  
    // Выводим значения в консоль
    console.log(`Имя: ${name}, Email: ${email}, Возраст: ${age}`);
  }