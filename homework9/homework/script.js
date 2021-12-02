// // Все робити за допомоги js.
// // - створити блок,
// let div = document.createElement('div')
//
// // - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap', 'collapse', 'alpha', 'beta')
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.backgroundColor = 'silver';
// div.style.color = 'red';
// div.style.fontSize = '16px';
// div.innerText = 'мда'
// // - додати цей блок в body.
// document.body.append(div)
// // - клонувати його повністю, та додати клон в body.
// let divClone = div.cloneNode(true)
// divClone.innerText = 'Якось так:)'
// let target = document.getElementsByClassName('target')[0]
// document.body.insertBefore(divClone, target)
//
// // - Є масив:
// let arr = ['Main', 'Products', 'About us', 'Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
// document.querySelector('.menu').insertAdjacentHTML('beforeend', arr.map(item => `<li>${item}</li>`).join(''));
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
//
//
// // - Є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// let div = document.createElement('div')
// document.body.append(div)
// div.insertAdjacentHTML('beforeend', coursesAndDurationArray.map(item => `<div class="item"><h1>${item.title}</h1><p>${item.monthDuration}</p></div>`).join(''));