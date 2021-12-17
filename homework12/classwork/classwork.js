// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//
// fetch(' https://jsonplaceholder.typicode.com/posts')
//     .then(item => item.json())
//     .then(item => {
//         let container = document.createElement('div')
//         document.body.append(container)
//         item.forEach(param => {
//             let user = document.createElement('div')
//             container.append(user)
//             user.style.margin = '20px'
//             let button = document.createElement('button')
//
//             button.innerText = 'Всі коментарі'
//             for (const element in param) {
//                 let content = document.createElement('div')
//                 user.append(content)
//                 content.style.margin = '5px'
//                 content.innerText = `${element}= ${param[element]} `
//                 button.onclick = (ev) => {
//                     ev.preventDefault()
//                     fetch(' https://jsonplaceholder.typicode.com/comments')
//                         .then(item => item.json())
//                         .then(item => {
//                             item.forEach(param1 => {
//                                 let comment = document.createElement('div')
//                                 user.append(comment)
//
//                                 for (const userElement1 in param1) {
//                                     let contents = document.createElement('div')
//                                     comment.append(contents)
//                                     comment.style.margin = '10px'
//                                     if (param1.postId === param.id) {
//
//                                         contents.innerText = `${userElement1}= ${param1[userElement1]} `
//                                     }
//                                 }
//                             })
//                         })
//                     button.disabled = true;
//                 }
//             }
//             user.append(button)
//         })
//     })
let done = 0;

function makeAPlan(doit) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (doit) {
                done += 25;
                console.log(done)
                resolve(done)
            } else {
                reject('no')
            }

        }, 1000)
    })

}

makeAPlan(true)
    .then(doneNew => {
        console.log(doneNew
        )
    })
