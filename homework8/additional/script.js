// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let xxx = document.getElementsByClassName('rules')
let arr = []
let xxxFunction = (item) => {

    return arr.push(item)
}
xxxFunction(xxx)
console.log(arr)