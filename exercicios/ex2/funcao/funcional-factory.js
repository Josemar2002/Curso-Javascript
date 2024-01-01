function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age,
        getFullName() {
            return `${this.name} ${this.lastName}` //Funcional: Instância e This
        }
    }
}

let person1 = createPerson('Josemar', 'Rodriguês', 21);

console.log(person1.getFullName());
console.log(`${person1.name} ${person1.lastName} tem ${person1.age} anos`)

//Funcional: Herança

const defaulUser = {
    name: '',
    email: '',
    level: 1
}

const user1 = {
    ...defaulUser,
    name:'Josemar',
    email:'rjosemar008@gmail.com',
    
}
console.log(`${user1.name} e seu email: ${user1.email}`)

let admin = {
 ...defaulUser,
 name: 'Adiministrador',
 email:'admin@hotlook.com.br',
 level: 2
}
alert(`Logado como ${admin.name}`)