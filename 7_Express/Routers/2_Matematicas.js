const express = require("express");
const router = express.Router();

const {matematicas} = require("../Datos/cursos.js").infoCursos;

router.get("", (req, res) => {
    res.send(JSON.stringify(matematicas));
    console.log("Solicitud Respondida: /api/cursos/matematicas ");
});

router.get("/:tema", (req, res) => {
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema === tema);

    if (resultados.length === 0) {
        return res.status(404).send("No se Encuentra");
    }

    res.send(JSON.stringify(resultados));
    console.log("Solicitud Respondida: /api/cursos/matematicas/:tema ");
});

module.exports = router;