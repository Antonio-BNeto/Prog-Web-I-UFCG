const vendas = [
    { produto: "Notebook", preco: 4500, quantidade: 3, vendedor: "Sara" },
    { produto: "Smarthphone", preco: 2300, quantidade: 5, vendedor: "Matheus" },
    { produto: "Monitor", preco: 1200, quantidade: 2, vendedor: "Gabriel" },
    { produto: "Teclado Mecânico", preco: 350, quantidade: 4, vendedor: "Sara" },
    { produto: "Notebook", preco: 4500, quantidade: 6, vendedor: "Gabriel" },
    { produto: "Monitor", preco: 1200, quantidade: 3, vendedor: "Matheus" }
];

const gerarRelatorio = (vendas) => {
    
    console.log("Relátorio de Vendas:")

    let totalGeral = 0

    vendas.forEach(element => {
        console.log(saidaRelatorioVenda(element))
        totalGeral += totalValorVenda(element)
    });

    console.log(`\nTotal geral: ${formatarMoeda(totalGeral)}`)
    console.log(`Total de comissão (5%): `)

    vendas.forEach(element => {
        console.log(saidaRelatorioVendedor(element))
    })

}

const saidaRelatorioVenda = ({ produto, preco, quantidade, vendedor }) => {

    const total = preco * quantidade;

    return `\n- Produto: ${produto}\n  Quantidade: ${quantidade}\n  Preço Unitário: ${formatarMoeda(preco)}\n  Total: ${formatarMoeda(total)}\n  Vendedor: ${vendedor}`
}

const saidaRelatorioVendedor = ({ vendedor, preco, quantidade }) => {

    const total = preco * quantidade;

    return `${vendedor}: ${formatarMoeda(calculaComissaoVendedor(total))}`
}

const calculaComissaoVendedor = (totalVendido, totalcomissao=0.05) => {
    return `${totalVendido*totalcomissao}`;
}

const totalValorVenda = ({preco, quantidade}) => {
    return preco*quantidade;
}

const formatarMoeda = (valor) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);

gerarRelatorio(vendas)