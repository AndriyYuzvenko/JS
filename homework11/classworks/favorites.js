let container = document.createElement('div')
document.body.append(container)

let user =JSON.parse(localStorage.getItem('favorites'))
console.log( user)

user.forEach(item => {
    let cotainerSecond = document.createElement('div')
    let content = document.createElement('div')
    content.style.margin='10px 0 10px 0'
    content.innerText = `name:${item.name}\n age:${item.age}\n status:${item.status}\n`
    cotainerSecond.append(content)
    container.appendChild(cotainerSecond)
})