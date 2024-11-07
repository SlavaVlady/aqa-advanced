function printTextWithDelay(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}

printTextWithDelay('Hello, world!', 2000);
