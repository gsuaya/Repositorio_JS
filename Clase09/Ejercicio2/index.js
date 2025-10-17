let misDatos = {
    nombre : "Gonzalo",
    apellido : "Suaya",
    dni : "47575780",
    edad : "17",
    comidasFavoritas : ["Sushi", "Hamburguesa", "Carne"],
    saludar : function(){
        return "Hola, mi nombre es" + misDatos.nombre + misDatos.apellido, "y tengo" + misDatos.edad, "años. Mi primer comida favorita es" + misDatos.comidasFavoritas[0] 
    }
}
    console.log(misDatos.saludar())
