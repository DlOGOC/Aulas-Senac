/*
(Desafio) 2. Comendo frutas
Você está em um pomar e acabou de colher 50 FRUTAS.
Agora, você vai começar a comer elas.
Escreva um programa que, a cada iteração, solicite ao
usuário informar quantas frutas ele comeu e
exiba quantas frutas restam na cesta após cada consumo,
até que todas as frutas tenham sido
consumidas.
*/

var prompt = require('prompt-sync')();

let frutas = 50;

do {
    let comerFrutas = +(prompt("Quantas frutas você comeu? "));
    frutas -= comerFrutas;
    if(frutas<0){
        console.log("Quantidade de frutas invlálida.");
        frutas+=comerFrutas;
    }else if(frutas==0){
        console.log("Você comeu todas as frutas!");
        break;
    }
    console.log(`Você ainda tem ${frutas} frutas.`);
    
} while (frutas>0);