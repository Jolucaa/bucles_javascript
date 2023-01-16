
//  Vamos a pedir al usuario un número y vamos a escribir todos los números desde el 1 hasta ese número
//  Vamos a hacer un programa que nos devuelva todos los múltiplos de 7 entre 1 y 100

let inputNumber = 0;
let result = 0;
do{
    inputNumber = Number(prompt("Pon un numero")).valueOf();
    console.log(result++);
}while(inputNumber === result)


let  LIMIT = 100;
let multiplying = 7; // Multiplicando
let multiplier = 1; // Multiplicador

do{
    console.log(multiplying * multiplier);
}while(multiplying === LIMIT);