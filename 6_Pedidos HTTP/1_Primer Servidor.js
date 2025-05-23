/*
API del Modulo http
 -> https://nodejs.org/api/http.html
 -> https://www.w3schools.com/nodejs/nodejs_http.asp
*/

// Importación del Modulo http
const HTTP = require("http");

// Definición del Puerto que el Servidor va a escuchar
const PORT = 3000; 

const servidor = HTTP.createServer((req, res) => {
    console.log("- Request -");
    console.log(req.url); // Para sacar la URL del pedido
    console.log(req.method); // Para sacer el metodo http del pedido

    console.log("- Response -");
    console.log(res.statusCode); // Para ver el codigo de estado de la respuesta
    res.setHeader("content-type", "application/json"); // Cambia opciones del headers
    console.log(res.getHeaders()); // Para ver los headers de la respuesta

    res.end("Hola Mundo!"); // Finaliza el pedido enviando el mensaje
});

// Asi dices que el servidor escucha las peticiones en el puerto especificado
servidor.listen(PORT, () => {
    console.log("EL servidor esta escuchando...");
});