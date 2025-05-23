/*
API del Modulo Timers
 -> https://nodejs.org/api/timers.html
 -> https://www.w3schools.com/nodejs/ref_timers.asp
*/

function mostrarTema(tema) {
    console.log("Estoy aprendiendo " + tema);
}

function sumar(num1, num2) {
    console.log(num1 + num2);
}

/*
La función setTimeout hace que se espere un numero x de milisegundos para
ejecutar una otra función. Lista de Parametros ->
 - 1º: funcion a ser ejecutada
 - 2º: tiempo a esperar (en milisegundos)
 - 3º al Xº: parametros de la funcion a ejecutar
*/
setTimeout(mostrarTema, 3000, "Node.js");
setTimeout(sumar, 1000, 5, 15);

console.log("Antes del setImmediate");
/* 
La función setImmediate ejecuta la funcion definida despues del codigo sincrono
y los parametros funcionan igual que el setTimeout pero sin el tiempo de espera
*/
setImmediate(mostrarTema, "JavaScript");
console.log("Despues del setImmediate");

/*
La función setInterval ejecuta la funcion definida cada x milisegundos de forma
infinita, los parametros funcionan igual al setTimeout pero en lugar de esperar
esos milisegundos para ejecutarse se ejecuta infinitamente en un intervalo de 
esos x milisegundos.
*/
setInterval(mostrarTema, 500, "Infinito");
