// ============ Questão 1 ============

const request = (content) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Content resolve: ${content}`);
        }, 1000)
    })
}

request("HTTPS-GET").then((mensage) => console.log(mensage))
