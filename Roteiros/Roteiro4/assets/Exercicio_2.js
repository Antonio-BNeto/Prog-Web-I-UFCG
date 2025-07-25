const clientes = [
    { nome: "Davi", email: "davi@email.com", plano: "Premium", ativo: true },
    { nome: "Mariana", email: "mariana@email.com", plano: "Básico", ativo: false },
    { nome: "Gabriel", email: "gabriel@email.com", plano: "Padrão", ativo: true },
    { nome: "Ana", email: "ana@email.com", plano: "Premium", ativo: false },
    { nome: "Huandrey", email: "huandrey@email.com", plano: "Padrão", ativo: true }
];

const gerarEmail = (cliente) => {
    saida = ``
    if (cliente.ativo) {
        saida = `Para: ${cliente.email}\nOlá, ${cliente.nome}!\n\nObrigado por ser um assinante do nosso plano ${cliente.plano}! Estamos felizes em tê-lo conosco.\n\nCaso precise de suporte, estamos à disposição.\n\nAtenciosamente,\nEquipe StreamingWeb.`;
    } else {
        saida = `Para: ${cliente.email}\nOlá, ${cliente.nome}!\n\nNotamos que sua assinatura do plano ${cliente.plano} está inativa. Que tal voltar e aproveitar nossos conteúdos exclusivos?\n\nReative agora e continue sua experiência conosco!\n\nAtenciosamente,\nEquipe StreamingWeb.`;
    }

    return saida
};

clientes.forEach(cliente => {
    console.log(gerarEmail(cliente))
    console.log("\n----------------------\n")
})