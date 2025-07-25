const exportacao = {
    paisDestino: "Estados Unidos",
    produto: {
        nome: "aço",
        valorEmDolares: 100000,
        taxaImposta: 0.25
    },
    empresa: "Siderúrgica Brasil Ltda"
};

const valorFinal = ({produto:{nome, valorEmDolares, taxaImposta}, empresa}) => {
    return `Produto: ${nome}\nEmpresa: ${empresa}\nValor original: US$ ${valorEmDolares}\nTaxa: ${taxaImposta*100}%\nValor com tarifa: US$ ${valorEmDolares + (valorEmDolares*taxaImposta)}`
}

console.log(valorFinal(exportacao))