// Creación de una Promesa
const promesa = new Promise((resolve, reject) => {
    cumplida = true;

    setTimeout(() => {
        if (cumplida) {
            resolve("Promesa Cumplida");
        } else {
            reject("Promesa Rechazada :(");
        }
    }, 2000);
});

// Implementación de que hacer cuando se Cumple la Promesa
const promesaCumple = (valor) => {
    console.log(valor);
};

// Implementación de que hacer cuando se Rechaza la Promesa
const promesaRechaza = (razon) => {
    console.log(razon);
};

// Le pasas que hacer a la promesa, el 1º parametro es para cuando se resuelve
// y el 2º para cuando falla
promesa.then(promesaCumple, promesaRechaza);
