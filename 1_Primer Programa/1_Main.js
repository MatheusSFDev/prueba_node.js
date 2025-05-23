//Importación del modulo
const saludo = require("./2_Saludos.js");
console.log(saludo.saludar("Matheus probando Node.js"));
console.log(saludo.saludarMundo());

//Desestructuración del modulo
const {saludar, saludarMundo} = require("./2_Saludos.js");
console.log(saludar("Matheus probando Node.js"));
console.log(saludarMundo());
