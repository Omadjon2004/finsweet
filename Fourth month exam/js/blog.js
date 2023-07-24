const url = `https://newsapi.org/v2/everything?q=apple&apiKey=e56a6b80aae14f6b807d8d2711a22564`;


const blogCover = document.querySelector('.blog_post');

const postForm = document.querySelector('.add_post'),
postInfoInput = document.getElementById('information').value,
postTitle = document.getElementById('topic_title').value,
postImage = document.getElementById('image_url').value,
postTextarea =document.getElementById('postInfo').value,
postButton = document.querySelector('.post_btn');


fetch(url).then((response) => response.json()).then((data) => {

    const sliced = data.articles.slice(0,3)
    sliced.map((user) => {
        const {author , title,urlToImage ,content} = user;
        console.log(urlToImage);

    const container = document.createElement('div')
    container.classList.add('container-lg')
    container.innerHTML = ` <div class="add_post w-100">
      <img class="w-100 " src="${urlToImage}" alt="#">
      <span class="post_owner">${author}</span>
      <h1 class="post_title mt-3">${title}</h1>
      <p class="post_text">${content}</p>
     </div>`

     blogCover.appendChild(container);
    })
}).catch((error) => console.error(error));

postForm.addEventListener('submit' , (e)=>{
e.preventDefault()


if (postTitle) {
    updateUser(postInfoInput , postTitle , postImage, postTextarea); 
    formReset()
}else {
const postData = {
    postImage:` ${postImage}`,
    title: `${postTitle}`,
    postTextarea: `${postTextarea}`
}
console.log(postData);

fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(postData)
}).then((response) => response.json()).then((data) => {
    const postBox= document.createElement('div');
    postBox.innerHTML = `
         <span>${data.postInfoInput}</span>
         <span>${data.title}</span>
         <span>${data.postImage}</span>
         <span>${data.postTextarea}</span>
         <span>
            `
  
           blogCover.appendChild(postBox)
  console.log(postBox);
           formReset()
})
}}
)



   
