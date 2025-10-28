/*
● O Seu Juca é um fazendeiro dedicado que comanda a Fazenda Boa Colheita há mais de 40 anos. Ele herdou a terra de seus pais e sempre trabalhou com métodos tradicionais. Recentemente, seu neto, um estudante de tecnologia, o convenceu de que usar a programação poderia modernizar a gestão da fazenda, trazendo mais eficiência e controle sobre a produção. 
● Animado com a ideia, Seu Juca quer começar com um sistema pequeno e simples para calcular o rendimento diário de suas três principais culturas. Ele acredita que, ao ter uma visão clara da produção, poderá tomar decisões mais rápidas sobre a necessidade de irrigação, o uso de fertilizantes e a saúde do solo. 
● Sua missão é criar esse programa para o Seu Juca. A fazenda tem três áreas de cultivo, e os rendimentos esperados são: 
○ Milho: 80 sacas por hectare. 
○ Soja: 60 sacas por hectare. 
○ Café: 40 sacas por hectare. 
● O programa deve primeiro perguntar ao Seu Juca quantos hectares ele plantou para cada uma das três culturas. Com essas informações, o sistema deve calcular o total de sacas produzidas no dia. 
● Para deixar o sistema ainda mais útil, o neto do Seu Juca sugeriu que o programa desse um feedback sobre a colheita. Portanto, após exibir o total de sacas, mostre uma das seguintes mensagens: 
○ Menos de 100 sacas no total: "Produção baixa. Seu Juca, é bom verificar a irrigação e a qualidade do solo.". 
○ Entre 100 e 500 sacas no total (inclusive): "Produção dentro do esperado. O trabalho está rendendo frutos!". 
○ Acima de 500 sacas no total: "Excelente colheita! O esforço valeu a pena, continue assim!". 
● Este é o primeiro passo para ajudar o Seu Juca a transformar a gestão da Fazenda Boa Colheita com o poder da tecnologia!
*/

var prompt = require('prompt-sync')();

const milho = +(prompt("Seu Juca, digite quantos hectares de milho o senhor plantou: "));
const soja = +(prompt("Agora Seu Juca, informe quantos hectares de soja foram plantados: "));
const cafe = +(prompt("Por fim, por favor diga quantos hecatares você plantoum, Seu Juca: "));

var totalDeSacas=0;
totalDeSacas+=(milho*80);
totalDeSacas+=(soja*60);
totalDeSacas+=(cafe*40);

if(totalDeSacas<100){
    console.log("Produção baixa. Seu Jucam é bom verificar a irrigação e a qualidade do solo.");
}else if(totalDeSacas>=100 && totalDeSacas<=500){
    console.log("Produção dento do esperado. O trabalho está rendendo frutos!");
}else if(totalDeSacas>500){
    console.log("Escelente colheita! O esforço valeu a pena, continue assim!");
}