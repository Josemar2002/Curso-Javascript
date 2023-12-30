//Trabalhando com Classes
function clicou() {
    const button  = document.querySelector('button');
    button.classList.add('verde') //adiciona um classe
    // button.classList.remove('verde') //remove uma classe

    // button.classList.toggle(azul) //troca uma classe (se ja tver a classe ele remove)


    // if(button.classList.contains('azul')) { //verificação de uma classe
    //     button.classList.remove('azul');
    //     button.classList.add('verde')
    // }else {
    //     button.classList.add('azul');
    //     button.classList.remove('verde')
    // }


    if(button.classList.contains('azul')) { 
        button.classList.replace('azul', 'verde') //faz a troca de uma classe pela outra apenas
    }else {
        button.classList.replace('verde', 'azul')
    }
}


//eventos de teclado
//onkeydown="apertou()" onkeypress="segurou()" onkeyup="soltou()" PELO HTML

//ABAIXO PELO JS
function apertou() {
    console.log('APERTOU')
}

function segurou() {
    console.log('SEGUROU')
}


// const input = document.querySelector('input')

// input.addEventListener('keyup', soltou)  

//exercício de tarefa simples


//elementos
const input = document.querySelector('input')
const lista = document.querySelector('ul')

//funções
function soltou(e) {
    if(e.key === 'Enter') {
        //adicionar elemento li na lista
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        lista.appendChild(newLi);
        //limpa campo
        input.value = '';
    }
}

//eventos
input.addEventListener('keyup', soltou)  

