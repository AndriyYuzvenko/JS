let postsNew = JSON.parse(localStorage.getItem('postsNew'));

let container = document.createElement('div')
container.id = 'container'
document.body.append(container)
postsNew.forEach(paramPost => {
    let post = document.createElement('div')
    post.id = 'post'
    container.append(post)
    for (const key in paramPost) {
        let postsContents = document.createElement('div')
        post.append(postsContents)
        postsContents.innerText = `${key} : ${paramPost[key]}`

    }
    let postsButton = document.createElement('button')
    postsButton.innerText = 'comments'
    post.append(postsButton)
    postsButton.onclick = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(item => item.json())
            .then(item => {
                let comments = document.createElement('div')
                comments.id = 'comments'
                container.append(comments)

                item.forEach((commentsParam) => {

                    if (paramPost.id === commentsParam.postId) {
                        let commentsObject = document.createElement('div')
                        commentsObject.id = 'commentsObject'
                        comments.append(commentsObject)
                        for (const key in commentsParam) {
                            let commentsContent = document.createElement('div')
                            commentsObject.append(commentsContent)
                            commentsContent.innerText = `${key} : ${commentsParam[key]}`
                        }
                    }
                })

            })
postsButton.disabled=true
    }
})