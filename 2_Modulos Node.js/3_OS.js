/*
API del Modulo OS
 -> https://nodejs.org/api/os.html
 -> https://www.w3schools.com/nodejs/ref_os.asp
*/

//Importación del Modulo OS de Node.js
const OS = require("os");

console.log("- Sistema -");
console.log("-> " + OS.type() + "\n");

console.log("- Directorio Home -");
console.log("-> " + OS.homedir() + "\n");

console.log("- Tiempo Activo -");
console.log("-> " + OS.uptime() + "\n");

console.log("- Info del User -");
console.log(OS.userInfo());
