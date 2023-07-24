
const startupSection = document.querySelector('.popular_blogs'),
startupText1= document.querySelector('.blogs_title'),
startupBlogs =document.querySelector('.blogs_div'),
startupContainer = document.querySelector('.blogs_container'),
starupRow = document.querySelector('.gap-lg-0');

const registerForm = document.querySelector('.register_form'),
registerFirstName = document.querySelector('.firstname'),
registerLastName = document.querySelector('.lastname'),
registerUserName = document.querySelector('.username'),
registerPassword = document.querySelector('.password'),
registerConfirmPass = document.querySelector('.confirmation'),
registerSpan= document.querySelectorAll('.register_span'),
registerButton= document.querySelector('.register_btn');

const loginForm=document.querySelector('.login_form'),
forLogin = document.querySelector('.forLogin'),
forpassword = document.querySelector('.forpassword'),
loginSpan = document.querySelectorAll('.login_span'),
loginButton = document.querySelector('.login_btn');



url = `https://newsapi.org/v2/everything?q=Apple`

const options = {
    method: 'GET',
    params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
    headers: {
        'x-api-key': 'e56a6b80aae14f6b807d8d2711a22564'
    },

};

fetch(url, options)
    .then(response => response.json())
    .then(data =>{




      const forSlice = data.articles.slice(0,3)
        forSlice.map((startup) =>{




const blogs = starupRow.innerHTML +=
`<div class="col-12 col-lg-4 col-md-6 col-sm-12 blogs_card " >
                <div class="card border-0" >
                  <img
                    src="${startup.urlToImage}"
                    class="card-img-top mb-4"
                    alt="#"
                  />
                  <div class="card-body">
                    <span class="blogs_card-span "
                      >Published at ${startup.publishedAt
                      }
                    </span>
                    <h2 class="blogs_card-title ">
                      ${startup.title}
                    </h2>
                    <p class="blogs_card-text ">
                     ${startup.content}
                    </p>
                  </div>
                </div>
              </div>
              `
          
              return blogs;



        })
    }).catch(err => console.error(err));

    

registerForm.addEventListener('submit' , (e)=>{

e.preventDefault();

function numberRegex(phoneNumber){
  const numberForm = /^[A-Za-z0-9_\_]+$/
  return numberForm.test(phoneNumber)
}
if (!registerFirstName.value) {

registerSpan[0].textContent = `Ma'lumot kiriting`;
registerSpan[0].classList.add('registerSpan')
registerFirstName.classList.add('danger')
}else{
  registerSpan[0].textContent='Hammasi joyida'
  registerSpan[0].classList.remove('danger')
  registerFirstName.classList.add('success')
}
if (!registerLastName.value) {

  registerSpan[1].textContent = `Ma'lumot kiriting`;
  registerSpan[1].classList.add('registerSpan')
  registerLastName.classList.add('danger')
  }else{
    registerSpan[1].textContent='Hammasi joyida'
    registerSpan[1].classList.remove('danger')
    registerLastName.classList.add('success')
  }
  if (!registerUserName.value) {

    registerSpan[2].textContent = `Ma'lumot kiriting`;
    registerSpan[2].classList.add('registerSpan')
    registerUserName.classList.add('danger')
    }else{
      registerSpan[2].textContent='Hammasi joyida'
      registerSpan[2].classList.remove('danger')
      registerUserName.classList.add('success')
      localStorage.setItem('login', registerUserName.value)
    }
    if (!registerPassword.value) {
      registerSpan[3].textContent = `Malumot kiriting`;
      registerSpan[3].classList.add('registerSpan')
      registerPassword.classList.add('danger')
      } 
      else if(!numberRegex(registerPassword.value)){
registerSpan[3].textContent='Faqat raqam va harflardan foydalaning'
registerSpan[3].classList.add('registerSpan')
registerPassword.classList.remove('success')
registerPassword.classList.add('danger')
      } 
      else {
        registerSpan[3].textContent='Hammasi joyida'
        registerSpan[3].classList.remove('danger')
        registerPassword.classList.add('success')
        localStorage.setItem('password',registerPassword.value)
      }if(!registerConfirmPass.value){
        registerSpan[4].textContent = `Ma'lumot kiriting`;
        registerSpan[4].classList.add('registerSpan')
        registerConfirmPass.classList.add('danger') 
      }
      else if (registerConfirmPass.value != registerPassword.value) {
        registerSpan[4].textContent = `Mos kelmadi`;
        registerConfirmPass.classList.add('danger')
        registerConfirmPass.classList.remove('success')
        } 
        else {
          registerSpan[4].textContent='Hammasi joyida'
          registerSpan[4].classList.remove('danger')
          registerConfirmPass.classList.add('success')
        }

})
const loginCheck = localStorage.getItem('password');
const passCheck = localStorage.getItem('login');


loginForm.addEventListener('submit' , (e)=>{
console.log('hello');
e.preventDefault()

if (forLogin.value != passCheck) {
  loginSpan[0].textContent = `Ma'lumot kiriting`;
  forLogin.classList.add('danger');
}else{
  loginSpan[0].textContent='success'
}
})

