var peso = Number(prompt("Informe seu peso:"));
var altura = Number(prompt("Informe sua altura:"));
var imc = peso/(altura*altura);
console.log(`Seu imc é ${imc}`);

if(imc < 18.5){
    console.log("Voce está abaixo do peso");
}else if(imc > 18.6 && imc < 24.9){
    console.log("Parabéns! Peso ideal");
}else{
    console.log("Voce está acima do peso");
}