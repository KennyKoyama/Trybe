// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 }
};

console.log(`Player ${player.name} ${player.lastName}, ${player.age} years old, won ${player.medals['golden']} Gold Medals and ${player.medals['silver']} Silver Medals.`);


// Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome,
// substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (const key in names) {
        console.log(`Olá ${names[key]}`);
};


// Usando o objeto abaixo, utilize for/in e imprima um console.log
// com as chaves e valores desse objeto.
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (const key in car) {
    console.log(key + ':', car[key]);
};


// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
function sum (num1, num2) {
    return num1 + num2;
};
console.log(sum(10, 20));

// Subtração (a - b)
function subtraction (num1, num2) {
    return num1 - num2;
};
console.log(subtraction(20, 10));

// Multiplicação (a * b)
function multiplication (num1, num2) {
    return num1 * num2;
};
console.log(multiplication(3, 10));

// Divisão (a / b)
function division (num1, num2) {
    return num1 / num2;
};
console.log(division(50, 5));

// Módulo (a % b)
function remainder (num1, num2) {
    return num1 % num2;
};
console.log(remainder(10, 3));


// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes
// com os valores que serão comparados.
function biggest () {
    const firstNumber = 10;
    const secondNumber = 20;
    if (firstNumber > secondNumber) return `The biggest is ${firstNumber}`;
    if (secondNumber > firstNumber) return `The biggest is ${secondNumber}`;
    return 'They are equal'
};
console.log(biggest());


// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes
// com os valores que serão comparados.
function biggestBetweenThree (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) return `The biggest is ${num1}`;
    if (num2 > num1 && num2 > num3) return `The biggest is ${num2}`;
    return `The biggest is ${num3}`;
};
console.log(biggestBetweenThree(10, 20, 30))


// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for
// positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
function checkValue (value) {
    if (value > 0) return `The ${value} is positive.`;
    if (value < 0) return `The ${value} is negative.`;
    return 'The value is zero.';
};
console.log(checkValue(10));
console.log(checkValue(-10));
console.log(checkValue(0))


// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.
// Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.
function checkTriangle (angleA, angleB, angleC) {
    if (angleA < 0 || angleB < 0 || angleC < 0) return "Angle value can't be a negative number.";
    if (angleA + angleB + angleC === 180) return true;
    return false;
};
console.log(checkTriangle(30, 70, 80));
console.log(checkTriangle(20, 60, 70));
console.log(checkTriangle(50, -30, 100));
