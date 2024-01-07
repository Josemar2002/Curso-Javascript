//Introdução a requisições

//O que é Síncrono e Assíncrono?

// Em programação, especialmente em JavaScript, os conceitos de síncrono e assíncrono referem-se à forma como as operações são executadas em relação ao tempo. Aqui estão exemplos práticos em JavaScript para ilustrar esses conceitos:

// Síncrono em JavaScript:

// No código síncrono, as operações são executadas em sequência, uma após a outra, e o controle não é passado para a próxima operação até que a atual seja concluída.
// javascript

// Exemplo síncrono
console.log("Início");

function operacaoSincrona() {
  for (let i = 0; i < 3; i++) {
    console.log("Operação síncrona - " + i);
  }
}

operacaoSincrona();

console.log("Fim");
// Neste exemplo, as mensagens "Operação síncrona" são exibidas em sequência, uma após a outra.

// Assíncrono em JavaScript:

// No código assíncrono, as operações podem ser iniciadas, mas o controle é passado para o próximo trecho de código imediatamente, sem esperar pela conclusão da operação assíncrona.
// javascript
// Copy code
// Exemplo assíncrono com setTimeout
console.log("Início");

setTimeout(function () {
  console.log("Operação assíncrona concluída");
}, 2000);

console.log("Fim");
// Neste exemplo, o setTimeout inicia uma operação assíncrona que imprime "Operação assíncrona concluída" após 2 segundos. No entanto, o código continua executando e imprime "Fim" imediatamente, sem esperar pelos 2 segundos.

// O JavaScript assíncrono é frequentemente usado em situações como requisições AJAX, operações de leitura/gravação de arquivos, eventos de usuário, etc., para evitar bloqueios no thread principal e melhorar a responsividade do aplicativo. Promessas, async/await e callbacks são conceitos frequentemente utilizados para lidar com operações assíncronas em JavaScript.


//O que é um Callback?
//call back == liga de volta
let clicou = () =>{ //fetch busca a url e cria a requisição e gera uma resposta
        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
          return response.json(); //função json transforma resposta em objeto
        })
        .then((json) => { //then pega a resposta tranformada em objeto
          alert(`O titulo da página: ${json[0].title}`)
        })
        .catch((error) => { // quando há um error na (requisição principal) essa função (exucuta)
             alert('Deu erro no codigo' + error)//esse error mostra o (error)
        })
        .finally(() => { //dando certo ou errado essa função será executada no final da requisição
          alert('Fim')
        })
    }

document.querySelector('#botao').addEventListener('click', clicou)


// introdução aos methodos de requisição

//post = postar 
// get = pega alguma informação
// put = quando a requisição tem a intenção de  adiconar uma informação
// delete = quando a requisição tem a intenção de  deletar uma informação

async function inserir() {
    let response = await fetch(
      'https://jsonplaceholder.typicode.com/posts', 
      {
          method: 'POST',
          headers: {
            'Content-Type': 'aplication/json'

          },
          body: JSON.stringify({
            title: 'titulo de teste',
            body: 'Corpo de teste',
            userid: 2
          })

      })

      let json = await response.json()
     console.log(json)        
      

}


document.querySelector('#botao').addEventListener('click', inserir)

//Foçando a requisição ficar assicrona 
//function com async = colocado para o javascript detectar o await /await = significa esperar
async  function assincronaFocar() {
   let reponse = await fetch('https://jsonplaceholder.typicode.com/posts')
   let json = await reponse.json()
   alert(`Titulo do primeiro post ${json[0].title}`)

}

document.querySelector('#botao').addEventListener('click', assincronaFocar)