// функция для обработки числа
function handleNum(number, handleEven, handleOdd) {
  if (number % 2 === 0) {
    handleEven(); // колбек - парные числа
  } else {
    handleOdd(); //  колбек - непарные числа
  }
}

// Колбек для парных чисел
function handleEven() {
  console.log('number is even');
}

// Колбек для непарных чисел
function handleOdd() {
  console.log('number is odd');
}

//  функция handleNum
handleNum(10, handleEven, handleOdd); //  "number is even"
handleNum(7, handleEven, handleOdd); //  "number is odd"
