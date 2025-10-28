/*
Peça ao usuário para inserir dois números é um símbolo de operação (+, -, *, /). Realize o cálculo correspondente e mostre o resultado. 
 */
var prompt = require('prompt-sync')();

const n1 = +(prompt("Digite o primeiro número: "));
const n2 = +(prompt("Digite o segundo número: "));
var o, r;
console.log("Digite o símbolo da operação:\n+: adição\n-: subtração\n*: multiplicação\n/: divisão");

do {
    o = prompt("");
    if(o == '+'){
        r=n1+n2;
        break;
    }else if(o == '-'){
        r=n1-n2;
        break;
    }else if(o == '*'){
        r=n1*n2;
        break;
    }else if(o == '/'){
        r=n1/n2;
        break;
    }else{
        console.log("Símbolo da operação inválida.");
        
    }
} while (o != '+' || o != '-' ||o != '*' || o != '/');

r=r.toFixed(1);

console.log(`O resultado da operação é: ${r}`);


