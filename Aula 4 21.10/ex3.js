let array = [1, 9, 3, 10, 98];
let nomes = ["Lobato", "Roger", "Amanda", "Junior"];
console.log(`array.length: ${array.length}`);
console.log(`nomes.sort: ${nomes.sort()}`);
console.log(`array.reverse: ${array.reverse()}`);
console.log(`nomes.off: ${nomes.indexOf("Lobato")}`);
console.log(`nomes.includes: ${nomes.includes("Lobato")}`);
console.log(`nomes.includes(não existe no vetor): ${nomes.includes("Diogo")}`);

const filtro = array.filter(elemento => elemento > 10);
const filtro2 = array.filter(elemento => elemento <10);
console.log(filtro);
console.log(filtro2);

for(let i=0; i<array.length; i++){
    if(array[i]>10){
        console.log(array[i]);
    }
}



