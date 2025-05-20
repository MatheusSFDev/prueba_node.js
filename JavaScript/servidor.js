const http = require("http");
const port = 3000;

const servidor = http.createServer((req, res) => {
    console.log("- Request -");
    console.log(req.url);
    console.log(req.method);

    console.log("- Response -");
    console.log(res.statusCode);
    res.setHeader("content-type", "application/json");
    console.log(res.getHeaders());

    res.end("Hola Mundo!");
});

servidor.listen(port, () => {
    console.log("EL servidor esta escuchando...");
});