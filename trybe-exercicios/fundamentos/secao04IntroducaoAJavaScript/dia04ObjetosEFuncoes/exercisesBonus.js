// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
function convertRoman(roman) {
    let convert = {
             I: 1,
             V: 5,
             X: 10,
             L: 50,
             C: 100,
             D: 500,
             M: 1000};

    let numbers = [];
    for (let index = 0; index < roman.length; index += 1) {
        const current = roman[index];
        const next = roman[index + 1];
        if (convert[current] < convert[next]) {
            numbers.push(convert[next] - convert[current]);
            index += 1;
            continue;
        };
        numbers.push(convert[current]);

    };
    console.log(numbers);
    let sum = numbers.reduce((sum, curr) => sum + curr, 0);
    console.log(sum);
    return sum;
};
console.log(convertRoman('MMCDXXI'));


// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
// Através de um loop for, percorra essa variável, busque os números pares e os adicione
// a um novo array, que deverá ser retornado ao final pela função.
function arrayOfNumbers(values) {
    let evens = [];
    for (const subArray of values) {
        for (const number of subArray) {
            if (number % 2 === 0) evens.push(number);
        };
    };
    console.log(evens);
    return evens;
};
arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]])