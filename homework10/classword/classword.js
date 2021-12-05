// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let button = document.getElementById('clisck')
// button.onclick = function () {
//     console.log(document.one.fitst.value)
//     console.log(document.one.second.value)
//     console.log(document.two.three.value)
//     console.log(document.two.four.value)
// };

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let button = document.getElementById('button')
// let table = document.createElement('table')
// table.style.border = '2px solid red'
// document.body.append(table)
// button.addEventListener('click', function (e) {
//     e.preventDefault()
//     let width = document.first.width.value;
//     let height = document.first.height.value;
//     let text = document.first.text.value;
//
//     for (let i = 0; i < width; i++) {
//         let tr = document.createElement('tr')
//         for (let j = 0; j < height; j++) {
//             let td = document.createElement('td')
//             td.innerText = text
//             td.style.border = '2px solid green'
//             tr.style.border = '2px solid green'
//             table.append(tr)
//             tr.append(td)
//         }
//     }
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let arr = ['свиня', 'курка', 'мавпа']
// let input = document.createElement('input')
// document.body.append(input)
// let btn = document.createElement('button')
// document.body.append(btn)
// btn.innerHTML = 'click'
// btn.onclick = (() => {
//     for (const argument of arr) {
//         if (argument === input.value) {
//             alert('Це погане слово')
//             input.value = ''
//         }
//     }
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// let arr = ['свиня', 'курка', 'мавпа']
// let input = document.createElement('input')
// document.body.append(input)
// let btn = document.createElement('button')
// document.body.append(btn)
// btn.innerHTML = 'click'
// btn.onclick = (() => {
//     for (const argument of arr) {
//         if (input.value.includes(argument)) {
//             alert('В реченні є погане слово!!!')
//             input.value = ''
//         }
//     }
//     if (input.value) {
//         input.value = ''
//     }
// })