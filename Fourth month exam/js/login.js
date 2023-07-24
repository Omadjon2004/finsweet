const loginForm=document.querySelector('.login_form'),
forLogin = document.querySelector('.forLogin'),
forpassword = document.querySelector('.forpassword'),
loginSpan = document.querySelectorAll('.login_span'),
loginButton = document.querySelector('.login_btn');


const passCheck = localStorage.getItem('password');
const loginCheck = localStorage.getItem('login');

loginForm.addEventListener('submit' , (e)=>{


    e.preventDefault()
    if(!forLogin.value ){
        loginSpan[0].textContent = `Ma'lumot kiriting`;
        forLogin.classList.remove('success')
        forLogin.classList.add('danger');
    }else if(forLogin.value !=loginCheck ){
loginSpan[0].textContent = `Noto'g'ri malumot`
forpassword.classList.remove('success')
forLogin.classList.add('danger');
    }else{
        loginSpan[0].textContent = `Hammasi joyida`
        forLogin.classList.remove('danger'); 
        forLogin.classList.add('success') 
    }
    if(!forpassword.value ){
        loginSpan[1].textContent = `Ma'lumot kiriting`;
        forpassword.classList.remove('success')
        forpassword.classList.add('danger');
    }else if(forpassword.value != passCheck ){
loginSpan[1].textContent = `Noto'g'ri malumot`
forpassword.classList.remove('success')
forpassword.classList.add('danger');
    }else{
        loginSpan[1].textContent = `Hammasi joyida`
        forpassword.classList.remove('danger'); 
        forpassword.classList.add('success') 
    }
})