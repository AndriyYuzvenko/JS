// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, graduationYear, maximumSpeed, engineCapacity) {
//     this.model = model;
//     this.produser = producer;
//     this.graduationYear = graduationYear;
//     this.maximumSpeed = maximumSpeed;
//     this.engineCapacity = engineCapacity;
//     this.driver = function () {
//         console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину `);
//     };
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maximumSpeed = newSpeed
//     };
//     this.hangeYear = function (newValue) {
//         return this.graduationYear = newValue
//     };
//     this.addDriver = function (driver) {
//         return this.driver = driver
//     }
// }
//
// let user = new Car('Dodge challenge', 'Dodge', 1970, 220, 5.2)
// console.log(user.driver())
// console.log(user.info())
// console.log(user.increaseMaxSpeed(300))
// console.log(user.hangeYear(2000))
// console.log(user.addDriver('Anton'));
// console.log(user)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, producer, graduationYear, maximumSpeed, engineCapacity) {
//         this.model = model;
//         this.produser = producer;
//         this.graduationYear = graduationYear;
//         this.maximumSpeed = maximumSpeed;
//         this.engineCapacity = engineCapacity;
//
//     }
//     driver = () => `їдемо зі швидкістю ${this.maximumSpeed} на годину `;
//     info = () => {
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`)
//         }
//     }
//     increaseMaxSpeed = (newSpeed) => this.maximumSpeed = newSpeed;
//     hangeYear = (newValue) => this.graduationYear = newValue;
//     addDriver = (driver) => this.driver = driver
// }
//
// let user = new Car('Dodge challenge', 'Dodge', 1970, 220, 5.2)
// console.log(user.driver())
// console.log(user.info())
// console.log(user.increaseMaxSpeed(300))
// console.log(user.hangeYear(2000))
// console.log(user.addDriver('Anton'));

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Popelushka {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
//
// let arr = [
//     new Popelushka('anna', 32, 12),
//     new Popelushka('anna', 34, 23),
//     new Popelushka('anna', 322, 33),
//     new Popelushka('anna', 14, 43),
//     new Popelushka('anna', 12, 22),
//     new Popelushka('anna', 32, 41),
//     new Popelushka('anna', 32, 11),
//     new Popelushka('anna', 32, 14),
//     new Popelushka('anna', 32, 15),
//     new Popelushka('anna', 32, 16)
// ]
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Princ {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
//
// const prince = new Princ('Anton', 45, 41);
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// const newPara = (arr, prince) => {
//     for (const item of arr) {
//         if (item.footsize === prince.footsize) {
//             return `твоя попелюшка: ${item.name}`
//         }
//     }
// };
// console.log(newPara(arr, prince))
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let xxx = arr.find((item) => item.footsize === prince.footsize)
// console.log(xxx)