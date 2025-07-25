const somar = (array) => array.reduce((acc, element) => acc + element, 0);

const somaParesConsecutivos = (x, callback) => {

    const primeiroPar = x % 2 === 0 ? x : x + 1

    const pares = Array.from({ length: 5 }, (_, i) => primeiroPar + i * 2)

    const resultado = callback(pares)

    console.log(`Entrada: ${x} => Saída: ${resultado}`)

}

somaParesConsecutivos(4, somar)
somaParesConsecutivos(11, somar)