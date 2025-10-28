// Fazer um sistema que peça ao usuario 2 valores
// e peça qual operação ele deseja realizar
// porem o sistema so deve parar se o usuario
// digitar uma operação errada.

const { soma, sub, mult, divis } = require('./operacoesMatematicas');

// Refatorar esse código usando funções


var prompt = require('prompt-sync')();
const n1 = +prompt("Digite um valor: ")
const n2 = +prompt("Digite outro valor: ")
let operacao
while(true){
    operacao = prompt("Escolha uma operação + - / *: ")
    if(operacao == "+"){
        soma(n1, n2);
        continue
    }else if(operacao == "-"){
        sub(n1, n2);
        continue
    }else if(operacao == "*"){
        mult(n1, n2);
        continue
    }else if(operacao == "/"){
        // Encerrar o programa
        // caso seja divisão por 0
        if(n2 == 0){
            console.log("Operação Incorreta");
            break            
        }else{
            divis(n1, n2);
            continue
        }
    }else{
        console.log("Operação Incorreta");
        break
    }
}

