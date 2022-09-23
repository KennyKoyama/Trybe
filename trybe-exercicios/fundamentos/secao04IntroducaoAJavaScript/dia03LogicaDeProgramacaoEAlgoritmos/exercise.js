// crie um algoritmo que imprima na tela o fatorial de 10
let result = 1;
for (let number = 10; number > 0; number -= 1) {
    result *= number;
};
console.log(result);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.
// Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois
// troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let reverse = '';
for (let index = word.length - 1; index >= 0; index -= 1) {
    reverse += word[index];
};
console.log(reverse);

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse
// array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggest = array[0];
let smallest = array[0];
for (const word of array) {
    biggest = biggest.length > word.length ? biggest : word;
    smallest = smallest.length < word.length ? smallest : word;
};
console.log(biggest);
console.log(smallest);

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível
// por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
let greater = 0;
let isPrime = (value) => {
    let count = 0;
    for (let divisor = 2; divisor < value; divisor++) {
        if (value % divisor === 0) count += 1;
        if (count > 0) return false;
    }
    return true
};

for (let number = 1; number < 50; number++) {
    if(isPrime(number) && number > greater) greater = number;
    console.log(greater)
};
console.log(greater);
