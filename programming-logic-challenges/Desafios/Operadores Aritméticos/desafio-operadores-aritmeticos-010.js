/*

10 - Fahrenheit

Escreva um algoritmo que faça conversão de temperatura em graus Fahrenheit para graus Celsius e retorne
  a temperatura em celsius.

*/

function fahrenheitToCelsius(fahrenheit){
  // Desenvolva seu código nessa função
  let calc = (fahrenheit - 32) * (5/9);
  return +calc.toFixed(2)
}

module.exports = fahrenheitToCelsius;
