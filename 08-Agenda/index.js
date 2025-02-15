const form = document.querySelector('#contactForm')
const search = document.querySelector('#searchInput')

//*Listeners
form.addEventListener('submit',(event) => {
    event.preventDefault(); //evita que se recargue la pagina
    const name  = document.querySelector('#contacName').value;
    const tel   = document.querySelector('#contacTel').value;
    const listItem = document.createElement('li'); //crea un elemento li
    listItem.textContent = `${name} - ${tel}`;
    //*crea un boton para eliminar el contacto
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar'
    deleteBtn.addEventListener('click',() => {
        listItem.remove();
    })
    listItem.appendChild(deleteBtn); //agrega el boton al li
    document.querySelector('.contacList').appendChild(listItem);
    form.reset(); //limpia los campos del formulario
})


search.addEventListener('input', (event) => { 
    const searchTerm = event.target.value.toLowerCase();
    const contacts = document.querySelectorAll('.contacList li'); //selecciona todos los li
    contacts.forEach((contact) => {
        if(contact.textContent.toLowerCase().includes(searchTerm)){ //si esta en array de los contactos
            contact.style.display = '';
        }else{
            contact.style.display = 'none';
        }
    })
})