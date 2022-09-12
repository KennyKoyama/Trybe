/*

04 - Quatro operações matemáticas

Escreva um algoritmo que recebe dois números inteiros, executa as quatro operação matemáticas básicas nestes números (soma, subtração, multiplicação e divisão) e retorne uma string no seguinte formato.

Por exemplo:
------------------------------------------------
Entradas:
1, 2

Saída:
"1 + 2 = 3. 1 - 2 = -1. 1 x 2 = 2. 1 / 2 = 0.5."
------------------------------------------------

*/

function mathOperations(number1, number2) {
  // Desenvolva seu código nessa função
  let sum  = `${number1} + ${number2} = ${number1 + number2}.`;
  let sub  = `${number1} - ${number2} = ${number1 - number2}.`;
  let mult = `${number1} x ${number2} = ${number1 * number2}.`;
  let div  = `${number1} / ${number2} = ${number1 / number2}.`;
  return `${sum} ${sub} ${mult} ${div}`
}

module.exports = mathOperations;
