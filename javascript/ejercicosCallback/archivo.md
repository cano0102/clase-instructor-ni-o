Ejercicios y Explicación sobre Callbacks, Promesas y Async/Await en JavaScript

1. Callbacks
Explicación breve:
Un callback es una función que se pasa como argumento a otra función y que se ejecuta después de que ocurra algún evento o se complete alguna operación. Son fundamentales en JavaScript debido a su naturaleza asíncrona.

Ejemplo básico:
javascript
function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}`);
    callback();
}

function despedir() {
    console.log("Adiós!");
}

saludar("Juan", despedir);
// Salida:
// Hola, Juan
// Adiós!


Ejercicios para principiantes:
Crea una función sumar que tome dos números y un callback, que imprima el resultado de la suma.

Implementa una función operacionMatematica que acepte dos números y un callback que realice alguna operación con ellos.

Crea un simulador de proceso asíncrono con setTimeout que use un callback para avisar cuando termine.

Escribe una función filtrarArray que tome un array y un callback de filtro, y devuelva un nuevo array con los elementos que pasen el filtro.

2. Promesas
Explicación breve:
Una Promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante. Tiene tres estados: pendiente, resuelta o rechazada.

Ejemplo básico:
javascript
const miPromesa = new Promise((resolve, reject) => {
    const exito = true; // Simulamos condición
    
    if(exito) {
        resolve("La operación fue exitosa!");
    } else {
        reject("La operación falló");
    }
});

miPromesa
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));
Ejercicios para principiantes:
Crea una promesa que se resuelva después de 2 segundos con un mensaje de éxito.

Implementa una función que devuelva una promesa que se resuelva si un número es par, o se rechace si es impar.

Crea una cadena de promesas donde cada una dependa del resultado de la anterior.

Escribe una función que use Promise.all para manejar múltiples promesas simultáneamente.

3. Async/Await
Explicación breve:
async/await es una sintaxis más moderna y legible para trabajar con promesas. Una función async siempre devuelve una promesa, y await se usa para esperar a que una promesa se resuelva.

Ejemplo básico:
javascript
async function obtenerDatos() {
    try {
        const respuesta = await fetch('https://api.example.com/data');
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}

obtenerDatos();
Ejercicios para principiantes:
Convierte una función que use promesas para que use async/await en su lugar.

Crea una función asíncrona que espere 3 segundos antes de resolver con un mensaje.

Implementa una función que haga múltiples llamadas async/await en secuencia.

Escribe una función que use try/catch para manejar errores en operaciones asíncronas.