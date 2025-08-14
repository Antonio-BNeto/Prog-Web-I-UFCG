// ============ Questão 1 ============

const request = (content) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Content resolve: ${content}`);
        }, 1000)
    })
}

const makingRequest = () => {
    request("HTTPS-GET").then((mensage) => console.log(mensage))
}

// ============ Questão 2 =============

const nParamFunction = (...args) => {

    return args.some((currentItem, index) => {
        
        const duplicateIndex = args.findIndex((otherItem, otherIndex) => {
            return otherItem === currentItem && otherIndex != index
        });

        return duplicateIndex !== -1
    });
};

console.log(nParamFunction(1, 2, 3, 4, "2", 5))

// ============ Questão 3 =============

const lista = [1, 2, 3]
const lista2 = [...lista]

console.log(lista2)

// obj a = {nome: "TESTE", cpf: "123"}
// obj b = {nome: "Gabriel", nomePai = "Qualquer coisa"}

// obj c = {nome: "Gabriel", cpf: "123", nomePai: "Qualquer coisa"}