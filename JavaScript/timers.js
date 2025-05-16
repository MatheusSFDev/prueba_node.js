function mostrarTema(tema) {
    console.log("Estoy aprendiendo " + tema);
}
setTimeout(mostrarTema, 3000, "Node.js");

function sumar(num1, num2) {
    console.log(num1 + num2);
}
setTimeout(sumar, 1000, 5, 15);

console.log("Antes del setImmediate");
setImmediate(mostrarTema, "JavaScript");
console.log("Despues del setImmediate");

setInterval(mostrarTema, 500, "Infinito");