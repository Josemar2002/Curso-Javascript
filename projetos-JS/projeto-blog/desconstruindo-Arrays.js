let info = ['Josemar rodriguês', 'Josemar', 'Rodriguês', '@Josemar']

let [nomeCompleto, nome, sobrenome, instagram] = info

console.log(nomeCompleto, nome, sobrenome, instagram)
//----------------------------------------------
//outra opção para fazer a mesma coisa so que dessa forma ja criar o array e descontroi duma vez
let [game, game2, valorpadrão = 10 ] = ['mortal Kombat', 'Good of wafer ']

console.log(game, game2 , valorpadrão)

/*
metodo base para transforma os intens de array em variaveis

let array = ['Josemar rodriguês', 'Josemar', 'Rodriguês', '@Josemar']

let [nomeCompleto, nome, sobrenome, instagram] = array

console.log(nomeCompleto, nome, sobrenome, instagram)
*/
// criando um função que desconstroi o codigo
function criar() {
    let a = [1, 2, 3]
    return a
}

let [a, b, c] = criar()

console.log(a,b,c)

