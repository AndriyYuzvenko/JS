/*- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/
/*let stringOne='hello world';
let stringTwo='lorem ipsum';
let stringThree='javascript is cool';
console.log(stringOne.length)
console.log(stringTwo.length)
console.log(stringThree.length)*/
/*- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/
/*let stringOne='hello world';
let stringTwo='lorem ipsum';
let stringThree='javascript is cool';
console.log(stringOne.toUpperCase())
console.log(stringTwo.toUpperCase())
console.log(stringThree.toUpperCase())*/
/*- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
/*let stringOne='HELLO WORLD';
let stringTwo='LOREM IPSUM';
let stringThree='JAVASCRIPT IS COOL';
console.log(stringOne.toLowerCase())
console.log(stringTwo.toLowerCase())
console.log(stringThree.toLowerCase())*/
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
/*let str = ' dirty string   ';
console.log(str.trim())*/
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
/*let str = 'Каждый охотник желает знать';
let arr = []
let stringToarray= (param1, param2) => {
    param2.push(param1.split(' '))
    console.log(param2)
}
stringToarray(str, arr)*/

/*- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7)); // Каждый*/
/*let str = 'Каждый охотник желает знать';
let words = str.split(' ');
let delete_characters = (str, length) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i].length === length) {
            console.log(str[i])
        }
    }
}
delete_characters(words, 7)*/
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
/*let str = "HTML JavaScript PHP";
let insert_dash = (str) => console.log(str.replace(/\s/g, '-').toUpperCase());
insert_dash(str)*/
/*- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.*/
/*let str = 'каждый охотник желает знать';
let string = (str) => console.log(str.charAt(0).toUpperCase() + str.slice(1))
string(str)*/
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
/*
let str = 'каждый охотник желает знать';
let capitalize = (str) => {
    return str.replace(/(^|\s)\S/g, function (a) {
        return a.toUpperCase()
    })
}
console.log(capitalize(str));*/
