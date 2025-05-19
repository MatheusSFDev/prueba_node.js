//Importar JSON a JavaScript
/*
const objString = require("./objString.json");
console.log(objString);
console.log(objString.titulo);
*/

//JSON en JS
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
console.log(objString);

//Pasar de String a Objeto en formato JSON
let objObject = JSON.parse(objString);
console.log(objObject);