/*
Peça um nome de usuário e uma senha. O acesso só será permitido se o nome de usuário for "admin" e a senha for "1234". 
Caso contrário, exiba uma mensagem de falha no login. 
*/

var prompt = require('prompt-sync')();

var senha = 0, nomeUsuario;

do {
    nomeUsuario = prompt("Digite o nome de usuário: ");
    senha = +(prompt("Digite sua senha: "));

    if(nomeUsuario!="admin"){
        console.log("Nome de usuário incorreto.");
    }
    if(senha!= 1234){
        console.log("Senha incorreta.");
    }
} while (nomeUsuario!= "admin" || senha!= 1234);

console.log("Acesso permitido. Bem vindo.");
