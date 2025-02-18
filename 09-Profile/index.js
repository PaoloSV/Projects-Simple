const userName = document.querySelector('#userName');
const userDescription = document.querySelector('#userDescription');
const userEmail = document.querySelector('#userEmail');
const userTel = document.querySelector('#userTel');
const divImg = document.querySelector('#userPhoto');

const userData = {
    name: 'Paolo Santos',
    description: 'Estudiante de Ingeniería de Sistemas de la UNAC',
    email: 'paolosantosvela@gmail.com',
    tel: '+51 989975051',
    foto: './src/img/PSV ICONO.png'
}


const loadUserProfile = (data) => {
    const { name, description, email, tel, foto } = data;
    userName.innerText = name;
    userDescription.innerText = description;
    userEmail.innerText = email;
    userTel.innerText = tel;
    //*agregar foto
    const img = document.createElement('img');
    img.src = foto;
    img.classList.add('profile-photoimg')
    divImg.append(img);
}

/*
    El evento DOMContentLoaded se dispara cuando el HTML ha sido completamente cargado y analizado por el navegador, 
    antes de que se carguen imágenes, estilos y otros recursos externos.
*/
document.addEventListener('DOMContentLoaded', () => {
    loadUserProfile(userData);
})