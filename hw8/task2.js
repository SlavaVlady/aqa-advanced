// Исходный массив
const initialArray = [1, 2, 3, 4, 5];

// Создание нового массива с использованием метода map
const mutatedArray = initialArray.map((value, index) => value * index);

// Вывод нового массива 
console.log(mutatedArray);