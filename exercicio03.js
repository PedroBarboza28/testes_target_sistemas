const faturamento = [
    { dia: 1, diaSemana: 'seg', faturamento: 200 },
    { dia: 2, diaSemana: 'ter', faturamento: 0 },
    { dia: 3, diaSemana: 'qua', faturamento: 300 },
    { dia: 4, diaSemana: 'qui', faturamento: 150 },
    { dia: 5, diaSemana: 'sex', faturamento: 0 },
    { dia: 6, diaSemana: 'sab', faturamento: 0 },
    { dia: 7, diaSemana: 'dom', faturamento: 450 },
    { dia: 8, diaSemana: 'seg', faturamento: 200 },
    { dia: 9, diaSemana: 'ter', faturamento: 0 },
    { dia: 10, diaSemana: 'qua', faturamento: 350 },
    { dia: 11, diaSemana: 'qui', faturamento: 0 },
    { dia: 12, diaSemana: 'sex', faturamento: 500 },
    { dia: 13, diaSemana: 'sab', faturamento: 0 },
    { dia: 14, diaSemana: 'dom', faturamento: 200 },
    { dia: 15, diaSemana: 'seg', faturamento: 100 },
    { dia: 16, diaSemana: 'ter', faturamento: 0 },
    { dia: 17, diaSemana: 'qua', faturamento: 300 },
    { dia: 18, diaSemana: 'qui', faturamento: 150 },
    { dia: 19, diaSemana: 'sex', faturamento: 0 },
    { dia: 20, diaSemana: 'sab', faturamento: 0 },
    { dia: 21, diaSemana: 'dom', faturamento: 450 },
    { dia: 22, diaSemana: 'seg', faturamento: 250 },
    { dia: 23, diaSemana: 'ter', faturamento: 0 },
    { dia: 24, diaSemana: 'qua', faturamento: 350 },
    { dia: 25, diaSemana: 'qui', faturamento: 0 },
    { dia: 26, diaSemana: 'sex', faturamento: 200 },
    { dia: 27, diaSemana: 'sab', faturamento: 0 },
    { dia: 28, diaSemana: 'dom', faturamento: 300 },
    { dia: 29, diaSemana: 'seg', faturamento: 0 },
    { dia: 30, diaSemana: 'ter', faturamento: 100 }
];


function processarFaturamento(faturamento) {
    
    const valores = faturamento
        .map(d => d.faturamento)
        .filter(f => f > 0);

    if (valores.length === 0) {
        console.log("Não há dados de faturamento disponíveis.");
        return;
    }

    
    const menorFaturamento = Math.min(...valores);
    const maiorFaturamento = Math.max(...valores);

    
    const somaFaturamento = valores.reduce((acc, val) => acc + val, 0);
    const mediaMensal = somaFaturamento / valores.length;

    
    const diasAcimaDaMedia = faturamento
        .filter(d => d.faturamento > mediaMensal)
        .length;

    
    console.log(`Menor valor de faturamento: R$ ${menorFaturamento}`);
    console.log(`Maior valor de faturamento: R$ ${maiorFaturamento}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}


processarFaturamento(faturamento);
