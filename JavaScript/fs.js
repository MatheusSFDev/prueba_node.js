const fs = require("fs");

//Asincronos
fs.readFile("../index.html", "utf-8", (err, contenido) => {
    if (err) {
        console.log(err);
    } else {
        console.log(contenido);
    }
});

fs.rename("../index.html", "../nuevo_index.html", (err) => {
    if (err) {
        throw err;
    } 

    console.log("Nombre Cambiado");
}); 

fs.appendFile("../index.html", "<p>Hola Mundo</p>", (err) => {
    if (err) {
        throw err;
    }

    console.log("Añadido");
});

fs.writeFile("../index2.html", "Hola Mundo", (err) => {
    if (err) {
        throw err;
    }

    console.log("Reemplazado");
});

fs.unlink("../index2.html", (err) => {
    if (err) {
        throw err;
    }

    console.log("Eliminado");
});

//Sincronos
fs.readFileSync("../index.html", "utf-8", (err, contenido) => {
    if (err) {
        console.log(err);
    } else {
        console.log(contenido);
    }
});

fs.renameSync("../index.html", "../nuevo_index.html", (err) => {
    if (err) {
        throw err;
    } 

    console.log("Nombre Cambiado");
}); 

fs.appendFileSync("../index.html", "<p>Hola Mundo</p>", (err) => {
    if (err) {
        throw err;
    }

    console.log("Añadido");
});

fs.writeFileSync("../index2.html", "Hola Mundo", (err) => {
    if (err) {
        throw err;
    }

    console.log("Reemplazado");
});

fs.unlinkSync("../index2.html", (err) => {
    if (err) {
        throw err;
    }

    console.log("Eliminado");
});