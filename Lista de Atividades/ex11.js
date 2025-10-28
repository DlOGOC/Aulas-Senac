/*
11 - Descobrindo o dia da semana
Crie um programa que solicite ao usuário que digite um
número de 0 a 6 usando o prompt-sync.
Cada número representa um dia da semana, sendo:
● 0 → Domingo
● 1 → Segunda-feira
● 2 → Terça-feira
● 3 → Quarta-feira
● 4 → Quinta-feira
● 5 → Sexta-feira
● 6 → Sábado
*/

var prompt = require('prompt-sync')();

const diaDaSemana = +(prompt("Digite um número: "));
var nomeDoDia = ""

switch (diaDaSemana) {
    case 0: nomeDoDia = "Domingo";
        break;
    case 1: nomeDoDia = "Segunda-feira";
        break;
    case 2: nomeDoDia = "Terça-feira";
        break;
    case 3: nomeDoDia = "Quarta-feira";
        break;
    case 4: nomeDoDia = "Quinta-feira";
        break;
    case 5: nomeDoDia = "Sexta-feira";
        break;
    case 6: nomeDoDia = "Sabado";
        break;
    default: nomeDoDia = "Erro"
        break;
}

console.log(`De acordo com o que você digitou, é ${nomeDoDia}`);
