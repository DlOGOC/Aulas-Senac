/*
13 - Calculando o valor abastecido no posto
de gasolina
Crie um programa que simule o funcionamento de um posto
de gasolina. O programa deve solicitar ao usuário:
O tipo de combustível que deseja abastecer (G para
Gasolina ou A para Álcool)
A quantidade de litros que deseja colocar
Considere os seguintes preços:
Gasolina: R$ 5,89 por litro
Álcool: R$ 4,39 por litro
O programa deve calcular e exibir o valor total a ser
pago.
⛽ Desafio extra:
Se o usuário abastecer mais de 20 litros, aplique um
desconto de 5% sobre o valor total.
*/

var prompt = require('prompt-sync')();
const gasolinaG = 5.89, gasolinaA = 4.39;
var total=0, desconto=0, tipGasolina = "";

do {
    tipGasolina = prompt("Qual o tipo de gasolina deseja abastecer? (G gasolina A álcool): ");
    tipGasolina.toLocaleLowerCase();
    if(tipGasolina != "a" && tipGasolina != "g"){
        console.log("Erro.");
        continue;
    }
    break;
} while (1);

const quantGasolina = +(prompt("Quantos litros irá abastecer? "));

if(quantGasolina>20){
    if(tipGasolina == "a"){
        desconto -= (gasolinaA*5)/100;
        total += gasolinaA * quantGasolina;
        total -= desconto;
    }else{
        desconto -= (gasolinaG*5)/1000;
        total += gasolinaG * quantGasolina;
        total -= desconto;
    }
}else{
    if(tipGasolina == "g"){
        total += gasolinaG * quantGasolina;
    }else{
        total += gasolinaA * quantGasolina;
    }
}

console.log(`\n\tNOTA FISCAL:\nQUANTIDADE ABASTECIDA: ${quantGasolina}\nTOTAL: RS:${total.toFixed(2)}`);
