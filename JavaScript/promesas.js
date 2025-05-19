const cumplida = true;

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (cumplida) {
            resolve("Promesa Cumplida");
        } else {
            reject("Promesa Rechazada :(");
        }
    }, 2000);
});

const promesaCumple = (valor) => {
    console.log(valor);
};

const promesaRechaza = (razon) => {
    console.log(razon);
};

promesa.then(promesaCumple, promesaRechaza);