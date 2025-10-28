/*
3 - Subindo uma escada
Imagine que você está subindo uma escada. Cada degrau tem
uma altura fixa de 30 cm. Escreva
um programa que solicite ao usuário inserir a altura
total da escada em centímetros e calcule
quantos degraus são necessários para alcançar o topo.
*/

var prompt = require('prompt-sync')();
let i = 0;
let numero = +(prompt("Digite quantos centímetros tem a escada: "));

while (numero != 0) {
   if(numero<=30){
    i++;
    numero-30;
   }else if(numero>30){
    i+=numero/30
    break;
   }
}

console.log(`É necessário ${i.toFixed(1)} degraus para chegar ao topo.`);
