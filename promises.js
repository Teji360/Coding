const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
];

function getPosts() {
    setTimeout(() => {
        //get the posts and put them on the page
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){ //function call back should be called right after the post is pushed
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = true; //if error is sent to true it is going to reject, if it is false then it will be pased

            if(!error) {
                resolve();
            }else{
                reject('Error. Something went wrong')
            }
        }, 2000);
   })
    
    
}
createPost({title: 'Post Three', body: 'This is post three'})

.then(getPosts)
.catch(err => console.log(err));