/*

03 - Calcular a soma de 1 até 1000

Escreva um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
--------------------------
"A soma de 1 a 1000 é: x."
--------------------------

*/

function accumulatorThousand(){
  // Desenvolva seu código nessa função
  let result = 0;
  for (let num = 1; num <= 1000; num++) {
    result += num;

  } 
  return `A soma de 1 até 1000 é ${result}.`
}

module.exports = accumulatorThousand;
