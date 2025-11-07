let resultadobusqueda = document.querySelector(".search-results")

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let valor = queryStringObj.get('q');
console.log(valor)