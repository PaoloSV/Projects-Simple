const loginForm = document.querySelector('#login-form');
const succesMessage = document.querySelector('#success-message');

loginForm.addEventListener('submit', (event) => { //evento al enviar el formulario
    event.preventDefault(); //evitar que se recargue la pagina al enviar el formulario
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');

    if (username.value === 'admin' && password.value === 'admin') {
        succesMessage.style.display = 'block';
        succesMessage.innerText = 'Login Exitoso';
    }else{
        alert('Usuario o contraseña incorrectos');
    }
})