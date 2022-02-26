/*
1. Crear una función para solicitar el número y validar antes de mostrar el resultado que
el número ingresado se encuentre entre 1 y 20. En caso de que no corresponda al
rango, mostrar un mensaje al usuario: "número fuera del rango"
2. Utilizar las características propias de ES6 como let y arrow function para desarrollar
el ejercicio.
3. Generar y mostrar por consola el resultado de las operaciones.
4. Aplicar un ciclo for anidado para obtener el factorial del número ingresado.
*/

//Arrow function
let multiplicarNumero = () => {

    //Solicitar el número y comentar las condiciones para el cálculo
    alert("Te voy a mostrar la tabla de multiplicar del número que me indiques, desde 1 hasta el número que des, además de los factoriales de los números entre el 1 y el que me diste. TU RESPUESTA ESTARÁ EN LA CONSOLA");
    var numero = parseInt(prompt("Ingresa un número del 1 al 20 para mostrarte su tabla de multiplicar del 1 al numero elegido"));

    if (numero < 1 || numero > 20) {
        let contador = 0;
        do {
            alert("Numero fuera de rango. Tienes que ingresar un número entre 1 y 20.")
            numero = parseInt(prompt("Ingresa un número del 1 al 20 para mostrarte su tabla de multiplicar del 1 al numero elegido"));
            contador = contador + 1;
            if (contador == 2) {
                alert("Entendí que no deseas usar el programa. ¡Gracias por pasarte por acá!")
                break;
            }
        }
        while (numero < 1 || numero > 20)
    } else {
        for (let i = 1; i <= numero; i++) {
            console.log(`${i} x ${numero} =  ${i*numero}`)
        }

        for (let i = 1; i <= numero; i++) {
            let factorial = 1;
            for (let j = 1; j <= i; j++) {
                factorial = factorial * j;
            }
            console.log(`El factorial de  ${i}! es ${factorial}`);
        }
    }
}

multiplicarNumero();