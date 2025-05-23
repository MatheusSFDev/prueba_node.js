// Importación del Modulo http
const HTTP = require("http");

// Importación de la info de los Cursos
const INFO = require("./2_Cursos.js");

// Definición del Puerto para el Servidor
const PORT = 3000;

// Se crea el servidor
const server = HTTP.createServer((req, res) => {
    switch (req.method) { // Se verifica el metodo del pedido
        case "GET" : // Se maneja una petición GET
            return solicitudGet(req, res); 
        case "POST" : // Se maneja una petición POST
            return solicitudPost(req, res); 
        default : // Se maneja una petición no soportada
            res.statusCode = 501; // Cambia el codigo de estado a 501 (Metodo no Implementado)
            res.end("NO puede ser manejado por el servidor"); 
    }
});

// Realiza las acciones en caso de una peticion GET
function solicitudGet(req, res) {
    const PATH = req.url; // Se saca el camino de la url

    // Dependiendo de cual camino se solicito devuelve una respuesta para cada caso
    if (PATH === "/") {
        return res.end("Bienvenido a mi primer server con Node.js");
    } else if (PATH === "/cursos") {
        return res.end(JSON.stringify(INFO.infoCursos));
    } else if (PATH === "/cursos/programacion") {
        return res.end(JSON.stringify(INFO.infoCursos.programacion));
    } else {
        res.statusCode = 404; // No Existente
        return res.end("Recurso no Existe");
    }
}

// Realiza las acciones en caso de una peticion POST
function solicitudPost(req, res) {
    const PATH = req.url;
    
    if (PATH === "/cursos/programacion") {
        return res.end("Solicitud Post Recebida!");
    }
}

// Se inicia el Servidor en el puerto especificado
server.listen(PORT, () => {
    console.log("El server esta escuchando...");
});
