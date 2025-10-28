/*
4 - Array de números
Crie um array com 5 números inteiros e exiba no console.
*/
export function aleatorio(){
    return Math.floor(Math.random() * 10) + 1;
}

let array = [];

for(let i=0; i<5;i++){
    array[i] = aleatorio();
}
console.log(array);
