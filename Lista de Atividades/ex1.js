/*1 - Tabuada de um número
Peça ao usuário para inserir um número e exiba a tabuada
desse número de 1 a 10, utilizando
FOR.*/

var prompt = require('prompt-sync')();

const numero = +(prompt("Digite qual número da tabuada quer saber: "));

for(let i=1; i<=10; i++){
    console.log(`${numero} x ${i} = ${numero*i}`);
}