/*
Exercício 1 – Soma de dois números
Crie uma função chamada soma que receba dois números como
parâmetros e retorne a soma deles.
Em seguida, mostre o resultado no console.
*/
var prompt = require('prompt-sync')();

function soma (n1, n2){
    return n1+n2;
}

const n1 = +(prompt("Digite o primeiro número: "));
const n2 = +(prompt("Digite o segundo número: "));

console.log(`${n1} + ${n2} = ${soma(n1, n2)}`);
