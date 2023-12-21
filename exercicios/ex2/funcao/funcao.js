//Criação de funções e paramentos aplicação.
function somar(n1, n2) {   
    let resultado = n1 + n2
    console.log('Resultado: '+resultado)
}
somar(10, 15);

function media(n1, n2, n3, n4) {
    let media = (n1 + n2 + n3 + n4) / 4
    console.log('A média é igual: ' +media)
}
media(20, 20, 40, 20)

//retorno em funções

function nomeCompleto(nome, sobrenome) {

    return `${nome} ${sobrenome}`
}
let completo = nomeCompleto('Josemar', 'Rodriguês');
console.log(completo);

//funções que tem retorno condicional

function maiorDeIdade(idade) {
    if(idade >=18) {
        return true;
    }else {
        return false;
    }
}

let idade = 10;
let verificacao = maiorDeIdade(20);

if(verificacao) {
    console.log('E maior de idade: ' +idade);
}else {
    console.log('E menor de idade: ' +idade);
}

//exercicios de Funções

//Calcule a porcetagem entre 2 números.

function calcPct(n1, n2) {
    return (n1 / n2) * 100;
}
let x = 40;
let y = 10;
let pct = calcPct(y, x);
console.log(`${pct}% de ${x} é ${y}`)


//Calcule o preço do imovel

function calcularImovel() {
let m2 = 3000;
let preco = 0;
 switch (quartos) {
    case 1:
       default:
         preco =  metragem * m2
        break;
 
    case 2:
        preco =  metragem * (m2 * 1.2)
        break;
    case 3:
          preco =  metragem * (m2 * 1.5)  
        break  
 }
return preco;

}
let metragem = 123 ;
let quartos = 3;

let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`)

//Crie uma função que valide usuario e senha.
//Senha correta: pedro
//Usuario correto: 123

function validar(usuario, senha){
    if(usuario === 'Pedro' && senha === '123') {
        return true;
    }else {
       return false;
    }
    

}

let usuario = 'Pedro';
let senha = '123';
let validacao = validar(usuario, senha);
    
if(validacao) {
    console.log('Acesso concedido.');
}else {
    console.log('Acesso Negado!')
}

//função Arrow //criação base () => {}

const receita = (x, y) => {   // caso tenha mais de duas linha de codigos dentro da função use esse modelo de arrrow fuction.
    let result = x + y;
    return result;

}
let resultado = receita(10,5);
console.log(resultado);
//--------------------------------------
const adcao = (n1, n2) => n1 + n2;
console.log(adcao (20, 4))

const sobrenome = sob => 'Josemar ' +sob; //quando eu tenho uma arrow função com um parâmento so nen preciso do parenteses 
console.log(sobrenome('Rodrigues'));

//Variáveis dentro de funções

//quando eu crio uma variavel fora e uso dentro da função e xibo a função da certo
//exemplo
let count = 0;

function add(){
    count++;
}
add()
add()
console.log(count)

//mas quando eu crio a variavel dentro da função e vou usar-la fora não da certo
//forma errada de fazer
// function add(){
//     let count = 0;
//     count++;
// }
// add()
