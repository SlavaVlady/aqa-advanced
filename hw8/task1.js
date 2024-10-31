//  массив чисел
const numbers = [1, -3, 0, 7, -7, 0, 10, -8];

// инициализацие переменных для просчета
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

// Цикл для проходу по каждому числу в массиве
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++; // если положительное
    } else if (numbers[i] < 0) {
        negativeCount++; // если негативное
    } else {
        zeroCount++; // если 0
    }
}


console.log("Кількість позитивних чисел:", positiveCount);
console.log("Кількість негативних чисел:", negativeCount);
console.log("Кількість нульових чисел:", zeroCount);