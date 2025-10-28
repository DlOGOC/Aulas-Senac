//criar um objeto telefone com uma função de tocar(), ele deve retornar um "Trim trim!";
//criar a função ligar(, POREM, só pode ligar se tiver crédito, e cada ligação remove 1
var prompt = require('prompt-sync')();

function tocar(){
    telefone.ligacao = true;
    console.log("Trim trim!");
}

let telefone = {
    numero: "5553984113309",
    ligacao: false,
    numeroDeSaoPaulo: function(){
        tocar();
        this.ligacao = false;
    },
    trocarNumero: function(){
        telefone.numero = (prompt("Digite o seu número: "));
        console.log(`Seu número agora é: ${telefone.numero}`);   
    },
    credito: 5,
    ligar: function(){
        if(this.credito!=0){
            let qualNumero = prompt("Qual número você quer ligar? ");
            console.log("ligando..................");
            console.log(`Chamada conectada com ${qualNumero}....`);
            this.credito--;
        }else{
            console.log("Você não tem mais créditos.");
        }
    }
}
telefone.trocarNumero();
telefone.numeroDeSaoPaulo();
while(1){
    telefone.ligar();
    if(telefone.credito==0){
        break;
    }
}