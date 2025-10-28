/*
2 - Repetindo uma mensagem
Peça ao usuário para inserir um número N e repita a
mensagem 'Olá!' N vezes.
*/

var prompt = require('prompt-sync')();

const n = +(prompt("Digite quantas vezes você quer a mensagem: "));

for(let i=0; i<n; i++){
    console.log("Olá!");
}