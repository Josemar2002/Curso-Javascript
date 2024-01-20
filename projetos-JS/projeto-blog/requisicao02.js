async function inserirPosts() {
    document.getElementById("posts").innerHTML = "carregando..."

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            titulo: 'titulo de teste',
            body: 'Corpo de teste',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let json = await req.json()
    console.log(json)
}