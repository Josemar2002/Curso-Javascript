//Métodos de String 
let nome = ' Josemar Bauzim de moura rodrigues'
let resultado = nome.length //para saber quantas caracteres tem uma string
console.log(resultado)
//-------------------------------------------------

//filtra para ver se tem determinada e indica onde ela começa

let indexOf = ''
if(nome.indexOf('Josemar') > -1) {
     indexOf = true
} else {
   indexOf = false
}                 

console.log(indexOf)

//exatraindo partes de uma String

let nome01 = ' Josemar Bauzim de moura rodrigues'
//E usado dois parâmentros, e que baseado no número de carcteres da string(para pega informação) quando coloca o número negativo ele vai conta as strigs de traz para frente
let resultado01 = nome.slice(0)
console.log(resultado01)
//E usado dois parâmentros, e que baseado no número de carcteres da string(para pega informação)
let resultado02 = nome.substring(0, 10)
console.log(resultado02)
//E usado dois parâmentros, e que baseado no número de carcteres da string(para pega informação) substr o mais completo e indicado para usar pega numero positivos e negativo 
let resultado03 = nome.substr(-4 )
console.log(resultado03)

//substituir string

let name = 'Eu substituir moto  '
name = name.toLowerCase()//deixa minuscula
console.log(name)

let result = name.replace('moto', 'carro') //conceito simple dois parâmentros pesquisa por um e substiuir pelo outro

result = name.toUpperCase(); //deixa maiscula
console.log(result)

let concatenacao = name.concat(result)
console.log(concatenacao) //junta textos

//-----------------------------

let removeEspaço = '           Josemar                '

console.log(removeEspaço.trim()) //remove espaços inuteis  

//-----------------------------------------------

let name02 = 'Josema bauzim de moura rodrigues'

    console.log(name02.split(' ')[4]) //transforma uma String em Array
