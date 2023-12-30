//Orientação a objeto
class Person {
    //variaveis comuns
    passos = 0

    constructor(name, idade) { //quando criar uma pessoa nova ele vai ser primeiro a ser executado
        this.name = name;
        this.age = idade;
    }

    acao() { //ações
        this.passos++;
    }

    setIdade(newIdade) {
        if(typeof newIdade == 'number') { //validação aceita so numeros
            this.age = newIdade;
        } else {
            console.log(`Idade não aceita . (Só numeros)`)
        }
    }
}
//criando o objeto
let p1 = new Person('João', 21);
p1.acao()
p1.setIdade(20)
console.log(`${p1.name} tem ${p1.age} e ${p1.name} Passos: ${p1.passos}`)