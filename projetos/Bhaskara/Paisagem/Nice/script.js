class Carro{//class estrutura que define um objeto
    constructor(marca,velocidade,valor){//método para criar e iniciar um objeto criado pela classe
        this.marcaCarro = marca;//você identifica a variavel local da classe
        this.velocidadeCarro = velocidade;
        this.valorCarro = valor;
    }
 }
    let meuCarro1= new Carro("toyota","250 km/h","R$150.000"); // let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada.
    console.log(meuCarro1.marcaCarro); // 

    let meuCarro2= new Carro("fiat","210 km/h","R$100.000");
    console.log(meuCarro2.marcaCarro);
       
      
 /*  
function corrida (meuCarro1, meuCarro2){

    if (meuCarro1.velocidadeCarro > meuCarro2.velocidadeCarro){
        console.log ("toyota é mais rápido");

    }else if (meuCarro1.velocidadeCarro < meuCarro2.velocidadeCarro)
    console.log ("fiat é mais rápido");



}*/

/*

 corrida(meuCarro1, meuCarro2);{

 function corrida (meuCarro1, meuCarro2){
    let operacao = prompt ("Escolha um Carro(Astra ou toyota)");
 } 
 if(operacao = meuCarro1 ){
    console.log ("voce ganhou :D");

 }else if ( operacao = meuCarro2){
    console.log ("voce perdeu :C");

 }else{
    prompt("Erro")
}

 }
 corrida (meuCarro1, meuCarro2) */

 var input = document.getElementById("momento").value;
 var imagem = document.getElementById("imagem");//o comando getElementBselenciona a tag pelo id
 let array = [1,"dois", 3, "quatro", "batata"];//serve para armazenar vários valores

 for (let index = 0; index < array.length; index++) { // for é utilizado para executar o mesmo comando para doferentes intes
    const element = array[index];
    
 }
 // &&, || , !