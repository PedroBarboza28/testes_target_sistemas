function inverterStringLoop(str) {
    let resultado = ''; 
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i]; 
    }
    return resultado;
}

// Exemplo de uso
const stringOriginal = 'Ola, Mundo!';
const stringInvertida = inverterStringLoop(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
