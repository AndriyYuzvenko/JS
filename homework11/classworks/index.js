// є масив -

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}];
const favoritesKey = 'favorites';
localStorage.setItem(favoritesKey, JSON.stringify([]));
let container = document.createElement('div')
container.id = 'container'
document.body.append(container)

users.forEach(item => {
    let cotainerSecond = document.createElement('div')
    let button = document.createElement('button')
    let content = document.createElement('div')
    button.innerText = 'Додати до улюблених'
    content.innerText = `name:${item.name}\n age:${item.age}\n status:${item.status}`
    cotainerSecond.append(content, button)
    container.appendChild(cotainerSecond)
    button.onclick = (e) => {
        e.preventDefault()
        const favorites = JSON.parse(localStorage.getItem(favoritesKey));
        favorites.push(item);
        localStorage.setItem(favoritesKey, JSON.stringify(favorites));
        button.disabled = true;
    }
})