const funcionarios = [
    { nome: "Ana", cargo: "Desenvolvedora", salario: 7000 },
    { nome: "Carlos", cargo: "Gerente", salario: 12000 },
    { nome: "Beatriz", cargo: "Analista", salario: 5000 }
];

const gerarRelatorio = (array) => {
    const cabecalho = `Relatório de Funcionários\n------------------------------------\n`;

    const relatorioFuncionarios = array.map(({nome, cargo, salario}) => {
        return `Nome: ${nome} - Cargo: ${cargo} - Salário: ${formatarMoeda(salario)}`;
    }).join('\n');
    
    const totalFuncionarios = array.length
    const somaSalariosFuncionarios = array.reduce((acc, { salario }) => acc+salario, 0);
    const mediaSalarial = somaSalariosFuncionarios / totalFuncionarios;

    const rodape = `\n------------------------------------\nTotal de funcionários: ${array.length}\nSalário médio: ${formatarMoeda(mediaSalarial)}`;

    return `${cabecalho}${relatorioFuncionarios}${rodape}`;

}

const formatarMoeda = (valor) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);

console.log(gerarRelatorio(funcionarios))