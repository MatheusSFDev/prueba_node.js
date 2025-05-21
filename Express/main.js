const express = require("express");
const app = express();
const {infoCursos} = require("./datos/cursos.js");
const port = process.env.port || 3000;

const routerMate = require("./Routers/matematicas.js");
app.use("/api/cursos/matematicas", routerMate);

const routerPro = require("./Routers/programacion.js");
app.use("/api/cursos/programacion", routerPro);

app.get("/", (req, res) => {
    res.send("Mi Primer Servidor con Express.");
    console.log("Solicitud Respondida: / ");
});

app.get("/api/cursos", (req, res) => {
    res.send(JSON.stringify(infoCursos));
    console.log("Solicitud Respondida: /api/cursos ");
});

app.listen(port, () => {
    console.log("El servidor escucha en el puerto " + port + " ...");
});