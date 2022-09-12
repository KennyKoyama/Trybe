/*

16 - Verdadeiro ou falso?

Escreva um algoritmo que retorne de forma aleatória true ou false.

Obs: O retorne deve ser do tipo boolean.

*/

function randomBoolean(){
  // Desenvolva seu código nessa função
  let random = (Math.floor(Math.random() * 2)) === 0 ? false : true;
  return random
}

module.exports = randomBoolean;
