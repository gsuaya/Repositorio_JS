let formulario = document.querySelector(".contact-form");
let fullname = document.querySelector("#fullName")
let email = document.querySelector("#email")
let phone = document.querySelector("#phone")
let password = document.querySelector("#password")
let repassword = document.querySelector("#rePassword")

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    if(fullname.value.length == 0){
        console.log("El nombre no debe estar vacio")
    }else if(email.value.length == 0){
        console.log("El email no debe estar vacio")
        
    }else if(phone.value-length == 0){
        if (phone.value.length<8){
            console.log("El telefono debe tener al menos 8 caracteres")
        }
        console.log("El telefono no debe estar vacio")
    }else if(password.value.length<3){
        if (password.value.length == 0){
            console.log("La contraseña no puede estar vacia")
        }
        console.log("La contraseña debe tener minimo 3 caracteres")
    }else if (repassword.value.length == 0){
        if (repassword.value.length<3){
            console.log("La contraseña repetida tiene que tener un minimo de 3 caracteres")
        }
        console.log ("La contraseña no puede estar vacia")
    }else if (password.value != repassword.value){
        console.log("Las contraseñas tienen que ser iguales")
    }
})
