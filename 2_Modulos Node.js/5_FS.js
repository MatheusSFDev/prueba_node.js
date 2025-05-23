/*
API del Modulo FS
 -> https://nodejs.org/api/fs.html
 -> https://www.w3schools.com/nodejs/nodejs_filesystem.asp
*/

// Importación del Modulo
const FS = require("fs");

// Funciones Asincronas
FS.readFile("index.html", "utf-8", (err, contenido) => {
    if (err) {
        console.error(err);
    } else {
        console.log(contenido);
    }
});

FS.rename("index.html", "nuevo_index.html", (err) => {
    if (err) {
        throw err;
    } 

    console.log("Nombre Cambiado");
}); 

FS.appendFile("index.html", "<p>Hola Mundo</p>", (err) => {
    if (err) {
        throw err;
    }

    console.log("Añadido");
});

FS.writeFile("index2.html", "Hola Mundo", (err) => {
    if (err) {
        throw err;
    }

    console.log("Reemplazado");
});

FS.unlink("index2.html", (err) => {
    if (err) {
        throw err;
    }

    console.log("Eliminado");
});

// Funciones Sincronas
FS.readFileSync("index.html", "utf-8", (err, contenido) => {
    if (err) {
        console.log(err);
    } else {
        console.log(contenido);
    }
});

FS.renameSync("index.html", "nuevo_index.html", (err) => {
    if (err) {
        throw err;
    } 

    console.log("Nombre Cambiado");
}); 

FS.appendFileSync("index.html", "<p>Hola Mundo</p>", (err) => {
    if (err) {
        throw err;
    }

    console.log("Añadido");
});

FS.writeFileSync("index2.html", "Hola Mundo", (err) => {
    if (err) {
        throw err;
    }

    console.log("Reemplazado");
});

FS.unlinkSync("index2.html", (err) => {
    if (err) {
        throw err;
    }

    console.log("Eliminado");
});
