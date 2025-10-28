/*Peça ao usuário um número de horas e converta esse valor para segundos. Exiba o resultado no final. 
Se o número de horas inserido for negativo, mostre uma mensagem de erro.*/
var prompt = require('prompt-sync')();

let horas = +(prompt("Digite as horas a serem convertidos: "));

horas *= 3600;

console.log(`A hora convertida em minutos ficou ficou: ${horas} segundos.`);

