/*
Peça ao usuário uma temperatura em Fahrenheit e converta-a para Celsius.Se o valor inserido for muito extremo (maior que 1000 ou menor que -1000), exiba um alerta de "Valor irreal!". 
 */
var prompt = require('prompt-sync')();

let temperaturaF, temperaturaC;

do {
    temperaturaF=+(prompt("Digite a temperatura em em Fahrenheit: "));
    if(temperaturaF>=1000 || temperaturaF<=-1000){
        console.log("Valor irreal!");
        
    }
} while (temperaturaF>=1000||temperaturaF<=-1000);

temperaturaC= ((temperaturaF-32)*5)/9;
temperaturaC=temperaturaC.toFixed(1);
console.log(`A temperatura ${temperaturaF}ºF convertida fica ${temperaturaC}ºC.`);
