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

let profession = "bombeiro";
console.log("Profissão: " + profession);

switch (profession) {
    case "fiscal" :
        console.log("Sua camisa será VERDE");
        break;
    case "bombeiro":
        console.log("Sua camisa será VERMELHA");
        break;
    case "policial":
        console.log("Sua camisa será PRETA");
        break;
    default:
        console.log("Sua profissão não estar no sistema")
        break

}
