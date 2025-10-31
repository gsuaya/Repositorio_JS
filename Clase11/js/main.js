// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector("#titulo");

  titulo.addEventListener('mouseover', function(){
        let mensaje = "CUAL ES SU NOMBRE?";
        let nombre = prompt(mensaje)

        let saludo = document.querySelector('#saludo');

        console.log(nombre);
        console.log(saludo);
        

        if (nombre == undefined) {
            saludo.innerText = "Bienvenido"
        } else {
            saludo.innerText = "Bienvenido " + nombre
        }


        saludo.style.textTransform = "uppercase";


        titulo.style.display ="none"

       let span = document.querySelector("span");
       span.style.display = "inline"



    });

 
   
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
   // let boton = ;
 
 
 }) 

   