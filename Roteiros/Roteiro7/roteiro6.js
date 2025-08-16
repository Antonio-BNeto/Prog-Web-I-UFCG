
// ============ Questão 4 =============

const recebeNListas = (...lista) => {
   
    return [...lista].flat().sort((a, b) => a - b);
}

console.log(recebeNListas([1, 3], [2, 4, 6], [5, 7, 8]))