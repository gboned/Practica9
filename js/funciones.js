/*****************************************/
/*                                       */
/*          AYUDA A LA POLICÍA           */
/*                                       */           
/*****************************************/

// Creo un array con la lista de posibles letras que puede contener un DNI.
listaLetras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", 
                "V", "H", "L", "C", "K", "E", "T"];

// Creo una función que solicita al usuario el número de DNI del cual se quiere obtener la letra.
function obtenerLetraDNI() {

    // Primero creo un prompt que solicite el número de DNI, poniendo el texto por defecto la indicación de cuántas cifras debe tener.
    numeroDNI = Number(prompt("Introduce el número de DNI del cual quieres saber la letra: ", "Número de seis cifras"));
    // Creo una variable que hace el cálculo para obtener la posición de la letra de DNI (que es obtener el resto de dividir el número entre 23).
    posicionLetraDNI = numeroDNI % 23;
    // Creo una variable que según la posición de la letra, devuelve la correspondiente de la lista de letras.
    letraDNI = listaLetras[posicionLetraDNI]
    // Añado un console.log con un mensaje de respuesta, y un document.write para escribir el DNI y letra por pantalla.
    console.log(`La letra del número de DNI ${numeroDNI} corresponde a la letra ${letraDNI}. DNI completo: ${numeroDNI}${letraDNI}`);
    document.write(`${numeroDNI}${letraDNI} `)

}

// Llamo a la función para que se active directamente.
obtenerLetraDNI();