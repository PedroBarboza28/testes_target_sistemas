const readline = require('readline');


function pertenceFibonacci(num) {
    
    if (num < 0) {
        return false;
    }

    
    let a = 0, b = 1;

    
    while (b < num) {
    
        let acc = b;
        b = a + b;
        a = acc;
    }


    return b === num;
}


function verificarNumFibonacci() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    
    rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (entrada) => {
        const num = parseInt(entrada, 10);

        
        if (pertenceFibonacci(num)) {
            console.log(`${num} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`${num} não pertence à sequência de Fibonacci.`);
        }

        
        rl.close();
    });
}

verificarNumFibonacci();
