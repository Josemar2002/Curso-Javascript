//Introdução ao Objeto
let personagem = {
    nome:'Josemar',
    pais:'Brasil',
    idade:'21',
    olhos: ['preto', 'azul'], //array
    caracteristicas: {  //objeto
        forca: 20,
        magia: 5,
        stamina: 15

    }
}
personagem.nome = 'Pedro' //Altera um item dentro do objeto
personagem.caracteristicas.forca += 5; //adicionando item no objeto que esta dentro de outro objeto
personagem.olhos.push('verde'); // adicionando item no array dentro do objeto
console.log(`${personagem.nome} tem ${personagem.idade} anos e mora no ${personagem.pais}`)  //para exibir um objeto ultiliza pontos

console.log(personagem.caracteristicas.forca); //puchando um objeto que esta dentro de outro objeto
console.log(personagem.olhos[1]) //pegando um array dentro do objeto
//----------------------------------------------------------------------------------
let pessoa = {     
    nome: 'João',
    idade: '21',
    car:[
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ferrari', cor: 'vermelha'}
    ]
}

console.log(pessoa.car[0].modelo) //Nesse caso um array dentro de um objeto e objeto dentro desse mesmo array.

//funções dentro de um objeto

let individuo = {
    nome: 'Josemar',
    sobrenome:'Rodriguês',
    idade: '21',
    nomeCompleto: function() {   //Criando uma função dentro de um objeto
        return `${this.nome} ${this.sobrenome}`;
    },

    Aviso: () => {
        return 'Aviso essa funçâo não pega o objeto apenas exibi itens que esta nela pois eh, uma (arrow fuction) dentro de um objeto '
    }
}
console.log(individuo.Aviso())

console.log(individuo.nomeCompleto()); //exibindo funções dentro de objetos

//introdução aos loops

//O loop for

//criação // eu preciso colocar sempre 3 coisas na definição ( O inicio do contador, depois a condicional para o codigo continuar executando, )


//dando loop em array
// let cores = ['preto', 'branco', 'azul', 'vermelho']

// cores.push('verde', 'roxo', 'nilas')

let cores = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 5},
    {nome: 'vermelho', qt: 15}
]



// for(let n = 0; n <= cores.length;n++)  {
//     console.log(cores[n])     
// }

//------------------------------
// Outra forma de fazer

//ELe vai criar a variavel i dentro de i vai ter a chave de cores ex(i= 0 , i= 1 ...)
// for (let i in cores) {
//     console.log(cores[i]);
// }

//---------------------

//Nessa forma cor é o proprio valor
for(let cor of cores) {
    console.log(`Nome: ${cor.nome} Cor - ${cor.qt}`) //exibir um loop dentro de um objeto adciona um ponto no final ex(cor.nome) ex(cores[i].nome)  ex(cores[n].nome)

}

//--------------------------------------------------------

//O loop whille

let numero = 0;

while (numero < 10) {
    console.log(`O numero da vez é ${numero}`)
    numero++;
}

// for(let numero = 0; numero <= 10; numero++) {  //mesmo codigo feito com o for
//     console.log(`O numero da vez é ${numero}`)
// }

// exercicios de loops

//1. Faça um loop que mostre todas as frutas

let frutas = ['Maça', 'Uva', 'Banana'];

for (let fruta of frutas) {
    console.log(`Fruta: - ${fruta} `)
}

//2.Conte de 1 até 100 através de um wille
let nun = 1;
while(nun <= 100){
    console.log(`Numero ${nun}`)
    nun ++;
}