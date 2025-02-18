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
    const editBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar'
    editBtn.textContent = 'Editar'
    deleteBtn.addEventListener('click',() => {
        listItem.remove();
    })
    editBtn.addEventListener('click',() => {
        const newName = prompt('Ingrese el nuevo nombre'); //CUADRO DE DIALOGO
        const newTel = prompt('Ingrese el nuevo telefono');
        listItem.innerHTML = `${newName} - ${newTel}`;
        listItem.appendChild(deleteBtn); 
        listItem.append(editBtn);
    })
    listItem.appendChild(deleteBtn); //agrega el boton al li
    listItem.append(editBtn);
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