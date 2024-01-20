async function enviar() {
    let arquivo = document.getElementById('arquivo').files[0]
    let body = new FormData()
    body.append('title', 'Pantera cor de rosa')
    body.append('arquivo', arquivo)
    let req = await fetch('https://www.josemarRodrigues.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type' : 'multipart/form-data'
        }
    })
}