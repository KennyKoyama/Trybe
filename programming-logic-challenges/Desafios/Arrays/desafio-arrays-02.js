/*

02 - Encontre o menor número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o menor valor e o retorne.

*/

function getMinNumber(numbers) {
  // Desenvolva seu código nessa função
  let smallest = Math.min(...numbers);

  return smallest// Retorne o resultado aqui
}

module.exports = getMinNumber;
