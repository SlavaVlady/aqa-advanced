// Функция divide для деления двух чисел
function divide(numerator, denominator) {
  // Валидация входных аргументов
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Ошибка: оба аргумента должны быть числами.');
  }
  
  if (denominator === 0) {
    throw new Error('Ошибка: деление на ноль невозможно.');
  }

  // Возвращаем результат деления
  return numerator / denominator;
}

// Вызовы функции 
const testCases = [
  { numerator: 10, denominator: 2 },
  { numerator: 20, denominator: 0 },
  { numerator: 'a', denominator: 5 },
  { numerator: 15, denominator: 3 }
];

for (const { numerator, denominator } of testCases) {
  try {
    const result = divide(numerator, denominator);
    console.log(`Результат деления ${numerator} на ${denominator}: ${result}`);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Работа завершена');
  }
}
