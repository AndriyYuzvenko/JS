/*- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)*/
/*let numbers = (a, b, c) => {
    if (a < c && a < b) {
        console.log('a')
    } else if (b < a && b < c) {
        console.log('b')
    } else if (c < a && c < b) {
        console.log('c')
    }
}
numbers(1, 4, 3)*/
/*- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)*/
/*let numbers = (a, b, c) => {
    if (a > c && a > b) {
        console.log('a')
    } else if (b > a && b > c) {
        console.log('b')
    } else if (c > a && c > b) {
        console.log('c')
    }
}
numbers(4, 1, 3)*/
/*- створити функцію яка повертає найбільше число з масиву*/
/*let arr = [1, 2, 65, 4, 5, 6]
let numbers = (param1) => {
    return param1.reduce((a, b) => a > b ? a : b);
}
console.log(numbers(arr))*/
/*- створити функцію яка повертає найменьше число з масиву*/
/*let arr = [1, 2, 0, 4, 5, 6]
let numbers = (param1) => {
    return param1.reduce((a, b) => a < b ? a : b);
}
console.log(numbers(arr))*/
/*- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13*/
/*let arr = [1, 2, 10]
let numbers = (param1) => {
    let sum = 0;
    for (let i = 0; i < param1.length; i++) {
        sum += param1[i]
    }
    return sum
}
console.log(numbers(arr))*/
/*- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/
/*let arr = [1, 2, 10]
let numbers = (param1) => {
    let sum = 0;
    for (let i = 0; i < param1.length; i++) {
        sum += param1[i]/param1.length
    }
    return sum
}
console.log(numbers(arr))*/
/*- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);*/
/*let arr = [12, 3452, 3]
let numbers = (param1) => {
    for (let i = 0; param1.length; i++) {
        let min = param1.reduce((a, b) => a < b ? a : b);
        let max = param1.reduce((a, b) => a > b ? a : b);
        console.log(max)
        return min
    }
}

console.log(numbers(arr))*/
/*- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.*/
/*let arr = []
let numbers = (param1, param2, limit) => {
    for (let i = 0; i < param2; i++) {
        let num = Math.round(Math.random() * (limit));
        param1.push(num)
    }
    console.log(param1)
}
numbers(arr, 39, 100)*/
/*- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.*/
/*let arr = []
let numbers = (param1, param2, limit) => {
    for (let i = 0; i < param2; i++) {
        let num = Math.round(Math.random() * (limit));
        param1.push(num)
    }
    console.log(param1)
}
numbers(arr, 3, 10)*/
/*- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].*/
/*
let arr = [1, 2, 3]
let arrNew = []
let numbers = (param1, param2) => {
    for (let i = param1.length - 1; i >= 0; i--) {
        param2.push(param1[i])
        console.log(param2)
    }

}
numbers(arr, arrNew)*/
