/*(Desafio) 1. Economia para uma compra
Você está planejando economizar dinheiro para comprar um
item especial. O objetivo é somar
quantias de dinheiro até que o total economizado
ultrapasse 100 REAIS. Cada vez que o usuário
adiciona uma quantia, o programa deve informar o valor
acumulado até o momento.*/

var prompt = require('prompt-sync')();
let total=0;

do {
    let valorEconomizado = +(prompt("Digite quanto você poupou hoje: "));
    total+=valorEconomizado;
    console.log(`Você tem até agora: ${total.toFixed(2)}. Continue assim.`);
    if(total >= 100){
        console.log("PARABÉNS! VOCÊ BATEU A META!");
        break;
    }
} while (1);