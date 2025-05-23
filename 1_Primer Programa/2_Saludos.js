function saludar(nombre) {
    return 'Hola, ' + nombre;
}
// Exportación Individual de un Funcion
// module.exports.saludar = saludar;

function saludarMundo() {
    return "Hola Mundo!";
}
// Exportación Individual de un Funcion
// module.exports.saludarMundo = saludarMundo; 

//Exportación de las funciones de este modulo
module.exports = {
    saludar: saludar,
    saludarMundo: saludarMundo
};
