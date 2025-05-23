// Importación de Express
const express = require("express");
// Creación de la app
const APP = express();

// Importación de los datos con desestructuración 
const {infoCursos} = require("./2_InfoCursos.js");

// Definición del puerto para el Servidor
const PORT = 3000;

// Importación del router para manejar los cursos de Programación
const routerPro = require("./Routers/1_Programacion.js");
// Defines que la app use el router ya defenido
APP.use("/api/cursos/programacion", routerPro);

// Importación del router para manejar los cursos de Matematicas
const routerMate = require("./Routers/2_Matematicas.js");
// Defines que la app use el router ya defenido
APP.use("/api/cursos/matematicas", routerMate);

// Para manejar peticiones generales
APP.get("/", (req, res) => {
    res.send("Mi Primer Servidor con Express.");
    console.log("Solicitud Respondida: / ");
});
APP.get("/api/cursos", (req, res) => {
    res.send(JSON.stringify(infoCursos));
    console.log("Solicitud Respondida: /api/cursos ");
});

// Para la app empezar a escuchar peticiones en el puerto especificado
APP.listen(PORT, () => {
    console.log("El servidor escucha en el puerto " + PORT + " ...");
});
