let numeros = [1,2,3,4]
//Operador Spread (junta dois arrays sem perder conteudo do primeiro)
let outros = [...numeros,5,6,7,8]  

console.log(outros)

//Operador Spread (fazendo a junção em objetos)
let info = {
    nome: 'Josemar',
    sobrenome: 'Rodriguês',
    idade:21
}
let novaInfo = {
    ...info,
    cidade: 'Governador Valadares',
    estado: 'MG',
    pais: 'Brasil'
}
console.log(novaInfo)

//Operador Spread (fazendo a junção em função)

let addInfo = (info)  => {
    let novasInfo = {
        ...info,
        status: 0,
        token: 'hjkgdhjdsfjsd',
        data_nascimento: '.....'

    }

    return novasInfo
}

console.log(addInfo({nome:'Josemar', sobrenome:'Rdrigues'}))

//Operador Rest
//com um paramêntro so ele usar todos os paramentros seguindo o exemplo 
let adicionar = (...numeros) => {
    console.log(numeros[1])
}

adicionar(1,2,3,4,5,)


//exercicios
function adds(nomes, ...info) {
  let resu = [...nomes, ...info]
  return resu
}
let nomes = ['Josemar', 'Rodrigues']

let outro = adds(nomes, 'Souza', 'Maria', 'Fernanda', 'José')

console.log(outro)