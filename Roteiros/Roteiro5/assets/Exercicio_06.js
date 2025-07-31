const crypto = require('crypto');

const criptografarMensagem = (texto, chaveSecreta) => {
    const algorithm = 'aes-256-cbc';
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(chaveSecreta), iv);
    let crypted = cipher.update(texto.toString(), 'utf8', 'hex');
    crypted += cipher.final('hex');
    return `${iv.toString('hex')}:${crypted}`;
};

const descriptografar = (textoCriptografado, chaveSecreta) => {
    const algorithm = 'aes-256-cbc';
    const [ivHex, content] = textoCriptografado.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(chaveSecreta), iv);
    let decrypted = decipher.update(content, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};
 
const processarNumeros = (numeros, callback) => {
    return numeros.filter(num => num % 2 === 0).map(num => callback(num))
}

const chaveSecreta = crypto.randomBytes(32);

const numeros = [1, 2, 3, 4, 5, 6]

const resultado = processarNumeros(numeros, num => criptografarMensagem(num, chaveSecreta));

console.log('Números criptografados:',resultado);

console.log(`Descriptografando primeiro par da lista numeros -> 2:\n ${descriptografar(resultado[0], chaveSecreta)}`)
console.log(`Descriptografando segundo par da lista numeros -> 4:\n ${descriptografar(resultado[1], chaveSecreta)}`)
console.log(`Descriptografando terceiro par da lista numeors -> 6:\n ${descriptografar(resultado[2], chaveSecreta)}`)
