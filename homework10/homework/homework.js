// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let text=document.getElementById('text')
// let clickOne=document.getElementById('clickOne')
// clickOne.onclick=(()=>{
//     text.hidden = true;
// })

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let clickOne=document.getElementById('clickOne')
// clickOne.onclick=(()=>{
//     clickOne.hidden=true
// })

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let audit = document.getElementById('audit')
// let age = document.getElementById('age');
// audit.onclick = (ev => {
//     ev.preventDefault()
//     if (+age.value < 18) {
//         alert('Вам менше років!!!')
//     } else if (typeof (+age.value )!== 'number') {
//         alert('Ви ввели не число!!!')
//     } else {
//         alert('Вам повезло,і вам є більше вісімнадцяти:)')
//     }
// })

// - Создайте меню, которое раскрывается/сворачивается при клике
// let menu = document.querySelector('.menu');
// let title = menu.querySelector('.title');
// title.onclick = function () {
//     menu.classList.toggle('hidden');
// };

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let users = [
//     {
//         name: 'Petro',
//         body: 'Я нічого не знаю'
//     },
//     {
//         name: 'Anton',
//         body: 'Мене убють'
//     },
//     {
//         name: 'Masha',
//         body: 'Тікай з села '
//     }
// ]
// let divFather = document.createElement('div');
// for (const item of users) {
//     let div = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     let button = document.createElement('button');
//
//     h3.innerText = item.name;
//     p.innerHTML = item.body;
//     button.innerHTML = 'Закрити коментарій'
//
//     button.onclick = () => {
//         p.hidden = true
//     }
//     div.append(h3, p, button);
//     divFather.append(div);
// }
// document.body.appendChild(divFather)
