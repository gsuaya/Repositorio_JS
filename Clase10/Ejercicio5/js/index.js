alert("Bienvenidos a mi sitio!");

let avanzar = confirm("Esta seguro que de quiere avanzar?");
if (avanzar){
    document.querySelector(".saludo").innerText = "Que alegria que quieras continuar con tu visita"

} else{
    document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar tu visita"
}

let mensaje = "Ingresa tu nombre";
let nombre = prompt(mensaje)

document.querySelector("h1").innerText = "Bienvendio " + nombre

let mensaje2 = "Cuantos años tenes";
let edad = prompt(mensaje2)
if(edad < 18){
document.querySelector(".container-general").style.display = "none  ";
document.querySelector("#accesoDenegado").style.display = "block";
}

let mensaje3 = confirm("Te gusta la programacion?");
if (mensaje3){
    document.querySelector(".background-img").innerHTML = "<img src='./imgs/programmer.jpeg'></img>"
}else{
    document.querySelector(".background-img").innerHTML = "<img src='./imgs/gatito.jpeg'></img>"
}

let imagen = "Ingrese url"
let respuesta4 = prompt(imagen)

 document.querySelector(".avatar").src = respuesta4


    