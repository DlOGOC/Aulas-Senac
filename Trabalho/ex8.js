/*
Peça ao usuário sua idade e se possui autorização dos pais (respondendo com "sim" ou "não"). O acesso é permitido apenas para maiores de 18 anos ou para menores com autorização. Exiba uma mensagem informando se o acesso foi "Permitido" ou "Negado".
*/

var prompt = require('prompt-sync')();

const idade = +(prompt("Digite a sua idade: "));
let permissao=0;

if(idade<18){
    console.log("Conteúdo bloquado para menores de 18, ou sem a autorização dos pais. \nVocê possui esta autorização? ");
    do {
        permissao = prompt("'sim' ou 'nao' ");

        if(permissao=="sim" || permissao=="nao"){
            if(permissao == "sim"){
                console.log("Acesso permitido.");
                break;
            }else{
                console.log("Acesso negado.");
                break;
            }
        }else{
            console.log("Apenas 'sim' ou 'nao' permitidos.");
            
        }
    } while (1);
    
}else{
    console.log("Acesso permitido.");
}


