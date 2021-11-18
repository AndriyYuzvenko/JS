/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
/*let areaRectangle = (a, b) => {
    let s = a * b;
    return s;
}
console.log(areaRectangle(4, 5));*/
/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/
/*let areaCircle = (radius) => {
    let s = Math.PI * radius ** 2;
    return s;
}
console.log(areaCircle(4));*/
/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
/*let areaCylinder = (height, radius) => {
    let s = 2 * Math.PI * height * radius;
    return s;
}
console.log(areaCylinder(2, 3))*/
/*- створити функцію яка приймає масив та виводить кожен його елемент*/
/*let arr = (num) => {
    for (i = 0; i < num.length; i++) {
        console.log(num[i])
    }
}
arr([1, 2, 3, 4, 5, 6])*/
/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
/*let text = (param) => {
    document.write(`<p>${param}</p>`)
}
text('Я вивів текст!!!')*/
/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
/*let text = (item,num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
text('Вивів три лішка!!!',3)*/
/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
який є числовим (тут використовувати цикл)*/
/*let text = (item,num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
text('Вивів три лішка!!!',3)*/
/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
/*let arr = [1, 2, 3, 4, 'a', 'b', 'c', true, false, true];

let arrFunction = (param1, param2) => {
    document.write(`<ul>`)
    for (let i = 0; i < param2.length; i++) {
        document.write(`<li>${param2[i]}</li>`)
    }
    document.write(`</ul>`)
}
arrFunction(arr, arr)*/
/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/
/*
let arr = [
    {
        id: 1,
        name: 'Andriy',
        age: 19
    },
    {
        id: 2,
        name: 'Sasha',
        age: 23
    },
    {
        id: 3,
        name: 'Anton',
        age: 12
    }
]
let arrayOfObjects = (param1) => {
    for (let i = 0; i < param1.length; i++) {
        document.write(`<div>`)
        document.write(`<ul>`)
        document.write(`<li>${param1[i].id}</li>`)
        document.write(`<li>${param1[i].name}</li>`)
        document.write(`<li>${param1[i].age}</li>`)
        document.write(`</ul>`)
        document.write(`</div>`)

    }
}
arrayOfObjects(arr)*/
