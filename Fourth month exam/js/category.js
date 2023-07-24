const search = document.querySelector('.search_input');
const categoryJavascript = document.querySelector('.category_section')

const pagenationButtons=document.querySelector('.pagenationButtons')
let currentPage = 1;

const loaderContainer = document.querySelector('.loader_container')
const loading = document.createElement('div');
loading.classList.add('loader');
loaderContainer.appendChild(loading);

let url = `https://newsapi.org/v2/everything?q=apple&apiKey=e56a6b80aae14f6b807d8d2711a22564&page=${currentPage}`;



async function startupData() {


try {
    const response = await fetch(url)
    const data = await response.json();

    const searchTerm = search.value; 

    console.log(data);
    let totalResults = data.totalResults > 1 ? 5 : data.totalResults;



if(searchTerm){
    url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=e56a6b80aae14f6b807d8d2711a22564`
}else{
    url = `https://newsapi.org/v2/everything?q=apple&apiKey=e56a6b80aae14f6b807d8d2711a22564&page=${currentPage}`;
}


categoryJavascript.innerHTML = ''

if (data.articles.lenght === 0) {
    const notFound = document.createElement('div')
    notFound.textContent = 'Not Found'
    notFound.classList.add('redtext')
    categoryJavascript.appendChild(notFound)
}else{
    const forMap =     
    data.articles.slice(0,5)
forMap.map((startup) =>{
  


const categoryJs = categoryJavascript.innerHTML += 
`
<div class="container container-lg container-md text-start mt-5">
<div class="category_blogs d-lg-flex d-md-flex d-sm-block d-block  text-start flex-column flex-lg-row flex-md-row flex-sm-column">
<div>
<img class="category_blogs-img" src="${startup.urlToImage}" alt="null ">
</div>
<div class="category_blogs-info  ms-0 ms-md-5 ms-lg-5 mt-3 mt-lg-0 mt-md-0 mt-sm-3 text-left">
<span class="category_info-span  mt-5">${startup.content.slice(0,40)}</span>
<h2 class="category_info-title ">${startup.title}</h2>
<p class="category_info-text  mt-5">
${startup.description}
</p>
</div>
</div>
</div>`

return categoryJs

})
pagenationButtons.innerHTML = ''

if (totalResults > 1) {
   for ( let i=1 ; i<=totalResults ; i++){

    const forBtn =document.createElement('button');
    forBtn.classList.add('pagenation_btn')
    forBtn.innerText = i;
     if(currentPage === i){
        forBtn.classList.add('active')
     }
     forBtn.addEventListener('click', ()=>{
        currentPage = i;
        startupData()
     })

     pagenationButtons.appendChild(forBtn)
   } 
}
}
      }
catch(error){
console.log(error);
}}

startupData();

search.addEventListener('input' , ()=>{
   startupData()
})