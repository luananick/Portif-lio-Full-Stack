/*let banana = 1;
let pera = 1;
 let abacaxi = 2;
let uva = abacaxi + pera;
let pitanga = 3;

 let boleano = false;

 if(boleano || pera == 3){
    if(pitanga == uva){
    console.log("2x-verdadeiro");
    }else{ 
        console.log("1x-verdadeiro");
    }
  
   }   else{
    if (!boleano ||(abacaxi * 3) == pitanga){
    console.log("1x-falso");
}else{ 
    console.log("2x-falso");
}
} 
let email_banco = "daniel_ima@hotmail.com";
let senha_banco = "senhaforte";

let email_usuario = prompt("Insira seu email");
let senha_usuario = prompt("Insira sua senha");
let email_admin = "admin@email.com"
let logado = false;

if((email_usuario == email_banco || email_usuario == email_admin) && senha_usuario == senha_banco){
    logado = true;
    console.log("Logado com sucesso");
    if(email_usuario == email_admin){
        console.log("Bem vindo admin");
    }
}else{
    logado = false;
    console.log("login inválido");
    
} 

function soma(x , y){
    return x + y;
}
function subtracao (x , y){
return x - y;

}
 console.log(soma(2,5)); 

 let contador = 0;
 while(contador <= 10){
    if(contador % contador == 0 && contador % 1 == 0){
    console.log(contador + " é primo");
}else{                           
    console.log("não é primo");

}
    contador ++;
 } 

 let num = prompt();

for (let index = 0; index <= 10; index++) {
    console.log(parseInt(num) +" x "+ index +" = " +(parseInt(num) * index));

} */

function tabuada(){
    let num = parseInt(document.getElimentById("num").value);
    let resposta = documento.getElimentById("resposta");
    let tabuada = " ";

    for (let index = 0; index <= 10; index++) {
        tabuada += num+ " x "+ index +"="+ num*index + "<br/>";
        
        resposta.innerHTML = tabuada;
    }


}