//somar todos os valores pares (usando acumuladores) de 0 a 200 de 1 em 1

let soma = 0;

for(let i=0; i<=200; i++){
    if(i%2==0){
        soma+=i;
    }
}

console.log(soma);