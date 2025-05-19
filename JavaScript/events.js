const EventEmitter = require("events");
const emisor = new EventEmitter();

emisor.on("compra", (total, numProductos) => {
    console.log("Se ha realizado un Compra!");
    console.log("Total Compra: " + total + " €");
    console.log("Nº Productos: " + numProductos);
});

emisor.emit("compra", 152, 2);