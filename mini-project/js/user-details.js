let user = document.createElement('div')
user.id = 'containerUser'
document.body.append(user)

let usersNew = JSON.parse(localStorage.getItem('usersNew'))
console.log(usersNew)

const objRound = obj => {
    let res = `<ul>`;
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            res += `<li>${key}: ${objRound(obj[key])}</li>`;
            continue;
        }
        res += `<li>${key}: ${obj[key]}</li>`;
    }
    res += `</ul>`;
    return res;
};

usersNew.forEach(userParam => {


    user.insertAdjacentHTML('beforeEnd', objRound(userParam));
    let userPosts = document.createElement('button')
    userPosts.id = 'userPosts'
    user.append(userPosts)
    userPosts.innerText = 'post of current user'
    userPosts.onclick = () => {
        let post = document.createElement('div')
        post.id = 'posts'
        user.append(post)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(item => item.json())
            .then(item => {
                item.forEach((postParam, paramIndex) => {
                    if (userParam.id === postParam.userId) {
                        let postTitle = document.createElement('p')
                        post.append(postTitle)
                        postTitle.innerText = ` ${postParam.title}`
                        let postButton = document.createElement('button')
                        postButton.id = 'postButton'
                        post.append(postButton)
                        let postDetails = document.createElement('a')
                        postDetails.appendChild(document.createTextNode('post-details'))
                        postDetails.href = 'post-details.html'
                        postButton.append(postDetails)
                        postButton.onclick = () => {
                            let postsNew = []
                            postsNew.push(item[paramIndex])
                            let string = JSON.stringify(postsNew)
                            localStorage.setItem('postsNew', string)
                        }
                    }
                })
            })
        userPosts.disabled = true
    }
});
