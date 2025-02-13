//*Selectores del DOM
const rRange = document.querySelector('#rRange');
const gRange = document.querySelector('#gRange');
const bRange = document.querySelector('#bRange');
const colorDisplay = document.querySelector('#colorDisplay');
const rgbValue = document.querySelector('#rgbValue');
const copyButton = document.querySelector('#copyButton')

const updateColor = () => {
    const rgbStr = `RGB(${rRange.value},${gRange.value},${bRange.value})`
    colorDisplay.style.backgroundColor = rgbStr;
    rgbValue.innerText = rgbStr;
}


//*Listeners
rRange.addEventListener('input',()=>{
    updateColor();
})

gRange.addEventListener('input',()=>{
    updateColor();
})

bRange.addEventListener('input',()=>{
    updateColor();
})

updateColor();

copyButton.addEventListener('click',()=>{
    navigator.clipboard.writeText(rgbValue.textContent) //es una serie de metodos(API Clipboard) incluidos en js que devuelve una promesa
    .then(()=>{
        alert('Color Copiado');
    })
    .catch((error)=>{
        console.log(error);
        alert('No se pudo copiar');
    })
})