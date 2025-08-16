
// ============ Questão 4 =============

const recebeNListas = (...listas) => {
  
  const combinado = listas.reduce((acc, arr) => [...acc, ...arr], []);
  return combinado.sort((a, b) => a - b);
};

console.log(recebeNListas([1, 3], [2, 4, 6], [5, 7, 8]));
