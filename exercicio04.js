
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};


function calcularPercentuais(faturamento) {
    
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

    console.log(`Valor Total Mensal: R$ ${total.toFixed(2)}`);

    
    for (const estado in faturamento) {
        const valor = faturamento[estado];
        const percentual = (valor / total) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }
}


calcularPercentuais(faturamentoPorEstado);
