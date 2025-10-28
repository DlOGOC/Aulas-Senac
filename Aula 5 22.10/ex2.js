//somar 4 números
//verificar se o número é par

function soma(n1, n2, n3, n4){
    return n1+n2+n3+n4;
}

function par(n1){
    if(n1%2==0){
        console.log(`${n1} é par!`);
    }else{
        console.log(`${n1} não é par!`);
        
    }
}

par(soma(3,5,7,9));