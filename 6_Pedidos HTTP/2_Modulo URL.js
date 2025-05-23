/*
API del Modulo URL
 -> https://nodejs.org/api/url.html
 -> https://www.w3schools.com/nodejs/nodejs_url.asp
*/

// Creas una nueva instancia de una URL
const URL = new URL("https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1");

// Y puedes acceder a ciertas partes de la URL atraves de los metodos
console.log(URL.hostname);
console.log(URL.pathname);
console.log(URL.searchParams);
console.log(typeof URL.searchParams);
console.log(URL.searchParams.get("ordenar"));
console.log(URL.searchParams.get("nivel"));