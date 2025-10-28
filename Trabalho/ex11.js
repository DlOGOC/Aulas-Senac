/*
Peça o valor total de uma compra e pergunte se o cliente é membro VIP (respondendo "sim" ou "não"). Conceda um desconto com base nas seguintes regras: 
○ Se o cliente for VIP e a compra for maior que R$ 500,00, aplique 15% de desconto. 
○ Se o cliente for VIP (e a compra não for maior que R$ 500,00), aplique 5% de desconto. 
○ Clientes não-VIP não recebem desconto. 
● No final, exiba o valor total a ser pago. 
*/

var prompt = require('prompt-sync')();

let vip, valor;

do {
    valor = +(prompt("Digite o valor total da compra: "));
    if(valor<=0){
        console.log("Valor impossível.");
    }
} while (valor<=0);
do {
    vip = prompt("Você é um cliente VIP? 'sim' ou 'nao' ");
    if(vip != "sim" && vip != "nao"){
        console.log("Apenas 'sim' ou 'nao' são permitidos.");
    }else{
        break;
    }
} while (vip != "sim" && vip !="nao");

valor=valor.toFixed(2);
console.log("Valor a pagar: ");

if(vip == 'sim'){
    if(valor>500){
        valor-=(valor*15)/100;
    }else if(valor<500){
        valor-=(valor*5)/100;
    }
    console.log(`R$${valor}.`);
    
}else{
    console.log(`RS${valor}\nClientes VIPs recebem desconto em todas as compras de nossa loja, considere se tornar um VIP para obter descontos.`);
    
}