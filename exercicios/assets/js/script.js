class Person {
    _age = 0;
    constructor(name) {
        this.name = name;

    }
    get age() {
        return this._age;
        
    }

    set age(x) {
        if(typeof x === 'number') {
            this._age = x;
        }
    }

}

class Student extends Person {
    
    constructor(name, id) {
        super(name); //super para herda da objecto pai
        this.id = id;

    }
}

let p1 = new Student("Josemar", 1)
p1.age = 20;
console.log(`${p1.name} tem ${p1.age} anos e matricúla #${p1.id}`)