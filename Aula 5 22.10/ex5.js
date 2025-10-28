var prompt = require('prompt-sync')();

console.log("Math.ceil", Math.ceil(2.4));
console.log("Math.floor", Math.floor(8.9));
console.log("Math.round", Math.round(8.9));
const valor = 10/3;

console.log("Valor", valor.toFixed(1));

//Math.pow(n1, n2);
//Math.sqrt(n1, n2);

console.log("Math.pow (2,3)", Math.pow(2,3));
console.log("Math.sqrt (9)", Math.sqrt(9));

const cor = prompt("Digite uma cor: ").toLocaleLowerCase();
if(cor == "azul"){
    console.log("Azul!!");
}else{
    console.log("Não é azul...");
}

console.log("Math.random", Math.random());

