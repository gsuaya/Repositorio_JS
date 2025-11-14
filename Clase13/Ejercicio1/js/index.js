let miNombre = "Gonzalo"

let miNombrestring = JSON.stringify(miNombre)
localStorage.setItem('userName', miNombrestring);
console.log(localStorage)

let recuperoStorage = localStorage.getItem('userName')
let nombreRecuperado = JSON.parse(recuperoStorage)

localStorage.clear();


let peliculasFavoritas = ["Avengers", "Nueve reinas", "La isla secreta"];

let peliculaFavorita = JSON.stringify(peliculasFavoritas[1])
localStorage.setItem('peliculaFavorita', peliculaFavorita)
console.log(localStorage)

let recuperoStorage2 = localStorage.getItem('peliculaFavoritaRecuperada')
let peliculaFavoritaRecuperada = JSON.parse(recuperoStorage2)

console.log(recuperoStorage2)
localStorage.clear()

let peliculasJson = JSON.stringify(peliculasFavoritas)
localStorage.setItem('favoritos', peliculasJson)

console.log(localStorage)

let recuperoStorage3 = localStorage.getItem('favoritos')

let original = JSON.parse(recuperoStorage3)
console.log(localStorage)

original.push('Breaking Bad')
let originalJson = JSON.stringify(original)
localStorage.setItem('favoritos', originalJson)

console.log(peliculasFavoritas)