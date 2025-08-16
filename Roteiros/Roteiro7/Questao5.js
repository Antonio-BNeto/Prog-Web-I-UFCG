// ============ Questão 5 =============

const colocarTodasLetrasEmMaiusculoEm500ms = (texto) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof texto !== "string") {
                reject("Parâmetro inválido, esperado String.");
            } else {
                resolve(texto.toUpperCase());
            }
        }, 500);
    });

const inverteTodasLetras = (texto) =>
    Promise.resolve(texto.split("").reverse().join(""));

// Uso encadeado
colocarTodasLetrasEmMaiusculoEm500ms("javascript")
    .then(inverteTodasLetras)
    .then(console.log)
    .catch(console.error);
