/*
Peça a temperatura ambiente em graus Celsius. Exiba uma das seguintes mensagens de acordo com a temperatura: 
○ Abaixo de 10°C: "Muito frio!" 
○ Entre 10°C e 25°C (inclusive): "Clima agradável." 
○ Acima de 25°C: "Muito calor!" 
*/

var prompt = require('prompt-sync')();

const temperatura = +(prompt("Digite a temperatura em graus Celsius: "));
if(temperatura<10){
    console.log("Muito frio!");
}else if(temperatura==10 || temperatura<=25){
    console.log("Clima agradável.");
}else{
    console.log("Muito calor!");
}