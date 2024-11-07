// массив чисел
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Создание нового массива с чётными числами
const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Вывод
console.log('Массив чётных чисел:', evenNumbers);
