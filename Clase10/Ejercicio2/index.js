let mensaje = "Ingrese su nombre";
let nombre = prompt(mensaje);
console.log(nombre);

let mensaje2 = "Ingrese su edad";
let edad = prompt(mensaje2);
console.log(edad);

let deportes = "¿Le gustan los deportes?";
let fanDeportes = confirm(deportes);
console.log(fanDeportes);

alert("Muchas gracias " + nombre + " por responder nuestras preguntas");


let usuario = {
    nombre: nombre,
    edad: edad,
    deporte: fanDeportes,
    deportistaProfesional: function(){
        if (fanDeportes){
            return "Si, soy fan de los deportes"
        }else{
            return "No, no soy tan fan de los deportes"
        }
    }
}

console.log(usuario.deportistaProfesional());