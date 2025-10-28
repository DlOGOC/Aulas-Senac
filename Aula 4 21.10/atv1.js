// Crie um array com 5 números inteiros e exiba no console
//Acesse o terceiro elemento do array e o exiba no console:
//Altere o valor do segundo elemento para 10: 
//Adicione um novo elemento no final do array:
//Remova o primeiro elemento do array:
//Imprima os elementos de um array usando um loop do-while
let numeros = [1, 2, 3, 4, 5];
let i=0;

console.log(numeros);
console.log(`O 3º elemento do vetor é: ${numeros[2]}`);
console.log("\n");
console.log(`Antes o 2º valor era ${1}:`);
console.log("\n");
numeros[1]=10;
console.log(`Agora o 2º valor é ${1}.`);
console.log("\n");
numeros.push(6);
console.log(`Número adicionado! Agora o vetor está assim ${numeros}`);
console.log("\n");
numeros.shift();
console.log(`1º número removido! Agora o vetor é esse: ${numeros}`);
console.log("\n");

console.log(`Imprimindo usando do-while: `);

do {
    console.log(numeros[i]);
    i++;
} while (i<numeros.length);

