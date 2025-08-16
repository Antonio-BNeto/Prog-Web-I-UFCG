// ============ Questão 3 =============

const joinObjs = (obj1,obj2) => {
    return {...obj1, ...obj2}
}

console.log(joinObjs({nome: "TESTE", cpf: "123"}, {nome: "Gabriel", nomePai : "Qualquer coisa"}))
