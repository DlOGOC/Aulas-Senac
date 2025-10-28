/*
7 - Somando valores de um vetor
Crie um vetor com 5 números e mostre no console a soma
total desses valores.
*/

const { aleatorio } = require("./ex4");

let array = [], soma=0;

for(let i=0; i<5; i++){
    array[i] = aleatorio();
    soma += array[i];
}

console.log(`A soma de todos os números do array é ${soma}.`);
