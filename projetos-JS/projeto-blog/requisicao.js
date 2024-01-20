//promises (Conceitos)
function pegaTemperatura() {
 return new Promise(function(resolve, reject) {
    console.log("pegando temperatua...")
    setTimeout (function() {
        resolve('40 na sombra')

    },2000)
 })
}

//Usando a promise
let temp = pegaTemperatura()

temp.then(function(resultado) {
    console.log("TEMPERATURA: " +resultado)
})
temp.catch(function(error) {
    console.log("Error" )
})


//PARSE = PEGA UMA STRINS E TRANSFORMA EM JSON
//STRINGFY = PEGA UM JSON E TRANSFORMA EM STRIG

/*
//Código SÍNCRONO
//(EXECUTA LINHA POR LINHA E A DE BAIXO TEM QUE ESPERA A DE CIMA SER EXECUTADA)
let nome = 'Josemar'
let sob = 'Rodrigues'

let completo = nome+ ' ' +sob


//Código ASSÍNCRONO
//ASSÍNCRONO (EXECUTA TODAS AS LINHAS DE UMA VEZ)
let nome2 = 'Josemar'
let sob2 = 'Rodrigues'
let temperatura = Maquinhinha.pegaTemperatura() 
let completo2 = nome+ ' ' +sob

//CALLBACK
//Código ASSÍNCRONO
//ASSÍNCRONO (EXECUTA TODAS AS LINHAS DE UMA VEZ)
let calBack = () => {
    console.log("Opa tudo bem?")
}

let name = "Josemar"
calBack(alert, 2000)
let sobr = "Rodrigues"
console.log("NOME COMPLETO = " +name+ " " +sobr)

*/


