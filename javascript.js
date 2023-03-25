// 1) Escribe un programa de una sola línea que haga que aparezca en la pantalla
//    un alert que diga “un mensaje”. 
        alert("Un mensaje")
       
// 2) Escribe un programa de una sola línea que
//    escriba en la pantalla un texto que diga «Hello World» (document.write).
        document.write("Hello World ")

// 3) Escribe un programa de una sola línea que escriba en la pantalla el
//    resultado de sumar 3 + 5. 
        document.write(3 + 5)

// 4) Escribe un programa de dos líneas que pida el
//    nombre del usuario con un prompt y escriba un texto que diga «Hola
//    nombreUsuario» 
        let nombreUsuario = prompt("Ingrese su nombre de usuario: ")
            document.write(" Hola " + nombreUsuario)

// 5) Escribe un programa de tres líneas que pida un número, pida
//    otro número y escriba el resultado de sumar estos dos números.
        let num1 = parseInt(prompt("Ingrese primer numero: "))
        let num2 = parseInt(prompt("Ingrese segundo numero: "))
         let resultado = num1 + num2 ; document.write(" La suma es: " + resultado)