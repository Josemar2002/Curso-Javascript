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
// function clicou(){
//     // const teste = document.querySelector('#teste')
//     // console.log(teste.children)  // .children retorna os filhos imediatos
//     const ul = document.querySelector('ul')
//     console.log(ul.children[0].innerHTML = 'alterado') 

// }

// function clicou(){
//     const ul = document.querySelector('ul')

//     let newli = document.createElement('li') //criando e adicionado um novo li
//     newli.innerText = 'Item Adicionado';
//     ul.appendChild(newli) 

//     ul.children[0].append( "(alterado)")  //append adciona conteudo; //no final
//     // ul.children[0].prepend( "(alterado)")  //append adciona conteudo; //no começo

// }

//Adicionando ELementos ao redor de um elemento
//after() antes;
//before() depois;

// function clicou(){
//     const h1 = document.querySelector('h1')
//     const newH2 = document.createElement('h2')
//     newH2.innerHTML = '<em style="color: red">Josemar Rodrigues</em>'
//     h1.after(newH2)


//     const ul = document.querySelector('ul')

//     const newul = document.createElement('ul')
            
//    for(let i = 1; i <= 5; i++) {  //Cria li dentro do ul acima com o limite que eu coloquei
//      let newli = document.createElement('li');
//      newli.innerHTML = "Item add " + i;
//      newul.append(newli);
//    }

//    ul.after(newul)
// }


//manipulando atributos 
//.getAttribute (pega atributos)

//.hasAttribute (para verificar se tem um atributo e ela sempre retorna um bolean)

//  input.setAttribute('placeholder', 'Josemar') // altera um atributo e para isso exigi dois valores ('o nome do atributo' e ' o valor que vai passar a existir nele');

//exemplo de alteração de atributo no input

// function clicou() {
//   const input = document.querySelector('input');
//   const botao = document.querySelector('.botao')

//   if(input.getAttribute('type') ==='text') {
//     input.setAttribute('type', 'password')
//     botao.innerText = "Mostrar Senha "
//   }else {
//     input.setAttribute('type', 'text') 
//     botao.innerText = "Ocutar Senha" 
//   }
  

// }

//Manipulando ccs inline

function clicou() {
  const body = document.querySelector('body')
  body.style.backgroundColor = '#3900ae'
  
  const h1 = document.querySelector('h1')

  h1.style.fontSize = '60px'

  const botao = document.querySelector('.botao')

  botao.style.backgroundColor = 'green' 
  botao.style.color = 'white'
  botao.style.borderRadius = '15%'
  botao.style.border = 'none'
  botao.style.padding = '10px'
}