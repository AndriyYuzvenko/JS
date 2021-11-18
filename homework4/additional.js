/*- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.*/
/*let arr = [20, 2, 3]
let num = (param1) => {
    let sum = 0;
    for (let i = 0; i < param1.length; i++) {
        if (param1.length === 1) {
            console.log(param1)
        } else {
            sum += param1[i]
            console.log(sum);
        }
    }
}
num(arr)*/
/*
- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    EXAMPLE:
    [1,2,3,4]
    [2,3,4,5]
результат
    [3,5,7,9]
*/
/*let arrFirst = [1, 2, 3, 4];
let arrSecond = [2, 3, 4, 5];
let arrSum = []
let Sum = (param1, param2, param3) => {
    for (let i = 0; i < param1.length; i++) {
        param3.push(param1[i] + param2[i])
    }
    console.log(param3)
}
Sum(arrFirst, arrSecond, arrSum)*/
/*
- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
*/
/*let contact = [{name: 'Dima', age: 13}, {model: 'Camry'}]
let contactNew = []
let information = (param1, param2) => {
    for (const user of param1) {
        for (const key in user) {
            param2.push(key)
        }
    }
    console.log(param2)
}
information(contact, contactNew)*/
/*
    - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]*/
/*
let contact = [{name: 'Dima', age: 13}, {model: 'Camry'}]
let contactNew = []
let information = (param1, param2) => {
    for (const user of param1) {
        for (const key in user) {
            param2.push(user[key])
        }
    }
    console.log(param2)
}
information(contact, contactNew)*/
