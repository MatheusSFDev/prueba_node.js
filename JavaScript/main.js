//Importación del modulo
const saludo = require("./saludos.js");
console.log(saludo.saludar("Matheus probando Node.js"));
console.log(saludo.saludarMundo());

//Desestructuración del modulo
const {saludar, saludarMundo} = require("./saludos.js");
console.log(saludar("Matheus probando Node.js"));
console.log(saludarMundo());
