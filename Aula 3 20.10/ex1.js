/*fazer um sistema que peça ao usuário 2 valores e peça qual operação ele deseja realizar porem o sistema só deve para se o usuário digitar uma operação errada*/
var prompt = require('prompt-sync')();

const n1 = +(prompt("Digite o primeiro número: "));
const n2 = +(prompt("Digite o segundo número: "));
let r;
let op;
while (true) {
    op = prompt("Digite uma operação: +, -, *, /: ");
    if(op == '+'){
        r=n1+n2;
        r=r.toFixed(1);
        console.log(`O resultado da soma é: ${r}`);
        continue;
    }else if(op == '-'){
        r=n1-n2;
        r=r.toFixed(1);
        console.log(`O resultado da subtração é: ${r}`);
        continue;
    }else if(op == '*'){
        r=n1*n2;
        r=r.toFixed(1);
        console.log(`O resultado da multiplicação é: ${r}`);
        continue;
    }else if(op == '/'){
        if(n2==0){
            console.log("Erro. Não pode dividir por 0.");
            break;
        }
        r=n1/n2;
        r=r.toFixed(1);
        console.log(`O resultado da divisão é: ${r}`);
        continue;
    }else{
        console.log(`Inválido. Encerrando a operação.`);
        break;
    }
}