// Utilize a estrutura de repetição for para escrever os programas abaixo
let n = 5;
// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado
// feito de asteriscos de lado de tamanho n
for (let columnCount = 1; columnCount <= n; columnCount += 1) {
    let row = '';
    for (let rowCount = 1; rowCount <= n; rowCount += 1) {
        row += '*';
        
    }
    console.log(row)
};

// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base
for (let columnCount = 1; columnCount <= n; columnCount += 1) {
    let row = '';
    for (let rowCount = 1; rowCount <= columnCount; rowCount += 1) {
        row += '*';
        
    }
    console.log(row)
};

// Agora inverta o lado do triângulo
for (let columnCount = 1; columnCount <= n; columnCount += 1) {
    let row = '';
    let blankSpace = n - columnCount;
    for (let rowCount = 1; rowCount <= n; rowCount += 1) {
        if (rowCount <= blankSpace) row += ' ';
        if (rowCount > blankSpace) row += '*';
    }
    console.log(row)
};

// Faça uma pirâmide com n asteriscos de base
for (let columnCount = 0; columnCount <= n; columnCount += 2) {
    let row = '';
    let blankSpace = Math.floor((n - columnCount) / 2);
    let diff = n - blankSpace;
    for (let rowCount = 1; rowCount <= diff; rowCount += 1) {
        if (rowCount <= blankSpace) row += ' ';
        if (rowCount > blankSpace || columnCount === 0 && rowCount === diff) {
            row += '*'; 
        };
    }
    console.log(row)
};

// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor
// de n será sempre ímpar
//    *
//   * *
//  *   *
// *******

n = 7;
for (let columnCount = 1; columnCount <= n; columnCount += 2) {
    if (n % 2 === 0) return 'Invalid';
    let row = '';
    let blankSpace = Math.ceil((n - columnCount) / 2);
    let diff = n - blankSpace;
    for (let rowCount = 1; rowCount <= diff; rowCount += 1) {
        if (rowCount <= blankSpace) row += ' ';
        if (rowCount > blankSpace || columnCount === 0 && rowCount === diff) {
            if (rowCount === diff || rowCount === blankSpace + 1 || columnCount === n) {
                row += '*'
                continue
            };
            row += ' ';
        };
    };
    console.log(row);
};

// Faça um programa que diz se um número definido numa variável é primo ou não
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a
// divisão dele por quaisquer outros números dá resto diferente de zero
n = 47;
for (let divisor = 2 ; divisor < n; divisor += 1) {
    if (n % divisor === 0) {
        console.log(`${n} isn't a prime number.`)
        break
    };
    if (n % divisor !== 0 && divisor === (n - 1))console.log(`${n} is a prime number.`);
};
