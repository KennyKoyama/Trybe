/*

10 - Nega Números

Escreva uma algoritmo que recebe um array de números, retorne uma cópia do array com todos os números negados.

Por exemplo:
--------------
Entrada:
[2 ,-3 ,4 ]

Saída:
[-2, 3 ,-4 ]
--------------

*/

function negateNumbers(numbers){
  // Desenvolva seu código nessa função
  let result = numbers.map((num) => num - (num * 2));
  return result
}

module.exports = negateNumbers;
