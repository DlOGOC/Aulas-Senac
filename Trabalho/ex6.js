/*
Peça o valor total de um jantar. Em seguida, pergunte se o atendimento foi "bom" ou "ruim". Se a resposta for "bom", adicione 10% sobre o valor do jantar como gorjeta. No final, exiba o valor total da conta (jantar + gorjeta, se houver). 
*/

var prompt = require('prompt-sync')();

var valorJantar = +(prompt("Digite o valor total do jantar: "));
var atendimento, gorjeta=0, total=0;

do {
    atendimento = (prompt("O atendimento foi 'bom' ou 'ruim'? "));
    if(atendimento =="bom"){
        gorjeta+=(valorJantar*10)/100;
        total+=valorJantar+gorjeta
            break;
    }else if(atendimento=="ruim"){
        break;
    }else{
        console.log("Apenas 'bom' ou 'ruim' são suportados.");
    }
} while (atendimento!="bom" || atendimento!="ruim");

valorJantar=valorJantar.toFixed(2);
toal=total.toFixed(2);
gorjeta=gorjeta.toFixed(2);

console.log(`\nO total da conta ficou: R$${total}; \nValor total do jantar: R$${valorJantar}\ngorjeta: R$${gorjeta}`);