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
arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]);


// A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade
// de vezes que ela aparece no array como valor.
function countFruits(basket) {
    let countList = {};
    for (let fruit of basket) {
        let count = 0;
        for (const checkFruit of basket) {
            if (checkFruit === fruit) count += 1;
        };
        if (count > 1) fruit = fruit + 's';
        countList[fruit] = count;
    };
    console.log(countList);
    let stringsList = [];
    for (const key in countList) {
        stringsList.push(countList[key] + ' ' + key);
    };
    let sentence = `Sua cesta possui: ${stringsList.join(', ')}`;
    console.log(sentence)
}
countFruits([
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva']);


    