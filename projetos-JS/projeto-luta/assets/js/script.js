let log = new Log(document.querySelector('.log'));
let char = new Guerreiro('josemar')
console.log(char.name)
let monster = new maximoMonster();
console.log(monster.name)

const senario = new Senario (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log

)

senario.start();