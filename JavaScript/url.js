const url = new URL("https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1");

console.log(url.hostname);
console.log(url.pathname);
console.log(url.searchParams);
console.log(typeof url.searchParams);
console.log(url.searchParams.get("ordenar"));
console.log(url.searchParams.get("nivel"));