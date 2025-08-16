// URL base do mockable.io (troque pelo seu endpoint criado lá)
const BASE_URL = "http://demo0659334.mockable.io"; // Base da API

// Buscar e exibir produtos
async function listarProdutos() {
  try {
    const response = await fetch(`${BASE_URL}/produtos`); // GET /produtos
    const produtos = await response.json();

    produtos.forEach(p => {
      console.log(`Produto: ${p.nome} | Preço: R$ ${p.preco.toFixed(2)}`);
    });
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
}

// Adicionar novo produto
async function adicionarProduto(produto) {
  try {
    const response = await fetch(`${BASE_URL}/produtos`, {
      method: "POST", // Requisição de criação
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produto) // Envia o objeto como JSON
    });

    const result = await response.json();
    console.log(`Produto "${result.nome}" criado com sucesso! Status: ${result.status}`);
  } catch (error) {
    console.error("Erro ao adicionar produto:", error);
  }
}

// Execução
listarProdutos(); // Lista os produtos existentes
adicionarProduto({ id: 4, nome: "Headset", preco: 200.00 }); // Cria um novo produto
