// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// let xxx = document.body
// xxx.onclick = ((e) => {
//     console.log('X=' + e.clientX + ' px')
//     console.log('Y=' + e.clientY + ' px')
//     console.log(e.target.className)
//     console.log(e.target.id)
//     console.log(e.target.tagName)
// })


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// let xxx = document.body
// xxx.onclick = ((e) => {
//     let div = document.createElement('div')
//     document.body.append(div)
//     let arr = []
//     arr.push(e.target.tagName)
//     arr.push(e.clientX)
//     arr.push(e.clientY)
//     arr.push(e.target.className)
//     arr.push(e.target.id)
//     for (let i = 0; i < arr.length; i++) {
//         let h3 = document.createElement('h3')
//         h3.innerText = arr[i]
//         div.append(h3)
//     }
// })


// -- взять массив пользователей
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// first.box.onclick = (function () {
//     if (this.checked) {
//         console.log(usersWithAddress.filter(item => !item.status))
//     }
// })
// 2й - оставляет старше 29 лет включительно
// first.box.onclick = (function () {
//     if (this.checked) {
//         console.log(usersWithAddress.filter(item => item.age>=29))
//     }
// })
// 3й - оставляет тех у кого город киев
// first.box.onclick = (function () {
//     if (this.checked) {
//         console.log(usersWithAddress.filter(item => item.address.city === 'Kyiv'))
//     }
// })
// Данные выводить в документ
//

//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let back = document.querySelector('.back');
// let next = document.querySelector('.next');
// let images = document.querySelectorAll('img');
// let i = 0;
// back.onclick = function () {
//     images[i].style.display = 'none';
//     i = i - 1;
//     if (i < 0) {
//         i = images.length - 1;
//     }
//     images[i].style.display = 'block';
// }
// next.onclick = function () {
//     images[i].style.display = 'none';
//     i = i + 1;
//     if (i >= images.length) {
//         i = 0;
//     }
//     images[i].style.display = 'block';
// }
let p=document.createElement('p')
document.body.append(p)
p.innerText='Как то так'
// p.onmousedown=function (){
// }
p.onmouseup=function (){
   this.style.fontWeight='bold'
    console.log('2')
}
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан