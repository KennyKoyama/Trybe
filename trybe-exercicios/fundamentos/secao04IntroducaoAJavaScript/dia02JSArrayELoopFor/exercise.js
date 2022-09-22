let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (const number of numbers) {
    console.log(number);
};


// Some todos os valores contidos no array e imprima o resultado;
console.log(numbers.reduce((sum,current) => sum + current, 0));


// Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
console.log((numbers.reduce((sum,current) => sum + current, 0)) / numbers.length);


// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
console.log((numbers.reduce((sum,current) => sum + current, 0)) / numbers.length > 20 ? 'Valor maior que 20' : 'Valor menor ou igual a 20');


// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let biggest = 0;
for (const number of numbers) {
    biggest = biggest > number ? biggest : number;
};
console.log(biggest);


// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let count = 0;
let isOdd = (value) => value % 2 != 0;
for (const number of numbers) {
    if(isOdd(number)) count += 1;
}
console.log(count === 0 ? 'No odd numbers found' : count);


// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let smallest = Math.max(...numbers);
for (const number of numbers) {
    smallest = number < smallest ? number : smallest;
}
console.log(smallest)


// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array25 = [];
for (let number = 1; number <= 25; number += 1) {
    array25.push(number)
}
console.log(array25)


// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.