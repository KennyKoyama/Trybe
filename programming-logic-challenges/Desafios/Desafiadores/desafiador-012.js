/*

12 - Fatorial

Escreva um algoritmo que recebe um número n e calcule e retorne o seu fatorial.

*/

function factorial(n) {
  // Desenvolva seu código nessa função
  if(n === 0) return 1;
  return n * factorial(n - 1)

  /* Without recursion
  let current = n;
  let result = 1;
  while(current > 0){
      result *= current;
      current -= 1;
  }
  return result
  */
}

module.exports = factorial;
