function saludar(nombre) {
    return 'Hola, ' + nombre;
}
// module.exports.saludar = saludar;

function saludarMundo() {
    return "Hola Mundo!";
}
// module.exports.saludarMundo = saludarMundo;

//Exportación de las funciones de este modulo
module.exports = {
    saludar: saludar,
    saludarMundo: saludarMundo
};
