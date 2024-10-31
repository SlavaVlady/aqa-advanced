//  объект car1
let car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2018
  };
  
  //  объект car2
  let car2 = {
    brand: "Honda",
    model: "Civic",
    owner: "Иван"
  };
  
  //  объект car3, объединяя свойства car1 и car2 
  let car3 = {
    ...car1,
    ...car2
  };
  
  // Выводим объект car3 в консоль
  console.log(car3);