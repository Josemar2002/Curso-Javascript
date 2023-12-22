//Selecionando elementos 1

//document.getElementsByTagName("h1")  Seleciona pelo nome da tag 

// sempre que o comando estever  no plural retorna um array

// let elementos = document.getElementsByTagName("h1") armazenei na varial para puchar a tag

// elementos[0] //exibindo o array

//Selecionando elementos 2

//Selecionando atraves do id

//document.getElementById("teste")

//selecionando através da class

//document.getElementsByClassName('teste')

// sempre que o comando estever  no plural retorna um array


//forma duas mais usada de seleção

//document.querySelector(".teste")  //dentro do parenteses puxa exatamente como ta no html

//document.querySelectorAll(".teste ul li") //é possivel navegar entres tag com esse comando  => sempre vai retorna um array

//EVENTOS DE CLICK
// onclick="clicou()" criado dentro da tag especifica no HTML 
//Abaixo a forma de fazer através de um arquivo ormal JS

// function clicou(){
//     alert('CLicado com sucesso')
// }

// let botao = document.querySelector('.botao') //Selecionando a tag 

// botao.addEventListener("click", () => {
//     clicou();
// })

 //usando o vento de click //Sempre tem dois paramentros para colocar o type do evento e o parementro que vai executar.

 //Manipulando elementos
function clicou(){
    // const teste = document.querySelector('#teste')
    // console.log(teste.children)  // .children retorna os filhos imediatos
    const ul = document.querySelector('ul')
    console.log(ul.innerHTML) //conte

}

