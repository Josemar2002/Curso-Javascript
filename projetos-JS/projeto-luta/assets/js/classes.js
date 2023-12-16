class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;
    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Guerreiro extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life

    }
}

class Mago extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class pequenoMonster extends Character {
    constructor() {
        super('Vampiro')
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;

    }
}

class maximoMonster extends Character {
    constructor() {
        super('Dragão');
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

class Senario {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject ) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
        
    }

    start() {
        this.update();
        this.fighter1El.querySelector('.attackButton').addEventListener('click',() => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2El.querySelector('.attackButton').addEventListener('click',() => this.doAttack(this.fighter2, this.fighter1))
    }
    update() {
        //Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP `;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`
        //Fighter 2
        this.fighter2El.querySelector('.name').innerHTML =`${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP `;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`

    }

    doAttack(atacou, atacado) {
        if(atacou.life <= 0 || atacado.life <= 0){
            this.log.addMessage('Atacando cachorro morto.');
            return;
        }

        let attackFactor = (Math.random()* 2).toFixed(2);
        let defenseFactor = (Math.random()* 2).toFixed(2);

        let actualAttack = atacou.attack * attackFactor;
        let actualDefense = atacou.defense * defenseFactor;

        if(actualAttack > actualDefense) {
            atacado.life-= actualAttack;
            this.log.addMessage(`${atacou.name} causou ${actualAttack.toFixed(2)} de dano em ${atacado.name}`)
        }else {
            this.log.addMessage(`${atacado.name} conseguiu defender...`)
        }


        this.update();
    }
}

class Log {
    list = [];

    constructor(listE1){
        this.listE1 = listE1;

    }

    addMessage(msg) {
        this.list.push(msg);
        this.render(); 
    }

    render(){
        this.listE1.innerHTML = '';
        for(let i in this.list) {
            this.listE1.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}