const contaner = document.getElementById('contaner');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click',() => {
    contaner.classList.add("active");
});

loginBtn.addEventListener('click',() => {
    contaner.classList.remove("active");
});

