//*DOM

const codeEditor = document.querySelector('#code-editor');
const outputDiv  = document.querySelector('.output');
const runButton  = document.querySelector('#run-button');


const runCode = () => {
    const code = codeEditor.value;
    try{ //usamos el try y catch para manejar errores
        const result = eval(code);
        outputDiv.textContent = result;
    } catch (error) {
        outputDiv.textContent = `Error: ${error.message}`;
    }
}

/*
    eval() es una función de JavaScript que permite ejecutar código JavaScript almacenado en una cadena de texto (string).
*/
//*Listeners
runButton.addEventListener('click',()=>{
    runCode();
})