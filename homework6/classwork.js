/*
- Дано список імен.
    let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'
*/
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let name = (string, symbol) => {
//     let newArr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// }
// name(n2, '-');
/*    - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.*/
// let arr = []
// let arrNew = (param1, param2, param3) => {
//     for (let i = 0; i < param3; i++) {
//         let a = (Math.round(Math.random() * param2));
//         param1.push(a)
//     }
//     console.log(param1)
// }
// arrNew(arr, 100, 15)
/*- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort*/
// let arr = []
// let arrNew = (param1, param2, param3) => {
//     for (let i = 0; i < param3; i++) {
//         let a = (Math.round(Math.random() * param2));
//         param1.push(a)
//     }
//     param1.sort()
//     console.log(param1)
// }
// arrNew(arr, 100, 15)
/*- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа*/
/*let arr = []
let arrNew = (param1, param2, param3) => {
    for (let i = 0; i < param3; i++) {
        let a = (Math.round(Math.random() * param2));
        param1.push(a)
    }
    param1.sort()
}
arrNew(arr, 100, 15)
let arrFilter=arr.filter((param1)=>{
    return param1%2===0
})
console.log(arrFilter)*/
/*- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.*/
/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let arrNew = arr.map((param1) => {
        return param1 + ''
    }
)
console.log(arrNew)*/
/*- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums('ascending') // [3,11,21]
sortNums('descending') // [21,11,3]*/

// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') return arr.sort((a, b) => a - b);
//     if (direction === 'descending') return arr.sort((a, b) => b - a);
// };
// console.log(sortNums([3, 11, 21], 'descending'));
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let newSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(newSort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let newFilter = coursesAndDurationArray.filter((param1) => {
//     return param1.monthDuration > 5
// })
// console.log(newFilter)
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
/*
let cutString = (str, n) => {
    const res = [];
    while (str.length) {
        res.push(str.substr(0, n))
        str = str.slice(n)
    }
    console.log(res)
    return res
};
document.writeln(cutString('Армагедон', 3))*/
