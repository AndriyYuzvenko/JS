// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// fetch(' https://jsonplaceholder.typicode.com/posts')
//     .then(item => item.json())
//     .then(item => {
//         let container = document.createElement('div')
//         document.body.append(container)
//         item.forEach(param => {
//             let user = document.createElement('div')
//             container.append(user)
//             for (const userElement in param) {
//                 let content = document.createElement('div')
//                 user.append(content)
//                 user.style.display = 'flex'
//                 content.style.margin = '0 5px'
//                 content.innerText = `${userElement}= ${param[userElement]} `
//             }
//         })
//     })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// fetch(' https://jsonplaceholder.typicode.com/comments')
//     .then(item => item.json())
//     .then(item => {
//         let container = document.createElement('div')
//         document.body.append(container)
//         item.forEach(param => {
//             let comment = document.createElement('div')
//             container.append(comment)
//             for (const userElement in param) {
//                 let content = document.createElement('div')
//                 comment.append(content)
//                 comment.style.display = 'flex'
//                 content.style.margin = '0 5px'
//                 content.innerText = `${userElement}= ${param[userElement]} `
//             }
//         })
//     })