// // O que é uma função
// function somar(n1, n2) {
//     let resultado = n1 + n2;
//     console.log("Resultado: " + resultado);
// }
// somar(10,5);

// function nomeCompleto(nome, sobrenome) {
//     return(`${nome} ${sobrenome}`);
// }
// let completo = nomeCompleto("Josemar", "Rodrigues");
// console.log("Completo: " + completo)

// function maiorDeIdade(idade) {
//     if (idade >=18) {
//         return true;

//     }else {
//         return false;
//     }
// }
// let = idade = 10;
// let verificacao = maiorDeIdade(idade);

// if(verificacao) {
//     console.log("E maior de idade");
// }else{
//     console.log("E menor de idade");
// }

// exercicio funções

function calcPct(x, y) {
    return (y / x) * 100;

}
let x = 50;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct} % de ${x} é ${y}`); 

function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;
    switch (quartos) {

        case 1:
            default:
                preco = metragem * m2;
            break;
    
        case 2:
            preco = metragem * (m2 * 1.2);
            break;

        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }
    return preco;
}
let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`)

function validar(usuario, senha) {
    if (usuario === 'pedro' && senha === '123') {
        return true;
    }else {
        return false ;
    }
}
let usuario = "boniek";
let senha = "1234";
let validacao = validar(usuario, senha)

if (validacao) {
    console.log('Acesso concedido.');
}else {
    console.log('Acesso NEGADO!')
}

// let idade = 21;

// if (idade >= 18) {
//     console.log ("Voçê é maior de idade.");
// }else {
//     console.log ("Voçê é menor de idade.");
// }

// let idade = 21;
// if (idade === 21) {
//     console.log("Idade adcionada com sucesso");
//     console.log(idade);
// }
// let idade = 91;
// if (idade < 18) {
//     console.log("Voçê é criança")
// } else if (idade >= 18 && idade < 60){
//     console.log ("Voçê é um adulto");
// }else if (idade >= 60) {
//     console.log("Voçe é idoso")
// } 

// let x = 10;
// let y = 5;
// console.log(x > y);


// let w = "10";
// let z = 10;
// console.log(w === z);

// let a = 10;
// let b = 5;
// console.log(a != b)


// let preco = 40.3;
// if (preco <= 45) {
//     console.log ("O preço da carne está na promoção")
// }else {
//     console.log ("O preço está caro")
// }

// let isMember = true;
// let shipping = isMember ? 2 : 10;
// console.log(isMember ? "Voçê é membro" : "Voçê não é membro");
// console.log("Frete:" + shipping); 

// let age = 84;
// let Isdult = (age >= 18  ? "sim" : "Não");
// console.log(Isdult)

// let profession = "bombeiro";
// console.log("Profissão: " + profession);

// switch (profession) {
//     case "fiscal" :
//         console.log("Sua camisa será VERDE");
//         break;
//     case "bombeiro":
//         console.log("Sua camisa será VERMELHA");
//         break;
//     case "policial":
//         console.log("Sua camisa será PRETA");
//         break;
//     default:
//         console.log("Sua profissão não estar no sistema")
//         break

// }
