/*
API del Modulo Process
 -> https://nodejs.org/api/process.html
*/

//console.log(process);
//console.log(process.env);
//console.log(process.argv);
//console.log(process.memoryUsage());

// Para Probar escribir: node '.\Modulos Node.js\2_Process.js' 5 10
for (let i = 2 ; i < process.argv.length ; i++) {
    console.log(process.argv[i]);
}
