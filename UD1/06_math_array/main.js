// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



function doCalculation(array) {
    let suma = 0
    let max = array [0]
    let min = array [0]
    for (let i = 0; i<array.length; i++){
        console.log(array[i]);
        suma += array[i]

        if (array[i] > max) {
            max = array[i]
        }
        if (array[i] < min) {
            min = array[i]
        }
    }
    console.log([`la suma es ${suma}`]);
    console.log([`la media es ${suma / array.length}`]);
    console.log([`el máximo es ${max}`]);
    console.log([`el mínimo es ${min}`]);
}



doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])