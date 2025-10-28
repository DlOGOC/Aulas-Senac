/*
Exercício 4 – Conversor de temperatura
Crie uma função gerarMensagem(nome, hora) que retorne uma
saudação de acordo com o horário:
● Antes das 12h → “Bom dia”
● Entre 12h e 18h → “Boa tarde”
● Após 18h → “Boa noite”
*/
var prompt = require('prompt-sync')();


function gerarMensagem(nome, hora){
    if(hora<12){
        console.log(`Bom dia ${nome}!`);
    }else if(hora>=12 && hora<=18){
        console.log(`Boa tarde ${nome}!`);
    }else{
        console.log(`Boa noite ${nome}!`);
    }
}

let nome = prompt("Qual o seu nome? ");
const hora = +(prompt("Que horas são? (exemplo: 15,30)"));

gerarMensagem(nome, hora);