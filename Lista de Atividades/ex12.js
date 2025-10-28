/*
12 - Classificando Infrações de trânsito
por excesso (ou falta) de velocidade
Crie um programa que solicite ao usuário:
1.A velocidade máxima permitida na via
2.A velocidade registrada do condutor
Com base nos dados informados,o programa deve analisar e
classificar a situação conforme as seguintes regras:
Excesso de velocidade:

● Se a velocidade do condutor for até 20% acima da
permitida → Infração leve
● Se for entre 20% e 50% acima da permitida →
Infração grave
● Se for acima de 50% da velocidade permitida →
Infração muito grave
Velocidade abaixo do permitido:
Se a velocidade do condutor for menor que a metade da
velocidade permitida → Infração muito leve (por dirigir
devagar demais).
Caso nenhuma dessas condições seja atendida, o programa
deve informar que a velocidade está dentro do limite
permitido.
*/

var prompt = require('prompt-sync')();

const maxVel = +(prompt("Digite a velocidade (em Km/h) máxima permitida na via: "));
const veiVel = +(prompt("Digite a velocidade do veículo: "));
const multaGrave = maxVel*1.2, multamuitoGrave = maxVel*1.5, metadePermitida = maxVel/2;

if(veiVel>multaGrave){
    console.log("INFRAÇÃO GRAVE");
}else if(veiVel>multamuitoGrave){
    console.log("INFRAÇÃO MUITO GRAVE");
}else if(veiVel<metadePermitida){
    console.log("INFRAÇÃO LEVE: MUITO LENTO");
}else{
    console.log("DENTRO DO LIMITE");
}