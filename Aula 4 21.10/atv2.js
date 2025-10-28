//Acrescente elementos na array até o usuário escrever fim
var prompt = require('prompt-sync')();

let array=[];
let numero, i=0;
do {
    numero=prompt("Digite um elemento para o array('fim' encerra): ");
    array.push(numero);
    if(numero=="fim"){
        break;
    }
} while (1);
console.log("Mostrando o array completo: ");

do {
    console.log(array[i]);
    if(array[i]=="fim"){
        break;
    }
    i++;

} while (1);