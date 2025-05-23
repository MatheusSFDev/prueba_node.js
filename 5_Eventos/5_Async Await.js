function ordenar(producto) {
    return new Promise((resolve, reject) => {
        console.log("Ordenando " + producto + " ...");
        setTimeout(() => {
            if (producto == "taza") {
                resolve("Taza Ordenada");
            } else {
                reject("Producto no Disponible");
            }
        }, 2000);
    });
}

function procesar(respuesta) {
    return new Promise((resolve, reject) => {
        console.log("Procesando Respuesta...");
        console.log("La respuesta fue: " + respuesta);
        setTimeout(() => {
            resolve("Gracias por tu compra.");
        }, 4000);
    });
}

/*
ordenar("taza")
    .then(respuesta => {
        console.log("Repuesta Recibida");
        console.log(respuesta);
        return procesar(respuesta);
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada);
    })
    .catch(error => {
        console.log(error);
    });
*/

async function realizarPedido(producto) {
    try {
        const respuesta = await ordenar(producto);
        console.log("Respuesta Recebida");
        const respuestaP = await procesar(respuesta);
        console.log(respuestaP);
    } catch (error) {
        console.log(error);
    }
}

realizarPedido("taza");