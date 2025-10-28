/* 
Peça três notas de um aluno (de 0 a 10) e calcule a média final. Com base na média, exiba a situação do aluno: 
○ Média abaixo de 5: "Reprovado" 
○ Média entre 5 e 7 (inclusive): "Recuperação" 
○ Média acima de 7: "Aprovado" 
*/

var prompt = require('prompt-sync')();

let nota1=0, nota2=0, nota3;
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
        console.log("Nota inválida. Precisa ser menor que 10 e maior que 0.");
        
    }
} while (1);

do {
    nota3 = +(prompt("Digite o valor da terceira nota: "));
    if(nota3>0 && nota3<=10){
        break;
    }else{
        console.log("Nota inválida. Precisa ser menor que 10 e maior que 0.");    
    }
} while (1);

if(m<5){
    console.log("Reprovado.");
}else if(m>5 && m<=7){
    console.log("Recuperação.");
}else if(m>7){
    console.log("Aprovado.");
}