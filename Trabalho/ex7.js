/*
Peça ao usuário para inserir duas notas (de 0 a 10) e calcule a média. Com base na média, exiba a situação do aluno: 
○ Média maior ou igual a 9: "Excelente!". 
○ Média maior ou igual a 6: "Aprovado!". 
○ Média menor que 6: "Reprovado!". 
*/

var prompt = require('prompt-sync')();

let nota1=0, nota2=0;
let m;

do {
    nota1 = +(prompt("Digite o valor da primeira nota: "));
    if(nota1>=0 && nota1<=10){
        break;
    }else{
        console.log("Nota inválida. Precisa ser menor que 10 e maior que 0.");
    }
} while (1);

do {
    nota2 = +(prompt("Digite o valor da segunda nota: "));
    if(nota2>=0 && nota2<=10){
        break;
    }else{
        console.log("Nota inválida. Precisa ser menor que 10 e maior que 0");
        
    }
} while (1);

m=(nota1+nota2)/2;
m=m.toFixed(1);
console.log(`Aluno com nota ${m}.\n`);

if(m>=9){
    console.log("Exelente!");
}else if(m>=6){
    console.log("Aprovado");
}else if(m<6){
    console.log("Reprovado");
}