// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch(' https://jsonplaceholder.typicode.com/users')
    .then(item => item.json())
    .then(item => {
        let container = document.createElement('div')
        document.body.append(container)
        item.forEach(param2 => {
            let userFirst = document.createElement('div')
            container.append(userFirst)
            userFirst.style.margin = '20px'
            let buttonFirst = document.createElement('button')
            buttonFirst.innerText = 'Всі пости'
            for (const element2 in param2) {
                let contentFirst = document.createElement('div')
                userFirst.append(contentFirst)
                contentFirst.style.margin = '5px'
                contentFirst.id = '1'
                if (typeof param2[element2] === 'object') {   //як тут зробити рекурсію?
                    let arr = document.createElement('div')
                    contentFirst.append(arr)
                    arr.innerText = `${element2}= ${param2[element2]} `
                    continue
                }
                contentFirst.innerText = `${element2}= ${param2[element2]} `
                buttonFirst.onclick = (e) => {
                    e.preventDefault()
                    fetch(' https://jsonplaceholder.typicode.com/posts')
                        .then(item => item.json())
                        .then(item => {
                            item.forEach(param => {
                                let user = document.createElement('div')
                                userFirst.append(user)
                                user.style.margin = '20px'
                                let button = document.createElement('button')
                                button.innerText = 'Всі коментарі'
                                for (const element in param) {
                                    let content = document.createElement('div')
                                    user.append(content)
                                    content.style.margin = '5px'
                                    if (param2.id === param.userId) {
                                        content.innerText = `${element}= ${param[element]} `
                                        user.append(button)
                                    }
                                    button.onclick = (ev) => {
                                        ev.preventDefault()
                                        fetch(' https://jsonplaceholder.typicode.com/comments')
                                            .then(item => item.json())
                                            .then(item => {
                                                item.forEach(param1 => {
                                                    let comment = document.createElement('div')
                                                    user.append(comment)

                                                    for (const userElement1 in param1) {
                                                        let contents = document.createElement('div')
                                                        comment.append(contents)
                                                        comment.style.margin = '10px'
                                                        if (param1.postId === param.id) {

                                                            contents.innerText = `${userElement1}= ${param1[userElement1]} `

                                                        }
                                                    }
                                                })

                                            })

                                        button.disabled = true;

                                    }

                                }

                            })
                        })
                    buttonFirst.disabled = true;
                }
                userFirst.append(buttonFirst)
            }
        })

    })
