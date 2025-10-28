//criar um array com 5 números e imprimir a soma de todos os elementos.

let soma=0;
const array = [1, 2, 3, 4, 5];

for(let i=0; i<5; i++){
    soma+=array[i];
}
console.log(`A soma de todos os números do array são: ${soma}`);
