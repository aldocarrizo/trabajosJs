//Tarea 1

function alert1() {
    alert("Este es un ejemplo de programa de una sola línea que hace que aparezca un mensaje, utilizando la función alert de javascript.");
}

//Tarea 2

function write() {
    document.write('<h1>Hello World</h1>');
    
}



// para esta parte de la tarea usé la ayuda de  ChatGPT porque no sabía como hacer que el mensaje se ejecutase luego de cliquear el botón dentro del modal. Lo que me sugirió fue que en lugar de utilizar el parámetro onclick
// directamente, cree una variable donde guarde una referencia a un evento, y que este evento ejecute mi función write(); 
// entonces definí "eventoWrite". Una vez que hice esto me molestaba el hecho de que al cargarse la función write el usuario tenga que recargar la página para volver a ver el contenido inicial, al principio intenté crear un botón
// para que el usuario pueda hacer clic y volver pero no me funcionó el tratar de anidar etiquetas dentro de document.write, como alternativa se me ocurrió que la página podría recargarse después de unos segundos.
// Entonces lo primro que hice fue crear un evento location.reload() y settear que ese evento se ejecute luego de unos segundos usando la función...
// setTimeout, no sabía que existía esta función predifinida, ni tampoco el evento location.reload(); Ahora el tema es que quería que el usuario pueda saber que esto iba a ocurrir, para eso pensé en crear un alert.
// El problema era que el alert se mostraba justo al hacer clic en el botón del modal, antes de que se ejecute en el evento la línea de write(); 
// Entonces lo que hice fue retrasar la aparición del alert anidando la función alert2(); dentro de una función SetTimeout en el eventoWrite que se ejecuta al hacer clic en el botón del modal.

function alert2() {
    alert("Atención esta página se recargará y volverá a mostrar su contenido inicial, luego de 5 segundos tras que hagas clic en el botón de 'Aceptar'.");
    setTimeout(function() {
        location.reload();
    }, 5000);
}

const eventoWrite = document.getElementById("eventoWrite");


eventoWrite.onclick = function() {
    write();
    setTimeout(function() {
        alert2();
    }, 500);


}

// Tarea 3
// Para esta tarea básicamente usé el mismo código que en la tarea 2 pero creando una function write2()


function write2(a, b) {
    let c = a + b;
    document.write(`El resultado de sumar ${a} + ${b} es ${c}` );
}


const eventoWrite2 = document.getElementById("eventoWrite2");


eventoWrite2.onclick = function() {
    write2(3,5);
    setTimeout(function() {
        alert2();
    }, 500);
}
