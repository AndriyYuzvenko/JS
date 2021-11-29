// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let textMainHeader = document.getElementById('main_header');
textMainHeader.innerText = 'Mon-year'
// b) робить шириниу елементу ul 400px
let ulWidth = document.getElementsByTagName('ul')
for (const ulWidthElement of ulWidth) {
    ulWidthElement.style.width = '400px'
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let textLinkList = document.querySelectorAll('.linkList')
for (const textLinkListElement of textLinkList) {
    textLinkListElement.style.width = '50%'
}
// d) отримує текст який зберігається в елементі з класом listElement2
let textListenElement = document.getElementsByClassName('listElement2')
for (const textListenElementElement of textListenElement) {
    console.log(textListenElementElement.innerHTML);
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
let textLi = document.getElementsByTagName('li')
for (const textLiElement of textLi) {
    textLiElement.style.backgroundColor = 'silver'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let elementA = document.getElementsByTagName('a')
for (const elementAElement of elementA) {
    elementAElement.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let xxx = (item) => {
    for (const itemElement of item) {
        if (itemElement.innerText === 'link3') {
            itemElement.style.fontSize = '40px'
        } else {
            alert('пробуй ще раз')
        }
        itemElement.classList.add('element_XXX')
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
xxx(elementA)
// i) отримує всі елементи 'sub-header' та змінює    колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header');
let subHeaderFuction = (item) => {
    let xxx = prompt('введіть колір фону')
    for (const itemElement of item) {
        itemElement.style.backgroundColor = `${xxx}`
    }
}
subHeaderFuction(subHeader)
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subHeaderFuctionSecond = (item) => {
    let xxx = prompt('введіть колір тексту')
    for (const itemElement of item) {
        if (itemElement.innerText === 'content 2 segment') {
            itemElement.style.color = `${xxx}`
        } else {
            alert('пробуй ще раз')
        }
    }
}
subHeaderFuctionSecond(subHeader)
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let contentOne = document.getElementsByClassName('content_1')
for (const contentOneElement of contentOne) {
    let xxxx = prompt('Введіть текст');
    contentOneElement.innerText = `${xxxx}`
}

// l) отримати елементи p та змінити їм padding на 20px
let tegP = document.getElementsByTagName('p');
let tegPFuction = (item) => {
    for (const itemElement of item) {
        itemElement.style.padding = '20px'
    }
}
tegPFuction(tegP)
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let textTwo = document.getElementsByClassName('text2')
for (const textTwoElement of textTwo) {
    textTwoElement.innerHTML = 'sep-2021'
}