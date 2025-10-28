/*pedir para o usuário digitar 2 números e colocar 4 consoles logs, um mostrando "A some é: resultado da soma" outro mostrando "A divião é: resultado da divisão", outor mostrando "A multiplocação é: resultado da multiplicação" e outro mostrando "a subtração é: resultado da subtração"*/ 
var prompt = require('prompt-sync')();
const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: "));
let r;

//soma
r=n1+n2;
console.log(`A soma é: ${r}`);

//divisão
r=n1/n2;
console.log(`A divisão é: ${r}`);

//multiplicação
r=n1*n2;
console.log(`A multiplicação é: ${r}`);

//subtração
r=n1-n2;
console.log(`A subtração é: ${r}`);


