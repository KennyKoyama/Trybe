/*

06 - Retorne os números ímpares

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Crie um algoritmo que retorne uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura no retorno:
----------------
"x, y, z, ...n."
----------------

*/

function oddNumbers(){
  // Desenvolva seu código nessa função
  let result = [];
  for (let num = 1; num <= 50; num++) {
    if(num % 2 !== 0) result.push(num);
  }

  return result.join(', ').concat('.')
}

module.exports = oddNumbers;
