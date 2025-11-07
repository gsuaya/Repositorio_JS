
fetch('https://rickandmortyapi.com/api/character')

    .then (function(response){
        return response.json();
})

    .then(function(data){
        console.log(data.results);

    let dom = document.querySelector(".characterList")  
    let characters = ''
    for (let i=0; i<data.results.length; i++){
         characters += 

        ` <article>
            <img src='${data.results[i].image}' alt="" ></img>
            <a href ='./detalle.html?id=${data.results[i].id}'>Name: ${data.results[i].name} </a>
            <p>Status: ${data.results[i].status} </p>
            

         </article>`
    }
    dom.innerHTML = characters
    console.log(characters)
    console.log(data.results.length)
    })

    .catch(function(error){
        console.log(error)
    })