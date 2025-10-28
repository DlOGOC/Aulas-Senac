//Permitir acesso somente se o usuário acertar a senha ("1569")

var prompt = require('prompt-sync')();
const senha = prompt("Digite a senha: ");

if(senha==1569){
    console.log("Bem vindo.");
}else{
    console.log("Senha incorreta.");   
}