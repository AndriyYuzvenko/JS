// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
// let user = new User(1, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846')
// console.log(user)

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
//
// let arr = [
//     new User(1, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846'),
//     new User(2, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846'),
//     new User(3, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846'),
//     new User(4, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846'),
//     new User(5, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846'),
//     new User(6, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846'),
//     new User(7, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846'),
//     new User(8, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846'),
//     new User(9, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846'),
//     new User(10, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846')
// ]
// console.log(arr)
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let arrNew = arr.filter((item) => item.id % 2 === 0)
// console.log(arrNew)
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let num = (item) => item.sort((a, b) => a.id - b.id)
// console.log(num(arr));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class User {
//     constructor(id, name, surname, email, phone, orderOne, orderTwo) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order=[orderOne,orderTwo]
//     }
// }
// let arr=[
//     new User(1, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846','js','html')
// ]
// console.log(arr)

// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order=order
//     }
// }
//
// let users=[
//     new Client(1, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846',['js']),
//     new Client(2, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846',['js','html']),
//     new Client(3, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846',['js',1,2,3,4,5]),
//     new Client(4, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846',['js']),
//     new Client(5, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846',['js','html']),
//     new Client(6, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846',['js','html',5243,365,3]),
//     new Client(7, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846',['js','html']),
//     new Client(8, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846',['js',1,2,3,4,5]),
//     new Client(9, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846',['js','html',5243,365,3]),
//     new Client(10, 'Andriy', 'Yuzvenko', 'anbriy890@gmail.com', '+380974547846',['js'])
// ]
// console.log(users)
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let num = (item) => item.sort((a, b) => a.order.length - b.order.length)
// console.log(num(users));
