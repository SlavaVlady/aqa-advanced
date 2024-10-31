function countdown(num) {
    console.log(num);

    // Если num больше 0, то вызываем функцию
    if (num > 0) {
        countdown(num - 1); // делаем меньше num на 1 и оптяь вызваем функцию
    }
}

// Вызываем функцию countdown с аргументом 5
countdown(5);