// Conceito factore  {utilidade de criar funções que vão retorna um objeto pronto}
// class Person {
    
//     age = 0;
//     constructor (name) {
//         this.name = name;

//     }

   
// }
// function createPerson(name, age) {
//     let p = new Person(name);
//     p.age = age;
//     return p;

// }
// let p1 = createPerson('Josemar', 21);
// console.log(`${p1.name} tem ${p1.age} anos.`)

//--------------------------------------------------------------------

//classes Variaves/Metodos estáticos

// class Person {
//     static hands = 2;
//     age = 0;
//     constructor (name) {
//         this.name = name;

//     }

//     maos() {
//         console.log(`${p1.name} tem ${Person.hands} mãos`)
//     }
// }

// let p1 = new Person('Josemar');

// p1.maos();

//---------------------------------------------------------

// class Person {
//     _age = 0;
//     constructor(name) {
//         this.name = name;

//     }
//     get age() {
//         return this._age;
        
//     }

//     set age(x) {
//         if(typeof x === 'number') {
//             this._age = x;
//         }
//     }

// }

// class Student extends Person {
    
//     constructor(name, id) {
//         super(name); //super para herda da objecto pai
//         this.id = id;

//     }
// }

// let p1 = new Student("Josemar", 1)
// p1.age = 20;
// console.log(`${p1.name} tem ${p1.age} anos e matricúla #${p1.id}`)