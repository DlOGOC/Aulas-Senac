//escolher a tabulada e mostrar ela:
//exemplo de saíde: (tabuada do 5)
//1 x 5 = 5
//2 x 5 = 10
//3 x 5 = 25
// ...
//10 x 5 = 50

var prompt = require('prompt-sync')();

const tabuada = +(prompt("Qual tabuada você quer ver(99 = especial)? "));

if(tabuada==99){
    for(let i=1; i<=10; i++){
        for(let j=1; j<=10; j++){
            console.log(`${j} x ${i} = ${j*i}`);
        }
        console.log("\n");
        
    }
}else{
    for(let i=1; i<=10; i++){
        console.log(`${i} x ${tabuada} = ${i*tabuada}`);
    }
}