// introdução ao Array
let colors = ['blue', 'red', 'green'];

console.log(colors[2]);

//Criando um array dentro de outro Array
let nomes = ['Josemar', 'gabriel', 'Matheus', 'Henrique']
let lista = ['pessoas', nomes]
console.log(lista[1][3]) //puchando array dentro de outro array

//Operações de básicas de array

let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
];
ingredientes.push('alface') //Forma mais usada e pratica
ingredientes.pop(); //remove o ultimo
ingredientes.shift();// remove o primeiro item de array
// ingredientes[5] = 'cebola' //Uma forma de adicionar itens
console.log(`Total de ingredientes: ${ingredientes.length}`) //calcular ingredientes de um array
console.log(ingredientes)

let ps = []

ps.push('josemar','rg','cpf','carteira de trabalho') //adicionando itens em um array vazio
console.log(ps[0])

//1.NO array abaixo, qual o número que pega a Ferrari?

let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 0;
console.log('1.' + carros[x]);

//2.Troque a Ferrari por um Audi.

carros[1] = 'Audi'
console.log('2.Lista com Audi')
console.log(carros);

//3.Adicione o Volvo a lista

carros.push('Volvo')
console.log('3.Lista com Volvo')
console.log(carros);

//$.Exiba quantos itens tem o array

console.log(`O total de carros é igual: ${carros.length}`)

//Funções de array

// let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];

// fruits[fruits.length - 1] = 'Pera'; // O jeito de saber quanto itens tem mesmo em um array grande //alteração

// console.log(fruits.join(', ')); //.join é = junta o conteudo do ( ) com o array 

//Ordenação de Arrays

let fruits = ['Maça', 'Uva', 'Laranja', 'Banana']

fruits.sort(); //Faz ficar em ordem alfabetica
fruits.reverse(); //Alfabetica reversa / usa os dois comando combinados 
console.log(fruits)

//-----------------------------------

//Ordenação de Arrays e objetos

 let cars = [
    {brand: 'Fiat', ano: 2022},
    {brand: 'BMW', ano: 2018},
    {brand: 'Ferrari', ano: 2020}
 ]
// outra forma de ordena items especificos

 cars.sort((a, b) => a.ano - b.ano);

//  cars.sort((a, b) => {
//     // if (a.ano > b.ano) {
//     //     return 1; // O numero 1 aqui essa situação faz o objeto subir 
//     // }else if (a.ano < b.ano) {
//     //     return -1; // O numero -1 aqui essa situação faz o objeto descer 
//     // }else {
//     //     return 0; 
//     // } 

    
//  });

 console.log(cars)

 //Iteração de array

 //filtra

//  let frutas = [ 'Laranja', 'Banana', 'Maça', 'Pera']

//  let bigfrutas = frutas.filter((item) => item.length > 4) //Filtra frutas maiores de 4 letras

//  console.log(bigfrutas)

 //Iteração de array

 //todos itens (every)

//  let frutas = [ 'Laranja', 'Banana', 'Maça', 'Pera'] //every so retorna true quando todos os itens retorna satisfazem a condição

//  let ok = frutas.every((item) => item.length > 3) //Filtra frutas maiores de 4 letras
// if(ok) {
//     console.log('Todos são maior que 3');
// }else {
//     console.log('Não são maior que 3')
// }
//  console.log(ok)





//  //Iteração de array

//  //todos itens (some)

//  let frutas = [ 'Laranja', 'Banana', 'Maça', 'Pera'] //some  retorna true quando algum  item satisfazem a condição ((pelo menos 1 )

//  let ok = frutas.some((item) => item.length < 3) 
// if(ok) {
//     console.log('Algum item é maior que 3');
// }else {
//     console.log('Nenhum item é maior que 3')
// }
//  console.log(ok)


 //Iteração de array

 //includes

 let frutas = [ 'Laranja', 'Banana', 'Maça', 'Pera'] //Essa função do array preocura um item especifico dentro array
 
 frutas.shift(); //remove o primeiro item

 if(frutas.includes('Laranja')) {
    console.log('tem Laranja sim')
 }else {
    console.log('Não tem Laranja!!')
 }