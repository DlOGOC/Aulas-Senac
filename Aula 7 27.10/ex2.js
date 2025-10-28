// criar objeto de um cachorro!!
/**
 * @param { number }  valor - quantidade de anos que a idade do cachorro aumenta
 */
function aumentarIdade(valor){
    cachorro.idade += valor;
}

let cachorro = {
    nome: "Belinha",  
    raca: "Vira lata",
    idade: 8,
    doencas: "Nenhuma",
    internado: false,
    vacinas: "Todas",
    castrado: true,
    docil: true,
    temFome: false,
    validarFelicidade: function(){
        if(this.temFome === false){
            return `O cachorro está alegre`;
        }else{
            return `O cachorro estpa chorososo`;
        }
    },
    validarIdoso: function(){
        if(this.idade >=10){
            return `A ${this.nome} é idosa.`;
        }else{ 
            return `A ${this.nome} não é idosa.` 
        }
    }
};
console.log(cachorro);
console.log(cachorro.validarIdoso());
aumentarIdade(5);
console.log(cachorro);
console.log(cachorro.validarIdoso());

