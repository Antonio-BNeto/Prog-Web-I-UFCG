const usuarios = [
    { nome: "Cleciana", idade: "25", ativo: "true", saldo: "1234.56" },
    { nome: "Gustavo", idade: 30, ativo: true, saldo: 980 },
    { nome: "Rayane", idade: null, ativo: "false", saldo: "1500.90" },
    { nome: "Igor", idade: "NaN", ativo: 1, saldo: undefined },
    { nome: "Samuel", idade: "22 anos", ativo: false, saldo: "0" }
];

const normalizarUsuario = (usuario) => {

    return {
        nome: usuario.nome,
        idade: normalizaIdade(usuario),
        ativo: normalizaAtivo(usuario),
        saldo: normalizaSaldo(usuario)
    }

}

const normalizaIdade = ({idade}) => {
    if(typeof idade === "number" && !isNaN(idade)) {
        return Math.floor(idade);
    }else if (typeof idade === "string"){
        
        if(idade.split('').every(char => char >= '0' && char <= '9')) {
            return parseInt(idade)
        } 
    }
    return null
}

const normalizaAtivo = ({ativo}) => {

    return (ativo === true) 
            ? true
            : (typeof ativo === 'string' && ativo.toLowerCase() == "true") 
            ? true
            : (typeof ativo === 'number' && ativo === 1) 
            ? true : false;
}
const normalizaSaldo = ({ saldo }) => {

    if (isNaN(parseFloat(saldo))) return parseFloat(0).toFixed(2);
    return parseFloat(saldo).toFixed(2);
};

const processaUsuario = (lista) => {
    const usuariosNormalizados = lista.map(normalizarUsuario)
    console.log(usuariosNormalizados)
}

// A saida do saldo ficou como string pq o js n diferencia 0 de 0.00 
// então quando tento retornar 0.00 ele retorna sempre 0 
processaUsuario(usuarios)