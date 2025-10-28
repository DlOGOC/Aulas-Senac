//um simulador de idade ao longo dos anos
var prompt = require('prompt-sync')();

const idade = +(prompt("Em que ano você nasceu? "));
const ano =+(prompt("Em que ano estamos? "));
for(let i=idade; i<=ano; i++){
    console.log(`Em ${i}, sua idade é: ${i-idade}`);
    
}
