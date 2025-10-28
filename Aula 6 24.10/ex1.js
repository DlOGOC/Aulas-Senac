var prompt = require('prompt-sync')();

function somar(a, b){
    return a+b;
}

//criar uma função que cvalide se um número é negativo

function negativo(n1){
    if(n1<0){
        return 1;
    }else{
        return 0;
    }
}

const n1 = +(prompt("Digite um número: "));
const neg = negativo(n1);

if(neg == 0){
    console.log("O número é positivo.");
}else{
    console.log("O número é negativo.");
}