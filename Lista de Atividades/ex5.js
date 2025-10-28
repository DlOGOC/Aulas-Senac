/*
5 - O fim da array
Acrescente elementos na array até o usuário escrever fim.
*/

var prompt = require('prompt-sync')();

var n, array=[];
while (1) {
    n = prompt("Digite o elemento: ").toLocaleLowerCase();
    if(n == "fim"){
        break;
    }
    array.push(n);
}
console.log("\nO array ficou: \n");

for(let i=0; i<array.length; i++){
    console.log(array[i]);
}