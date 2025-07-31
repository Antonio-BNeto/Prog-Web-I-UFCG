let clientesJSON = `[
    {"nome": "Lucas", "idade": 30, "email": "lucas@email.com"},
    {"nome": "Mariana", "idade": 25, "email": "mariana@email.com"}
]`;

const adicionarCliente = (json, nome, idade, email) => {
    const clientes = JSON.parse(json);
    clientes.push({ nome, idade, email });
    return JSON.stringify(clientes);
};

const buscarCliente = (json, nome) => {
    const clientes = JSON.parse(json);
    const cliente = clientes.find(c => c.nome === nome);
    let resultado = ``;
    if(cliente){
        resultado = `Cliente encontrado:\n`;
        resultado += `Nome: ${cliente.nome}\nIdade: ${cliente.idade}\nEmail: ${cliente.email}`; 
    }else {
        resultado = `Cliente não foi encontrado:`;
    }

    return resultado;
};

clientesJSON = adicionarCliente(clientesJSON, "Roberto", 40, "roberto@email.com");
console.log(buscarCliente(clientesJSON, "Mariana"));