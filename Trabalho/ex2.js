/*Peça ao usuário para inserir a largura e a altura de um retângulo. Calcule a área e exiba o resultado. Se a largura ou a altura for menor ou igual a zero, exiba a mensagem: "Os valores devem ser positivos."*/
var prompt = require('prompt-sync')();
let largura, altura;
/*
let largura = +(prompt("Digite a largura do retângulo: "));
let altura = +(prompt("Digite a altura do retângulo: "));
let a = largura*altura;
*/
do {
    largura = +(prompt("Digite o valor da largura do retângulo: "));
    if(largura<=0){
        console.log("Erro. Os valores devem ser positivos.");
    }
} while (largura<=0);

do {
    altura = +(prompt("Digite o valor da altura do retângulo: "));
    if(altura<=0){
        console.log("Erro. Os valores devem ser positivos.");        
    }
} while (altura<=0);

let a = largura * altura;
a=a.toFixed(1);
console.log(`A área do retângulo é: ${a}.`);

