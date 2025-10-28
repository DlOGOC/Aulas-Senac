/*
Peça ao usuário um valor em reais e a cotação atual do dólar. Calcule o valor correspondente em dólares e exiba o resultado. 
Se o valor da cotação for menor ou igual a zero, mostre a mensagem: "Cotação inválida!".
*/

var prompt = require('prompt-sync')();

var rs = +(prompt("Digite o valor em reais: "));
var usd = +(prompt("Digite a cotação atual do dólar: "));

var rsToUsd = rs/usd;
rs = rs.toFixed(2);
rsToUsd = rsToUsd.toFixed(2);

console.log(`O valor de R$${rs} para dolár fica US$${rsToUsd}.`);
