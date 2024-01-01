//Orientação a objeto
class Person {
    //variaveis comuns
    passos = 0
    _age = 0
    constructor(name, sob, ) { //quando criar uma pessoa nova ele vai ser primeiro a ser executado
        this.name = name;
        this.sobrenome = sob
       
    }

    acao() { //ações
        this.passos++;
    }

    // setIdade(newIdade) {  //validação aceita so numeros
    //     if(typeof newIdade == 'number') { 
    //         this.age = newIdade;
    //     } else {
    //         console.log(`Idade não aceita . (Só numeros)`)
    //     }
    // }



    get nomeSobrenome () { //caso precise combinar duas variaveis
        return `${this.name} ${this.sobrenome} tem: ${this.age} anos `
    }

    get age() { //quando for necessario validar numeros
        return this._age;
      }

    set age(x) {
       if(typeof x == 'number'){
        this._age = x
       }  else {
                 alert(`Idade não aceita . (Só numeros)`)
           }
    }
}
//criando o objeto
let p1 = new Person('João', 'rodrigues');
p1.acao()
// p1.setIdade(20)
// console.log(`${p1.name} tem ${p1.age} anos, ${p1.name} Passos: ${p1.passos}`)
p1.age = 20; //usando o set
console.log(p1.nomeSobrenome) //usando get para juntar variaveis 

//Classes: Getter e Setter
//Getter: pegar
//Setter: colocar



//Classes herança

class Pessoa {
    _age = 0

    constructor(name) {
        this.name = name;
    }
    
    get age() {
        
        return `${this._age}`
        
      }

    set age(x) {
      if(typeof x == 'number' ) {
        return `${this._age = x}`
      } else {
        console.log('Apenas números')
      }
    }



}

class Student extends Pessoa{   //herda da classe acima
    
    constructor(name, id) {
        super(name); //executa o constructor da classe pai
        this.id = id;

    }

}

let marcos = new Student('Josemar', 1)
marcos.age = 21;

console.log(`${marcos.name} tem ${marcos.age} anos e matricula #${marcos.id}`)

//Classes: Variável/Método estático
class Car {
    age = 0
    static maos = 2; 
    constructor(name) {
        this.name = name;
    }

    maos() {
        console.log(`Oi eu sou ${this.name} e tenho ${Car.maos} mãos!!`)
    }
}

let p3 = new Car('Josemar');
p3.maos()

//Classes: Factory
class Carros{
    age = 0
    constructor(nome) {
        this.nome = nome;

    }
}

function criacaoCarros(nome, age, modelo) {
    let car01 = new Carros(nome);
    car01.age = age
    car01.modelo = modelo
    return car01;
}

let car =  criacaoCarros('josemar', 21, 'ferrari')

console.log(`${car.nome} tem ${car.age} anos, e seu carro é ${car.modelo}`)