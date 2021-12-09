// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let click = document.getElementById('click')
// click.onclick = function (e) {
//
//     e.preventDefault()
//
//     class Users {
//         constructor(name, age) {
//             this.name = name;
//             this.age = age
//         }
//     }
//
//     let arr = new Users(`${document.user.name.value}`, `${document.user.age.value}`)
//
//     let string = JSON.stringify(arr)
//     localStorage.setItem('user', string)
// }

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// let clickSecond = document.getElementById('clickSecond')
//
// let arr = []
//
// let content = (arr) => {
//     class Users {
//         constructor(model, type, volume) {
//             this.model = model;
//             this.type = type;
//             this.volume = volume
//         }
//     }
//
//     arr.push(new Users(`${document.cars.model.value}`, `${document.cars.type.value}`, `${document.cars.volume.value}`))
//     let string = JSON.stringify(arr)
//     localStorage.setItem('user', string)
// }
// clickSecond.onclick = (e) => {
//     e.preventDefault()
//     content(arr)
// }