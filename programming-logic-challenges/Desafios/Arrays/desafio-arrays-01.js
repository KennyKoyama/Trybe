/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/

function getMaxNumber(numbers) {
  // Desenvolva seu código nessa função
  let biggest = 0;
  numbers.forEach(num => {
    biggest = num > biggest ? num : biggest;
  });
  return biggest// Retorne o resultado aqui
}

module.exports = getMaxNumber;
