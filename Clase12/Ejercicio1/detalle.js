let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let IDdelpersonaje = queryStringObj.get('id');

console.log(IDdelpersonaje);

fetch (`https://rickandmortyapi.com/api/character/${IDdelpersonaje}`)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data)

    let nombre = document.querySelector(".principal")
    nombre.innerText = data.name

    let estado = document.querySelector(".status")
    estado.innerText += data.status

    let especie = document.querySelector(".especie")
    especie.innerText += data.species

    let img = document.querySelector(".imgs")
    img.src = data.image

})

