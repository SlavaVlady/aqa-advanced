// Создаем объект person
let person = {
  firstName: 'Александр',
  lastName: 'Коваль',
  age: 30,
};

// Добавляем свойство email
person.email = 'alex.koval@test.com';

// Удаляем свойство age
delete person.age;

// Выводим обновленный объект
console.log(person);
