const estatusPedido = () => {
    return Math.random() < 0.8;
};

const miPedido = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve("Pedido Exitoso!");
        } else {
            reject("Ocurrio un error en tu Pedido");
        }
    }, 2000);
});

const miPedidoResolve = (mensaje) => {
    console.log(mensaje);
};

const miPedidoReject = (log) => {
    console.log(log);
};

miPedido.then(miPedidoResolve, miPedidoReject);