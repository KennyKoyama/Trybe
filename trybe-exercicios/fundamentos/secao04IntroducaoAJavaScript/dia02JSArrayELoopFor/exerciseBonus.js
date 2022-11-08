let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ordene o array numbers em ordem crescente e imprima seus valores
let sorted = [...numbers].sort((firstNumber, secondNumber) => firstNumber - secondNumber);
console.log(sorted);


// Ordene o array numbers em ordem decrescente e imprima seus valores
let reverse = [...sorted].reverse();
console.log(reverse);


// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá
// ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o
// primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor
// seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo
// valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá
// ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
let multipliedNumbers = [];
for (let index = 0; index < numbers.length; index++) {
    const current = numbers[index];
    const next = numbers[index + 1] || 2;
    multipliedNumbers.push(current * next);
};
console.log(multipliedNumbers);

