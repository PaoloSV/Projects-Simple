const result = document.querySelector('#result')
const calculateLove = () => {
    const name1 = document.querySelector('#name1').value
    const name2 = document.querySelector('#name2').value

    if (name1 && name2){
        const hash = 
            ( name1 + name2)
                            .split('')
                            .reduce(
                                (acc,char)=>
                                    acc+ char.charCodeAt(0),0
                                );
        const lovePorcentaje = hash % 101;
        result.style.color = 'green';
        result.textContent = `Tienen un ${lovePorcentaje}% de compatibilidad`
    }else {
        result.style.color = 'red';
        result.textContent = `Porfavor ingresa nombre`
    }
}   

/*
    *hash
    1)concatena los names
    2)con el split convierte la concatenacion en una array 
        de caracteres
    3)reduce recorre el arreglo
        acc: acumulador
        char: cada caracter del arreglo
        charCodeAt: obtiene el código ASCII del carácter.
    4)se guarda en el acumulador
*/

