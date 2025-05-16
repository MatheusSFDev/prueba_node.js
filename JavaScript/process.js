//console.log(process);
//console.log(process.env);
//onsole.log(process.argv);
//console.log(process.memoryUsage());

for (let i = 2 ; i < process.argv.length ; i++) {
    console.log(process.argv[i]);
}
