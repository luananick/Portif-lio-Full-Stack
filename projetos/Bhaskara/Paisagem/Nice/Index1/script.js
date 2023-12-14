let imagens =["dia.jpg", "tarde.jpg","noite.jpg"];
let indice = 0;
let intervalo;

function mudarImagem(){
    document.getElementById("imagem").src = imagem
    indice = (indice + 1) % imagens.length;

}
function comecarMudanca(){
    intervalo = setInterval(mudarImagem, 1000); //
}
function pararMudanca(){
    clearInterval(intervalo);
}