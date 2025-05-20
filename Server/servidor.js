const http = require("http");
const info = require("./cursos.js");
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.method) {
        case "GET" :
            return solicitudGet(req, res);
        case "POST" :
            return solicitudPost(req, res);
        default :
            res.statusCode = 501;
            res.end("NO puede ser manejado por el servidor");
    }
});

function solicitudGet(req, res) {
    const path = req.url;

    if (path === "/") {
        return res.end("Bienvenido a mi primer server con Node.js");
    } else if (path === "/cursos") {
        return res.end(JSON.stringify(info.infoCursos));
    } else if (path === "/cursos/programacion") {
        return res.end(JSON.stringify(info.infoCursos.programacion));
    } else {
        res.statusCode = 404;
        return res.end("Recurso no Existe");
    }
}

function solicitudPost(req, res) {
    const path = req.url;
    
    if (path === "/cursos/programacion") {
        return res.end("Solicitud Post Recebida!");
    }
}

server.listen(port, () => {
    console.log("El server esta escuchando...");
});