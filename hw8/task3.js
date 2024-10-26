// Массив чисел
const numbers = [10, 20, 30, 40, 50];

// Вычисление суммы элементов массива с использованием reduce
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Вывод суммы в консоль
console.log("Сумма элементов массива:", sum)