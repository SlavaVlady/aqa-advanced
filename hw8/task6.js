// Исходный массив чисел
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

// Создание копии исходного массива
const sortedNumbers = [...numbersList];

// Сортировка копии массива от меньшего к большему
sortedNumbers.sort((a, b) => a - b);

// Вывод обоих массивов в консоль
console.log('Исходный массив:', numbersList);
console.log('Отсортированный массив:', sortedNumbers);
