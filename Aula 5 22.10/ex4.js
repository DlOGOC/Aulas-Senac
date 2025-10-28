//crie um conversor de celsius para fahrenheit
var prompt = require('prompt-sync')();

function conversor(c){
    return (c * (9/5) )+ 32
}

const c = +(prompt("Digite a temperatura em Celcius: "));

console.log(`A temperatura ${c}ºC fica ${conversor(c)}ºF`);
