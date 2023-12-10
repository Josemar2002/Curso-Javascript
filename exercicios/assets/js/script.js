let colors = ['red', 'blue', 'green']; //conceitos de Array
console.log(colors[1])

//operações em arrray
let ingredientes = [
    'agua',
    'farinha',
    'sal',
    'maizena',
    'trigo'
]
ingredientes.push ('arroz')
console.log(`Total de ingredientes ${ingredientes.length}`)

//função pop = remove  ultimo array //exemplo ingredientes.pop()
//função shift = remove  primeiro array //exemplo ingredientes.shift()




// --------------------------------------------------------------

//exercicios de array

//1. No array abaixo, qual o número que pega a Ferrrari?
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 0;

console.log('1.' + carros[x]);

//2. Troque a Ferrari por Audi
carros[1] = 'Audi';
console.log('2.' + carros);

//3. Adicione o Volvo a lista
carros.push('Volvo');
console.log(carros);

//4. Exiba quantos itens tem no array
console.log(`Total de carros ${carros.length}`);

// --------------------------------------------------------------

//Objeto
//Exemplos de criação
let personagem = {
    nome: 'Boniek',
    idade: 90,
    pais: 'Brasil',
    caracteristicas: {
        forca: 20,
        magia:5,
        stamina:15,
    }

}
console.log(`A idade do personagem é igual: ${personagem.idade} e seu nome é ${personagem.nome}`)

console.log(`POSSUI DE MAGIA: ${personagem.caracteristicas.magia} TEM  DE FORÇA: ${personagem.caracteristicas.forca}`)

//array dentro do objeto

let personagem02 = {
    nome: 'Josemar',
    idade:'21',
    carros:[
        {modelo:'Audi', cor: 'preto'},
        {modelo: 'Ferrari', cor: 'vermelho'}
    ]
}

console.log(personagem02.carros[1].modelo);

//Função dentro do objeto

let personagem03 = { 
    nome:'Josemar',
    cpf: 70035010665,
    banco: 'itau',
    cep: 45646464,
    celular: 33993356433,
    dados: function() {
        return `${this.celular} ${this.nome}`;
    }
}

console.log(personagem03.dados());

// --------------------------------------------------------------

//Entendendo loop

// let cores = ['preto', 'branco', 'azul', 'vermelho']
// cores.push('verde', 'rosa', 'amarelo');

// for(let n = 0; n < cores.length; n++) {
//     console.log('Cores: ' + cores[n]);

// }

//loop no array
// let cores = [
//     {nome: 'preto ', qt: 10 },
//     {nome:'azul', qt: 5 },
//     {nome:'vermelho', qt: 15 }
// ]


// for(let i in cores) {
//    cores[i].nome = cores[i].nome.toUpperCase()
//    console.log(cores)
// }

//loop no array e objetos
// let cores = [
//     {nome: 'preto ', qt: 10 },
//     {nome:'azul', qt: 5 },
//     {nome:'vermelho', qt: 15 }
// ]

// for(let cor of cores) {
//     console.log(`Nome: ${cor.nome} - ${cor.qt}`);
// }

//O loop while

let numero = 0; 

while (numero <= 10) { //um loop que executa para sempre e é semelhante ao if else
    console.log(`O numero da vez é ${numero}`)
    numero++;
}

// exercicos

//1.Faça um loop que mostre todas as frutas

let fruits = ['Maça', 'Uva', 'Banana',];
console.log(fruits.join(', '))

for (let x = 0; x < fruits.length; ++x) {
   console.log('Fruta: ' +fruits[x])
    
} 

//2. Conte de 1 até 100 atravé de um while
let n1 = 1;

while (n1 <= 100) {
    console.log(`Numero: ${n1}`)
    n1++;
}
// -------------------------------------------------------------
let cars = [
    {brand: 'fiat', year: 2022 },
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrari', year: 2020}
    
]

cars.sort((a, b) => {
    return a.year - b.year;
    // if (a.year > b.year) {
    //     return 1 ;
    // }else if (a.year < b.year) {
    //     return -1 ;
    // }else {
    //     return 0 ;
    // }
})

console.log(cars)