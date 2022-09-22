let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ordene o array numbers em ordem crescente e imprima seus valores
let sorted = numbers.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
console.log(sorted);

// Ordene o array numbers em ordem decrescente e imprima seus valores
let reverse = [...sorted].reverse();
console.log(reverse)

