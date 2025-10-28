/*
8 - Cotagem de pares
Escolha a tabuada de um número e faça contagem de
elementos pares presentes na tabuada.
*/

const { aleatorio } = require("./ex4");

let tab = aleatorio(), j=0;

console.log(`Mostrando apenas os resultados pares da tabuada do número ${tab}`);

for(let i = 1; i<=10; i++){
    if((tab*i)%2==0){
        console.log(`${tab} * ${i} == ${tab*i}`);
        j++;
    }
}

console.log(`Logo, ${j} números são resultados pares.`);
