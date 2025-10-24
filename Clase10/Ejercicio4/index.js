let mensaje = "Ingrese su nacionalidad"
let nacionalidad = prompt(mensaje)

let mensaje2 = "Ingrese su profesion"
let profesion = prompt(mensaje2)

let mensaje3 = "Cuantos kilometros caminas por dia?"
let km = prompt(mensaje3)

let filosofoHipster = function(nacionalidad, profesion, km){
    if (nacionalidad == "Argentino" && profesion == "Musico" && km>2){
        return "Soy un filsofo hipster";
    }else{
        return "Aun no soy un filosofo hipster"
    }

}
console.log(filosofoHipster(nacionalidad, profesion, km))
