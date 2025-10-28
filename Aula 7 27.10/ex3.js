//criar um onketo de uma lampada
//criar métodos (funções) de ligar e desligar
//essa funções devem validade se a lâmpada já está ligada ou não

let lampada = {
    power: true,
    interruptorLigar: function(){
        if(this.power === false){
            console.log("A lâmpada foi ligada");
            return this.power = true;
        }else if(this.power === true){
            console.log("A lámpada já está ligada");
            return this.power = true;
        }
    },
    interruptorDesligar: function(){
        if(this.power === false){
            console.log("A lâmpada já está desligada");
            return this.power = false
        }else if(this.power === true){
            console.log("A lâmpada foi desligada");
            return this.power = false;
        }
    }
};
lampada.interruptorDesligar();
lampada.interruptorLigar();
lampada.interruptorDesligar();
