// Importación del Express
const express = require("express");
// Creación del Router
const ROUTER = express.Router();
// Definición de que el Router utilize el formato JSON
ROUTER.use(express.json());

// Importación de la info de Programación
const {Programacion} = require("../2_InfoCursos").infoCursos;

ROUTER.get("", (req, res) => {
    res.json(Programacion);
    console.log("Solicitud Respondida: /api/cursos/programacion ");
});

ROUTER.get("/:lenguaje", (req, res) => {
    lenguaje = req.params.lenguaje; // Recoje cual es el lenguaje solicitado en la petición
    resultados = Programacion.filter(curso => curso.lenguaje === lenguaje); // Hace un filtrado según el lenguaje

    if (resultados.length === 0) { // Si no se encuantra ningun curso de ese lenguaje 
        return res.status(404).end(); // se cierra la petición con codigo 404
    }

    if (req.query.ordenar === "vistas") { // Si se pide de forma ordenada
        return res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)));
    }

    res.send(JSON.stringify(resultados));
    console.log("Solicitud Respondida: /api/cursos/programacion/:lenguaje ");
});

ROUTER.get("/:lenguaje/:nivel", (req, res) => {
    lenguaje = req.params.lenguaje;
    nivel = req.params.nivel;

    resultados = Programacion.filter(curso => 
        curso.lenguaje === lenguaje &&
        curso.nivel === nivel);

    if (resultados.length === 0) {
        return res.status(404).send("No se Encuentra");
    }

    res.send(JSON.stringify(resultados));
    console.log("Solicitud Respondida: /api/cursos/programacion/:lenguaje/:nivel ");
});

ROUTER.post("", (req, res) => {
    console.log("Solicitud POST Recebida");

    let cursoNuevo = req.body;
    Programacion.push(cursoNuevo);

    res.send(JSON.stringify(Programacion));
    console.log("Solicitud POST Realizada");
});

ROUTER.put("/:id", (req, res) => {
    cursoActualizado = req.body;
    id = req.params.id;

    indice = Programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        Programacion[indice] = cursoActualizado;
    }

    res.send(JSON.stringify(Programacion));
    console.log("Solicitud PUT Realizada");
});

ROUTER.patch("/:id", (req, res) => {
    info = req.body;
    id = req.params.id;

    indice = Programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        const cursoA = Programacion[indice];
        Object.assign(cursoA, info);
    }

    res.send(JSON.stringify(Programacion));
    console.log("Solicitud PATCH Realizada");
});

ROUTER.delete("/:id", (req, res) => {
    id = req.params.id;
    indice = Programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        Programacion.splice(indice, 1);
    }

    res.send(JSON.stringify(Programacion));
    console.log("Solicitud DELETE Realizada");
});

// Exportación del router
module.exports = ROUTER;