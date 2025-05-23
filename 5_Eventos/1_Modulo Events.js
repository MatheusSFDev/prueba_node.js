/* 
API del Modulo Events
 -> https://nodejs.org/api/events.html
 -> https://www.w3schools.com/nodejs/nodejs_events.asp
*/

// Importación del Modulo Events
const EventEmitter = require("events");

// Creación de un Emisor de Eventos
const Emisor = new EventEmitter();

// Asignación del Evento "compra"
Emisor.on("compra", (total, numProductos) => {
    console.log("Se ha realizado un Compra!");
    console.log("Total Compra: " + total + " €");
    console.log("Nº Productos: " + numProductos);
});

// Llamada al Evento
Emisor.emit("compra", 152, 2);
