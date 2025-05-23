// Importar un JSON a JavaScript
const CURSO = require("./curso.json");
console.log("- Curso -");
console.log(CURSO);
console.log("- Titulo -");
console.log("-> " + CURSO.titulo);
console.log("- Likes -");
console.log("-> " + CURSO.numLikes);
console.log("---------------------------------------------");

// Utilizar JSON en JS
let obj = {
    "titulo" : "Aprende Node.js",
    "numVistas" : 2,
    "numLikes" : 2,
    "temas" : [
        "JavaScript",
        "Node.js"
    ],
    "esPublico" : true
}

//Pasar de Objeto a String en formato JSON
let objString = JSON.stringify(obj);
console.log("- JSON como String -");
console.log(objString);
console.log();

//Pasar de String a Objeto en formato JSON
let objObject = JSON.parse(objString);
console.log("- JSON como Objeto -");
console.log(objObject);
