function maiorValor(n1, n2, n3){
    if(n1>n2 && n1>n3){
        return n1;
    }else if(n2>n1 && n2>n3){
        return n2;
    }else if(n3>n1 && n3>n2){
        return n3;
    }
}

var prompt = require('prompt-sync')();

const n1 = +(prompt("Digite o primeiro número: "));
const n2 = +(prompt("Digite o segundo número: "));
const n3 = +(prompt("Digite o terceiro número: "));

const mV = maiorValor(n1, n2, n3);

console.log(`${mV} é o maior valor informado.`);
