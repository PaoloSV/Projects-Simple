
//captura los valores con el DOM 

const calculateBMI = () => {
    const peso = parseFloat(document.querySelector('#weight').value)
    const altura = parseFloat(document.querySelector('#height').value)/100
    const result = document.querySelector('#result');
    if(peso,altura){
        const bmi = (peso/(altura*altura)).toFixed(2);
        result.innerHTML = `Tu BMI:${bmi}`
    }else {
        result.style.color = 'red'
        result.innerHTML= `Porfavor introduce valores Validos`
    }

}