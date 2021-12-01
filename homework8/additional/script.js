// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


// let elem = document.querySelectorAll("*")
// let arr = []
// elem.forEach((item) => {
//     if (item.className.length > 1) {
//         arr.push(item.className)
//     }
// })
// console.log(arr)

function gatherClassNames(elem) {
    const list = new Set(elem.classList);
    for (let child of elem.children) {
        gatherClassNames(child).forEach((cn) => {
            list.add(cn);
        });
    }
    return list;
}

console.log([...gatherClassNames(document.body)]);