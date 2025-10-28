//Valide se o nome do usuário é Roberto, se não for, retorne "Nome Desconhecido", se for, retorne "Olá Roberto"

var prompt = require('prompt-sync')();
const nome = prompt("Digite seu nome: ");
if(nome=="Roberto"){
    console.log("Olá Roberto!");
}else{
    console.log("Nome Desconhecido.");
}