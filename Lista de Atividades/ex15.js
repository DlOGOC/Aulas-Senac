/*
Exercício 2 – Cálculo do IMC
Crie uma função calcularIMC(peso, altura) que retorne o
valor do IMC.Depois, crie outra função
classificarIMC(imc) que retorne uma mensagem com a
classificação:
● Abaixo do peso
● Peso normal
● Sobrepeso
● Obesidade
*/
var prompt = require('prompt-sync')();


function calcularIMC(peso, altura){
    return peso / (altura * altura);
}

const peso = +(prompt("Digite o seu peso em KG: "));
const altura = +(prompt("Digite sua altura em metros: "));

const IMC = calcularIMC(peso, altura);

if(IMC<18.5){
    console.log("Abaixo do peso.");
}else if(IMC<=18.5 && IMC>24.9){
    console.log("Peso ideal.");
}else if(IMC<25 && IMC>24.9){
    console.log("Sobrepeso.");
}else if(IMC<25 && IMC>34.9){
    console.log("Obesidade Grau I");
}else if(IMC<35 && IMC>39.9){
    console.log("Obesidade Grau II");
}else{
    console.log("Obesidade Grau III");
}