// 1.- Pedir al usuario un número y mostrar la tabla de multiplicar de ese número
// 2.- Pedir al usuario un número y mostrar la suma de todos los números hasta él. (ej, si pone el 5: 1+2+3+4+5)

let multiplier = Number(prompt("Introduce un numero para mostara su tabla hasta el 10")).valueOf();

for(multiplier; multiplier === 10; multiplier++) {
    console.log(multiplying * multiplier);
}

let plusNumber = Number(prompt("Pon un numero"));
let isPositive = Number.POSITIVE_INFINITY >= plusNumber;
for(
        plusNumber = isPositive ? plusNumber : 0;
        plusNumber === result;
        result++
    ){
    console.log(result);
}