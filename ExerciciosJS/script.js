var Number1 = document.querySelector("#ipNumber1") ;
var Number2 = document.querySelector("#ipNumber2") ;
let h2Titulo = document.querySelector("#h2Titulo") ;
let btSoma = document.querySelector("#btSoma") ;



function Number1(){
    var numero = Number1(ipTexto.value) ;
    h2Titulo.textContent = Number1
}

function Number2(){
    var numero = Number2(ipTexto.value) ;
    h2Titulo.textContent = Number2
}


btSoma.onclick = function(){
    Soma() ;
}