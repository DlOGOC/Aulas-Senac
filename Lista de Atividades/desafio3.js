/*(Desafio) 3. Média das notas dos alunos
Você é um professor e deseja calcular a média das notas
dos seus alunos. Escreva um programa
que solicite ao usuário inserir as notas dos alunos
repetidamente e calcule a média das notas. O
programa deve continuar pedindo notas até que o usuário
insira um valor negativo, indicando o fim
da entrada das notas.*/

var prompt = require('prompt-sync')();
let i=1;
let nota = 0, media = 0;
do {
    nota = +(prompt(`Digite a ${i}º nota: `));
    if(nota<0){
        break;
    }
    media += nota;
    i++;
} while (1);

console.log(`A média das notas dos ${i} alunos é ${media/i}`);

