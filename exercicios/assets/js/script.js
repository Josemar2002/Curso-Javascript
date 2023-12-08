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
for(let n = 0; n <= 10; n++) {
    console.log('Contagem: ' + n);
}