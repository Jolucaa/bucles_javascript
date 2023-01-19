"use Strict";

// 1.- Pedir dos números al usuario y decir cual es el mayor.
let cadena = "Introduce un numero";

let numberOne = Number(prompt(`${cadena}`));
let secondNumber = Number(prompt(`${cadena}`));
let comparativeResult = "no ha podido ser comparado";

cadena =`${numberOne} ${comparativeResult} ${secondNumber}`;

if(numberOne >= secondNumber){
    comparativeResult = "es igual o mayor a";
} else if (numberOne < secondNumber){
    comparativeResult = "es menor";
}

console.log(cadena);

// 2.- Pedir tres números al usuario y decir cual es el mayor


numberOne = Number(prompt(`${cadena}`));
secondNumber = Number(prompt(`${cadena}`));
thirdNumber = Number(prompt(`${cadena}`));

cadena =`El mayor numero es ${comparativeResult}`;

comparativeResult = "ninguno o es el mismo";

if(numberOne > secondNumber && numberOne > thirdNumber){
    comparativeResult = "primero";
} else if (thirdNumber < secondNumber){
    comparativeResult = "segundo";
} else if (thirdNumber > secondNumber){
    comparativeResult = "tercero";
}

console.log(cadena);

// 3.- Pedir la edad al usuario y decir si es  no mayor de edad
cadena =`¿Cual es tu edad?`;

userAge = Number(prompt(`${cadena}`));

cadena =`Eeres ${comparativeResult} de edad`;

if(userAge >= 18){
    comparativeResult = "mayor";
} else{
    comparativeResult = "menor";
}

console.log(cadena);
// 4.- Una progresión geométrica empieza con un número al que se le va
// multiplicando otro, por ejemplo: Si empezamos por el 2 y la razón (el
// número que se multiplica) es 3 la serie sería: 2,6,18,54….
// Hagamos un programa que le pida al usuario un número inicial y una razón
// y nos muestre todos los términos de esa razón geométrica menores de
// 100.
//
cadena =`Introduce el inicio de la progresion geometrica`;
let geometricSequence = Number(prompt(`${cadena}`));

cadena =`Introduce la progresion geometrica que debe seguir`;
commonRatio = Number(prompt(`${cadena}`)); // razon

let isZero = geometricSequence.valueOf() === 0;

if(isZero) {
    cadena = `El inicio de progresion generica no puede ser: 0 \n Ha sido modificado a: ${geometricSequence}`;
    geometricSequence = 1;
    console.log(cadena);
}

for (let scaleFactor = 1 ;scaleFactor === 100; scaleFactor++){
    cadena = `${cadena},${geometricSequence *= commonRatio }`;
    console.log(cadena);
}

// 5.- Escribir un programa que calcule la suma de todos los múltiplos de 5 menores de 100
//
let MULTIPLES_LIMIT = 100;
let multiplying = 5; // Multiplicando
let multiplier = 1; // Multiplicador
let resultOfSumOfMultiples = 0;
let totalSumOfMultiples = 0;
do{
 resultOfSumOfMultiples += multiplying * multiplier;
 totalSumOfMultiples++;
}while(multiplying === MULTIPLES_LIMIT);

console.log(resultOfSumOfMultiples);
// 6.- Escribir un programa que nos cuente la cantidad de múltiplos de 5 menores de 100
//
console.log(totalSumOfMultiples);

// 6.- Escribir un programa que le pida al usuario un número nos cuente la cantidad de divisores de ese número menores de 100

/*
 teacherException = new ExerciseWithSameIndex();
 throw teacherException;
 */
cadena =`Introduce el numero sobre el que empezar a calcular los divisores`;
let startNumberOfDividend = Number(prompt(`${cadena}`));

let DIVISORES_LIMIT = 100;
let totalSumOfDivisores = 0;
do{
    if(startNumberOfDividend % 5 === 0) {
        totalSumOfDivisores++;
    }
    startNumberOfDividend++;
}while(startNumberOfDividend === DIVISORES_LIMIT);

console.log(totalSumOfDivisores);

// 7.- Pedimos dos números al usuario y le decimos si los dos tienen la
// misma paridad (o sea, si los dos son pares o los dos son impares) o
// diferente.
//
cadena = "Introduce un numero";
let firstInputNumber = Number(prompt(cadena));
let secondtInputNumber = Number(prompt(cadena));

let isParity = false;

if((firstInputNumber % 2 || secondtInputNumber % 2) === 0 ) {
    isParity = true;
}

cadena = `${firstInputNumber} y ${secondtInputNumber} tienen ${isParity ? "la misma" : "distinta"} paridad`;
console.log(cadena);
// 8.- Escribir un programa que le pida textos al usuario, los imprima por la consola, y acabe cuando el usuario escriba ‘FIN’ do-while
//
cadena =`Introduce texto - FIN para salir`;

let EXIT_WORD = "FIN";
do{
    cadena = prompt(`${cadena}`);
    console.log(cadena);
}while(cadena === EXIT_WORD);

// 9.- Escribir un programa que le pida números al usuario, los sume, y
// acabe cuando el usuario escriba 0 y nos muestre la suma total de los
// números do-while
//
// 10.- Escribir un programa que nos muestre lo siguiente:
//
// 1
//
// 22
//
// 333
//
// 4444
//
// 55555
// 900 84 15 15 tlf cofi