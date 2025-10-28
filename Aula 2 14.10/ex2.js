//pedir para o usuário digitar o nome e aiade e mostrar "Olá ${nome}, sua idade é é ${idade}"
var prompt = require('prompt-sync')();
const nome = prompt("Digite o seu nome: ");
const idade = prompt(`Qual a sua idade ${nome}? `);
console.log(`Olá, ${nome}! Sua idade é ${idade}`);

