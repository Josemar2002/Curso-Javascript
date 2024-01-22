// async function enviar() {
//     let arquivo = document.getElementById('arquivo').files[0]
//     let body = new FormData()
//     body.append('title', 'Pantera cor de rosa')
//     body.append('arquivo', arquivo)
//     let req = await fetch('https://www.josemarRodrigues.com.br/upload', {
//         method: 'POST',
//         body: body,
//         headers: {
//             'Content-Type' : 'multipart/form-data'
//         }
//     })
// }

//mostrar imagens 
//(sicrono)
/*
function mostrar() {
    let imagem = document.getElementById("imagem").files[0]  
    let img = document.createElement('img')
    img.src = URL.createObjectURL(imagem)
    document.getElementById("posts").appendChild(img)
}
*/

function mostrar() {
    let reader = new FileReader()
    let imagem = document.getElementById('imagem').files[0]
    reader.onloadend = function() {
        let img = document.createElement('img')
        img.src = reader.result
        img.width = 200
        document.getElementById('posts').appendChild(img)
    }
    reader.readAsDataURL(imagem)
}


