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