const fileInput = document.querySelector('#fileInput')
const audioElement = document.querySelector('#audio')


/*
    evento change en JavaScript se activa cuando un usuario
    modifica el valor de un elemento de entrada
*/
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Obtenemos el archivo seleccionado
    if(file){
        const objectURL = URL.createObjectURL(file); // Creamos una URL TEMPORAL del archivo
        audioElement.src = objectURL; // Asignamos la URL al elemento audio
    }
})