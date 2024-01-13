//DESCONTRUÇÃO É PEGAR INFORMAÇÕES ESPECIFÍCAS DESSE OBJETO E TRANFORMAR EM VARIAVEIS
let pesssoa = {
    nome: 'Josemar',
    sobrenome: 'Rodriguês',
    idade: 21,
    
    social: {
        facebook: 'JOsemar@Rodriguês',
        instagran: {
            url: '@josemar',
            seguidores: 1000
        }
    },
    // nomeCompleto: function() {
    //     return `${this.nome} ${this.sobrenome}`
    // }
}
//EXEMPLO
//forma de desconstrução(pega as informações e transforma em variel)
// let {nome: pessoaNome, sobrenome: sob, idade = 0}  = pesssoa //(0 é o valor padrão)

// console.log(pessoaNome, sob, idade)
//para pega uma informação que está dentro de outro objeto 
// let{nome, idade, social:{instagran}} = pesssoa

// console.log( instagran)
//-----------------------------------------------

//VAMOS COMPLICAR MAIS AINDA
let{nome, idade, social:{instagran:{url: instagran, seguidores}}} = pesssoa

console.log(nome, idade, instagran, seguidores)


//------------------

function pegarNomeCompleto(obj){
    
    return obj.nome +' ' +obj.sobrenome
}

console.log(pegarNomeCompleto(pesssoa))