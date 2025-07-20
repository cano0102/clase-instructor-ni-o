
// 1. Callbacks
// Explicación breve:
// Un callback es una función que se pasa como argumento a otra función y que se ejecuta después de que ocurra algún evento o se complete alguna operación. Son fundamentales en JavaScript debido a su naturaleza asíncrona.

// Ejemplo básico:
// javascript

// function saludar(nombre, callback) {
//     console.log(`Hola, ${nombre}`);
//     callback();
// }

// function despedir() {
//     console.log("Adiós!");
// }

// saludar("Juan", despedir);
// // Salida:
// // Hola, Juan
// // Adiós!


// Ejercicios para principiantes:
// Crea una función sumar que tome dos números y un callback, que imprima el resultado de la suma.

// Implementa una función operacionMatematica que acepte dos números y un callback que realice alguna operación con ellos.

// Crea un simulador de proceso asíncrono con setTimeout que use un callback para avisar cuando termine.

// Escribe una función filtrarArray que tome unarray y un callback de filtro,  y devuelvaun nuevo array con los elementos que pasen el filtro. 

// ejercicio1





// function mostrarNumuerosCallback(num1,num2,oper,callback) {
//     console.log(`numeros a operar ${num1} y ${num2}`)
//     callback(num1,num2,oper);
// }


// function operacionMatematica(num1,num2,oper) {
//     switch (oper) {
//         case "+":
//             console.log(num1+num2)
//             break;
//         case "-":
//             console.log(num1-num2)
//             break;
//         case "*":
//             console.log(num1*num2)
//             break;
//         case "/":
//             console.log(num1/num2)
//             break;
//         default:
//             break;
//     }
// }


// mostrarNumuerosCallback(5, 3,"-", operacionMatematica);




// ejercicio filtrar Array






// function pagosDeDinero(callback) {

//     console.log(`iniciando pago de dinero...`)

//     let dinero = parseFloat(prompt("Dame el valor del dinero"))
     
//     let tiempoDeEspera = parseInt(prompt("Dame el tiempo que quieres en que te pague el dinero"))
//     tiempoDeEspera = tiempoDeEspera * 1000

//     setTimeout(() =>{
//        console.log(`pago dinero ${dinero} exitoso`)
//        callback(dinero);
//     },tiempoDeEspera)
   


    
// }


// function finalizoPago() {
//     console.log("gracias por haber prestado tu  dinero ")
// }


// pagosDeDinero(finalizoPago)

// ejercicio sin callback
// const productos = [
//   { nombre: "Laptop", precio: 999, categoria: "electrónica", enStock: true },
//   { nombre: "Camiseta", precio: 25, categoria: "ropa", enStock: false },
//   { nombre: "Smartphone", precio: 699, categoria: "electrónica", enStock: true }
// ];


// function filtrarProductos(productos){
   
//     const resultado = []
    
//     for (let i = 0; i < productos.length; i++) {

//         if (productos[i].precio > 50) {resultado.push(productos[i])} 
//         if (productos[i].enStock === true) {resultado.push(productos[i])}
//         if (productos.categoria[i] == "electrónica"){resultado.push(productos[i])} 

//     }
    
//     return resultado
// } 



// ejercicio con callback IA

// const productos = [
//   { nombre: "Laptop", precio: 999, categoria: "electrónica", enStock: true },
//   { nombre: "Camiseta", precio: 25, categoria: "ropa", enStock: false },
//   { nombre: "Smartphone", precio: 699, categoria: "electrónica", enStock: true }
// ];

// function filtrarProductos(productos, callback) {
//     const resultado = [];
    
//     for (let i = 0; i < productos.length; i++) {

//         if (callback(productos[i])) { 
//             resultado.push(productos[i]);
//         }
//     }
    
//     return resultado;
// }


// function filtroElectronicoEnStock(producto) {
//     return producto.categoria === "electrónica" && producto.enStock;
// }


// const productosFiltrados = filtrarProductos(productos, filtroElectronicoEnStock);
// console.log(productosFiltrados);



// 🏦 Ejercicio: Procesador de Transacciones Bancarias
// Implementa un sistema que procese transacciones aplicando diferentes validaciones y cálculos mediante callbacks.

// 📋 Tu tarea:
// Crea una función procesarTransacciones que:

// Reciba:

// Un array de transacciones (objetos con: id, monto, tipo ("depósito"/"retiro"), cuentaDestino)

// Un callback de validación (verifica si la transacción es válida)

// Un callback de cálculo (modifica el monto si es necesario)

// Devuelva:

// Un nuevo array con transacciones procesadas (validadas y calculadas)

// Callbacks a implementar (por separado):

// validarTransaccion(transaccion): Retorna false si:

// El monto es negativo

// Falta cuentaDestino en retiros

// El tipo no es válido

// calcularComision(transaccion):

// Aplica 1% de comisión a depósitos > $1000

// Aplica $5 fee fijo a retiros



// const transacciones = [
//   { id: 1, monto: 1500, tipo: "depósito", cuentaDestino: "12345" },
//   { id: 2, monto: 800, tipo: "retiro", cuentaDestino: "" },
//   { id: 3, monto: -200, tipo: "depósito", cuentaDestino: "67890" }
// ];


// function procesarTransacciones(transacciones, validar, calcular) {
//     let transaccionesProcesadas = []

//     for (let i = 0; i < transacciones.length; i++) {
        
//         if (validar(transacciones[i]) ) {
//            let  transacciones = calcular(transacciones[i])
//            transaccionesProcesadas.push(transacciones);
//         }
        
//     }
//     return transaccionesProcesadas
// }


// function validarTransaccion(transacciones) {
    
//     let a = transacciones.monto <= 0 ? console.log( `monto ${transacciones.monto} invalido`) : console.log("🫦")
//     if (transacciones.tipo === "retiro" && !transacciones.cuentaDestino) return false;
//     if (!["depósito", "retiro"].includes(transacciones.tipo)) return false;
//     return true;
// }


// function calcularComision(transacciones) {
//     let nuevaTransaccion = {...transacciones}; 
//     if (transacciones.tipo === "depósito" && transacciones.monto > 1000) {
//         nuevaTransaccion.monto *= 0.99; 
//     } else if (transacciones.tipo === "retiro") {
//         nuevaTransaccion.monto -= 5; 
//     }
//     return nuevaTransaccion;
// }


// const resultado = procesarTransacciones(
//   transacciones,
//   validarTransaccion,
//   calcularComision
// );



const productos = [
  { nombre: "Laptop", precio: 999, categoria: "electrónica", enStock: true },
  { nombre: "Camiseta", precio: 25, categoria: "ropa", enStock: false },
  { nombre: "Smartphone", precio: 699, categoria: "electrónica", enStock: true }
];



