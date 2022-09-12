/*

07 - Calcule a média dos graus Celsius em Fahrenheit

Escreva uma algoritmo que recebe uma lista com a média de temperatura em Fahrenheit registradas nos últimos 12 meses e retorne uma mensagem informando a médica|a em Celsius no formato da saída.

Poor exemplo:
-------------------------------------------------------
Entrada:
[98, 95, 92, 88, 74, 106, 114, 90, 76, 65, 55, 80]

Saída:
"A média anual de temperatura em graus Celsius é 30.05."
--------------------------------------------------------

*/

function averageTemperature(anualRegister){
  // Desenvolva seu código nessa função
  let average = anualRegister.reduce((sum,curr) => sum + curr, 0) / anualRegister.length;
  let celsius = (average - 32) * 5 / 9;
  let result = `A média anual de temperatura em graus Celsius é ${celsius.toFixed(2)}.`;
  return result
}

module.exports = averageTemperature;
