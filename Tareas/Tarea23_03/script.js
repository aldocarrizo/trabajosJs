// Tarea 23/03/2023

// 1) Escribe un programa de una sola línea que haga que aparezca en la pantalla
//    un alert que diga “un mensaje”. 
window.alert("Un mensaje");


// 2) Escribe un programa de una sola línea que
//    escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("Hello World");

// 3) Escribe un programa de una sola línea que escriba en la pantalla el
//    resultado de sumar 3 + 5. 
document.write("<br> El resultado de sumar 3 + 5 es: ", 3+5);

// 4) Escribe un programa de dos líneas que pida el
//    nombre del usuario con un prompt y escriba un texto que diga «Hola
//    nombreUsuario» 
let nombreUsuario = prompt("Ingrese su nombre: ");
document.write("<br> Hola ", nombreUsuario);

// 5) Escribe un programa de tres líneas que pida un número, pida
//    otro número y escriba el resultado de sumar estos dos números
let primerNumero = parseInt(prompt("Ingrese el primer numero a sumar: ")); //Recordar que los datos escritos en un prompt son del tipo char, devo convertilos a enteros para poder sumarlo
let segundoNumero = parseInt(prompt("Ingrese el segundo numero a sumar: "));
document.write("<br> El resultado de sumar los numeros que ingreso es: ", primerNumero + segundoNumero);
