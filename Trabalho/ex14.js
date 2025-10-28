/*
Peça ao usuário para informar a voltagem (em Volts) e a frequência (em Hertz) de um equipamento. O padrão seguro é uma voltagem de 127V ou 220V e uma frequência de 60Hz. Se os valores estiverem dentro do padrão, exiba "Equipamento operando em condições seguras.". Caso contrário, exiba "Alerta: Valores fora do padrão de operação!".
*/

var prompt = require('prompt-sync')();

const volt = +(prompt("Digite a voltagem do equipamento (em Volts): "));
const freq = +(prompt("Digite a frequencia (em Hertz): "));

if(volt == 127 || volt == 220){
    if(freq == 60){
        console.log("Equipamente operando em condições seguras.");
    }
}else{
    console.log("Alerta: Valores fora do padrão de operação!");
}