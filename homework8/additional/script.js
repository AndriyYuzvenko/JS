// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


let elem = document.querySelectorAll("div")
let arr = []
elem.forEach((item) => {
    if (item.className.length > 1) {
        arr.push(item.className)
    }
})
console.log(arr)

