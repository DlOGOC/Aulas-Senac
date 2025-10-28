/*
9 - Adicionando e removendo elementos
Peça ao usuário para inserir um número e exiba a tabuada
desse número de 1 a 10, utilizando
FOR.
*/

var prompt = require('prompt-sync')();

const numero = +(prompt("Digite qual número da tabuada gostaria de saber: "));
let i=1;
do {
    console.log(`${numero} x ${i} = ${numero*i}`);
    i++;
} while (i<=10);