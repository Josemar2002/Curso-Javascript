/*
O setInterval

A sua sintaxe é: setInterval(funcao, tempo); Isto significa que a função "funcao" será executada assim cada vez que se atingir o determinado tempo. O tempo padrão é dado por milésimos por segundo, ou seja, 1 segundo equivale a 1000 milésimos.
*/
//exemplo

// let timer;
function comecar() {
  timer = setInterval(horaAtual, 1000)
}

// function parar(){
//     clearInterval(timer)
// }


function horaAtual() {
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds() 
    let txt = h+':' +m+':'+s
    document.querySelector('.demo').innerHTML = txt
}
//-----------------------------------------------------------------------------------------
/*
Qual é o objetivo da função setTimeout em JavaScript?
O método setTimeout permite executar um código após um tempo estipulado, que pode ser definido em milissegundos
(roda uma ùnica vez)

*/
let timer;
function rodar() {
   timer = setTimeout(function() {
        document.querySelector('.demo').innerHTML = 'Josemar Rodriguês'
    }, 2000)
    
}

function parar() {
 clearTimeout(timer)
}

