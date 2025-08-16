// Versão async/await
const colocarTodasLetrasEmMaiusculoEm500ms = async (texto) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof texto !== "string") {
                reject("Parâmetro inválido, esperado String.");
            } else {
                resolve(texto.toUpperCase());
            }
        }, 500);
    });
};

const inverteTodasLetras = async (texto) => {
    return texto.split("").reverse().join("");
};


(async () => {
    try {
        const maiusculo = await colocarTodasLetrasEmMaiusculoEm500ms("javascript");
        const invertido = await inverteTodasLetras(maiusculo);
        console.log(invertido);
    } catch (erro) {
        console.error(erro);
    }
})();
