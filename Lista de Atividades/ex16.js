/*
Exercício 3 – Conversor de temperatura
Crie duas funções:
● celsiusParaFahrenheit(c)
● fahrenheitParaCelsius(f)
Cada uma deve converter o valor informado e retornar o
resultado.
Exiba exemplos no console.
*/
var prompt = require('prompt-sync')();


function celsiusParaFahrenheit(c){
    const res = `${(c * (9/5) + 32).toFixed(1)}°F`;
    return res;
}
function fahrenheitParaCelsius(f){
    const res = `${(((f-32)*5)/9).toFixed(1)}°C`;
    return res;
}
var valor = "", resultado;
do {
    valor = (prompt("Você quer converter Celsius para Fahrenheit(c) ou Fahrenheit para Celsius(f): ")).toLocaleLowerCase();
    if(valor != 'c' && valor != 'f'){
        console.log("Erro.");
    }else{
        break;
    }
} while (1);

const numero = +(prompt("Digite a temperatura a ser convertida: "));
if(valor == 'c'){
    resultado = celsiusParaFahrenheit(numero);
}else{
    resultado = fahrenheitParaCelsius(numero);
}

console.log(`A temperatura convertida ficou ${resultado}.`);
