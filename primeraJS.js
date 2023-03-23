function sumar(){
    const num1 = 2
    const num2 = "2" //string o cadena de texto
    let num3 
    const resultado = num1 + num2
    console.log(resultado)
}

sumar()

function holaMundo(){
    document.write("Hola Mundo desde una función") //escribir en el documento
    console.log("hola mundo en la consola")
    alert("Hola Mundo desde una alerta")

}

// let nombre = prompt("Ingresa tu nombre") //ingresar datos por teclado
// let apellido = prompt("Ingresa tu apellido")

// function saludar(nombre, apellido){
//     alert("Hola " + nombre + " " + apellido + " " + "campeon del mundo")
// }

// saludar(nombre, apellido)


let num1 = parseInt(prompt("Ingresa el primer numero"))
let num2 = parseInt(prompt("Ingresa el segundo numero"))


function suma(num1, num2){
    
    let resultado = num1 + num2

    return alert("El resultado es" + " " + resultado) 
    // lo que esta entre llaves en un bloque. o scope de codigo. 
}


suma(num1, num2)

// Tarea 23/03/2023

// 1) Escribe un programa de una sola línea que haga que aparezca en la pantalla
//    un alert que diga “un mensaje”. 
// 2) Escribe un programa de una sola línea que
//    escriba en la pantalla un texto que diga «Hello World» (document.write).
// 3) Escribe un programa de una sola línea que escriba en la pantalla el
//    resultado de sumar 3 + 5. 
// 4) Escribe un programa de dos líneas que pida el
//    nombre del usuario con un prompt y escriba un texto que diga «Hola
//    nombreUsuario» 
// 5) Escribe un programa de tres líneas que pida un número, pida
//    otro número y escriba el resultado de sumar estos dos números.


// Variables

// Las variables son una caja contenedora de datos, que pueden ser de diferentes tipos.

// const, let, var 

// const en una constante, no se puede cambiar el valor 
// let es una variable que puede cambiar su valor pero siempre tiene que estar adentro de un bloque de codigo o su scope
// var es una variable que puede cambiar su valor y puede estar fuera de un bloque de codigo o su scope

// VAR NOOOOO SE USA!!!!!!!!! 



