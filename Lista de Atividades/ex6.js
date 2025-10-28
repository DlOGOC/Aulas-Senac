/*
6 - Array de 10 elementos
Acrescente elementos na array até o a array ficar com 10
elementos. (usando while ou for).
*/

const { aleatorio } = require("./ex4");

let array = [];

for(let i=0; i<10; i++){
    array[i] = aleatorio();
}

console.log("O array ficou assim: ");
console.log(array);

