/*

15 - Área de uma circunferência

Sabemos que a área de uma circunferência é calculada da seguinte forma: π * r ^ 2 (PI vezes R ao quadrado).

Também sabemos que o raio (r) é a metade do diâmetro.

Escreva um algoritmo que calcula a área de uma circunferência com **diâmetro** de 10cm e a retorne.

Obs1: Exiba o resultado no seguinte formato 'A circunferência de raio R cm possui uma área de A cm quadrados', onde R é o valor do raio da circunferência e A é o valor da área da circunferência.

Obs2: Exiba a área com apenas duas casas decimais.

*/

function areaCircle(diameter) {
  // Desenvolva seu código nessa função
  let raio = diameter / 2;
  let calc = Math.PI * raio**2;
  return `A circunferência de raio ${raio} cm possui uma área de ${calc.toFixed(2)} cm quadrados`
}

module.exports = areaCircle;
