/*
Peça a idade de uma pessoa. Com base na idade, classifique-a em uma das seguintes faixas etárias e exiba a classificação: 
○ 0 a 12 anos: "Criança" 
○ 13 a 17 anos: "Adolescente" 
○ 18 a 59 anos: "Adulto" 
○ 60 anos ou mais: "Idoso" 
*/

var prompt = require('prompt-sync')();
let idade;
do {
    idade = +(prompt("Digite a sua idade: "));
    if(idade<0){
        console.log("Inválido.");
    }else{
        break;
    }
} while (1);

if(idade>=0 && idade<=12){
    console.log("Você é criança.");
}else if(idade>=13 && idade<=17){
    console.log("Você é adolescente.");
}else if(idade >=18 && idade<=59){
    console.log("Você é adulto.");    
}else if(idade==60 || idade>=60){
    console.log("Você é idoso.");
}