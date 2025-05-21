const express = require("express");
const {programacion} = require("../datos/cursos.js").infoCursos;
const router = express.Router();
router.use(express.json());

router.get("", (req, res) => {
    res.json(programacion);
    console.log("Solicitud Respondida: /api/cursos/programacion ");
});

router.get("/:lenguaje", (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

    if (resultados.length === 0) {
        return res.status(404).end();
    }

    if (req.query.ordenar === "vistas") {
        return res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)));
    }

    res.send(JSON.stringify(resultados));
    console.log("Solicitud Respondida: /api/cursos/programacion/:lenguaje ");
});

router.get("/:lenguaje/:nivel", (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = programacion.filter(curso => 
        curso.lenguaje === lenguaje &&
        curso.nivel === nivel);

    if (resultados.length === 0) {
        return res.status(404).send("No se Encuentra");
    }

    res.send(JSON.stringify(resultados));
    console.log("Solicitud Respondida: /api/cursos/programacion/:lenguaje/:nivel ");
});

router.post("", (req, res) => {
    console.log("Solicitud POST Recebida");
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
    console.log("Solicitud POST Realizada");
});

router.put("/:id", (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        programacion[indice] = cursoActualizado;
    }

    res.send(JSON.stringify(programacion));
});

router.patch("/:id", (req, res) => {
    const info = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        const cursoA = programacion[indice];
        Object.assign(cursoA, info);
    }

    res.send(JSON.stringify(programacion));
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        programacion.splice(indice, 1);
    }

    res.send(JSON.stringify(programacion));
});

module.exports = router;