/*
Peça ao usuário o valor da base e da altura de um triângulo. Calcule e exiba a área. Se a base ou a altura for um valor negativo ou zero, exiba a mensagem: "Valores inválidos!". 
*/
var prompt = require('prompt-sync')();

let base = 0, altura = 0, area;

do {
    base = +(prompt("Digite o valor da base do triângulo: "));
    if(base<0){
        console.log("Valor incorreto.");
    }
} while (base<0);

do {
    altura = +(prompt("Digite o valor da altura do triângulo: "));
    if(altura<0){
        console.log("Valor incorreto.");
    }
} while (altura<0);

area=(base*altura)/2;

console.log(`O valor da área do triângulo é: ${area}`);


