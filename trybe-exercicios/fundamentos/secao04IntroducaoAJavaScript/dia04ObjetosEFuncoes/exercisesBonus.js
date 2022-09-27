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

