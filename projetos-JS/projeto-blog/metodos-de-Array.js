let lista = [
    {id:1, nome:'Josemar', sob:'Rodriguês'},
    {id:2, nome:'Boniek', sob: 'Lacerda'},
    {id:3, nome:'Jacinto', sob: 'Leite'},
    {id:4, nome:'Marcos', sob: 'Eduardo'}
];
let lista2 = []
lista2 = lista.find(function(item) {
    return (item.id  == 3) ? true : false
})
let res = lista2;

console.log(res)
//Métodos de Arrays
/*
lista.toString() = transforma em string um Array
let res = lista.join('-') = junta tudo com o parâmentro dentro do parenteses
let res = lista.indexOf('leite')  = no array ele preocura a posição de um determinado item
lista.pop() = remove o ultimo item do array
lista.shift() = remove o primeiro intem do array
lista.push('prato') = adiciona um novo item no Array
lista[0] = 'OVOs' = faz alterações no Array
lista.splice(1, 1) = remove itens dentro de Array com dois paramentros(posição e quantidade de itens)
let res = lista.concat(lista2); = (concatena dois arrays)
let res = lista.sort(); = ordena em ordem alfabetica (lista.reverse() = inverte a ordem dos itens)

--------------------------------------
map roda a função abaixo em todos os itens do Array
let lista = [20, 8, 4, 12];
let lista2 = []
lista2 = lista.map(function(item) {
    return  item * 2
})
let res = lista2;
console.log(res)
----------------------------------------
----------------------------------------
a função filter = filtra dentro de Array  os  item e retorna true o false e gera um novo (Array)
let lista = [20, 8, 4, 12];
let lista2 = []
lista2 = lista.filter(function(item) {
    if(item < 20) {
       return true
    }else {
       return  false
    }
})
let res = lista2;

console.log(res)
---------------------------------------
---------------------------------------

o every não gera um novo Array ele apenas diz sim ou não (SE TODOS) a condição for positiva  no if

let lista = [20, 8, 4, 12];
let lista2 = []
lista2 = lista.every(function(item) {
    if(item <= 20) {
       return true
    }else {
       return  false
    }
})
let res = lista2;

console.log(res)
----------------------------------------

------------------------------------------------
o every não gera um novo Array ele apenas diz sim ou não (SE ALGUNS) a condição for positiva  no if

let lista = [20, 8, 4, 12];
let lista2 = []
lista2 = lista.some(function(item) {
    if(item <= 20) {
       return true
    }else {
       return  false
    }
})
let res = lista2;

console.log(res)

----------------------------------
filtra um item armazena e retorna (função find) ao munda para findIdex (faz basicamente a mesma coisa so que te retorna não o item em especifico mais baseado nas caracteres, retorna a posição do item)

let lista = [20, 8, 4, 12];
let lista2 = []
lista2 = lista.find(function(item) {
    return (item  === 12 ) ? true : false
})
let res = lista2;

console.log(res)

mais exemplos

let lista = [
    {id:1, nome:'Josemar', sob:'Rodriguês'},
    {id:2, nome:'Boniek', sob: 'Lacerda'},
    {id:3, nome:'Jacinto', sob: 'Leite'},
    {id:4, nome:'Marcos', sob: 'Eduardo'}
];
let lista2 = []
lista2 = lista.find(function(item) {
    return (item.sob  === 'Lacerda' ) ? true : false
})
let res = lista2;

console.log(res)
---------------------------------------------------------

*/
