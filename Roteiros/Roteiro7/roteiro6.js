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

const joinObjs = (obj1,obj2) => {
    return {...obj1, ...obj2}
}

console.log(joinObjs({nome: "TESTE", cpf: "123"}, {nome: "Gabriel", nomePai : "Qualquer coisa"}))

// ============ Questão 4 =============

