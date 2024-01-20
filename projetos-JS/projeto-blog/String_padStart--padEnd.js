let telefone = '5'

console.log(telefone.padEnd(9, "*"))

/*
O padend diz acima que a string deve ter pelo menos 9 caracteres se ela tever meno será substituindo por (*)
na forma base ele recebe dois paramentros o (limite 2 o item que será adicionado caso não tenho esse limite)
----------------------------------------------
*/

 //exercícios
let cartao = '12341234-1234-1234'
let base = cartao.slice(-4)
let Ncartao = base.padStart(16, '*')
console.log('Este é o seu cartão? ' + Ncartao)