let user = JSON.parse(localStorage.getItem('product'))
console.log(user)
let container = document.createElement('div')
document.body.append(container)
let del = document.getElementById('delete')

user.forEach((item, index) => {
    let cotainerSecond = document.createElement('div')
    cotainerSecond.style.margin = '10px 0 10px 0'
    container.append(cotainerSecond)
    let button = document.createElement('button')
    button.innerText = 'Видали цей товар'
    let content = document.createElement('div')
    cotainerSecond.append(content)
    content.innerText = `name:${item.productName}\n age:${item.productNumber}\n status:${item.productPrice} \n ${item.productImage} `
    cotainerSecond.append(button)
    button.onclick = () => {
        user.splice(index, 1);
        cotainerSecond.remove();
        let string=JSON.stringify(user)
        localStorage.setItem('product', string);
        location.reload();
    }
})

del.onclick = () => {
    localStorage.removeItem('product')
    container.innerText = ''
}