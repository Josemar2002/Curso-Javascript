let lista = ['ovo', 'melancia', 'pipoca']

console.log(Object.keys(lista)) //retorna os codigo do array = ['0', '1', '2']

console.log(Object.values(lista)) ///retorna os valores do array = ['ovo', 'melancia', 'pipoca']

console.log(Object.entries(lista)) 
/*dividi os itens em arrays deferente que estara armazenado os codigo e os valores de ambos  
exemplo
['0', 'ovo']
['1', 'melancia']
['2','pipoca']

exemplo abaixo mesmo conceito so que com objectos
*/

let pessoa = {
    nome: 'Josemar',
    sob: 'Rodriguês',
    idade: 21
}

console.log(Object.entries(pessoa))
