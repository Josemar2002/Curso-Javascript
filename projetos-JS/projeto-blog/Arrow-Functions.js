//Arrow Functions
//exemplo
// let somar = (x,y) => {
//     return x+y
// }



//simplicando o codigo

let result = (x,y) => x+y //arrow fuction simplificado

console.log(result(12, 5))

// let letrasNoNOme = (nome) => {
//     return nome.length
// }

// console.log(letrasNoNOme(`Josemar`))
//----------------------------------------------------------------
//QUANDO TEM UM PARAMENTRO SO O CODIGO N EXIGIR PARENTESES

let letrasNoNOme = nome => nome.length
    
console.log(letrasNoNOme(`Josemar`))