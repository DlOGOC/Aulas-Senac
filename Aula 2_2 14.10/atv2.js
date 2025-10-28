var prompt = require('prompt-sync')();
const n1 = Number(prompt("Digite um número: "));
if(n1>0){
    console.log("O número é positivo.");
}else if(n1<0){
    console.log("O número é negativo.");
}else{
    console.log("É zero.");   
}